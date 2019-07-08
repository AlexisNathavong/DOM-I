const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//Images
let logo = document.getElementById('logo-img');
logo.setAttribute(`src`, siteContent["nav"] ["img-src"]);

let ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute(`src`, siteContent["cta"] ["img-src"]);

let middleLogo = document.getElementById('middle-img');
middleLogo.setAttribute(`src`, siteContent["main-content"] ["middle-img-src"]);


//Button
let btn = document.querySelector(`button`);
btn.textContent = siteContent[`cta`] ["button"];
console.log(btn);

//Nav

let navA = document.querySelectorAll('nav a');
navA.forEach((element, index) => {
  element.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

navA.forEach( function(currentValue){
  currentValue.style.color = 'green';
});

////ADDED NEW NAV TAG/////
const newNavTag = document.createElement('a');
newNavTag.textContent = 'Work';
const nav = document.querySelector('nav');
nav.append(newNavTag);

const newNavA= document.createElement('a');
newNavA.textContent = 'Blog';
const a = document.querySelector('nav');
nav.append(newNavA);


// newNavTag.textContent = 'Blog';
// nav.appendChild(newNavTag);

//Content
let contentHeaders = document.querySelectorAll('h4');
console.log(contentHeaders);
contentHeaders[0].textContent = siteContent ['main-content'] ["features-h4"];
contentHeaders[1].textContent = siteContent ['main-content'] ["about-h4"];
contentHeaders[2].textContent = siteContent ['main-content'] ["services-h4"];
contentHeaders[3].textContent = siteContent ['main-content'] ["product-h4"];
contentHeaders[4].textContent = siteContent ['main-content'] ["vision-h4"];

let contentTexts = document.querySelectorAll('p')
console.log(contentTexts);
contentTexts[0].textContent = siteContent['main-content'] ["features-content"];
contentTexts[1].textContent = siteContent['main-content'] ["about-content"];
contentTexts[2].textContent = siteContent['main-content'] ["services-content"];
contentTexts[3].textContent = siteContent['main-content'] ["product-content"];
contentTexts[4].textContent = siteContent['main-content'] ["vision-content"];

//CTA
let h1 = document.querySelector('h1');
h1.textContent = siteContent ['cta'] ["h1"];

//Contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent ['contact'] ["contact-h4"];

let contactTexts = document.querySelectorAll('.contact p');
contactTexts[0].textContent = siteContent ['contact'] ["address"];
contactTexts[1].textContent = siteContent ['contact'] ["phone"];
contactTexts[2].textContent = siteContent ['contact'] ["email"];
console.log(contactTexts);
// let contact = document.querySelector(`contact`);
// contact.textContent = siteContent[`contact`] ["contact-h4"];
// console.log(contact);

// Object.keys.

//Footer
let footer = document.querySelector('footer');
footer.textContent = siteContent ['footer'] ["copyright"];