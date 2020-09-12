const emojis = (message) => {
  //   if (message === ':heart:') {
  //     return '&#x2764';
  //   }
  //   return message;
  let newMessage = '';
  switch (message) {
    case ':heart:':
      newMessage = '&#x2764';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    default:
      newMessage = $('#newMessage').val();
  }
  return newMessage;
};

export default { emojis };
