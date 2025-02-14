import s from './SearchBox.module.css';
import { IoMdSearch } from 'react-icons/io';

import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <input
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={s.input}
        placeholder="Find contacts by name"
        type="text"
        name="name"
      />
      <IoMdSearch className={s.iconSearch} />
    </div>
  );
};

export default SearchBox;
