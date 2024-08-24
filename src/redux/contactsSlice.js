import { createSelector, createSlice } from "@reduxjs/toolkit";
import {addContactThunk, deleteContactThunk, fetchContactsThunk } from "./contactsOps"
import { selectFilter } from "./filtersSlice";


const initialState = {
    items: [],
    loading: false,
    error: false,
};

const slice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, (state, action) => {
             state.loading = true;
         })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
            })
        .addCase(deleteContactThunk.pending, (state, action) => {
             state.loading = true;
         })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(el => el.id !== action.payload)
                state.loading = false;
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
            })
        .addCase(addContactThunk.pending, (state, action) => {
             state.loading = true;
         })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.items = [...state.items, action.payload]
                state.loading = false;
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.error = true;
                state.loading = false;
            })

    }
});

export const contactsReducer = slice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (items, filter) => {
    const filteredContacts = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    return filteredContacts;
});

