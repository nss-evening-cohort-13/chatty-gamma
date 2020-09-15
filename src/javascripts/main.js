import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';
import selectUser from './components/selectUser';
import add from './components/addMessage';
import largeText from './components/largeText';
import clear from './components/clearMessage';
import gif from './components/giphy';

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  selectUser.userSelectionClick();
  selectUser.standardUser();
  dark.darkMode();
  add.addMessage();
  largeText.toggleTextSize();
  clear.clearMessage();
  gif.giphyButton();
};

init();
