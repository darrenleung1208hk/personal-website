document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.sidenav');
  let instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.collapsible');
  let instances = M.Collapsible.init(elems, {});
});

let collapsibleHeaders = [].slice.call(document.getElementsByClassName('collapsible-header'));
collapsibleHeaders.forEach(elem => {
  let expandButton = elem.querySelector('.expand-button');
  elem.addEventListener('click', () => {
    if (expandButton.innerHTML === 'expand_more') expandButton.innerHTML = 'expand_less';
    else expandButton.innerHTML = 'expand_more';
  });
});