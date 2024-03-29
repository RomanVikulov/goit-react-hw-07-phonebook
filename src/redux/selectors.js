import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  }
);

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
