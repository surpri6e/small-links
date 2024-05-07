import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';

import './styles/styles.scss';
import Logo from './components/Logo/Logo';

function App() {
   return (
      <BrowserRouter>
         <div className='wrapper'>
            <Logo />
            <AllRoutes />
         </div>
      </BrowserRouter>
   );
}

export default App;
