const periodReducer = (state = "Last Day", action) => {
    if(action.type === "change") {
        return action.payload
    }
    else return state
}

export default periodReducer;