import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactForm from '../components/ContactForm/ContactForm';

import { RiContactsBook3Line } from 'react-icons/ri';

const Contacts = () => {
  return (
    <div className="container">
      <h1 className="title">
        <RiContactsBook3Line />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
