import { Route, Routes } from 'react-router-dom';
import { routes } from '../routes';

const AllRoutes = () => {
   return (
      <Routes>
         {routes.map((route) => (
            <Route element={<route.component />} path={route.path} key={route.path} />
         ))}
      </Routes>
   );
};

export default AllRoutes;
