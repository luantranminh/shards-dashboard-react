import * as appContant from "../Contant/appContant";

export const getProductValue = value => {
  return {
    type: appContant.getProductValue,
    payload: value
  };
};
