import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';
import add from './components/addMessage';
import largeText from './components/largeText';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  dark.darkMode();
  add.addMessage();
  largeText.toggleTextSize();
};

init();
