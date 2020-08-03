import React from 'react';
import Counter from '../counter';

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {size:0}
    }

    onResize = (event) => {
        this.setState({
            size: event.target.value ? parseInt(event.target.value) : 0
        });
    }

    render() {
        const initArray = [...Array(this.state.size).keys()]
        return (
            <div>
                <label>
                    Group size:
                    <input onBlur={this.onResize} defaultValue={0}/>
                </label>
                {
                    initArray.map(key => <Counter key={key}/>)
                    
                }
            </div>
        )
    }
}

export default CounterGroup;