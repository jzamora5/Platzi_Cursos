const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };

      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
      break;
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
