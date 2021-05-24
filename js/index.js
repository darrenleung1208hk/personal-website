document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems, {});
});

let expandButtonsCollection = document.getElementsByClassName('expand-button');
let expandButtons = [].slice.call(document.getElementsByClassName('expand-button'))
expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerHTML === 'expand_more') button.innerHTML = 'expand_less';
    else button.innerHTML = 'expand_more';
  })
});
