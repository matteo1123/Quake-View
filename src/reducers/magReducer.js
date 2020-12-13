const magReducer = (state = "ALL", action) => {
    if(action.type === "CHANGE_MAG") {
        return action.payload
    }
    else return state
}

export default magReducer;

//MAGNITUDES
// ALL
// 1.0
// 2.5
// 4.5