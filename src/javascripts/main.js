import '../styles/main.scss';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
};

init();
