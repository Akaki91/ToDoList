import React from 'react'
import Todoitem from './Todoitem'


class Todo extends React.Component  {

    state = {
        list: [
        ],

        value: '',
        selected: "all"
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
        let newItems = this.state.list.map((item, i) => {
            if (i === index) {
                item.completed = !item.completed
            }
            return item
        })

        this.setState({
            list: newItems
        })
    }

    filter = (arg) => {
        this.setState({
            selected: arg
        })
    }
    
    clearCompleted = () => {
        let newItems = this.state.list.filter(item => !item.completed)

        this.setState({
            list: newItems
        })
    }


    render() {

        let items = this.state.list.filter(item => {
            if (this.state.selected === 'all') {
                return true
            }
            else if (this.state.selected === 'active') {
                return !item.completed
            }
            else {
                return item.completed
            }
        })

        let itemleft = this.state.list.filter(item => !item.completed).length

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
                    items.map((item, i) => {
                        return (
                            <Todoitem
                                key={i}
                                id={i}
                                item={item}
                                completeItem={this.completeItem}
                                deleteItem={this.deleteItem}
                            />
                        )     
                    })}
                </ul>
                <div>
                    {`${itemleft} item left`}
                    <button onClick={() => { this.filter("all") }}>All</button>
                    <button onClick={() => { this.filter("active") }}>Active</button>
                    <button onClick={() => { this.filter("completed") }}>Completed</button>
                    
                    {
                        (itemleft < this.state.list.length) ? <p><button onClick={this.clearCompleted}>Clear Completed</button></p> : null
                    }
                    
                </div>
            </div>

        )}
}


export default Todo