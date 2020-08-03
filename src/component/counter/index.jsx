import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:0, groupSize:0};
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        this.props.handleDecrease();
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        this.props.handleIncrease();
    }

    render() {
        return (
           <div>
               <button onClick={this.onDecrease}>-</button>
               <mark>{this.state.value}</mark>
               <button onClick={this.onIncrease}>+</button>
           </div>
          );
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.groupSize !== prevState.groupSize){
            return {
                value:0,
                groupSize:nextProps.groupSize
            }
        }
        return null;
    }
}

export default Counter;