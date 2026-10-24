/** Portfolio facts provided by Vikash Kumar Mishra. No unverified metrics. */
export type Palette = { from: string; via: string; to: string; accent: string };
export const profile = {
 fullName:'Vikash Kumar Mishra', displayName:'Vikash Mishra', firstName:'VIKASH', seriesTag:'THE SERIES', originalLabel:'A VIKASH ORIGINAL',
 role:'Full-Stack Developer | Java & Spring Boot', tagline:['Full-Stack Developer','Java & Spring Boot','Backend Systems'],
 intro:'Full-stack developer who builds reliable backend systems. I study Computer Science and Engineering at Sharda University and build applications using Java, Spring Boot, React and PostgreSQL.',
 location:'Greater Noida, Uttar Pradesh, India', email:'mishra18568l@gmail.com', phone:'+91 6205560853',
 links:{linkedin:'https://www.linkedin.com/in/vikashhhh',github:'https://github.com/Mishra18568l'},
 resumePdf:'/assets/Vikash_Kumar_Mishra_Resume.pdf', portrait:{src:'/assets/vikash-portrait.webp',srcSet:'',alt:'Professional portrait of Vikash Kumar Mishra'},
 interests:['Backend Engineering','Event-Driven Systems','System Design'],
};
export const education=[{school:'Sharda University',place:'Greater Noida',degree:'B.Tech — Computer Science and Engineering',period:'2023 – 2027',score:'CGPA 8.7'}];
export const experience: {company:string;role:string;place:string;period:string;points:string[]}[]=[];
export type Metric={value:string;label:string};
export type Project={id:string;title:string;year:string;genre:string;logline:string;stack:string[];build:string[];features:string[];metrics:Metric[];github?:string;live?:string;palette:Palette;motif:'shield'|'flow'|'tenants'};
export const projects:Project[]=[
 {id:'campusease',title:'CampusEase',year:'2026',genre:'Full-Stack • Campus Platform',logline:'Campus food ordering and management platform for students, vendors and administrators.',stack:['Java 21','Spring Boot 3.3.4','PostgreSQL','HTML5','CSS3','JavaScript','Spring Security','JWT','Google OAuth 2.0','Razorpay','Docker'],build:['Built a campus food ordering and management platform with separate student, vendor and administrator interfaces.','Integrated authentication, food ordering, payment processing, email services and cloud deployment.'],features:['Student food discovery, cart and ordering','Vendor shop and menu management','Role-based access control','JWT and Google OAuth 2.0 authentication','Razorpay payment gateway','PostgreSQL persistence','Netlify frontend and Render backend'],metrics:[],github:'https://github.com/Mishra18568l/CampusEase',live:'https://campeasee.netlify.app/',palette:{from:'#24060b',via:'#801126',to:'#09070a',accent:'#ff3d5a'},motif:'tenants'},
 {id:'notifications',title:'Real-Time Notification System',year:'2026',genre:'Event-Driven • Real-Time',logline:'Real-time notification platform using RabbitMQ, WebSockets, Redis and Spring Boot.',stack:['Java 21','Spring Boot 3.3.5','React','Vite','PostgreSQL','RabbitMQ','Redis','WebSockets','JWT','Docker Compose'],build:['Developed a real-time notification system with event-driven processing and WebSocket delivery.','Completed local development with PostgreSQL; repository link provided; public push status has not been independently verified.'],features:['WebSocket notification delivery','RabbitMQ event processing','JWT authentication','PostgreSQL notification history','Redis integration','React notification dashboard','Docker Compose supporting services'],metrics:[],github:'https://github.com/Mishra18568l/real-time-notification-system',palette:{from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'},motif:'flow'},
 {id:'offline-upi',title:'Offline UPI Mesh Payment System',year:'2025',genre:'Fintech • Distributed Systems',logline:'Offline UPI payment simulator with decentralized mesh routing and encrypted transaction handling.',stack:['Java','Spring Boot','REST APIs','RSA','AES-GCM','Mesh Routing'],build:['Developed an offline-first payment simulator using decentralized mesh-based transaction routing.','Implemented RSA and AES-GCM encryption, idempotent transaction handling and a dashboard simulator.'],features:['Decentralized mesh-based routing','RSA and AES-GCM encryption','Idempotent transaction processing','Packet forwarding and bridge synchronization','Concurrent transaction processing','REST APIs and simulator dashboard'],metrics:[],github:'https://github.com/Mishra18568l/Offline_UPI_Spring',palette:{from:'#1c1003',via:'#6b3c06',to:'#0a0806',accent:'#ffb547'},motif:'shield'},
 {id:'ai-medical',title:'AI Medical System',year:'2026',genre:'AI • Healthcare • Full-Stack',logline:'Antibiotic resistance prediction dashboard using React, Flask and scikit-learn.',stack:['React','Axios','Python','Flask','Scikit-learn','SQLite','Vercel','Render'],build:['Built a full-stack antibiotic resistance predictor using location, antibiotic and hospital zone inputs.','Created a doctor login, prediction history and interactive dashboard with React and Flask.'],features:['Predicts Resistant or Sensitive outcomes','Doctor login','Location, antibiotic and hospital-zone inputs','Prediction history stored in SQLite','React dashboard','Vercel frontend and Render backend'],metrics:[],github:'https://github.com/Mishra18568l/Ai-Medical-System',palette:{from:'#03150f',via:'#0d5a40',to:'#050a08',accent:'#46e3a8'},motif:'shield'},
];
export type Achievement={id:string;title:string;org:string;detail:string;laurel:string;link?:string};
export const achievements:Achievement[]=[
{id:'technovation',title:'Technovation Hackathon',org:'Hackathon participation',detail:'Participated in a 24-hour hackathon in 2025, collaborating on frontend and UI/UX using React, JavaScript and Firebase.',laurel:'Participation'},
{id:'sih',title:'Smart India Hackathon',org:'Hackathon participation',detail:'Secured Top 50 in the college selection for Smart India Hackathon.',laurel:'Participation'},
{id:'technova-club',title:'TechNova Club',org:'Student leadership',detail:'Active member; participated in coding events and workshops, coordinating team tasks and presentations.',laurel:'Leadership'},
{id:'bootcamp',title:'Web Development & DSA Bootcamp',org:'Sharda University • May–June 2025',detail:'Full-stack training in HTML, CSS, JavaScript and Node.js; built a Beverage Ordering App and solved 150+ DSA problems.',laurel:'Training'},
{id:'qr',title:'Railway QR Marking Prototype',org:'Project / prototype',detail:'Worked on AI-based QR-code marking for Indian Railway track fittings.',laurel:'Prototype'},
];
export type Certification={issuer:string;name:string;link:string};
export const certifications:Certification[]=[{issuer:'Udemy',name:'Web Development',link:''},{issuer:'Oracle',name:'Java',link:''}];
export type Skill={name:string;mono:string;note?:string};
export type SkillCategory={id:string;title:string;subtitle:string;skills:Skill[]};
export const skillCategories:SkillCategory[]=[
{id:'languages',title:'Languages',subtitle:'Programming languages',skills:[{name:'Java',mono:'Jv',note:'Primary'},{name:'JavaScript',mono:'Js'}]},
{id:'frontend',title:'Frontend',subtitle:'Web interfaces',skills:[{name:'React',mono:'Re'},{name:'HTML5',mono:'Ht'},{name:'CSS3',mono:'Cs'},{name:'Tailwind CSS',mono:'Tw'},{name:'Vite',mono:'Vi'}]},
{id:'backend',title:'Backend',subtitle:'Services & APIs',skills:[{name:'Spring Boot',mono:'Sp'},{name:'Node.js',mono:'No'},{name:'REST APIs',mono:'Ap'},{name:'Spring Security',mono:'Ss'},{name:'JWT',mono:'Jw'},{name:'Hibernate',mono:'Hb'},{name:'Spring Data JPA',mono:'Jpa'}]},
{id:'infra',title:'Infra & Tools',subtitle:'Development & delivery',skills:[{name:'Docker',mono:'Dk'},{name:'Kubernetes',mono:'K8'},{name:'CI/CD',mono:'Ci'},{name:'Maven',mono:'Mv'},{name:'Git / GitHub',mono:'Gt'},{name:'Postman',mono:'Pm'},{name:'VS Code',mono:'Vs'}]},
{id:'databases',title:'Databases & Messaging',subtitle:'Persistence and events',skills:[{name:'PostgreSQL',mono:'Pg'},{name:'SQL',mono:'Sq'},{name:'Redis',mono:'Rd'},{name:'RabbitMQ',mono:'Mq'},{name:'WebSockets',mono:'Ws'}]},
{id:'security',title:'Security',subtitle:'Authentication & encryption',skills:[{name:'RSA',mono:'Rs'},{name:'AES-GCM',mono:'Ae'},{name:'JWT',mono:'Jw'}]},
];
export const skillEvidence:Record<string,string[]>={Java:['CampusEase','Offline UPI Mesh Payment System'],React:['Real-Time Notification System','AI Medical System'],PostgreSQL:['CampusEase','Real-Time Notification System'],'Spring Boot':['CampusEase','Real-Time Notification System','Offline UPI Mesh Payment System'],Docker:['CampusEase','Real-Time Notification System'],RabbitMQ:['Real-Time Notification System'],Redis:['Real-Time Notification System'],WebSockets:['Real-Time Notification System'],RSA:['Offline UPI Mesh Payment System'],'AES-GCM':['Offline UPI Mesh Payment System']};
export type Episode={code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season={number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
const crimson:Palette={from:'#24060b',via:'#6e0d1d',to:'#09070a',accent:'#ff3d5a'};
const amber:Palette={from:'#1c1003',via:'#6b3c06',to:'#0a0806',accent:'#ffb547'};
const ocean:Palette={from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'};
const violet:Palette={from:'#120822',via:'#3d1a6e',to:'#07060c',accent:'#b98bff'};
const jade:Palette={from:'#03150f',via:'#0d5a40',to:'#050a08',accent:'#46e3a8'};
export const seasons:Season[]=[
{number:1,title:'The Foundation',period:'2023 – 2027',synopsis:'Computer Science and Engineering at Sharda University.',episodes:[{code:'S01 E01',title:'The Engineer',description:'B.Tech in Computer Science and Engineering at Sharda University, Greater Noida — CGPA 8.7.',tags:['B.Tech','CSE','CGPA 8.7'],runtime:'2023 – 2027',palette:violet}]},
{number:2,title:'Building Systems',period:'2025',synopsis:'Developing distributed and secure applications.',episodes:[{code:'S02 E00',title:'Learning by Building',description:'Web Development & DSA Bootcamp at Sharda University (May–June 2025); built a Beverage Ordering App and solved 150+ DSA problems.',tags:['Node.js','DSA','Training'],runtime:'May – Jun 2025',palette:ocean},{code:'S02 E01',title:'Offline Payments',description:'Offline UPI mesh payment simulator with encrypted, idempotent transaction handling.',tags:['Java','Spring Boot','Encryption'],runtime:'Jul – Aug 2025',palette:amber}]},
{number:3,title:'Full-Stack Originals',period:'2026',synopsis:'Campus ordering, event-driven notifications and AI-assisted healthcare.',episodes:[{code:'S03 E01',title:'CampusEase',description:'Campus food ordering and management with Spring Boot, PostgreSQL and Razorpay.',tags:['Spring Boot','PostgreSQL'],runtime:'2026',palette:crimson},{code:'S03 E02',title:'Real-Time Systems',description:'Notification delivery using WebSockets, RabbitMQ and Redis.',tags:['RabbitMQ','WebSockets'],runtime:'2026',palette:ocean},{code:'S03 E03',title:'AI Medical System',description:'Antibiotic resistance prediction dashboard using React and Flask.',tags:['React','Flask','ML'],runtime:'2026',palette:jade}]},
{number:4,title:'Research & Exploration',period:'Ongoing',synopsis:'Research writing, prototypes and deeper backend engineering.',episodes:[{code:'S04 E01',title:'Research',description:'Research manuscripts on plant disease classification and CampusEase smart-campus systems; publication status not supplied.',tags:['Research','AI'],runtime:'Ongoing',palette:violet},{code:'S04 E02',title:'Next Chapter',description:'Exploring reliable backend systems, event-driven architecture and system design.',tags:['Backend','System Design'],runtime:'Ongoing',palette:ocean}]},
];
export type TopPick={label:string;title:string;detail:string;palette:Palette};
export const topPicks:TopPick[]=[
{label:'Core language',title:'Java',detail:'Java 21 · Spring Boot',palette:amber},
{label:'Featured original',title:'CampusEase',detail:'Campus food ordering and management',palette:crimson},
{label:'Event-driven systems',title:'Notifications',detail:'RabbitMQ · WebSockets · Redis',palette:ocean},
{label:'Distributed payments',title:'Offline UPI',detail:'Mesh routing · RSA · AES-GCM',palette:violet},
{label:'AI project',title:'AI Medical System',detail:'Antibiotic resistance prediction',palette:jade},
{label:'Education',title:'Sharda University',detail:'B.Tech CSE · 2023–2027',palette:amber},
{label:'Academic record',title:'8.7 CGPA',detail:'B.Tech CSE',palette:crimson},
{label:'Research',title:'Plant Disease',detail:'Classification survey manuscript',palette:ocean},
{label:'Hackathons',title:'Technovation & SIH',detail:'Participation',palette:jade},
{label:'Current focus',title:'Backend Systems',detail:'Reliable full-stack engineering',palette:violet},
];
export type IntroSlide={kicker:string;title:string;lines:string[];chips?:string[]};
export const introSlides:IntroSlide[]=[
{kicker:'Introducing',title:'Full-Stack Developer',lines:['Vikash Kumar Mishra','Building reliable backend systems'],chips:['Java','Spring Boot','React']},
{kicker:'The flagship',title:'CampusEase',lines:['Campus food ordering and vendor management','JWT · Google OAuth · Razorpay · PostgreSQL'],chips:['Spring Boot','PostgreSQL']},
{kicker:'Event-driven',title:'Real-Time Notifications',lines:['RabbitMQ · WebSockets · Redis','Locally completed; public push not confirmed']},
{kicker:'Fintech',title:'Offline UPI Mesh',lines:['Decentralized mesh routing','RSA · AES-GCM · idempotent processing']},
{kicker:'AI & Research',title:'Next Frontiers',lines:['Antibiotic resistance prediction','Plant disease classification survey']},
{kicker:'Continue watching',title:'Explore My Work',lines:['Projects · Skills · Research · Contact']},
];
export type ProfileId = 'vikash' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vikash',
    name: 'Vikash',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: '10 selected highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
