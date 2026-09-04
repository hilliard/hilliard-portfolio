export interface CareerItem {
  id: string;
  slug: string;
  title: string;
  role: string;
  company: string;
  location?: string;
  period?: string;
  domain: 'enterprise-storage' | 'cloud-ai-web' | 'aerospace-specialized' | 'athletics-music-community';
  domainLabel: string;
  tags: string[];
  image: string;
  heroImage?: string;
  patent?: {
    number?: string;
    title: string;
    year: string;
    image?: string;
  };
  summary: string;
  contentTitle: string;
  content: string[];
  achievements?: string[];
  featured?: boolean;
}

export const careerItems: CareerItem[] = [
  {
    id: "01",
    slug: "goldtending",
    title: "GoldTending Incorporated",
    role: "Founder & Chief Technical Advisor",
    company: "GoldTending Incorporated",
    location: "Westminster, CO",
    period: "2018 - Present",
    domain: "cloud-ai-web",
    domainLabel: "Cloud, AI & Web Architecture",
    tags: ["AI Architecture", "System Design", "Cloud Systems", "Astro", "Fullstack", "Leadership"],
    image: "/img/Gold-Question-480.jpg",
    heroImage: "/img/Technical-Advising-3096.jpg",
    summary: "Founded GoldTending Incorporated with a philosophy to think differently, build resilient software and hardware systems, and add immense value wherever technology meets real-world challenges.",
    contentTitle: "Thinking Differently, Building Resilient Technology",
    content: [
      "GoldTending Incorporated was established as the crucible for my software engineering philosophy, specialized technical advising, and advanced architecture initiatives.",
      "My mission through GoldTending is to bridge the gap between deep hardware fundamentals and modern cloud/AI systems. We design architectures that prioritize reliability, clean abstractions, high testability, and real-world efficiency.",
      "Whether architecting full-stack web applications, orchestrating AI model integrations, or advising growing engineering teams, GoldTending represents a commitment to craftsmanship, integrity, and relentless problem-solving."
    ],
    achievements: [
      "Architected and deployed full-stack web and cloud platforms utilizing modern TypeScript, Astro, and edge infrastructure.",
      "Developed context-aware AI agent workflows and Model Context Protocol (MCP) integrations for automated workflows.",
      "Delivered strategic advisory on hardware-software co-design, reliability engineering, and QA automation."
    ],
    featured: true
  },
  {
    id: "02",
    slug: "datasonix",
    title: "DataSonix Incorporated",
    role: "Director IT / QA, Co-Founder",
    company: "DataSonix Incorporated",
    location: "Boulder, CO",
    domain: "enterprise-storage",
    domainLabel: "Enterprise Storage & Hardware Systems",
    tags: ["US Patent Holder", "Hardware Engineering", "Firmware", "Quality Assurance", "SCSI"],
    image: "/img/Hscott-Patent-Certificate-480-blurred.png",
    heroImage: "/img/Data-storage-3096.jpg",
    patent: {
      title: "Tape drive system and automated data storage mechanism",
      year: "1999",
      image: "/img/Hscott-Patent-Certificate-1999-480.jpg"
    },
    summary: "Co-founded DataSonix to pioneer miniature digital tape storage technology (Pereos). Granted US Patent in 1999 for tape storage and automated mechanism innovations.",
    contentTitle: "Pioneering Miniaturized Digital Storage & US Patent Innovation",
    content: [
      "At DataSonix, I co-founded the engineering efforts behind Pereos, one of the world's smallest digital tape drives designed for portable computing and high-density data backup.",
      "This work required deep hardware-software co-design: writing low-level firmware, establishing meticulous quality control labs, developing SCSI/parallel communication layers, and ensuring extreme mechanical precision.",
      "My contributions to the physical mechanism and firmware interface culminated in an official US Patent awarded in 1999, validating our innovative approach to automated tape handling."
    ],
    achievements: [
      "Awarded United States Patent in 1999 for innovative tape storage drive mechanisms.",
      "Built and directed the Quality Assurance and IT infrastructure from zero to commercial production.",
      "Co-designed firmware test harnesses and automated stress-testing suites running 24/7."
    ],
    featured: true
  },
  {
    id: "03",
    slug: "worldbank",
    title: "World Bank — Nile Basin Initiative",
    role: "System Architect & Database Consultant",
    company: "World Bank / Nile Basin DSS",
    location: "Addis Ababa, Ethiopia",
    domain: "aerospace-specialized",
    domainLabel: "Aerospace & Mission-Critical Systems",
    tags: ["World Bank", "System Architecture", "Hydrological Modeling", "Databases", "International"],
    image: "/img/Me-In-Ethiopia-480.jpg",
    heroImage: "/img/Nile-River-Pictures-Blue-3096.jpg",
    summary: "Served as lead system architect and database consultant in Addis Ababa, Ethiopia, for the World Bank's Nile Basin Decision Support System (DSS), managing trans-boundary water resource analytics across 10 nations.",
    contentTitle: "Trans-boundary Water Resource Decision Support for 10 Nations",
    content: [
      "Deployed to Addis Ababa, Ethiopia, to architect the core database and analytical systems for the Nile Basin Initiative Decision Support System (DSS), funded by the World Bank.",
      "The Nile Basin DSS is a multi-criteria spatial decision support platform used by 10 riparian countries to model river basin hydrology, optimize dam operations, evaluate agricultural irrigation impact, and foster international cooperation.",
      "Architected high-reliability relational data models, GIS integration schemas, and simulation data pipelines to ensure absolute precision in cross-border hydrological planning."
    ],
    achievements: [
      "Architected the multi-tiered database infrastructure for international hydrological simulation models.",
      "Collaborated with international government ministers, scientists, and environmental engineers across Africa and Europe.",
      "Ensured rigorous data integrity and high availability for mission-critical environmental forecasting."
    ],
    featured: true
  },
  {
    id: "04",
    slug: "technetics",
    title: "Technetics Incorporated",
    role: "Aerospace Power Design Engineer",
    company: "Technetics Incorporated",
    location: "Boulder, CO",
    domain: "aerospace-specialized",
    domainLabel: "Aerospace & Mission-Critical Systems",
    tags: ["NASA Space Shuttle", "Nuclear Submarines", "Power Electronics", "Hardware Design", "Mil-Spec"],
    image: "/img/Space-Shuttle-2-480.jpg",
    heroImage: "/img/Outer-Space-3096.jpg",
    summary: "Designed military and aerospace power supplies deployed on the NASA Space Shuttle and United States Navy nuclear submarines.",
    contentTitle: "Zero-Tolerance Power Systems for Space Exploration & Defense",
    content: [
      "As an Aerospace Power Design Engineer at Technetics, I designed, analyzed, and qualified ultra-high-reliability switching power supplies for the NASA Space Shuttle and US Navy nuclear submarines.",
      "Working within strict military (Mil-Spec) and space-flight standards, every component had to withstand extreme thermal fluctuations, radiation, high vibration, and electromagnetic interference.",
      "This intense hardware engineering background instilled in me the unwavering conviction that software, like aerospace hardware, must be architected with fault tolerance, redundancy, and zero-defect quality."
    ],
    achievements: [
      "Engineered power conversion circuitry certified for NASA Space Shuttle payload operations.",
      "Designed and qualified ultra-quiet DC-DC power supplies for naval nuclear submarine applications.",
      "Conducted worst-case circuit analysis, thermal stress testing, and MTBF reliability modeling."
    ],
    featured: true
  },
  {
    id: "05",
    slug: "sketchup",
    title: "SketchUp (Trimble)",
    role: "Sr. QA Engineer & Team Lead",
    company: "SketchUp / Trimble",
    location: "Boulder, CO",
    domain: "cloud-ai-web",
    domainLabel: "Cloud, AI & Web Architecture",
    tags: ["SketchUp", "Ruby API", "3D Graphics", "Test Automation", "Agile Leadership"],
    image: "/img/SketchUp-tablet-480.jpg",
    heroImage: "/img/SketchUp-extensibility-3096.jpg",
    summary: "Led QA and extensibility test engineering for SketchUp, the world's most widely used 3D modeling tool, overseeing Ruby API integrations and 3D web platforms.",
    contentTitle: "Scaling 3D Extensibility & Developer Ecosystems",
    content: [
      "Led the Extensibility and QA engineering efforts for SketchUp at Trimble, ensuring that third-party developers, architects, and designers had a rock-solid platform for 3D modeling extensions.",
      "Managed test automation frameworks for the SketchUp Ruby API, 3D Warehouse, and cross-platform desktop/web engines.",
      "Bridged communication between core C++ rendering engineers, product designers, and global developer partners to maintain flawless release quality across millions of active users."
    ],
    achievements: [
      "Architected automated API testing matrices for the SketchUp Ruby Extensibility platform.",
      "Led agile QA sprints ensuring zero-regression releases for global desktop and web applications.",
      "Collaborated on 3D geometry engine validation and cloud-connected collaboration tools."
    ],
    featured: true
  },
  {
    id: "06",
    slug: "clickbank",
    title: "ClickBank E-Commerce",
    role: "QA Manager / Team Lead (Agile)",
    company: "ClickBank",
    location: "Broomfield, CO",
    domain: "cloud-ai-web",
    domainLabel: "Cloud, AI & Web Architecture",
    tags: ["E-Commerce", "High-Volume FinTech", "Agile QA", "PCI Compliance", "CI/CD"],
    image: "/img/Data-Center-numbers-480.jpg",
    heroImage: "/img/Enterprise-center-3096.jpg",
    summary: "Led Agile QA teams managing high-volume payment processing, fraud prevention pipelines, and transactional e-commerce infrastructure.",
    contentTitle: "High-Throughput FinTech & Mission-Critical Transaction Quality",
    content: [
      "Managed the Quality Assurance team at ClickBank, overseeing a multi-million dollar daily transactional e-commerce and affiliate marketing platform.",
      "Championed Agile testing methodologies, CI/CD pipeline integration, and automated regression testing across complex billing engines, payment gateways, and fraud detection algorithms.",
      "Guaranteed strict PCI-DSS compliance, data security, and sub-second payment settlement under peak global traffic surges."
    ],
    achievements: [
      "Transformed QA processes into a high-velocity automated Agile testing organization.",
      "Reduced critical production bugs by over 60% through automated integration testing.",
      "Maintained 99.99% payment transaction reliability across millions of global transactions."
    ]
  },
  {
    id: "07",
    slug: "rebit",
    title: "Rebit Incorporated",
    role: "Director IT / QA, Co-Founder",
    company: "Rebit Incorporated",
    location: "Longmont, CO",
    domain: "enterprise-storage",
    domainLabel: "Enterprise Storage & Hardware Systems",
    tags: ["Cloud Backup", "Continuous Data Protection", "Co-Founder", "Disaster Recovery"],
    image: "/img/Rebit-storage-480.jpg",
    heroImage: "/img/Rebit-cloud-3096.jpg",
    summary: "Co-founded Rebit to deliver revolutionary zero-click continuous data protection (CDP) and cloud backup software for consumers and enterprises.",
    contentTitle: "Zero-Configuration Continuous Data Protection & Cloud Backup",
    content: [
      "Co-founded Rebit Inc. to solve the epidemic of unbacked-up data. We invented 'ridiculously simple' continuous data protection software that automatically backs up every change in real time.",
      "Directed both the IT enterprise backbone and QA engineering organizations, orchestrating comprehensive disk driver testing, snapshot recovery testing, and cloud synchronization.",
      "Built multi-terabyte virtualized test farms simulating millions of real-world file system modifications and hard drive failures."
    ],
    achievements: [
      "Built the entire IT data center and QA testing infrastructure from ground up.",
      "Pioneered continuous backup validation routines adopted across commercial consumer software.",
      "Supported successful product launches distributed globally in major retail stores and online."
    ]
  },
  {
    id: "08",
    slug: "benchmark",
    title: "Benchmark Tape Systems",
    role: "Director IT / SCM, Co-Founder",
    company: "Benchmark Tape Systems",
    location: "Boulder, CO",
    domain: "enterprise-storage",
    domainLabel: "Enterprise Storage & Hardware Systems",
    tags: ["DLT Tape", "Supply Chain", "SCM", "Manufacturing", "Enterprise Storage"],
    image: "/img/Storage-DLT-Tape-Drive-480.jpg",
    heroImage: "/img/Storage-Tape-Drive-Blue-Library-3096.jpg",
    summary: "Co-founded Benchmark Tape Systems to produce high-value DLT tape automation and backup drives for enterprise IT infrastructures.",
    contentTitle: "Enterprise DLT Tape Automation & Global Supply Chain",
    content: [
      "Co-founded Benchmark Tape Systems, designing and manufacturing enterprise-class Digital Linear Tape (DLT) automation systems.",
      "Led the global Supply Chain Management (SCM) systems and corporate IT architecture, integrating enterprise ERPs, automated robotic test cells, and international assembly lines.",
      "Achieved industry-leading MTBF reliability ratings for tape drives operating continuously in global corporate data centers."
    ],
    achievements: [
      "Architected end-to-end IT and ERP data systems connecting US engineering with offshore manufacturing.",
      "Co-founded a high-growth storage venture that became a major player in enterprise tape backup.",
      "Delivered high-throughput automated drive diagnostic stations for manufacturing quality control."
    ]
  },
  {
    id: "09",
    slug: "storagetek",
    title: "StorageTek (Storage Technology Corp)",
    role: "Sr. Engineer — Engineering Tools & Diagnostics",
    company: "StorageTek Incorporated",
    location: "Louisville, CO",
    domain: "enterprise-storage",
    domainLabel: "Enterprise Storage & Hardware Systems",
    tags: ["Robotic Tape Libraries", "Mainframe Storage", "Diagnostic Software", "SCSI/Fibre Channel"],
    image: "/img/StorageTek-Cimmaron-480.jpg",
    heroImage: "/img/Storage-Tape-Drive-Blue-Library-3096.jpg",
    summary: "Developed mission-critical diagnostic tools and firmware testing suites for monumental automated robotic tape libraries (Powderhorn / Cimmaron) used by Fortune 500 enterprises.",
    contentTitle: "Mainframe-Scale Robotic Tape Silos & Automated Diagnostics",
    content: [
      "Engineered automated test software and diagnostic tools for StorageTek's world-renowned robotic tape libraries (such as the Nearline and Powderhorn silos).",
      "These massive systems housed tens of thousands of tape cartridges retrieved by robotic arms in milliseconds for mainframe and enterprise servers worldwide.",
      "Developed diagnostic routines, robotic calibration tooling, and data verification suites running over SCSI and Fibre Channel protocols."
    ],
    achievements: [
      "Engineered diagnostic and calibration software for enterprise robotic tape handling systems.",
      "Authored high-precision verification suites for high-density magnetic recording heads.",
      "Mentored junior test engineers on storage protocols, hardware-level debugging, and automation."
    ]
  },
  {
    id: "10",
    slug: "uccs-ai",
    title: "UCCS — Strategic AI & Technology",
    role: "Advisor & AI Technologist",
    company: "University of Colorado Colorado Springs",
    location: "Colorado Springs, CO",
    domain: "cloud-ai-web",
    domainLabel: "Cloud, AI & Web Architecture",
    tags: ["Artificial Intelligence", "Neural Networks", "UCCS", "Higher Education", "Research"],
    image: "/img/Hscott-UCCS-AI-Certificate-480.jpg",
    heroImage: "/img/UCCS-classroom-3096.jpg",
    summary: "Completed rigorous Artificial Intelligence postgraduate specialization at UCCS, mastering neural network architectures, machine learning algorithms, and real-world AI system design.",
    contentTitle: "Deep Academic Rigor in Modern Artificial Intelligence & Neural Systems",
    content: [
      "Completed advanced Artificial Intelligence certifications and coursework through the University of Colorado Colorado Springs (UCCS).",
      "Mastered mathematical foundations of machine learning, backpropagation, deep convolutional and recurrent networks, NLP, and reinforcement learning.",
      "Applied academic machine learning principles to modern production architectures, including retrieval-augmented generation (RAG) and autonomous agentic workflows."
    ],
    achievements: [
      "Awarded official UCCS Certificate in Artificial Intelligence.",
      "Researched practical implementations of supervised, unsupervised, and deep neural architectures.",
      "Synthesized academic AI principles with 30 years of systems engineering experience."
    ]
  },
  {
    id: "11",
    slug: "tc-solutions",
    title: "TC Solutions",
    role: "IT Consultant & Systems Architect",
    company: "TC Solutions",
    location: "Colorado Springs, CO",
    domain: "aerospace-specialized",
    domainLabel: "Aerospace & Mission-Critical Systems",
    tags: ["Olympic Athletes", "Performance Analytics", "Database Architecture", "Sports Science"],
    image: "/img/Tommy-Dantzler-Greco-Roman-Wrestler-480.jpg",
    heroImage: "/img/Greco-Roman-Coloseum-3096.jpg",
    summary: "Consulted and built analytical athlete tracking systems supporting Olympic Greco-Roman wrestler Tommy Dantzler and elite athletic conditioning programs.",
    contentTitle: "Elite Athletic Performance Analytics & System Architecture",
    content: [
      "Architected specialized performance tracking and physiological analysis databases for Olympic athletes and elite combat sports competitors.",
      "Worked closely with USA Olympic Greco-Roman wrestler Tommy Dantzler to track training metrics, recovery curves, and opponent tendencies.",
      "Transformed raw training logs into actionable insights, proving that meticulous data architecture optimizes human performance just as it optimizes software."
    ],
    achievements: [
      "Built custom analytical tracking systems for Olympic-caliber athlete preparation.",
      "Synthesized biomechanical tracking metrics with sports nutrition and recovery timelines.",
      "Enhanced training regimen efficiency through structured data modeling."
    ]
  },
  {
    id: "12",
    slug: "hockey-coaching",
    title: "USA Hockey Coaching & Goalie Development",
    role: "USA Hockey Level 5 Master Coach & Goalie Specialist",
    company: "Boulder, Hyland Hills, Golden HS, CU Women's Hockey",
    location: "Colorado",
    period: "20+ Years",
    domain: "athletics-music-community",
    domainLabel: "Athletics, Coaching & Craft",
    tags: ["USA Hockey Level 5", "Silver Stick Champion", "State Champion", "Goalie Coach", "Leadership"],
    image: "/img/girl-goalie-480.jpg",
    heroImage: "/img/lighted-ice-rink-3096.jpg",
    summary: "Over two decades of hockey coaching excellence: USA Hockey Level 5 Master Coach, International Silver Stick Champion, State Champion, Golden High School Champion, and CU Women's Team to Nationals.",
    contentTitle: "Two Decades of Championship Coaching & Mentorship",
    content: [
      "Coached hockey for over 20 years across youth, high school, and collegiate levels, earning the highest coaching credential possible: USA Hockey Level 5 Master Coach.",
      "Led teams to an International Silver Stick Championship, a Bantam A State Championship, and a Golden High School Championship, and served on staff supporting the University of Colorado Women's Ice Hockey team to Nationals.",
      "Beyond strategy, I specialized as a Goaltender Coach, teaching the psychological resilience, technical positioning, and emotional composure required to excel under extreme pressure."
    ],
    achievements: [
      "International Silver Stick Championship Head / Assistant Coach.",
      "Colorado State Championship & Golden High School Championship Title Winner.",
      "Coached CU Women's Ice Hockey program to the National Tournament.",
      "Mentored hundreds of young athletes into collegiate players and disciplined leaders."
    ],
    featured: true
  },
  {
    id: "13",
    slug: "goalie-stopper",
    title: "The STOPPER Goalie Philosophy",
    role: "Veteran Goaltender & Tactician",
    company: "Sport Stable Superior",
    location: "Superior, CO",
    domain: "athletics-music-community",
    domainLabel: "Athletics, Coaching & Craft",
    tags: ["Goalie Philosophy", "STOPPER Framework", "Mental Toughness", "Beer League Veteran"],
    image: "/img/hilli-goalie-480.jpg",
    heroImage: "/img/Ice-Rink-3096.jpg",
    summary: "Developed the STOPPER goalie framework (Skills, Talent, Opportunities, Physical presence, Psychological presence, Experience, Resources) articulating the gladiator mindset of goaltending.",
    contentTitle: "There is no Future, There is no Past, I am here to make This Moment last",
    content: [
      "Goalies are modern-day gladiators. Their mask and gear afford them the last bastion of personalization in a team sport. They do not score goals, but they decide games.",
      "To demystify the position for coaches, players, and goalies alike, I formulated the STOPPER framework: Skills, Talent, Opportunities, Physical presence, Psychological presence, Experience, and Resources.",
      "A great goalie thrives on pressure, commands the crease with calm focus, and understands that while the puck passes five players before the net, the goalie is the ultimate backstop."
    ],
    achievements: [
      "Formulated and published the STOPPER analytical framework for goaltender evaluation.",
      "Active veteran goaltender anchoring teams with passion, composure, and camaraderie.",
      "Trained elite male and female goaltenders to collegiate and junior levels."
    ]
  },
  {
    id: "14",
    slug: "musician-bass",
    title: "Bass Player & Custom Instrument Craft",
    role: "Bassist, Custom Bass Builder & Musician",
    company: "Bass6 Productions",
    location: "Colorado",
    domain: "athletics-music-community",
    domainLabel: "Athletics, Coaching & Craft",
    tags: ["Custom Bass Builder", "Bass Player", "Live Performance", "Harmonic Backbone", "Audio Engineering"],
    image: "/img/MeAndStevie-HotterThanJuly-480-cropped.jpg",
    heroImage: "/img/Concert-Stage-3096.jpg",
    summary: "Dedicated bass player and custom instrument builder who crafted the very bass I play on stage. Dedicated to supporting the song through deep groove and harmonic foundation.",
    contentTitle: "Crafting Custom Instruments & The Harmonic Foundation",
    content: [
      "Music, like software and hardware, is built on an unshakeable foundation. As a dedicated bass player, my mission isn't flashy solos — it's locking in with the groove and elevating the song.",
      "Taking craftsmanship to the physical limit, I custom built the bass guitar I play on stage: selecting tonewoods, shaping the neck, wiring custom electronics, and calibrating the intonation.",
      "Performing live with bands across Colorado, I thrive on the shared human energy of live performance, creating indelible moments and sonic harmony."
    ],
    achievements: [
      "Custom designed and hand-built professional stage bass guitar from raw lumber and custom electronics.",
      "Performed extensively in live venues across Colorado as the rhythmic and harmonic anchor.",
      "Integrated audio production and mixing techniques into live audio configurations."
    ]
  },
  {
    id: "15",
    slug: "kgnu-radio",
    title: "KGNU 88.5 FM Community Radio",
    role: "Program Director & Host (`Eclipse`)",
    company: "KGNU 88.5 FM",
    location: "Boulder & Denver, CO",
    domain: "athletics-music-community",
    domainLabel: "Athletics, Coaching & Craft",
    tags: ["Broadcast Radio", "Community", "Audio Production", "Live Hosting", "Curation"],
    image: "/img/KGNU-Mixer-480.png",
    heroImage: "/img/KGNU-On-Air-3096.png",
    summary: "Hosted and directed the acclaimed `Eclipse` music program on KGNU 88.5 FM, curating independent music, managing broadcast mixing consoles, and serving the Colorado community.",
    contentTitle: "Live On-Air Broadcasting, Audio Curation & Community Radio",
    content: [
      "Served as Program Director and on-air broadcast host for `Eclipse` on KGNU 88.5 FM Boulder / Denver.",
      "Managed live broadcast boards, studio routing, live musician interviews, and community pledge drives.",
      "Celebrated diverse musical styles, uplifting independent musicians and connecting community members through the power of public radio."
    ],
    achievements: [
      "Directed live weekly on-air broadcasts reaching tens of thousands of listeners along the Colorado Front Range.",
      "Engineered live multi-channel studio audio for visiting musical performers.",
      "Supported volunteer training and community fundraising drives."
    ]
  }
];

export const careerDomains = [
  { id: 'all', label: 'All Experience' },
  { id: 'cloud-ai-web', label: 'Cloud, AI & Web Architecture' },
  { id: 'enterprise-storage', label: 'Enterprise Storage & Hardware' },
  { id: 'aerospace-specialized', label: 'Aerospace & Mission-Critical' },
  { id: 'athletics-music-community', label: 'Athletics, Coaching & Music' },
];
