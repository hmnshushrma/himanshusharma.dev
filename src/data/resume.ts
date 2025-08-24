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
  about?: string; // <-- new
  aboutPrimary?: string; // new: first paragraph
  aboutSecondary?: string; // new: second paragraph
  github?: string; // <-- new
  linkedin?: string; // <-- new
  openTo: string[];
  links: {
    github?: string;
    linkedin?: string;
  };
};

export type SkillGroup = { category: string; details: string[] };

export type Work = {
  company: string;
  position: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM or "Present"
  summary?: string;
  highlights?: string[];
};

export type Education = {
  institution: string;
  area: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
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
    label: "Principal Front-End Engineer / JavaScript Enthusiast",
    email: "Hmnshu2690@gmail.com",
    phone: "+91-9999344334",
    location: {
      address: "B-13 Street No.2, Kanti Nagar Extension",
      city: "Delhi",
      postalCode: "110051",
      country: "India",
    },
    about:
      "I’m Himanshu Sharma, a self-taught JavaScript engineer and technical lead with over a decade of experience building scalable, user-centric web applications. My work spans healthcare, finance, e-commerce, and data platforms where I’ve led teams, architected dashboards, and delivered products that balance robust engineering with great design. I specialize in React, Angular, and TypeScript with a strong foundation in Node.js and Go. What drives me is the blend of technology and creativity—whether it’s building a custom scheduler for healthcare, a trading platform for stock markets, or a global data marketplace. I thrive in collaborative environments, enjoy mentoring developers, and constantly explore new tools and approaches. Outside of work I’m a tech enthusiast and lifelong learner—exploring IoT projects with Raspberry Pi, backend systems in Go, and creating portfolio projects like SimpleSouk and RxRecords.",
    aboutPrimary:
      "I’m Himanshu Sharma, a self-taught JavaScript engineer and front-end lead with 10+ years building scalable, user-centric products. I run teams like projects: clear scopes, crisp ownership, and a ruthless focus on deliverables. From designing architecture and code reviews to sprint planning and risk management, I keep projects moving and shipping on time without compromising quality.",

    aboutSecondary:
      "I have a strong hold in UX—partnering closely with design to turn complex flows into intuitive, fast interfaces. Recently that’s meant healthcare schedulers, trading dashboards, and data marketplaces. I enjoy roles at the intersection of product, engineering, and UX, and I’m open to opportunities where I can lead front-end, own delivery, and shape the user experience end-to-end.",
    links: {
      github: "https://github.com/hmnshushrma",
      linkedin: "https://linkedin.com/in/hmnshushrma",
    },
    openTo: [
      "Front-End Lead / Staff FE",
      "Product-focused FE (PM + UX)",
      "UX-minded Engineering Roles",
    ],
  },
  skills: [
    {
      category: "Front-End Development",
      details: [
        "JavaScript (ES5/ES6)",
        "TypeScript",
        "React.js, AngularJS, Angular, Vue.js, Redux (Redux-Saga), Backbone.js, GraphQL",
        "jQuery, Vanilla JS",
      ],
    },
    {
      category: "HTML/CSS & Styling",
      details: ["HTML5, CSS3", "SASS", "Bootstrap", "Foundation Zurb"],
    },
    {
      category: "Performance & Responsive Design",
      details: [
        "Responsive UI development",
        "Performance optimization",
        "Lazy-loading",
        "Code splitting",
        "Deferred scripts",
      ],
    },
    {
      category: "Testing",
      details: ["Test-Driven Development (TDD)", "Jest", "Enzyme"],
    },
    {
      category: "Build Tools",
      details: ["NPM", "Webpack", "Parcel", "Gulp", "Grunt"],
    },
    { category: "CI/CD & DevOps", details: ["Docker", "CI/CD pipelines"] },
    {
      category: "Back-End Development",
      details: ["Node.js", "Express.js", "PHP"],
    },
    { category: "Databases", details: ["MySQL", "PostgreSQL", "MongoDB"] },
    {
      category: "Mobile Development",
      details: [
        "React Native mobile app for sellers",
        "Supports UPI-based payments",
      ],
    },
  ],
  work: [
    {
      company: "Giv Care Inc.",
      position: "Front-End Lead",
      startDate: "2024-10",
      endDate: "Present",
      summary:
        "Leading front-end engineering and UI design for healthcare applications. Managing a team of 3 developers and partnering with product/design to deliver a custom scheduler and clinician-facing tools with a strong usability and performance focus.",
      highlights: [
        "Designed & shipped a purpose-built scheduler/calendar (slots, caregiver–patient scheduling, conflict detection).",
        "Drove design reviews, code reviews, and architecture decisions across the FE stack.",
        "Iteratively improved performance (render times, bundle hygiene) and workflow UX based on user feedback.",
        "Integrated with backend APIs and implemented guardrails for data integrity in time-based workflows.",
      ],
    },
    {
      company: "GfK Mode Pvt Ltd (NIQ)",
      position: "Principal Front-End Engineer",
      startDate: "2024-04",
      endDate: "2024-10",
      summary:
        "Directed a 5-member front-end team to modernize internal data tools and establish a reusable design system. Migrated a large Angular 15 dashboard to React.js to improve scalability and developer velocity.",
      highlights: [
        "Built the Data-in Admin Dashboard for data standardization, rule validation, and delivery monitoring.",
        "Established UI patterns/design tokens to reduce duplication and accelerate feature delivery.",
        "Improved build times and app structure during the Angular → React migration.",
      ],
    },
    {
      company: "Freecharge Payment Technologies",
      position: "Technical Lead",
      startDate: "2023-06",
      endDate: "2024-03",
      summary:
        "Led an 8-member FE team to deliver a trading platform for Axis Securities Limited (ASL), focusing on reliability, speed, and modularity.",
      highlights: [
        "Shipped real-time stock search, trading flows, and funds management with React + Redux.",
        "Introduced a custom Parcel-based boilerplate and design system for faster, consistent builds.",
        "Improved app responsiveness and state integrity across critical trading journeys.",
      ],
    },
    {
      company: "Harman Connected Services",
      position: "Technical Lead",
      startDate: "2021-08",
      endDate: "2023-06",
      summary:
        "Delivered enterprise apps for Nokia and Honeywell, leading teams and architecture across React/Angular front ends with GraphQL/C# and Go backends.",
      highlights: [
        "Nokia Data Marketplace: Architected a B2B data exchange (React, Redux, GraphQL; Go backend) enabling subscriptions and analytics.",
        "Honeywell Fire Systems Calculator: Built an engineering desktop app (Angular 8, Redux, C#) for voltage drop and dB loss calculations.",
        "Defined component patterns and data contracts for cross-team consistency.",
      ],
    },
    {
      company: "Publicis Sapient",
      position: "Senior Associate (Experience Technology)",
      startDate: "2019-12",
      endDate: "2021-08",
      summary:
        "Built large-scale consumer experiences and internal tools using React/Angular and Node.js, focusing on performance and DX.",
      highlights: [
        "Verizon Checkout: Implemented React checkout modules with dynamic offers and content personalization.",
        "Women on Wheels: Delivered a mobile-first React app to streamline field data collection and reporting.",
        "Mentored junior engineers and contributed to FE best practices.",
      ],
    },
    {
      company: "HDFC Life",
      position: "UI/Front-End Developer",
      startDate: "2019-01",
      endDate: "2019-12",
      summary:
        "Built employee-facing platforms for financial planning and advisor recruitment using React and SASS.",
      highlights: [
        "Life99: Created tools for investment, retirement planning, and savings optimization.",
        "Instaprl PWA: Digitized advisor hiring with document capture and progress tracking.",
      ],
    },
    {
      company: "Leadics",
      position: "UI/Front-End Developer",
      startDate: "2018-01",
      endDate: "2019-01",
      summary:
        "Developed Angular apps for automotive analytics and operations, delivering data-driven UIs and management tools.",
      highlights: [
        "WheelMonk: Built a vehicle search & comparison engine with clean, responsive UI.",
        "Leap: Implemented an app store for automotive data analytics use-cases.",
        "Autoscope: Built a service-center tracking tool for performance and repair analysis.",
      ],
    },
    {
      company: "Greyloft Pte Ltd",
      position: "Front-End Developer",
      startDate: "2017-01",
      endDate: "2017-07",
      summary:
        "Contributed to a real-estate platform and an inspection workflow product with Angular front ends and a Laravel backend.",
      highlights: [
        "Greyloft: Enhanced property search UX with responsive, modular components.",
        "Easy Inspection: Built a web app with iOS sync for streamlined property inspections.",
      ],
    },
    {
      company: "CollegeDunia Web Pvt Ltd",
      position: "Front-End Developer",
      startDate: "2016-08",
      endDate: "2017-01",
      summary:
        "Delivered features for high-traffic content and commerce portals with modern, SEO-friendly front ends.",
      highlights: [
        "Collegedunia: Implemented flows to help students discover colleges and courses.",
        "Zoutons: Built coupon/deals modules across e-commerce, travel, and lifestyle.",
      ],
    },
    {
      company: "MSL Group",
      position: "Web Developer",
      startDate: "2016-01",
      endDate: "2016-07",
      summary:
        "Built campaign sites and brand experiences using PHP (CodeIgniter/Laravel) and JS for major clients.",
      highlights: [
        "Digital India: Implemented newsletter front end.",
        "Times of India – Passion Trails: Delivered campaign modules.",
        "PNB MetLife, Pfizer: Built site features across FE/BE stacks.",
      ],
    },
    {
      company: "Limetray",
      position: "Web Developer",
      startDate: "2014-12",
      endDate: "2015-11",
      summary:
        "Developed custom websites and internal tools for enterprise food/retail clients, from wireframes to production.",
      highlights: [
        "Delivered brand sites for Subway, Burger King, and Mad Over Donuts.",
        "Built ticketing and client-questionnaire tools to streamline onboarding and delivery.",
        "Produced HTML wireframes and component libraries to accelerate builds.",
      ],
    },
  ],
  education: [
    {
      institution:
        "Guru Gobind Singh Indraprastha University, Tecnia Institute Of Advanced Studies",
      area: "Master of Computer Applications (M.C.A)",
      startDate: "2012-07",
      endDate: "2015-05",
      score: "80%",
    },
    {
      institution:
        "Guru Gobind Singh Indraprastha University / DAV Institute of Management",
      area: "B.B.A (Computer Aided Management)",
      startDate: "2009-08",
      endDate: "2012-05",
      score: "70%",
    },
  ],
  interests: ["Skipping", "Playing cricket", "Listening to music"],
  strengths: [
    "Optimistic",
    "Responsible",
    "Punctual",
    "Trustworthy",
    "Workaholic",
  ],
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
    "https://reachoutfoundation.org.in/",
  ],
};
