function TodoItem({ task, onToggle, onDelete }) {
    return (
        <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <label className="task-label">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                <span className="task-text">{task.text}</span>
            </label>
            <button
                className="delete-btn"
                onClick={() => onDelete(task.id)}
            >
                ×
            </button>
        </li>
    )
}

export default TodoItem
