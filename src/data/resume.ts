export type Basics = {
  name: string;
  label: string;
  email?: string;
  phone?: string;
  location?: {
    address?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
};

export type SkillGroup = { category: string; details: string[] };

export type Work = {
  company: string;
  position: string;
  startDate: string; // YYYY-MM
  endDate: string;   // YYYY-MM or "Present"
  summary?: string;
  highlights?: string[];
};

export type Education = {
  institution: string;
  area: string;
  startDate: string; // YYYY-MM
  endDate: string;   // YYYY-MM
  score?: string;
};

export type Resume = {
  basics: Basics;
  skills: SkillGroup[];
  work: Work[];
  education: Education[];
  interests: string[];
  strengths: string[];
  portfolio: string[];
};

export const resume: Resume = {
  basics: {
    name: "Himanshu Sharma",
    label: "Web Developer / JavaScript Enthusiast",
    email: "Hmnshu2690@gmail.com",
    phone: "+91-9999344334",
    location: {
      address: "B-13 Street No.2, Kanti Nagar Extension",
      city: "Delhi",
      postalCode: "110051",
      country: "India"
    }
  },
  skills: [
    {
      category: "Front-End Development",
      details: [
        "Proficient in JavaScript (ES5/ES6) and TypeScript",
        "React.js, AngularJS, Angular, Vue.js, Redux (Redux-Saga), Backbone.js, GraphQL",
        "jQuery, Vanilla JS"
      ]
    },
    { category: "HTML/CSS & Styling", details: ["HTML5, CSS3", "SASS", "Bootstrap", "Foundation Zurb"] },
    {
      category: "Performance & Responsive Design",
      details: [
        "Responsive UI development",
        "Performance optimization (lazy-loading, code splitting, deferred scripts)"
      ]
    },
    { category: "Testing", details: ["Test-Driven Development (TDD)", "Jest", "Enzyme"] },
    { category: "Build Tools", details: ["NPM", "Webpack", "Parcel", "Gulp", "Grunt"] },
    { category: "CI/CD & DevOps", details: ["Docker", "CI/CD pipelines"] },
    { category: "Back-End Development", details: ["Node.js", "Express.js", "PHP"] },
    { category: "Databases", details: ["MySQL", "PostgreSQL", "MongoDB"] },
    {
      category: "Mobile Development",
      details: ["React Native mobile app for sellers", "Supports UPI-based payments"]
    }
  ],
  work: [
    {
      company: "Giv Care Inc.",
      position: "Front-End Lead",
      startDate: "2024-10",
      endDate: "Present",
      summary: "Led front-end development and design refinement for healthcare applications.",
      highlights: [
        "Managed team of 3 front-end developers",
        "Built custom scheduler/calendar system with appointment slot management and conflict detection",
        "Improved usability & performance iteratively"
      ]
    },
    {
      company: "GfK Mode Pvt Ltd (NIQ)",
      position: "Principal Front-End Engineer",
      startDate: "2024-04",
      endDate: "2024-10",
      highlights: [
        "Led team of 5 developers",
        "Migrated dashboard from Angular 15 to React.js",
        "Developed Data-in Admin Dashboard with data standardization features"
      ]
    },
    {
      company: "Freecharge Payment Technologies",
      position: "Technical Lead",
      startDate: "2023-06",
      endDate: "2024-03",
      highlights: [
        "Led team of 8 developers",
        "Built ASL stock market platform (stock search, trading, funds management)",
        "React.js, Redux, Parcel Bundler"
      ]
    },
    {
      company: "Harman Connected Services",
      position: "Technical Lead",
      startDate: "2021-08",
      endDate: "2023-06",
      highlights: [
        "Led Nokia Data Marketplace project (React, Redux, GraphQL, Go backend)",
        "Developed Honeywell Fire Systems Calculator (Angular 8, Redux, C# backend)"
      ]
    },
    {
      company: "Publicis Sapient",
      position: "Senior Associate (Experience Technology)",
      startDate: "2019-12",
      endDate: "2021-08",
      highlights: [
        "Built Verizon checkout module (React)",
        "Developed Women on Wheels data collection app (React, mobile-first)"
      ]
    },
    {
      company: "HDFC Life",
      position: "UI/Front-End Developer",
      startDate: "2019-01",
      endDate: "2019-12",
      highlights: ["Life99 platform for financial planning", "Instaprl PWA for hiring advisors"]
    },
    {
      company: "Leadics",
      position: "UI/Front-End Developer",
      startDate: "2018-01",
      endDate: "2019-01",
      highlights: [
        "WheelMonk vehicle search engine",
        "Leap automotive analytics app store",
        "Autoscope service center tracking tool"
      ]
    },
    {
      company: "Greyloft Pte Ltd",
      position: "Front-End Developer",
      startDate: "2017-01",
      endDate: "2017-07",
      highlights: ["Developed real estate platform", "Created Easy Inspection app with iOS sync"]
    },
    {
      company: "CollegeDunia Web Pvt Ltd",
      position: "Front-End Developer",
      startDate: "2016-08",
      endDate: "2017-01",
      highlights: ["Built collegedunia.com and zoutons.com platforms"]
    },
    {
      company: "MSL Group",
      position: "Web Developer",
      startDate: "2016-01",
      endDate: "2016-07",
      highlights: ["Worked on Digital India, TOI Passion Trails, PNB Metlife, Pfizer"]
    },
    {
      company: "Limetray",
      position: "Web Developer",
      startDate: "2014-12",
      endDate: "2015-11",
      highlights: ["Created custom websites for Subway, Burger King, Mad Over Donuts"]
    }
  ],
  education: [
    {
      institution:
        "Guru Gobind Singh Indraprastha University, Tecnia Institute Of Advanced Studies",
      area: "Master of Computer Applications (M.C.A)",
      startDate: "2012-07",
      endDate: "2015-05",
      score: "80%"
    },
    {
      institution:
        "Guru Gobind Singh Indraprastha University / DAV Institute of Management",
      area: "B.B.A (Computer Aided Management)",
      startDate: "2009-08",
      endDate: "2012-05",
      score: "70%"
    }
  ],
  interests: ["Skipping", "Playing cricket", "Listening to music"],
  strengths: ["Optimistic", "Responsible", "Punctual", "Trustworthy", "Workaholic"],
  portfolio: [
    "https://www.verizon.com/",
    "https://life99.in/",
    "https://www.greyloft.com",
    "https://www.easyinspection.co",
    "https://collegedunia.com/",
    "https://zoutons.com/",
    "https://timespassiontrails.com/",
    "https://organdonationday.in/",
    "http://digitalindia.gov.in/newsletter/digital-india/feb-16/index.html",
    "http://croplifeindia.org/",
    "http://bigfishventures.in/",
    "http://motiontravels.com/",
    "https://nazeer.co.in/",
    "https://www.wheelmonk.com/",
    "https://reachoutfoundation.org.in/"
  ]
};
