import LinkPage from './pages/LinkPage/LinkPage';
import MainPage from './pages/MainPage/MainPage';
import { IRoute } from './types/IRoute';
import { linkPath, mainPath } from './utils/paths';

export const routes: IRoute[] = [
   { path: mainPath, component: MainPage },
   { path: linkPath, component: LinkPage },
];
