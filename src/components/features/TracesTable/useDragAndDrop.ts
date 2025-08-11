import { useState } from 'react'

export const useDragAndDrop = (
  columnOrder: string[],
  setColumnOrder: (order: string[]) => void
) => {
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, columnId: string) => {
    setDraggedColumn(columnId)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', columnId)
    
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '0.5'
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-container)'
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = ''
    }
  }

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault()
    
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = ''
    }
    
    if (!draggedColumn || draggedColumn === targetColumnId) {
      setDraggedColumn(null)
      return
    }

    const newColumnOrder = [...columnOrder]
    const draggedIndex = newColumnOrder.indexOf(draggedColumn)
    const targetIndex = newColumnOrder.indexOf(targetColumnId)
    
    newColumnOrder.splice(draggedIndex, 1)
    newColumnOrder.splice(targetIndex, 0, draggedColumn)
    
    setColumnOrder(newColumnOrder)
    setDraggedColumn(null)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = ''
    }
    setDraggedColumn(null)
  }

  return {
    draggedColumn,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  }
}