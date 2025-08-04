import React, { createContext, useContext, useEffect, useRef, ReactNode } from 'react';

interface ShortcutHandler {
  id: string;
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  handler: (event: KeyboardEvent) => void;
  enabled?: boolean;
  description?: string;
}

interface ShortcutContextType {
  registerShortcut: (shortcut: ShortcutHandler) => void;
  unregisterShortcut: (id: string) => void;
  shortcuts: Map<string, ShortcutHandler>;
}

const ShortcutContext = createContext<ShortcutContextType | undefined>(undefined);

interface ShortcutProviderProps {
  children: ReactNode;
}

export const ShortcutProvider: React.FC<ShortcutProviderProps> = ({ children }) => {
  const shortcutsRef = useRef<Map<string, ShortcutHandler>>(new Map());

  const registerShortcut = (shortcut: ShortcutHandler) => {
    shortcutsRef.current.set(shortcut.id, shortcut);
  };

  const unregisterShortcut = (id: string) => {
    shortcutsRef.current.delete(id);
  };

  const matchesShortcut = (event: KeyboardEvent, shortcut: ShortcutHandler): boolean => {
    // Normalize key comparison (handle case differences)
    const eventKey = event.key.toLowerCase();
    const shortcutKey = shortcut.key.toLowerCase();
    
    if (eventKey !== shortcutKey) return false;
    
    // Check modifier keys
    if (Boolean(shortcut.ctrlKey) !== event.ctrlKey) return false;
    if (Boolean(shortcut.altKey) !== event.altKey) return false;
    if (Boolean(shortcut.shiftKey) !== event.shiftKey) return false;
    if (Boolean(shortcut.metaKey) !== event.metaKey) return false;
    
    return true;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      const target = event.target as HTMLElement;
      const isInputTarget = target.tagName === 'INPUT' || 
                           target.tagName === 'TEXTAREA' || 
                           target.contentEditable === 'true';
      
      if (isInputTarget && event.key !== 'Escape') {
        return;
      }

      // Find matching shortcuts
      for (const [, shortcut] of shortcutsRef.current.entries()) {
        if (shortcut.enabled !== false && matchesShortcut(event, shortcut)) {
          event.preventDefault();
          event.stopPropagation();
          shortcut.handler(event);
          break; // Only trigger the first matching shortcut
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const value: ShortcutContextType = {
    registerShortcut,
    unregisterShortcut,
    shortcuts: shortcutsRef.current,
  };

  return (
    <ShortcutContext.Provider value={value}>
      {children}
    </ShortcutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShortcutContext = (): ShortcutContextType => {
  const context = useContext(ShortcutContext);
  if (context === undefined) {
    throw new Error('useShortcutContext must be used within a ShortcutProvider');
  }
  return context;
};

// Convenience hook for registering a single shortcut
// eslint-disable-next-line react-refresh/only-export-components
export const useShortcut = (
  key: string,
  handler: (event: KeyboardEvent) => void,
  options: {
    id?: string;
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    enabled?: boolean;
    description?: string;
  } = {}
) => {
  const { registerShortcut, unregisterShortcut } = useShortcutContext();
  const handlerRef = useRef(handler);
  
  // Update handler ref when handler changes
  handlerRef.current = handler;

  useEffect(() => {
    const shortcutId = options.id || `${key}-${Math.random().toString(36).substr(2, 9)}`;
    
    const shortcut: ShortcutHandler = {
      id: shortcutId,
      key,
      ctrlKey: options.ctrlKey,
      altKey: options.altKey,
      shiftKey: options.shiftKey,
      metaKey: options.metaKey,
      enabled: options.enabled,
      description: options.description,
      handler: (event: KeyboardEvent) => handlerRef.current(event),
    };

    registerShortcut(shortcut);

    return () => {
      unregisterShortcut(shortcutId);
    };
  }, [
    key,
    options.id,
    options.ctrlKey,
    options.altKey,
    options.shiftKey,
    options.metaKey,
    options.enabled,
    options.description,
    registerShortcut,
    unregisterShortcut,
  ]);
};