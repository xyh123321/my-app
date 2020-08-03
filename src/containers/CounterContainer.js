import {connect} from 'react-redux'
import Counter from './../component/counter/index'
import {incActionGenerator,decActionGenerator} from "../action/Action";

const mapStateToProps=(state)=>({
    value:state.value
})

const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(incActionGenerator()),
    onDecClick:()=>dispatch(decActionGenerator())
})

const MyCounterApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default MyCounterApp;