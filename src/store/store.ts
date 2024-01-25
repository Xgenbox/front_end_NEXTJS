import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import counterReducer from "./counter/counterSlice";
import CustomizerReducer from "./customizer/CustomizerSlice";
import EcommerceReducer from "./apps/eCommerce/ECommerceSlice";
import Ecommerce2Reducer from "./apps/eCommerce/EcommerceSlicev2";
import ChatsReducer from "./apps/chat/ChatSlice";
import NotesReducer from "./apps/notes/NotesSlice";
import EmailReducer from "./apps/email/EmailSlice";
import TicketReducer from "./apps/tickets/TicketSlice";
import ContactsReducer from "./apps/contacts/ContactSlice";
import UserProfileReducer from "./apps/userProfile/UserProfileSlice";
import UserProfile2Reducer from "./apps/userProfile/UserProfileSlice2";
import BlogReducer from "./apps/blog/BlogSlice";
import UserReducer from "./apps/user/UserSlice";
import appointmentReducer from "./apps/appointment/AppointmentSlice";
// import UserReducer from "./apps/auth/UserSlice";
// import UserSlice from './auth/UserSlice';
import appointmentSlice from './apps/appointment/AppointmentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customizer: CustomizerReducer,
    ecommerceReducer: EcommerceReducer,
    ecommerce2Reducer: Ecommerce2Reducer,
    chatReducer: ChatsReducer,
    emailReducer: EmailReducer,
    notesReducer: NotesReducer,
    contactsReducer: ContactsReducer,
    ticketReducer: TicketReducer,
    userpostsReducer: UserProfileReducer,
    userpostsReducer2: UserProfile2Reducer,
    blogReducer: BlogReducer,
    user: UserReducer,
    appointment : appointmentReducer
    // user: UserReducer,

  },
  devTools: process.env.NODE_ENV !== "production",
});

const rootReducer = combineReducers({
  counter: counterReducer,
  customizer: CustomizerReducer,
  ecommerceReducer: EcommerceReducer,
  ecommerce2Reducer: Ecommerce2Reducer,
  chatReducer: ChatsReducer,
  emailReducer: EmailReducer,
  notesReducer: NotesReducer,
  contactsReducer: ContactsReducer,
  ticketReducer: TicketReducer,
  userpostsReducer: UserProfileReducer,
  userpostsReducer2: UserProfile2Reducer,
  blogReducer: BlogReducer,
  user: UserReducer,
  appointment : appointmentReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
