
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];



const pageEl = document.querySelector('body');
pageEl.style.backgroundColor = "#500203";
pageEl.style.height = '100vh';


const navEl = document.getElementById('menu');
navEl.style.height = '50px';
navEl.style.backgroundColor = '#290202';
navEl.style.margin = '0'


menuLinks.forEach(function (link) {
    let newEl = document.createElement("a");
    newEl.setAttribute("href", link.href);
    newEl.textContent = link.text;
    navEl.appendChild(newEl);
  });

const introEl = document.getElementById('intro');
introEl.textContent = 'Welcome to Santa\'s Letterbox';

const subEl = document.getElementById('sub-head');
subEl.textContent = 'Send Your Wishes to the North Pole!';




// const mainEl = document.querySelector("main");
// mainEl.style.backgroundColor = "var(--main-bg)";
// mainEl.innerHTML = "<h1>Welcome to Santa's Letterbox</h1>";

// const menuEl = document.querySelector("menu");