import LandingPage from '../../screens/LandingPage/index.jsx';
import Login from '../../screens/Login/index.jsx';

const PUBLIC_SCREENS = {
  LandingPage: {
    path: '/',
    element: LandingPage,
  },
  Login: {
    path: '/login',
    element: Login,
  },
};

export default PUBLIC_SCREENS;
