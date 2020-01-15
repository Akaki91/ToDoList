import React from 'react'


class Todo extends React.Component  {

    state = {
        list: [
        ],

        value: ''
    }


    onValueChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onKeyDown = (event) => {
        if (event.which === 13) {
            let text = this.state.value

            this.setState({
                list: [...this.state.list, {
                    text: text,
                    completed: false
                }],
                value: ''
            })
        }
    }

    deleteItem = (index) => {
        this.state.list.splice(index, 1)

        this.setState({
            list: this.state.list
        })
        
    }

    // completeItem = (index) => {
    //     this.state.list[index].completed


    // }


    render() {
        return (
            <div>
                <input 
                type="text" 
                value={this.state.value} 
                onChange={this.onValueChange}
                onKeyDown={this.onKeyDown}
                />
                <ul>
                    {
                    this.state.list.map((item, i) => {
                        return (
                            <li key={i}>
                                <input onClick={() => { this.completeItem(i) }} type="checkbox" />
                                <span>{item.text}</span>
                                <button oonClick={() => { this.deleteItem(i) }}>x</button>
                            </li>
                        )     
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

        )}
}


export default Todo