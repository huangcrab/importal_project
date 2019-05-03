import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticated: false,
  isAg: false,
  isAd: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        isAg: action.payload.role === "agent",
        isAd: action.payload.role === "admin",
        user: action.payload
      };
    default:
      return state;
  }
}
