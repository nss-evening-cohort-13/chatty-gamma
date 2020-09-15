import storage from './localStorage';

let messages = [
  {
    id: 8,
    user: 'Leslie Knope',
    time: 'September 15th, 2020 1:30pm',
    text: 'I love Pawnee!',
    thumbsUp: 2,
    thumbsDown: 1,
  },
  {
    id: 67,
    user: 'Ron Swanson',
    time: 'September 15th, 2020 1:32pm',
    text: "Don't sass me",
    thumbsUp: 0,
    thumbsDown: 0,
  },
  {
    id: 38,
    user: 'Garry Gergich',
    time: 'September 15th, 2020 1:33pm',
    text:
      'I told them my real name was Garry, and they said "who cares?" What a fun bunch of guys.',
    thumbsUp: 0,
    thumbsDown: 0,
  },
  {
    id: 500000,
    user: 'April Ludgate',
    time: 'September 15th, 2020 1:34pm',
    text: 'I hate talking to people.',
    thumbsUp: 0,
    thumbsDown: 0,
  },
  {
    id: 785968,
    user: 'Jean Ralphio',
    time: 'September 15th, 2020 1:35pm',
    text: 'Pills baby!',
    thumbsUp: 0,
    thumbsDown: 0,
  },
];

const randomId = () => {
  const random = [Math.floor(Math.random() * 1000000)];
  return random;
};

const getMessages = () => {
  if (messages.length >= 21) {
    messages.shift();
    storage.setItem('storage', messages);
    return messages;
  }
  if (messages.length < 21) {
    storage.setItem('storage', messages);
    return messages;
  }
  return messages;
};
const loadStorage = () => {
  if (storage.getItem('storage')) {
    messages = storage.getItem('storage');
    return messages;
  }
  return messages;
};

loadStorage();

export default { randomId, getMessages };
