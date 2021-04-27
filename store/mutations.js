import state from "./state";

export const setAuth = (state, payload) => {
  state.isAuth = payload;
};

export const setUserPermissions = (state, payload) => {
  state.userPermissions = payload;
};

export const setAlert = (state, payload) => {
  state.alert = {
    ...payload
  };
};

export const setMiniVariant = (state, payload) => {
  state.miniVariant = payload;
};
