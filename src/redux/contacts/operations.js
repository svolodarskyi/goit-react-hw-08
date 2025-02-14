import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await goitApi.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (params, thunkApi) => {
    try {
      await goitApi.post('/contacts', params);
      thunkApi.dispatch(fetchContacts());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      await goitApi.delete(`/contacts/${id}`);
      thunkApi.dispatch(fetchContacts());
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
