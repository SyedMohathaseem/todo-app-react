function FilterBar({ filter, onFilterChange, remainingCount }) {
    const filters = ['all', 'active', 'completed']

    return (
        <div className="filter-bar">
            <span className="task-count">
                {remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining
            </span>
            <div className="filter-buttons">
                {filters.map(f => (
                    <button
                        key={f}
                        className={filter === f ? 'active' : ''}
                        onClick={() => onFilterChange(f)}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default FilterBar
