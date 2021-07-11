const ini = {

};
export const decrement = (state= ini, action) => {
    switch (action.type) {
        case reducerCases.decrement:{
            return {
                ...state,
                counter: state.counter -1,
            };
        }
        default:
        return state;

    }
}