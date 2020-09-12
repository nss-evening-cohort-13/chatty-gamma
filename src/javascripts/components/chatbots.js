import moment from 'moment';
// import randomId from './addMessage';
import data from '../helpers/data/messageData';
import display from './displayMessages';

const chatbots = [
  {
    bot: 'Treat Yo Self Bot',
    keywords: ['should i buy', 'should i get', 'fine leather goods', 'mimosas', 'spa', "josh grobin's fish", 'celebrity fish', 'bedazzle'],
    reply: 'Heck yeah, treat yo self!'
  }
];

const runChatbots = (userMessage) => {
  const newMessage = userMessage.toLowerCase();
  const redisplayMessages = () => {
    $('#messageDisplay').html('');
    display.displayMessages();
  };

  chatbots.forEach((chatbot) => {
    for (let i = 0; i < chatbot.keywords.length; i += 1) {
      if (newMessage.includes(chatbot.keywords[i])) {
        const newId = data.randomId();
        const botMessage = {
          id: newId,
          user: chatbot.bot,
          time: moment().format('MMMM Do YYYY, h:mm a'),
          text: chatbot.reply,
        };
        data.getMessages().push(botMessage);
        setTimeout(redisplayMessages, 500);
      }
    }
  });
};

export default { runChatbots };
