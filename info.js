let info = {
  name: "Natain Bogdan",
  logo_name: "Bogdan",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a Junior Full-stack web developer with a passion for building projects that are used routinely. Building applications in Laravel, React, JavaScript, and Vue.js. Former supervisor and finance professional who's eager to enhance a company's user experience. ",
  links: {
    linkedin: "https://www.linkedin.com/in/natain/",
    github: "https://github.com/Natain",
    angellist: "https://angel.co/u/Natain-Bogdan",
    resume:
      "https://github.com/Natain/My-resume-2021/blob/main/Resume.pdf"
  },
  education: [
    {
      name: "Sapienza Università di Roma",
      place: "italy",
      date: "May, 2009 - May, 2011",
      degree: "Economics Science",
      gpa: "3.7/4.0",

      skills: [
        // "Skils gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",


      ]
    },
    {
      name: "Ilbah workshops",
      course:"Full Stack Developer",
      place: "Bucharest/Romania",
      date: "May, 2021 - Oct, 2021",
      degree: "Bachelors in Programmer Help, cod COR 351201",
      gpa: "8.5/10.0",
      description:
        "",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "OOP",
        "PHP",
        "MySql",
       "Laravel"
      ]
    }
  ],
  experience: [

    {
      name: "Frelancer",
      place: "Bucharest, Romania",
      date: "Aug, 2021 - Present",
      position: "Full Stack Web Developer",
      description:
        "Developing back-end website applications. Creating servers and databases for functionality. Ensuring responsiveness of applications. Designing and developing APIs.Meeting both technical and consumer needs. Staying abreast of developments in web applications and programming languages.",
        skills: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "React.js",
          "Vue.js",
          "Bootstrap",
          "PHP",
          "MySql",
          "MariaDB",
          "SQL",
          "OOP",
          "Laravel"
        ]
    },

  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Swift",
        "PHP",
        "Ruby",
        "NodeJS",

      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Pandas",
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL",],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [

    {
      name: "Todo-application",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/one.png")
        },
        {
          img: require("./src/assets/portfolio/todo-application/two.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks."
    },



    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        {
          img: require("./src/assets/portfolio/grocery/one.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/two.png")
        }
      ],
      technologies: ["CSS", "JavaScript","React.js", "HTML5",],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:  "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/one.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/two.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/three.png")
        },

      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/Natain/gitscores",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://gitscores.herokuapp.com/",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn."
    }
  ],
  portfolio_design: [

  ]
};

export default info;
