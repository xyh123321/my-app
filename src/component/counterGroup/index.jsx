import React from 'react';
import Counter from '../counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { size: 0, total: 0 }
    }

    handlerResize = (event) => {
        const newSize = event.target.value ? parseInt(event.target.value) : 0;
        if (this.state.size !== newSize) {
            this.setState({
                size: newSize,
                total: 0
            });
        }
    }

    handleIncrease = () => {
        this.setState((prevState) => ({
            total: prevState.total + 1
        }))
    }

    handleDecrease = () => {
        this.setState((prevState) => ({
            total: prevState.total - 1
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return (
            <div>
                <div>
                    <label>
                        Group size:
                        <input onBlur={this.handlerResize} defaultValue={0} />
                    </label>
                </div>
                <div>
                    <label >
                        Total number: {this.state.total}
                    </label>
                </div>
                {
                    initArray.map(key => <Counter groupSize={this.state.size} handleIncrease={this.handleIncrease} handleDecrease={this.handleDecrease} key={key} />)
                }
            </div>
        )
    }
}

export default CounterGroup;