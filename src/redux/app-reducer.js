import { getAutUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

const initialState = {
  initialised: false
};

const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialised: true
      }

    default:
      return state;
  }
}

export const setInitializedSuccess = () => ({ type: 'INITIALIZED-SUCCESS'});

export const initialiseApp = () => (dispatch) => {
  const promise = dispatch(getAutUserData());
  promise.then(() => {
    dispatch(setInitializedSuccess());
  });
};

export default appReducer;