import { SashaReducerTypes } from "../reducers/SashaReducerTypes";
import { getCharacter, getMore } from "../../pages/sasha/axios/ApiCalls";

export const SashaAction = {
  adding: (data) => ({ type: SashaReducerTypes.ADDING, data }),
  more_adding: (data) => ({ type: SashaReducerTypes.MORE_ADDING, data }),
  loading: (loading) => ({ type: SashaReducerTypes.LOADING, loading }),
  error: (error) => ({ type: SashaReducerTypes.ERROR, error }),
};
export const getByThunk = () => async (dispatch) => {
  dispatch(SashaAction.loading(true))
  await getCharacter()
    .then((data) => {
      dispatch (SashaAction.adding(data.data))
      dispatch(SashaAction.error(null))
    })
    .catch((e) => {
      dispatch(SashaAction.error(e))
    })
    .finally(() => {
      dispatch(SashaAction.loading(false))
    });
};

export const getMoreByThunk = (url) => async (dispatch) => {
    dispatch(SashaAction.loading(true))
    await getMore(url)
    .then((data) => {
        dispatch (SashaAction.more_adding(data.data))
        dispatch(SashaAction.error(null))
      })
      .catch((e) => {
        dispatch(SashaAction.error(e))
      })
      .finally(() => {
        dispatch(SashaAction.loading(false))
      });
   
};
