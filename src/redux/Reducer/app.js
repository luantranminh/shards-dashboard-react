import * as appContant from "../Contant/appContant";

const initialState = {
  productsValue: []
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appContant.getProductValue:
      return {
        ...state,
        productsValue: action.payload
      };
    default:
      return state;
  }
};
export default appReducer;
