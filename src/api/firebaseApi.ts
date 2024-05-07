import { doc, setDoc } from 'firebase/firestore';
import { db } from '../main';
import { IInfo } from '../types/IInfo';
import { ISmallLink } from '../types/ISmallLink';

export default class FirebaseApi {
   public static saveIp = async () => {
      await fetch('https://api.ipify.org?format=json')
         .then((response) => response.json())
         .then(
            async (data) =>
               await setDoc(doc(db, 'ip', data.ip as string), {
                  ip: data.ip as string,
               } as IInfo),
         );
   };

   public static saveLink = async (smallLink: string, basicLink: string) => {
      await setDoc(doc(db, 'links', smallLink), {
         basicLink,
      } as ISmallLink);
   };
}
