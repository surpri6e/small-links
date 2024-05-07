import { Link } from 'react-router-dom';
import './Logo.scss';
import { mainPath } from '../../utils/paths';

const Logo = () => {
   return (
      <Link to={mainPath} className='logo'>
         Surlink - сократите вашу сслыку.
      </Link>
   );
};

export default Logo;
