export default function createStore(countReducer){
  let state;

  function dispatch(action){
    state = countReducer(state, action)
    render()
  }

  function getState(){
    return state
  }

  dispatch({type: '@@INIT'})

  return {
    dispatch: dispatch,
    getState: getState
  }

}
