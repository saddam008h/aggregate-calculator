
const sidebarReducer = (state = false, action) => {

    if(action.type === "sendState"){
        return action.payload
    }
    else if(action.type === 'notSend'){
        return action.payload
    }
    // default
    else{
        return state
    }
      
}
  
  
  export default sidebarReducer;
  

  