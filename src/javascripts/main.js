import '../styles/main.scss';
import dark from './components/darkMode';
import userRadio from './components/userRadio';
import displayMessages from './components/displayMessages';
import selectUser from './components/selectUser';
import add from './components/addMessage';
import largeText from './components/largeText';
import clear from './components/clearMessage';

// const xhr = $.get(`https://api.giphy.com/v1/gifs/search?api_key=${bIDzmVyydApjmjrw62c1gG8rufmN1yMA}&tag=${n.value.toLowerCase()}&limit=1`);

const init = () => {
  userRadio.buildUserRadio();
  displayMessages.displayMessages();
  selectUser.userSelectionClick();
  selectUser.standardUser();
  dark.darkMode();
  add.addMessage();
  largeText.toggleTextSize();
  clear.clearMessage();
};

init();
