import { useNavigate } from 'react-router-dom';
import Header from "../../appComps/Header/Header";
import '../../main.css'
import './NotFound.css'

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header title='AniVoice' isMainPage={false} />
      <div className='error-handler header-font'>
        <h1 style={{ padding: '2vw', fontSize: '4vw' }}>Error 404. Not Found.</h1>
        <button className='back-main-btn' onClick={() => navigate('/')}>
          Go home
        </button>
      </div>
    </>
  );
}

export default NotFound;
