import React from 'react'
import Todoitem from './Todoitem'

// import * as firebase from "firebase/app"
// import "firebase/firestore"

// const firebaseConfig = {
//     apiKey: "AIzaSyBwVm5DyUWzQ2fZRKnZZwQs0fH953tF18Q",
//     authDomain: "todolist-aac44.firebaseapp.com",
//     databaseURL: "https://todolist-aac44.firebaseio.com",
//     projectId: "todolist-aac44",
//     storageBucket: "todolist-aac44.appspot.com",
//     messagingSenderId: "544391089116",
//     appId: "1:544391089116:web:be8b2ccb26b32f92195d19"
// };

// firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore()


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

    addItem = (text) => {
        let state = JSON.parse(localStorage.getItem('state'))

        state.list = [...state.list,
            {
            text: text,
            completed: false
            }]
    
        localStorage.setItem('state', JSON.stringify(state))

        this.setState(state)
    }

    onKeyDown = (event) => {
        if (event.which === 13 && this.state.value.length > 0) {
            let text = this.state.value
            this.addItem(text)
        }
    }

    deleteItem = (index) => {
        let state = JSON.parse(localStorage.getItem('state'))
        state.list.splice(index, 1)

        localStorage.setItem('state', JSON.stringify(state))

        this.setState({
            list: state.list
        })
        
    }

    completeItem = (index) => {
        let state = JSON.parse(localStorage.getItem('state'))

        state.list = state.list.map((item, i) => {
            if (i === index) {
                item.completed = !item.completed
            }
            return item
        })

        localStorage.setItem('state', JSON.stringify(state))

        this.setState({
            list: state.list
        })
    }

    filter = (arg) => {
        let state = JSON.parse(localStorage.getItem('state'))

        state.selected = arg

        localStorage.setItem('state', JSON.stringify(state))
        this.setState({
            selected: arg
        })
    }
    
    clearCompleted = () => {
        let state = JSON.parse(localStorage.getItem('state'))

        state.list = state.list.filter(item => !item.completed)

        localStorage.setItem('state', JSON.stringify(state))
        this.setState({
            list: state.list
        })
    }


    render() {
        let state = JSON.parse(localStorage.getItem('state'))

        if (state === null) {
            localStorage.setItem('state', JSON.stringify({
                list: [
                ],

                value: '',
                selected: "all"
            }))
        }
        state = JSON.parse(localStorage.getItem('state'))

        let items = state.list.filter(item => {
            if (state.selected === 'all') {
                return true
            }
            else if (state.selected === 'active') {
                return !item.completed
            }
            else {
                return item.completed
            }
        })

        let itemleft = state.list.filter(item => !item.completed).length

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
                <ul className="ultag">
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
                    <button className="btn" onClick={() => { this.filter("all") }}>All</button>
                    <button className="btn" onClick={() => { this.filter("active") }}>Active</button>
                    <button className="btn" onClick={() => { this.filter("completed") }}>Completed</button>
                    
                    {
                        (itemleft < this.state.list.length) ? <p><button className="btn" onClick={this.clearCompleted}>Clear Completed</button></p> : null
                    }
                    
                </div>
            </div>

        )}
}


export default Todo