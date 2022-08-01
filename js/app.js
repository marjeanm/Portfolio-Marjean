const nav = document.getElementById('navBar');
const menu = ['Home', 'About', 'Projects', 'Key-skills', 'Contact'];
let nodes = menu.map((menu) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.href = `#${menu}`;
  a.className = 'scroll-link underline';
  a.innerHTML = menu;
  li.appendChild(a);
  return li;
});
nav.append(...nodes);

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

function closeLinks() {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
}
navToggle.addEventListener('click', closeLinks);

const showMe = document.querySelectorAll('.reveal');
function animate() {
  for (const elements of showMe) {
    let windowsHeight = window.innerHeight;
    let elementTop = elements.getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowsHeight - elementVisible) {
      elements.classList.add('active');
    } else {
      elements.classList.remove('active');
    }
  }
}
window.addEventListener('scroll', animate);
animate();

/* smooth scroll  */
const arrow = document.querySelectorAll('.scroll-link');
for (const a of arrow) {
  a.addEventListener('click', clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  console.log(this);

  const href = this.getAttribute('href');

  document.querySelector(href).scrollIntoView({
    behavior: 'smooth',
  });
}

let isInViewport = function (elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

let subHeading = document.querySelectorAll('span');
let arrowUp = document.querySelector('.fa-circle-arrow-up');

for (const s of subHeading) {
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    console.log(s);
    if (isInViewport(s)) {
      s.className = 'pink';
    } else {
      s.className = 'none';
    }
  });
}
let link = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  if (scrollHeight > 100) {
    link.classList.add('show-link');
  } else {
    link.classList.remove('show-link');
  }
});
