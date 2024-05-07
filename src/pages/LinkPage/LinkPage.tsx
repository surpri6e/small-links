import { useParams } from 'react-router-dom';
import './LinkPage.scss';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { DocumentReference, doc } from 'firebase/firestore';
import { ISmallLink } from '../../types/ISmallLink';
import { db } from '../../main';
import { domen } from '../../utils/paths';

const LinkPage = () => {
   const { id } = useParams();
   const [value, loading] = useDocumentData<ISmallLink>(doc(db, 'links', id ? id : ' ') as DocumentReference<ISmallLink>);

   return (
      <div className='link'>
         {loading && <></>}
         {!loading && value && (
            <p>
               Основная ссылка -{' '}
               <a href={domen + value.basicLink} target='_blank'>
                  здесь
               </a>
               .
            </p>
         )}
         {!loading && !value && <p>Тут нет никакой ссылки!</p>}
      </div>
   );
};

export default LinkPage;
