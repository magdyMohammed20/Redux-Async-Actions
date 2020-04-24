import {BUY_CAKE} from './ActionTypes'

const initialState = {
    numOfCakes: 10
}

const CakeReducer = (state=initialState , Action) => {
    switch(Action.type){
        case BUY_CAKE:
            if(state.numOfCakes > 0){
                return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                }
            }else{
                alert('There Is No Cakes To Buy..')
            }

        default: return state
    }
}

export default CakeReducer