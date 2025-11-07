import '../../main.css'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar'
import Icon from '../../icons/Icon';

function Header(props){
    return <header>
        <h1 className='title no-selection header-font'><Link to='/'>{props.title}</Link></h1>        
        {props.isMainPage && <div className='head-btns'>
            <SearchBar />
            <Link to='/profile' className='profile-link header-font'>
                <Icon alt="User" src='/account_circle.svg' className='profile-icon'/>
            </Link>        
        </div>}
    </header>
}

export default Header