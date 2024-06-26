import { IConfig } from '../types/IConfig';

export const config: IConfig = {
   apiKey: import.meta.env.VITE_APP_apiKey,
   appId: import.meta.env.VITE_APP_appId,
   authDomain: import.meta.env.VITE_APP_authDomain,
   messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
   projectId: import.meta.env.VITE_APP_projectId,
   storageBucket: import.meta.env.VITE_APP_storageBucket,
};
