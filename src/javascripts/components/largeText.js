const toggleTextSize = () => {
  $('#largeTextCheckbox').change(() => {
    $('body').toggleClass('large-text');
  });
};

export default { toggleTextSize };
