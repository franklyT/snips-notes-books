// https://www.reddit.com/r/learnjavascript/comments/cafakw/can_i_select_all_elements_that_contain_a_certain/

document.addEventListener('DOMContentLoaded', () => {
  const dateHours = new Date().getHours();
  const elms = document.querySelectorAll('.yourClass');

  let color = '';

  if (dateHours > 17 || dateHours < 7) {
    color = 'white';
    elms.forEach((elm) => {
      elm.style.backgroundColor = color;
    });
  } else {
    color = 'black';
    elms.forEach((elm) => {
      elm.style.backgroundColor = color;
    });
  }
});
