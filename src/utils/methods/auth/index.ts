import { authActions } from "@/store/auth/authSlice";

export const refreshAuthentication = (
  dispatch: (any) => void,
  router: any,
  pathname: string
) => {
  let userJSON: any = localStorage.getItem("user");
  let user: any = JSON.parse(userJSON);
  if (user && user.token) {
    dispatch(authActions.login(user.token));
  } else {
    // if (pathname.includes("/dashboard")) {
    //   dispatch(authActions.logout());
    //   router.push("/login");
    // }
  }
};
