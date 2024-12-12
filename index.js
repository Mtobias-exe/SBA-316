
var menuLinks = [
    { text: "home", href: "/home" },
    {
      text: "faq",
      href: "#",
      subLinks: [
        { text: "Is santa really real?", href: "/faq/santa-real" },
        { text: "How does this work?", href: "/faq/how-it-works"},
        { text: "Is this a scam?", href: "/faq/scam" },
      ],
    },
    {
      text: "contact us",
      href: "#",
      subLinks: [
        { text: "new inquiries", href: "/contact/new" },
        { text: "pending", href: "/contact/pending" },
        { text: "history", href: "/contact/history" },
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
navEl.classList = "flex-around";
navEl.style.position = 'relative';


menuLinks.forEach(function (link) {
    let newEl = document.createElement("a");
    newEl.setAttribute("href", link.href);
    newEl.textContent = link.text;
    navEl.appendChild(newEl);
  });

  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "50px";

  subMenuEl.style.backgroundColor = "red";
  subMenuEl.classList = "flex-around";
  
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";

  const topMenuLinks = document.querySelectorAll("a");
  navEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.textContent);
  
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
  
    const clickedLink = menuLinks.find(
      (link) => link.text.toLowerCase() === event.target.textContent.toLowerCase()
    );
  
    if (clickedLink && clickedLink.subLinks) {
      subMenuEl.style.top = "100%";
      buildSubmenu(clickedLink.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  });

  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = "";
    subLinks.forEach((link) => {
      const subLinkEl = document.createElement("a");
      subLinkEl.setAttribute("href", link.href);
      subLinkEl.textContent = link.text;
      subMenuEl.appendChild(subLinkEl);
    });
  }


  subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    }
    console.log(event.target.textContent);
    subMenuEl.style.top = "0";
    topMenuLinks.forEach((link) => link.classList.remove("active"));
  
    navElEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });
  

  
  // const img = document.createElement('img');
  // img.src = "https://usagif.com/wp-content/uploads/2021/4fh5wi/santa-claus-69.gif";
  // const src = document.getElementById('hero-container');
  // src.appendChild(img)
  const img = document.querySelector('img')
  img.style.borderRadius = '50%';
  img.style.objectFit = 'cover';
  img.style.width = '700px'
  img.style.height = '700px'

  
  


const introEl = document.getElementById('intro');
introEl.textContent = 'Welcome to Santa\'s Letterbox';
introEl.classList = 'right-column'

const subEl = document.getElementById('sub-head');
subEl.textContent = 'Send Your Wishes to the North Pole!';
subEl.classList = 'right-column'

const mailEl = document.getElementById('mail-container');
mailEl.classList = 'right-column'





