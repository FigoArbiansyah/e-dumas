import PUBLIC_SCREENS from './screens';
import MASYARAKAT_SCREENS from './screens/masyarakat';

const getScreenByRole = (role) => {
  let screen = MASYARAKAT_SCREENS;
  switch (role) {
    case 'masyarakat':
      screen = MASYARAKAT_SCREENS;
      break;

    default:
      screen = null;
      break;
  }
  return screen;
};

export default getScreenByRole;
