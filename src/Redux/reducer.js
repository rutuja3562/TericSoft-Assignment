import { FETCHDATA, FETCHDATAONE, FETCHDATATWO } from "./action";

const initState = {
  data: [],
  data1:[],
  data2:[]
};
export const productReducer = (state=initState, action) => {
  switch (action.type) {
    case FETCHDATA: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case FETCHDATAONE: {
      return {
        ...state,
        data1: action.payload,
      };
    }
    case FETCHDATATWO: {
      return {
        ...state,
        data2: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
// switch (action.type) {
//     case FETCH_DATA: {
//       return {
//         ...state,
//         product: action.payload,
//       };
//     }