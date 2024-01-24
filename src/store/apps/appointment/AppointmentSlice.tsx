import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store'; // Assuming you have a store file
import axios from 'axios';
import { AppDispatch } from '@/store/store';

interface Appointment {
  // Define your appointment interface here
}

interface AppointmentsState {
  appointments: Appointment[];
  isLoading: boolean;
  isSuccess: boolean;
  errors: Record<string, any>; // Adjust this based on your error structure
}

const initialState: AppointmentsState = {
  appointments: [],
  isLoading: false,
  isSuccess: false,
  errors: {},
};

const AppointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setErrors: (state, action: PayloadAction<Record<string, any>>) => {
      state.errors = action.payload;
    },
  },
});

export const { setAppointments, setIsLoading, setIsSuccess, setErrors } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;

// Async Action Creator
export const createAppointment = (userData: any, navigation: any): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(setErrors({}));
  dispatch(setIsLoading(true));
  dispatch(setIsSuccess(false));

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/appointment`, userData);
    dispatch(setIsLoading(false));
    dispatch(setIsSuccess(true));

    setTimeout(() => {
      dispatch(setIsLoading(false));
      dispatch(setIsLoading(false));
    }, 1000);

    setTimeout(() => {
      dispatch(setIsSuccess(false));
    }, 3000);

    // Handle navigation here if needed
  } catch (err :any) {
    dispatch(setErrors(err?.response?.data));
    dispatch(setIsLoading(false));

    setTimeout(() => {
      dispatch(setIsSuccess(false));
    }, 3000);
  }
};
export const fetchAppointmentByUser = () => (dispatch: AppDispatch) => {
  dispatch(setErrors([]));

  axios
    .get(`${process.env.REACT_APP_API_URL}/api/appointment/findAppointmens`)
    .then(async (res) => {
      dispatch(setAppointments(res.data));
      dispatch(setErrors({}));
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

export const fetchAllAppointment = () => (dispatch: AppDispatch) => {
  dispatch(setErrors([]));

  axios
    .get(`${process.env.REACT_APP_API_URL}/api/appointment/findAllAppointmens`)
    .then(async (res) => {
      dispatch(setAppointments(res.data));
      dispatch(setErrors({}));
    })
    .catch((err) => {
      dispatch(setErrors(err?.response?.data));
    });
};

// Similarly, update fetchAppointmentByUser and fetchAllAppointment actions


// export const {
//   setAppointments,
//   setIsLoading,
//   setIsSuccess,
//   setErrors,

// } = AppointmentSlice.actions;

// export default AppointmentSlice.reducer;


