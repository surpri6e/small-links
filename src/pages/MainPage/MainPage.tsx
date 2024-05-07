import { useEffect, useState } from 'react';
import './MainPage.scss';
import FirebaseApi from '../../api/firebaseApi';
import { validateLink } from '../../utils/validateLink';
import { getRandomKey } from 'rkey';
import { domen } from '../../utils/paths';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
   const [link, setLink] = useState('');
   const [linkError, setLinkError] = useState(false);

   const [smallLink] = useState(() => getRandomKey(5, 'all'));

   const [isClicked, setIsClicked] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      FirebaseApi.saveIp();
   }, []);

   return (
      <div className='main'>
         <input type='text' value={link} onChange={(e) => setLink(e.target.value)} className={linkError ? 'input--error' : ''} />
         <button
            onClick={async () => {
               if (!validateLink(link)) {
                  setLinkError(true);
                  setTimeout(() => setLinkError(false), 1500);
               }

               if (validateLink(link)) {
                  await FirebaseApi.saveLink(smallLink, link);
                  setIsClicked(true);
               }
            }}
            disabled={isClicked}
         >
            Сократить
         </button>
         {isClicked && (
            <div className='main_block'>
               <button
                  className='main_button'
                  onClick={async () => {
                     navigator.clipboard.writeText(domen + smallLink).then(() => navigate(`/${smallLink}`));
                  }}
               >
                  Скопировать ссылку и перейти
               </button>
            </div>
         )}
      </div>
   );
};

export default MainPage;
