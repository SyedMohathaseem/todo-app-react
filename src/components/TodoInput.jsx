import { useState } from 'react'

function TodoInput({ onAddTask, existingTasks }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = text.trim()

        if (!trimmed) return

        const isDuplicate = existingTasks.some(
            task => task.text.toLowerCase() === trimmed.toLowerCase()
        )
        if (isDuplicate) {
            alert('Task already exists')
            return
        }

        onAddTask(trimmed)
        setText('')
    }

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoInput
