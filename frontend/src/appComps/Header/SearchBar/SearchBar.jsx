import Icon from '../../../icons/Icon';
import '../../../main.css'
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-wrapper">
        <Icon className='search-icon' src='/search.svg' alt='search'/>
        <input type="text" placeholder="search" />
    </div>
  );
}

export default SearchBar;