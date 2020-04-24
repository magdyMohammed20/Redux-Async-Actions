import React from 'react';
import {Buy_Cake} from '../Redux/index'
import {connect} from 'react-redux'
const Cakes = props => {
    return (
        <div>
            <h1>Current Number Of Cakes: {props.numOfCakes}</h1>
            <button onClick={()=> props.buyCake()}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: ()=>dispatch(Buy_Cake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Cakes);