import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// screens
import NotAvailableScreen from './screens/NotAvailableScreen.jsx';
import PUBLIC_SCREENS from './helpers/screens';
import { currentUser } from './helpers/dummy/current-user';
import { ROLE } from './helpers/utils';
import getScreenByRole from './helpers/getScreenByRole';
import NotFound from './screens/NotFound.jsx';

function App() {
  const userRoleIsExist = ROLE?.includes(currentUser?.toLowerCase());
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  if (isDesktopOrLaptop) {
    return <NotAvailableScreen />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route key={'NotFound'} path={'*'} element={<NotFound />} />
          {/* Public Screens */}
          {Object.keys(PUBLIC_SCREENS)?.map((key) => {
            const ELEMENT = PUBLIC_SCREENS?.[key].element;
            let path = PUBLIC_SCREENS?.[key].path;
            // Cek apakah path tidak ada slash nya
            if (!path.startsWith('/')) {
              const newPath = path?.split('');
              newPath?.unshift('/');
              path = newPath?.join('');
            }
            return (
              <Route key={key} path={path} element={<ELEMENT />} />
            );
          })}

          {/* Authorized Screens */}
          {userRoleIsExist && Object.keys(getScreenByRole(currentUser))?.map((key) => {
            const ELEMENT = getScreenByRole(currentUser)?.[key].element;
            let path = getScreenByRole(currentUser)?.[key].path;
            // Cek apakah path tidak ada slash nya
            if (!path.startsWith('/')) {
              const newPath = path?.split('');
              newPath?.unshift('/');
              path = newPath?.join('');
            }
            return (
              <Route key={key} path={path} element={<ELEMENT />} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
