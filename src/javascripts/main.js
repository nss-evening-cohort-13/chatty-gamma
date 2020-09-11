import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  dark.darkMode();
};

init();
