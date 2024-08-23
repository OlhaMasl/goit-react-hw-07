import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66c5b08f134eb8f434953402.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk("fetchContacts", async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("contacts");
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactThunk = createAsyncThunk("deleteContact", async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const addContactThunk = createAsyncThunk("addContact", async (body, thunkAPI) => {
    try {
        const { data } = await axios.post("contacts", body );
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});