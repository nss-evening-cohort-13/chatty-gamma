const addMessage = () => {
  $('#newMessage').keypress((e) => {
    if (e.keyCode === 13) {
      let newMessage = {
        text: $('#newMessage').val()
      };
      getMessages().push(newMessage);
      displayMessages(getMessages());
    }
  });
};