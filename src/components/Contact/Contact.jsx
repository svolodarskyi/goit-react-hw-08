import s from './Contact.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contactWrapper}>
      <div className={s.contacts}>
        <p className={s.contactName}>
          <span className={s.icon}>
            <IoPersonSharp />
          </span>

          {name}
        </p>
        <p className={s.contactPhone}>
          <span className={s.icon}>
            <FaPhoneAlt />
          </span>
          {number}
        </p>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdOutlineDelete className={s.deleteButtonIcon} />
      </button>
    </div>
  );
};

export default Contact;
