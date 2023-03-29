import self from "../img/self.png";
import bmi_1 from "../img/BMI_Calculator_1.png";
import bmi_2 from "../img/BMI_Calculator_2.png";
import expenses_tracker from "../img/expenses_tracker.png";
import weather_one from "../img/weather_one.png";
import weather_two from "../img/weather_two.png";
import weather_three from "../img/weather_three.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,207,103)", "rgb(211,50,29)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Rushikesh",
  lastName: "Pandit",
  initials: "RP", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🌎",
      text: "based in the INDIA",
    },
    {
      emoji: "💼",
      text: "Senior Software Engineer at FIS",
    },
    {
      emoji: "📧",
      text: "rushikesh.d.pandit@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/rushikeshpandit",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/rushikesh-pandit-646834100/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "I am a Computer Application post graduate with strong programming skills. \n\nHas been working in Mobile Application development since last 7+ years. \n\nExtensive experience in building complex UI using Swift, SwiftUI, React Native. \n\nHaving sound knowledge of CirecleCI, Bitrise and Fastlane. \n\nWorked on 10+ iOS apps and 5+ React Native applications which includes multiple domains such as Banking, Social media, Messaging etc. \n\nAlso having sound knowledge of applications end to end life cycle as well as app deployment. \n\nI enjoy to learn new technology. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "GIT",
      "react-native",
      "Swift",
      "CircleCI",
      "Fastlane",
      "CI/CD",
      "Firebase",
      "Push Notification",
    ],
    exposedTo: ["nodejs", "Spring Boot", "SwiftUI", "Flutter"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "learning new things",
      emoji: "📖",
    },
    {
      label: "driving",
      emoji: "🚗",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "BMI Calculator",
      live: "http://rp-portfolio.s3-website.ap-south-1.amazonaws.com/downloads",
      source: "https://github.com/rushikeshpandit/BMI_calculator",
      images: [bmi_1, bmi_2],
      info: "This simple application allows user to calculate BMI once user inputs his weight and height.\nThis app has been written in Flutter language.",
    },
    {
      title: "Expenses Tracker",
      live: "http://expensestracker-env-1.eba-mahdn4hh.ap-south-1.elasticbeanstalk.com/swagger-ui/index.html",
      source: "https://github.com/rushikeshpandit/expense_tracker",
      images: [expenses_tracker],
      info: "This is Spring Boot application which is used to track expenses of user.",
    },
    {
      title: "Weather App",
      live: "http://rp-portfolio.s3-website.ap-south-1.amazonaws.com/downloads",
      source: "https://github.com/rushikeshpandit/weather_app",
      images: [weather_one, weather_two, weather_three],
      info: "This is Flutter application which can fetch the current location and display the weather accordingly.",
    },
    // {
    //     title: "Project 4",
    //     live: "https://paytonpierce.dev",
    //     source: "https://github.com/paytonjewell",
    //     image: mock4
    // },
    // {
    //     title: "Project 5",
    //     live: "https://paytonpierce.dev",
    //     source: "https://github.com/paytonjewell",
    //     image: mock5
    // }
  ],
  experience: [
    {
      company: "FIS Global",
      designation: "Senior Software Engineer",
      location: "Bangalore",
      duration: "Sept-2021 - Present",
      achievement: "",
      isWork: true,
      responsibilities: ["Effectively coded software changes and alterations based on specific design specifications.",
        "Implemented and updated application modules under the direction of Senior Software Developers.",
        "Working on 4+ Banking domain applications written in React Native.",
        "Mainly focused on refactoring code base and implementation of new functionalities along with integration of  REST API's and redux-toolkit."]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "March 2021 - Sept 2021",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a friendly, hardworking, and punctual employee.",
        "Worked well independently and on a team to solve problems.",
        "Worked on SwiftUI application which was based on audio streaming as well another app which was targeting health care domain.",
        "Also part of team which was responsible for refactor and publish application for this health care domain application."]
    },
    {
      company: "MJB Technology",
      designation: "Software Engineer",
      location: "Pune",
      duration: "Feb 2020 - Feb 2021",
      achievement:
        "Got an Magnificient Multitasker award for contributing to multiple projects",
      isWork: true,
      responsibilities: ["Implemented and updated application modules under the direction of Senior Software Developers / CTO.",
        "Effectively coded software changes and alterations based on specific design specifications.",
        "Introduced and implemented a different type of innovative software.",
        "Handled team of 5 peoples which includes 1 Business Analyst, 1 QA and 1 web developer and 1 back end developer.",
        "Was responsible for mobile app written in React Native. My roles and responsibilities includes handling client interaction, requirement gathering, sprint planning and execution and deployment."]
    },
    {
      company: "Destek Infololutions",
      designation: "Associate Manager - iOS Development",
      location: "Pune",
      duration: "May 2019 - Jan 2020",
      achievement: "",
      isWork: true,
      responsibilities: ["Provided optimal assistance to the General Manager and handled a variety of tasks.",
        "Worked on 4+ apps written in Swift.",
        "Was responsible to handle client interaction, requirement gathering, sprint planning and execution.",
        "Was responsible mentoring and grooming 2 interns with computer fundamentals and React Native.",
        "Was involved in all phases of software development from planning till deployment."]
    },
    {
      company: "Include Technology",
      designation: "iOS Engineer",
      location: "Pune",
      duration: "March 2016 - April 2019",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a friendly, hardworking, and punctual employee.",
        "Worked well independently and on a team to solve problems.",
        "Organized and prioritized work to complete assignments in a timely, efficient manner.",
        "Worked on more than 8+ applications which includes messaging apps, todo list apps, e-commerce apps, social networking apps, all of them was written in Swift.",
        "Was involved in all phases of software development from planning till deployment."]
    },
    {
      company: "Mindstix Software Pvt. Ltd.",
      designation: "Accelerated Intern",
      location: "Pune",
      duration: "Sept 2015 - Feb 2016",
      achievement: "",
      isWork: true,
      responsibilities: ["Served as a dedicated and supportive Intern in a fast-paced environment.",
        "Was part of iPad team which was working for one of the e-commerce giant  in US and Canada.",
        "Was responsible for bug fixes and implementing new features in the application."]
    },
    {
      degree: "Master in Computer Application",
      college: "P.V.G.'s College of Science",
      university: "Pune University",
      duration: "2012 - 2015",
      achievement:
        ["Elected as Class Representative for consecutive 3 years", "worked as General Secretary for an year."],
      isWork: false,
    },
    {
      degree: "Bachelor of Computer Science ",
      college: "P.V.G.'s College of Science",
      university: "Pune University",
      duration: "2009 - 2012",
      achievement: ["Elected as Class Representative for consecutive 3 years"],
      isWork: false,
    },
  ],
};
