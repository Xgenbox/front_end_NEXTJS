import { authActions } from "@/store/auth/authSlice";

export const refreshAuthentication = (dispatch) => {
  let userJSON: any = localStorage.getItem("user");
  let user: any = JSON.parse(userJSON);
  if (user && user.token) {
    dispatch(authActions.login(user.token));
  }
};
