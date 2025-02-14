import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectisLoading = state => state.contacts.loading;
export const selectisError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(nameFilter.trim().toLowerCase())
      );
    }
    return [];
  }
);
