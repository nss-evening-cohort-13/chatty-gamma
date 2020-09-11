import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';
import add from './components/addMessage';
import clear from './components/clearMessage';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  dark.darkMode();
  add.addMessage();
  clear.clearMessage();
};

init();
