import { SashaReducerTypes } from "./SashaReducerTypes";

const initialState = {
  items: {},
  error: null,
  loading: true,
};

export const SashaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SashaReducerTypes.ADDING:
      return {
        ...state,
        items: action.data,
      };
    case SashaReducerTypes.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SashaReducerTypes.ERROR:
      return {
        ...state,
        error: action.error,
      };
      case SashaReducerTypes.MORE_ADDING:
        return {
          ...state,
          items: {
            info: action.data.info,
            results: [
              ...state.items.results,
              ...action.data.results
            ]
          }
        };
    default:
      return state;
  }
};
