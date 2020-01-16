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
        if (event.which === 13 && this.state.value.length > 0) {
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

    completeItem = (index) => {
        let newItems = Array.from(this.state.list)
        
        this.state.list[index].completed === false ? 
            newItems[index].completed = true : newItems[index].completed = false 

        this.setState({
            list: newItems
        })
    }

 
    // filter = (arg) => {
    //     let orginalState = Array.from(this.state.list)
    //     let newItems = []

    //     if (arg === "active" ){
    //         newItems = orginalState.filter(items => items.completed === false)
    //     } 
    //     else if (arg === "completed"){
    //         newItems = orginalState.filter(items => items.completed === true)
    //     }
    //     else {
    //         newItems = orginalState
    //     }

    //     this.setState({
    //         list: newItems
    //     })        

    // }
    


    render() {
        return (
            <div>
                <input 
                type="text" 
                className="textarea"
                placeholder="Write things to do"
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
                                <span className={this.state.list[i].completed ? "completed" : ""}
                                >{item.text}</span>
                                <button onClick={() => { this.deleteItem(i) }}>x</button>
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