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
    case ':fire:':
      newMessage = '&#x1F525';
      break;
    case ':thumbsup:':
      newMessage = '&#x1F44D';
      break;
    case ':lilsebastien:':
      newMessage = '&#x1F434';
      break;
    case ':raccoon:':
      newMessage = '&#x1F99D';
      break;
    default:
      newMessage = $('#newMessage').val();
  }
  return newMessage;
};

export default { emojis };
