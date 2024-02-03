import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface StateType {
  name: string;
  email: string;
  role: string;
  isLoggedIn: boolean;
  token: string;
}

interface decodedTokenType {
  name: string;
  email: string;
  exp: number;
  iat: number;
  id: string;
  isBlocked: boolean;
  role: string;
  verified: boolean;
}

const initialState: StateType = {
  name: "",
  email: "",
  role: "",
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const decodedToken: decodedTokenType = jwtDecode(action.payload);
      if (decodedToken.verified && !decodedToken.isBlocked) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            token: action.payload,
          })
        );
        state.name = decodedToken.name;
        state.email = decodedToken.email;
        state.role = decodedToken.role;
        state.token = action.payload;
        state.isLoggedIn = true;
      }
    },
    logout(state) {
      localStorage.removeItem("user");
      state.name = "";
      state.email = "";
      state.role = "";
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
