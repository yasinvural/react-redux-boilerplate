import React,{Component} from "react";
import './Counter.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {incrementCounter, decrementCounter} from "../../actions/counter";

class Counter extends Component{
    constructor(props){
        super(props);
    }
    
    increaseClick = () =>{
        this.props.incrementCounter();
    };

    decreaseClick = () =>{
        this.props.decrementCounter();
    };

    render(){
        return(
            <React.Fragment>
                Counter : {this.props.counter.value}
                <div className="btn btn-increase" onClick={this.increaseClick}>Increase</div>
                <div className="btn btn-decrease" onClick={this.decreaseClick}>Decrease</div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapStateToDispatch(dispatch){
    return bindActionCreators({
        incrementCounter,
        decrementCounter
    },dispatch);
}

export default connect(mapStateToProps,mapStateToDispatch)(Counter);