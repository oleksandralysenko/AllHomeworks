import { SashaReducerTypes } from "../reducers/SashaReducerTypes";

export const SashaAction = {
  adding: (data) => ({ type: SashaReducerTypes.ADDING, data }),
  more_adding: (data) => ({ type: SashaReducerTypes.MORE_ADDING, data }),
  loading: (loading) => ({ type: SashaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: SashaReducerTypes.ERROR, error }),
};
