import moment from 'moment';
// import randomId from './addMessage';
import data from '../helpers/data/messageData';
import display from './displayMessages';

const chatbots = [
  {
    bot: 'Treat Yo Self Bot',
    keywords: ['should i buy', 'spa', "josh grobin's fish", 'celebrity fish', 'bedazzle'],
    reply: 'Heck yeah, treat yo self!'
  }
];

const randomId = () => {
  const random = [Math.floor(Math.random() * 1000)];
  return random;
};

const runChatbots = (userMessage) => {
  const newMessage = userMessage.toLowerCase();

  chatbots.forEach((chatbot) => {
    for (let i = 0; i < chatbot.keywords.length; i += 1) {
      console.log(newMessage.includes(chatbot.keywords[i]));

      if (newMessage.includes(chatbot.keywords[i])) {
        const newId = randomId();
        const botMessage = {
          id: newId,
          user: chatbot.bot,
          time: moment().format('MMMM Do YYYY, h:mm a'),
          text: chatbot.reply,
        };
        data.getMessages().push(botMessage);
        $('#messageDisplay').html('');
        display.displayMessages();
      }
    }
  });
};

export default { runChatbots };
