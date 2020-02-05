import React from 'react'


function Todoitem(props) {
    let { item } = props
    let i = props.id

    return (
        <li className={item.completed ? "completed" : ""}>
            <input
                className='checkbox'
                onChange={() => { props.completeItem(i) }}
                type="checkbox"
                checked={item.completed}
            />
            <span>{item.text}</span>
            <span className='x'><i className="fas fa-times" onClick={() => { props.deleteItem(i) }}></i></span>
        </li>
        
    )
}

export default Todoitem