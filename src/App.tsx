import TracesTable from './components/features/TracesTable';
import { ThemeProvider } from './contexts/ThemeContext';
import { ShortcutProvider } from './contexts/ShortcutContext';

function App() {
  return (
    <ShortcutProvider>
      <ThemeProvider>
        <TracesTable />
      </ThemeProvider>
    </ShortcutProvider>
  )
}

export default App;
