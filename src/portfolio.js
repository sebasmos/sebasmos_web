/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sebastian's Portfolio",
  description:
    "Passionate self-taught person who loves hardworking and technology-related projects 🚀. I am multithreading and proactive person with experience in computer vision projects, deep learning and machine learning frameworks.",
  og: {
    title: "Sebastian Cajas Portfolio",
    type: "website",
    url: "http://sebasmos.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Sebastian Cajas",
  logo_name: "Sebastian Cajas",
  nickname: "sebasmos",
  subTitle:
  "Passionate self-taught person who loves hardworking and technology-related projects 🚀. I am multithreading and proactive person with experience in computer vision projects, deep learning and machine learning frameworks",
  resumeLink: "",
  portfolio_repository: "https://github.com/sebasmos",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sebasmos",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sebasmos777/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sebasmos@ieee.org",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science, Computer vision & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production computer vision models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision, deep learning and machine learning projects",
        "⚡ Experience on Postgress, SQL, and Microsoft Azure, AWS and GCP",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "ion-logo-c++",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        //"⚡ Building resposive website front end using React-Redux",
        "⚡ Mobile applications using Flutter and React Native ",//and solo android apps using Kotlin",
        "⚡ Deployment of deep learning models on mobile apps",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Cauca",
      subtitle: "Electronic and Telecommunications Engineering",
      logo_path: "unicaucalogo.jpeg",
      alt_name: "Unicauca",
      duration: "2014 - 2019",
      descriptions: [
        "⚡ Strongly focused on Telecommunication systems, Digital signal processing, telematics, Web/mobile development",
        "⚡ RANKING: 3° Position.",
        "⚡ Scoring : 84.488%, GPA: 3.56/ 4.0 ",
        "⚡ Thesis: Characterization of tachycardias and bradycardias under low-intensity movement activities.",
        "⚡ Publication: Sebastián Andrés Cajas, María Alejandra Landínez, and Diego Mauricio López. Modeling of motion artifacts on PPG signals for heart-monitoring using wearable devices, Proc. SPIE 11330, 15th International Symposium on Medical Information Processing and Analysis, 1133014 (3 January 2020);        https://doi.org/10.1117/12.2540554 ",
        "⚡ Publication: Sebastián Cajas, Pedro Astaiza, David Santiago Garcia-Chicangana, Camilo Segura and Diego M Lopéz. ECG Arrhythmia Classification Using Non-Linear Features and Convolutional Neural Networks.  https://ieeexplore.ieee.org/document/9344175",

      ],
      website_link: "http://www.unicauca.edu.co/versionP/",
    },
    {
      title: "Erasmus Mundus Joint Master degree",
      subtitle: "Image Processing and Computer vision - IPCV EMJMD",
      logo_path: "erasmus.jpg",
      alt_name: "Erasmus Mundus",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ The Triple Master Degree in Image Processing and Computer Vision (IPVC), is a full-time two year Program with the aim to produce highly qualified specialists in areas like: ",
        
        "- Image Processing and Computer Vision",
        "- Artificial Intelligence, Data Mining and Machine Learning",
        "- Signals Processing",
        "- Sensors and Data Fusion",
        "- Focus on Research and Industry",
        "- Deep learning.",
        
        " The curriculum, sponsored by the European Union, has been conformed by the partnership of three European Universities:",
        "- Pázmány Péter Catholic University, Faculty of IT and Bionics, Hungary",
        "- Autonomous University of Madrid, Spain",
        "- University of Burdeaux, France",
      ],
      website_link: "http://ipcv.eu/",
    },
  ],
};

const certifications = {

  certifications: [
    {
      title: "OpenCV AI Competition 2021 Phase 1 Winner",
      subtitle: "-  OpenCV",
      logo_path: "opencv.png",
      certificate_link:
        "https://www.credential.net/129359c4-3c14-443f-aeff-75736589f961?key=85cfc22cc2d9a24a7d67a46892927cef9c4055de540ac4dafa19421d534920fa#gs.wbsszm",
      alt_name: "opencv",
      color_code: "#00000099",
    },
    {
      title: "NASA SpaceApps Problem-Solver 2020, Las Vegas - U.S.A",
      subtitle: "- NASA",
      logo_path: "nasa-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qqlYLJXY9PsW7oaG1a6jGj8Xawhfs4yZ/view?usp=sharing",
      alt_name: "NASA spaceapps",
      color_code: "#8C152531",
    },
    {
      title: "NASA local Organizer - SpaceApps Challenge 2020 in Popayan (Colombia)",
      subtitle: "- NASA",
      logo_path: "nasa-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1_I1pDvSNdk6rT_eaCSpQOVQzpcN3PFDx/view?usp=sharing",
      alt_name: "NASA spaceapps",
      color_code: "#8C152531",
    },
    {
      title: "Problem-Solver in NASA SpaceApss Challenge - COVID 19 ",
      subtitle: "- NASA",
      logo_path: "nasa-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19FUMwkL3RLD64gSpQ6J8Eu9CscVpn2sO/view?usp=sharing",
      alt_name: "NASA spaceapps",
      color_code: "#8C152531",
    },
    {
      title: "Data Science for All (DS4A)/Colombia 2.0, highly tailored program focused on Data Science and Artificial Intelligence - Sponsored by The Ministery of Information and Communication Technologies of Colombia (MinTIC) with Correlation One",
      subtitle: "- Correlation One - MinTIC",
      logo_path: "correlationone.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "“Introduction to Rocket and Satellite Engineering” - International Online Certificate Program ",
      subtitle: "- Skolkovo Institute of Science and Technology ",
      logo_path: "skoltec.png",
      certificate_link:
        "https://drive.google.com/file/d/1NNh8uky-e_85yR0kd-WXtqAR3j_3r9lB/view?usp=sharing",
      alt_name: "Skolkovo Institute of Science and Technology ",
      color_code: "#1F70C199",
    },
    {
      title: "Best President in the Aerospace & Electronic's Systems Society - Colombia",
      subtitle: " AESS - IEEE",
      logo_path: "aess.jpg",
      certificate_link:
        "https://drive.google.com/file/d/182Hs_0xU1GYLYYbyLUM6JWG-zBZQ1nJ1/view?usp=sharing",
      alt_name: "AESS - IEEE",
      color_code: "#D83B0199",
    },
    
/**
  {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },

 */
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have experience working as data scientist and web/mobile development. However I also like to collaborate in the open-source community, where I have supported multiple projects on IEEE HAC & SIGHTS and NASA challenges. As founder of the Aerospace & Electronic System Society chapter in University of Cauca, I co-organize multiple technology events as well.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      experiences: [
        {
          title: "Computer vision Intern",
          company: "India AI",
          company_url: "https://www.aiindia.ai/",
          logo_path: "ai_india.png",
          duration: "June 2021 - PRESENT",
          location: "Valencia, Spain",
          description:
            "> Advance Machine learning and Deep learning researcher focused in computer vision & Geospatial data. Accuracy assessment, Preparation of Datasets, Training Models & Testing. ",
          color: "#0879bf",
        },
        {
          title: "CEO & Co-Founder",
          company: "Observatorio Astronomico Francisco Jose de Caldas",
          company_url: "https://sueñoparaiso.com/?fbclid=IwAR2qF6kqedO7mz0jsXVeQz06Y0InDiwZscqtezIuaCfkg-0vqDm-mXIg1vY",
          logo_path: "observatorio.jpg",
          duration: "Feb 2015 - PRESENT",
          location: "Popayan, Colombia",
          description:
            "> Astronomy researcher and Interpreter in Astronomical Observatory and Mobile Planetarium.  Financial resources and logistics manager. NASA Space Apps Problem-Solver (http://bit.do/nasaobs). Website: https://sueñoparaiso.com/",
          color: "#0879bf",
        },
        {
          title: "Professor in Physics, Electronics & Astronomy",
          company: "",
          company_url: "",
          logo_path: "poyntelle.jpeg",
          duration: "jun 2019 - Oct 2019",
          location: "New York, United States",
          description:
            "Teach and supervise Air-based flight machines, solar dials, lamps, flash-lights, and programable robots to 400 teenagers aged between 4 and 16 years old. ",
          color: "#9b1578",
        },
        {
          title: "IT network technician - monitoring",
          company: "University of Cauca.",
          company_url: "",
          logo_path: "unicauca.png",
          duration: "En 2018 - April 2019",
          location: "Popayan, Colombia",
          description:
            "To fix telecommunication and network devices. To Provide technical support in computer systems. LAN and WLAN network configuration. To Provide direct technical support to the telematics networks ",
          color: "#fc1f20",
        },
        {
          title: "Business developer",
          company: "Codescrum.",
          company_url: "https://codescrum.com/",
          logo_path: "codescrum.jpeg",
          duration: "May 2020 - Jul 2020",
          location: "Popayan, Colombia",
          description:
            "Supported Data Science/Machine learning protopype awarded in ACT2HACK as best Global impact project (ACT2HACK as best Global impact project (https://www.unicauca.edu.co/versionP/noticias/interinstitucional/unicaucanos-reconocidos-con-el-premio-la-soluci%C3%B3n-de-mayor-impacto-global). Worked on softare business over multiple events in London - UK ",
          color: "#fc1f20",
        },
        {
          title: "English Teacher",
          company: "Cambridge Language Centers.",
          company_url: "https://www.facebook.com/CambridgeLanguageCentresPopayan",
          logo_path: "cambridge.jpg",
          duration: "Ago 2015 - April 2020",
          location: "Popayan, Colombia",
          description:
            "English teacher in levels A1-C2 (CEFR), & conversation club, to people of all ages. Popayan, Colombia. TOEFL IBT Proefficient (C2 - CEFR), February 2020. TEFL/TESOL certified for teaching English.a Proficient (C2/CEFR) scoring by GlobalTEFL, London - U.K. ",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer (Front-End/Back-End).",
          company: "Althaia",
          company_url: "",
          logo_path: "althaia.jpg",
          duration: "Dic 2017 - Mar 2018",
          location: "Athens, Greece",
          description:
            "- Full Stack Developer (Front-End/Back-End). Web Page translation (Greek - English). Marketing & Fundraising.",
          color: "#ee3c26",
        },
        {
          title: "Computer science teacher",
          company: "Social Hackers Academy",
          company_url:
            "https://socialhackersacademy.org/",
          logo_path: "social.png",
          duration: "dic 2017 - Mar 2018",
          location: "Athens, Greece",
          description:
            "Document and write computer science guidelines in Web/mobile development. Teach programming languages as part of the general literacy curriculum program for Refugees ",
          color: "#0071C5",
        },
        {
          title: "Italian Teacher Assistant",
          company: "European Commission",
          company_url:
            "https://www.linkedin.com/company/eucouncil/",
          logo_path: "europe.png",
          duration: "dic 2016 - Mar 2017",
          location: "Tortona, Italy",
          description:
            "- Italian and coaching teaching for basic levels. Instructional coach to Refugees from the Middle East and Africa. Project supported by the European Union as a volunteering experience.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Adviser, Founder, ex-president ",
          company: "AESS Unicauca",
          company_url: "https://fiet.unicauca.edu.co/aess/",
          logo_path: "aess.jpg",
          duration: "Enero 2020 - April 2021",
          location: "Popayan, Colombia",
          description:
            " IEEE - Aerospace & Electronics Systems Society Unicauca chapter- president (Enero 2020 - April 2021 ) in the University of Cauca. PEU-UNAM team leader. Mechanical Ventilator + Mobile App 1st prize team award. NASA Space Apps global problem-solvers. ACT2HACK Global impact team winners. Space Science divulgation festival. Astronomy Festival. NASA SpaceApps host",
 
          color: "#4285F4",
        },
        {
          title: "IEEE member",
          company: "IEEE",
          company_url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
          logo_path: "ieee.png",
          duration: "Aug 2019 - Today",
          location: "Brussels, Belgium",
          description:
            "President, Advisor, project manager, web/mobile developer on IEEE HAC & SIGHTS projects, AESS Colombia and IEEE COL.",
          color: "#D83B01",
        },
        {
          title: "Red de Astronomía de Colombia",
          company: "RAC ",
          company_url: "https://www.mozilla.org/",
          logo_path: "rac.png",
          duration: "Oct 2018 - Today",
          location: "Colombia",
          description:
            "Director of the Astronomical Observatory Francisco José de Caldas",
          color: "#000000",
        },
        {
          title: "AIESEC Outcoming Global Volunteer",
          company: "AIESEC",
          company_url:
            "https://aiesec.org/global-volunteer",
          logo_path: "aiesec.jpg",
          duration: "Jan 2016 - Jun 2016",
          location: "Popayan, Colombia",
          description:
            "Managing outcoming global volunteers",
          color: "#0C9D58",
        },
        {
          title: "GetUp and Go Colombia",
          company: "AIESEC",
          company_url:
            "https://old.getupandgocolombia.org/",
          logo_path: "getup.jpeg",
          duration: "Jan 2016 - Jun 2016",
          location: "Popayan, Colombia",
          description:
            "Tour guide in English/French on the Iconical Places of Popayan (Colombia)",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Github, Tensorflow, Uber, Facebook, Google, Scikit-learn, Python, Keras etc. ",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects encompassed computer vision frameworks in the realm of artificial intelligence (deep learning, machine learning, re-inforcement learning), as well as cloud based services in Azure, GCP and AWS",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "seb.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  /*
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  */
  addressSection: {
    title: "Address",
    subtitle:
      "Rue Henri Maus 33, 1000 Bruxelles, Belgium",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Rue+Henri+Maus+33,+1000+Bruxelles,+Belgium/@50.8475758,4.3490135,18z/data=!3m1!4b1!4m13!1m7!3m6!1s0x47c3a4ed73c76867:0xc18b3a66787302a7!2sBrussels,+Belgium!3b1!8m2!3d50.8503396!4d4.3517103!3m4!1s0x47c3c4789b0fbf47:0xb5aa5e8527feadb2!8m2!3d50.8475741!4d4.3501078",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+57 3173308094",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
