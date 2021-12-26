import {
  GET_CATEGORIES,
  GET_DETAILED_CATEGORIES,
  GET_PRODUCTS,
  API_START,
  API_END,
  FETCH_DETAILS
} from "../actions/types";

export default function(state = {}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case GET_CATEGORIES:
      return { data: action.payload };
    case GET_DETAILED_CATEGORIES:
      return { ...state, detailed_data: action.payload };
    case GET_PRODUCTS: 
      return { ...state, products: action.payload }
    case API_START:
      if (action.payload === FETCH_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_DETAILS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}
