import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const goitApi = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post('users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.data.code === 11000) {
        toast.error('User already exists');
        //   potentailly we can remove below line
        return thunkAPI.rejectWithvalue(error.message);
      }
      return thunkAPI.rejectWithvalue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post('users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.post('users/logout');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue('token does not exist');
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await goitApi.get('users/current');
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
