import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:0, groupSize:0};
    }

    render() {
        const {value,onIncClick,onDecClick}=this.props;
        return (
           <div>
               <button onClick={onDecClick}>-</button>
               <mark>{value}</mark>
               <button onClick={onIncClick}>+</button>
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