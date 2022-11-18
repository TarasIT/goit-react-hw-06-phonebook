import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },

    deleteContact: {
      reducer(state, action) {
        return {
          contacts: state.contacts.filter(({ id }) => id !== action.payload),
        };
      },
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
