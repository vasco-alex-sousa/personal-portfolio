import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  ruby,
  html,
  css,
  rails,
  sql,
  ajax,
  git,
  figma,
  yazaki,
  lewagon,
  gamy,
  giny,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Twitch Partner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Ajax",
    icon: ajax,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Design Engineer",
    company_name: "Yazaki Portugal",
    icon: yazaki,
    iconBg: "#383E56",
    date: "July 2015 - July 2018",
    points: [
      "Designing and developing electrical components and systems for Toyota vehicles, ensuring they meet industry standards",
      "Collaborating with cross-functional teams to ensure project success.",
      "Providing technical support to team members and other departments as needed.",
      "Creating and maintaining detailed documentation of design processes and results.",
      "Using CAE software to simulate and optimize designs for Toyota vehicles.",
    ],
  },
  {
    title: "Chemical Laboratory Technician",
    company_name: "Yazaki Portugal",
    icon: yazaki,
    iconBg: "#E6DEDD",
    date: "July 2018 - November 2021",
    points: [
      "Conducting advanced X-ray analyses on electrical car components, preparing samples, and providing detailed reports to clients.",
      "Ensuring compliance with regulatory standards and maintaining equipment accuracy and safety.",
      "Collaborating with cross-functional teams to optimize testing processes and share knowledge and expertise.",
    ],
  },
  {
    title: "Project Team",
    company_name: "Yazaki Portugal",
    icon: yazaki,
    iconBg: "#383E56",
    date: "November 2021 - Jan 2023",
    points: [
      "Oversaw project studies related to electrical components for automobile companies, including research, analysis, and conducting specialized tests.",
      "Maintained constant communication with customer representatives.",
      "Writing reports and adhering to ISO standards for quality assurance.",
      "Developing and maintaining project timelines and budgets.",
      "Collaborating with cross-functional teams to optimize testing processes and share knowledge and expertise",
    ],
  },
  {
    title: "Web Development Bootcamp",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Learned a variety of Languages and Skills such as Ruby on Rails, Ruby, HTML, CSS, JavaScript and GitHub.",
      "Gained knowledge and experience on the Web Development market.",
      "Earned experience in collaborative projects with colleagues throughout the bootcamp.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Vasco was always a proactive skilled worker with problem solving capabilities and inovative mindset. His smart inputs and confident attitude are an asset for any team.",
    name: "Sofia Miranda",
    designation: "Automative System Engineer",
    company: "Yazaki Portugal",
    image: "https://media.licdn.com/dms/image/C5603AQFGZMkxgE7tFA/profile-displayphoto-shrink_800_800/0/1516934341655?e=1684972800&v=beta&t=Qeoy-Yi_sehD1Yi_6PCaLIUOSQv-frOdkZbRKn7hDDA",
  },
  {
    testimonial:
      "Vasco was a natural leader during the bootcamp. He was able to bring his vision while also guiding his colleagues along the way. I am confident that he will be a valuable addition to any company.",
    name: "Francisco Mendonça",
    designation: "City Manager",
    company: "Le Wagon",
    image: "https://media.licdn.com/dms/image/C4D03AQH4FIEaSRaRdA/profile-displayphoto-shrink_800_800/0/1647365605177?e=1684972800&v=beta&t=ia9RqHQhLmkPM2yHAkNbao3g8OkzW48D-nM1gDMVyeo",
  },
  {
    testimonial:
      "Vasco brought a positive attitude and amazing Full Stack skills to the team that helped drive our Projects to success!",
    name: "Frederico Matias",
    designation: "Full Stack Developer Student",
    company: "Le Wagon",
    image: "https://media.licdn.com/dms/image/C4E03AQH2XtN7YDty9w/profile-displayphoto-shrink_800_800/0/1639055792636?e=1684972800&v=beta&t=4xXafmLEOjMtqdaFJBw6VE2T_UO3YDvQGAS6XsY6ByY",
  },
];

const projects = [
  {
    name: "Gamy",
    description:
      "Marketplace for renting Gaming Gear such as PC's, Consoles, Games and peripherals.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: gamy,
    source_code_link: "https://github.com/vasco-alex-sousa/GAMY",
  },
  {
    name: "Stream Genius",
    description:
      "App for Twitch Clips viewing and tracking of personal and general analytics.",
    tags: [
      {
        name: "rails",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: giny,
    source_code_link: "https://github.com/vasco-alex-sousa/GINY",
  },
  {
    name: "Portfolio",
    description:
      "Personal Portfolio to showcase my developer skills and experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/vasco-alex-sousa/personal-portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
