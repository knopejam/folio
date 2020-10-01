import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lindsay Iveson | Developer', // e.g: 'Name | Developer'
  lang: 'en-us', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Lindsay Iveson',
  subtitle: "I'm a developer, designer, && wood carver",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: `I’m a queer Web Developer, Designer, && Wood Carver from the Jersey Shore, with a B.A. in Visual Arts from Stockton University and Full Stack Developer certificate from Rutgers University, and I’m always looking for new things to learn and problem-solve.`,
  paragraphTwo: `My favorite techs I’m currently working with are: Gatsby, Sanity.io, and have taken quite a liking to Java.`,
  paragraphThree: `When I’m not developing or designing, you can catch me at my workbench (a.k.a. an old kitchen table) carving out a present for a friend or taking my dog Lainey for a walk.`,
  paragraphFour: `Thanks for stopping by!`,
  resume: 'https://docs.google.com/document/d/1z0e5KeuK_jG8Uv_yCxZhIIW0Ko57X31bw9wD3gWUpVo/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bamazon.png',
    title: 'Bamazon Node App',
    info: `Bamazon is an Amazon-like storefront, and uses MySQL, JavaScript, and Node.js to create a Command Line Interface app. This app updates the stock quantity of products based on customer orders in the MySQL database.`,
    info2: '',
    url: 'https://github.com/lindsive/bamazon/#readme',
    repo: 'https://github.com/lindsive/bamazon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'liri.png',
    title: 'LIRI Node App',
    info: `LIRI is a CLI app that takes in a user's search parameter, and return them the search results. The purpose if LIRI is to help the user find information on a song, music artist, or movie, all in one place. All the user needs to do is to type in one of the commands and what they are searching for.`,
    info2: `This LIRI app utilizes Node, API calls, NPM packages, and JavaScript.`,
    url: 'https://github.com/lindsive/liri-node-app/#readme',
    repo: 'https://github.com/lindsive/liri-node-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'friendture.png',
    title: 'Friendture',
    info: `Friendture is a social media app that aims to keep the user and their friends, well, social. The app provides suggestions of activities the user and friends can complete. Once the activity is completed, users can post pictures, a blurb, etc. and then earn a trophy.`,
    info2: `This app utilizes technologies such as React, MongoDB with Mongoose, Node.js, NPM packages, and Firebase with Google Sign In`,
    url: 'https://friendture.herokuapp.com/',
    repo: 'https://github.com/jk1138/git-test', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna chat?',
  btn: '',
  email: `Email: ivesonlindsay@gmail.com`,
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/lindsive',
    },   
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lindsayiveson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lindsive',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
