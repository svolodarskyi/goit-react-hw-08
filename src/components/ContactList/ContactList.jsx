import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useSelector, useDispatch } from 'react-redux';

import { selectisError, selectisLoading } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isError = useSelector(selectisError);
  const isLoading = useSelector(selectisLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={s.contactListWrapper}>
          {contacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
        </ul>
      )}
      {isError && <h2>Somehting went wrong!</h2>}
      {isLoading && <h2>Loading</h2>}
    </>
  );
};

export default ContactList;
