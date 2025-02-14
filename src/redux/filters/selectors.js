import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';

export const selectFilter = state => state.filters.filters;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, contactsFilter) => {
    if (contacts) {
      return contacts.filter(contact =>
        contact.name
          .toLowerCase()
          .includes(contactsFilter.name.trim().toLowerCase())
      );
    }
    return [];
  }
);
