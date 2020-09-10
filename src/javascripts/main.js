import '../styles/main.scss';
import userRadio from './components/userRadio';
import displayMessages from './displayMessages';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
};

init();
