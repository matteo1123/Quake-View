const periodReducer = (state = "Hour", action) => {
    if(action.type === "CHANGE_PERIOD") {
        return action.payload
    }
    else return state
}

export default periodReducer;

//PERIODS
// HOUR
// DAY
// 7
// 30