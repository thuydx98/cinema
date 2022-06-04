//LOGIN
export const getUsersStart = () => ({
  type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
  type: "GET_USERS_SUCCESS",
  payload: users,
});

export const getUsersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

//UPDATE
export const updateUsersStart = () => ({
  type: "UPDATE_USERS_START",
});

export const updateUsersSuccess = (user) => ({
  type: "UPDATE_USERS_SUCCESS",
  payload: user,
});

export const updateUsersFailure = () => ({
  type: "UPDATE_USERS_FAILURE",
});
