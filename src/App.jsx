import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// screens
import PUBLIC_SCREENS from './helpers/screens';
import NotAvailableScreen from './screens/NotAvailableScreen.jsx';

function App() {
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
