import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";

const initialState = {
    items: initialContacts,
};

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        deleteContact: (state, action) => {
  state.items = state.items.filter(el => el.id !== action.payload)
        },
        addContact: (state, action) => {
  state.items = [...state.items, action.payload]
 },
    },
});

export const contactsReducer = slice.reducer;
export const selectContacts = state => state.contacts.items;
export const { deleteContact,  addContact} = slice.actions;


