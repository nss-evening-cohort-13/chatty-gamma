const emojis = (message) => {
  let newMessage = '';
  switch (message) {
    case ':heart:':
      newMessage = '&#x2764';
      break;
    case ':lol:':
      newMessage = '&#x1F602';
      break;
    case ':cry:':
      newMessage = '&#x1F622';
      break;
    case ':sparkles:':
      newMessage = '&#x2728';
      break;
    case ':smile:':
      newMessage = '&#x1F60A';
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
