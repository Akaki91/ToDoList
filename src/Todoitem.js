import React from 'react'


function Todoitem(props) {
    let { item } = props
    let i = props.id

    return (
        <li className={item.completed ? "completed" : ""}>
            <input
                onChange={() => { props.completeItem(i) }}
                type="checkbox"
                checked={item.completed}
            />
            <span>{item.text}</span>
            <button onClick={() => { props.deleteItem(i) }}>x</button>
        </li>
    )
}

export default Todoitem