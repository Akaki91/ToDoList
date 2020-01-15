import React from 'react';



class Counter extends React.Component {

    state = {
        number: 0
    }

    increase = () => {
        let newval = this.state.number + 1

        if (newval <= this.props.end) {
            this.setState({
                number: newval
            }) 
        }

    }
    
    componentDidMount() {
        if (this.props.start) {
            this.setState({
                number: this.props.start
            })
        }
        
    }

    render() {
        return (
        <div>
            <button onClick={this.increase}>Click</button>
            <label>
                {this.state.number}
                </label>
        </div>
    )}        
}


export default Counter