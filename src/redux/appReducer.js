import { isAuthProfileTC } from "./authReducer";

const INICIALAZE_SUCSESS = "INICIALAZE_SUCSESS";
let initialState = {
  initialized:false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIALAZE_SUCSESS:
      return {
        ...state,
        initialized:true,
      }
    default:
      return state;
  }
}
export default appReducer;

export const initializedAC=()=>({type:INICIALAZE_SUCSESS})

export const initializeTC=()=>(dispatch)=>{
  let promise = dispatch(isAuthProfileTC())
  Promise.all([promise])
  .then(()=>{
    dispatch(initializedAC())
  })
  
}
