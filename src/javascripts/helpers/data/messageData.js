const messages = [
  {
    id: 1599662682116,
    user: 'Leslie Knope',
    time: 'Jan 1, 2020 1:30pm',
    text: 'I love Pawnee!',
  },
  {
    id: 1599663489398,
    user: 'Ron Swanson',
    time: 'Jan 1, 2020 1:32pm',
    text: "Don't sass me",
  },
  {
    id: 1599663503257,
    user: 'Garry Gergich',
    time: 'Jan 1, 2020 1:33pm',
    text:
      'I told them my real name was Garry, and they said "who cares?" What a fun bunch of guys.',
  },
  {
    id: 1599663514787,
    user: 'April Ludgate',
    time: 'Jan 1, 2020 1:34pm',
    text: 'I hate talking to people.',
  },
  {
    id: 1599663524542,
    user: 'Jean Ralphio',
    time: 'Jan 1, 2020 1:35pm',
    text: 'Pills baby!',
  },
];

const idGenerator = () => {
  const date = Date();
  const newID = date.valueOf();

  return newID;
};

const getMessages = () => messages;

export default { idGenerator, getMessages };
