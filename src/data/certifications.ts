export interface Certification {
  id: string;
  slug: string;
  title: string;
  provider: string;
  category: 'ai-ml' | 'fullstack' | 'frontend' | 'backend' | 'languages-tools';
  categoryLabel: string;
  tags: string[];
  image: string;
  secondaryImage?: string;
  pdf?: string;
  summary: string;
  descriptions: string[];
  skills: string[];
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    "id": "01",
    "slug": "the-fullstack-developer-path",
    "title": "The Fullstack Developer Path",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack"
    ],
    "image": "/img/Certificates/images/The-Fullstack-Developer-Path-certificate.jpg",
    "secondaryImage": "/img/fullstack-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/The-Fullstack-Developer-Path-certificate.pdf",
    "summary": "Complete path to becoming a fullstack developer. This comprehensive program covers both front-end and back-end technologies, databases, deployment, and building complete web applications. Learn to create end-to-end solutions for modern web applications.",
    "descriptions": [
      "Complete path to becoming a fullstack developer. This comprehensive program covers both front-end and back-end technologies, databases, deployment, and building complete web applications. Learn to create end-to-end solutions for modern web applications.",
      "Master fullstack development and build complete, production-ready web applications from scratch."
    ],
    "skills": [
      "Front-end fundamentals",
      "HTML, CSS, JavaScript",
      "Modern frameworks",
      "Back-end development",
      "Server-side languages",
      "Database design and management",
      "API development",
      "Authentication and security",
      "Deployment and scaling",
      "Full application architecture"
    ],
    "featured": true
  },
  {
    "id": "02",
    "slug": "the-front-end-developer-career-path",
    "title": "The Front-End Developer Career Path",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack"
    ],
    "image": "/img/Certificates/images/The-Front-End-Developer-Career-Path-certificate.jpg",
    "secondaryImage": "/img/front-end-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/The-Front-End-Developer-Career-Path-certificate.pdf",
    "summary": "Complete career path for aspiring front-end developers. This comprehensive program covers HTML, CSS, JavaScript, modern frameworks, and professional development practices. Learn everything you need to launch a successful front-end development career.",
    "descriptions": [
      "Complete career path for aspiring front-end developers. This comprehensive program covers HTML, CSS, JavaScript, modern frameworks, and professional development practices. Learn everything you need to launch a successful front-end development career.",
      "Master front-end development from basics to advanced techniques and prepare for a rewarding career."
    ],
    "skills": [
      "HTML fundamentals",
      "CSS and responsive design",
      "JavaScript mastery",
      "React and components",
      "State management",
      "API integration",
      "Testing and debugging",
      "Performance optimization",
      "Career development",
      "Building professional portfolio"
    ],
    "featured": true
  },
  {
    "id": "03",
    "slug": "the-ai-engineering-path",
    "title": "The AI Engineering Path",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/The-AI-Engineering-Path-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/The-AI-Engineering-Path-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/The-AI-Engineering-Path-certificate.pdf",
    "summary": "Complete learning path for AI engineering from fundamentals to advanced applications. This comprehensive course covers machine learning, deep learning, neural networks, and practical AI engineering skills. Learn to build, train, and deploy AI models for real-world problems.",
    "descriptions": [
      "Complete learning path for AI engineering from fundamentals to advanced applications. This comprehensive course covers machine learning, deep learning, neural networks, and practical AI engineering skills. Learn to build, train, and deploy AI models for real-world problems.",
      "Master the complete AI engineering path and become proficient in modern AI and machine learning technologies."
    ],
    "skills": [
      "Machine learning fundamentals",
      "Supervised learning algorithms",
      "Unsupervised learning",
      "Deep learning basics",
      "Neural networks",
      "Computer vision",
      "Natural language processing",
      "Model evaluation and optimization",
      "Deployment and production",
      "Building AI applications"
    ],
    "featured": true
  },
  {
    "id": "04",
    "slug": "intro-to-astro",
    "title": "Intro to Astro",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack",
      "Astro"
    ],
    "image": "/img/Certificates/images/Intro-to-Astro-certificate.jpg",
    "secondaryImage": "/img/javascript-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-to-Astro-certificate.pdf",
    "summary": "Learn Astro, a modern web framework for building faster, content-focused websites. This course teaches you how to build serverless websites with Astro's innovative approach to web development. You'll learn how to create performant, scalable web applications using Astro's unique architecture and tools.",
    "descriptions": [
      "Learn Astro, a modern web framework for building faster, content-focused websites. This course teaches you how to build serverless websites with Astro's innovative approach to web development. You'll learn how to create performant, scalable web applications using Astro's unique architecture and tools.",
      "Discover how Astro enables you to build web applications at scale with a focus on performance, developer experience, and content delivery."
    ],
    "skills": [
      "Astro fundamentals",
      "Component patterns",
      "Static site generation",
      "Dynamic routing",
      "Data fetching and APIs",
      "Markdown integration",
      "CSS and styling",
      "Deployment strategies",
      "Performance optimization",
      "Island architecture"
    ],
    "featured": true
  },
  {
    "id": "05",
    "slug": "intro-to-model-context-protocol-mcp",
    "title": "Intro to Model Context Protocol MCP",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "MCP"
    ],
    "image": "/img/Certificates/images/Intro-To-Model-Context-Protocol-(MCP)-certificate.jpg",
    "secondaryImage": "/img/mcp-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-To-Model-Context-Protocol (MCP)-certificate.pdf",
    "summary": "Learn the Model Context Protocol, a standardized way for AI models to interact with external tools and data sources. This course introduces you to MCP architecture, how to build MCP servers and clients, and how to integrate them with your AI applications for enhanced functionality.",
    "descriptions": [
      "Learn the Model Context Protocol, a standardized way for AI models to interact with external tools and data sources. This course introduces you to MCP architecture, how to build MCP servers and clients, and how to integrate them with your AI applications for enhanced functionality.",
      "Master the fundamentals of MCP and learn how to extend AI models with access to custom tools and data sources for more powerful intelligent applications."
    ],
    "skills": [
      "MCP architecture and concepts",
      "Protocol specification",
      "Building MCP servers",
      "Building MCP clients",
      "Tool definition and exposure",
      "Resource management",
      "Error handling",
      "Integration with AI models",
      "Security considerations",
      "Real-world MCP applications"
    ],
    "featured": true
  },
  {
    "id": "06",
    "slug": "learn-ai-agents",
    "title": "LearnAI Agents",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Learn-AI-Agents-certificate.jpg",
    "secondaryImage": "/img/ai-agent-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-AI-Agents-certificate.pdf",
    "summary": "Master AI agents and autonomous systems. This course explores how to build intelligent agents that can reason, plan, and take actions. Learn about agent architectures, decision-making systems, and practical applications of AI agents in real-world scenarios.",
    "descriptions": [
      "Master AI agents and autonomous systems. This course explores how to build intelligent agents that can reason, plan, and take actions. Learn about agent architectures, decision-making systems, and practical applications of AI agents in real-world scenarios.",
      "Discover the power of AI agents and learn to build autonomous systems that can solve complex problems."
    ],
    "skills": [
      "Agent fundamentals",
      "Agent architectures",
      "Decision-making systems",
      "Reinforcement learning",
      "Planning algorithms",
      "Knowledge representation",
      "Multi-agent systems",
      "Agent communication",
      "Real-world applications",
      "Building autonomous systems"
    ],
    "featured": true
  },
  {
    "id": "07",
    "slug": "build-dev-portfolio",
    "title": "Build And Deploy Your Portfolio",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack"
    ],
    "image": "/img/Certificates/images/Build-Developer-Portfolio-certificate.jpg",
    "secondaryImage": "/img/Technical-Advising-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Build-Developer-Portfolio-certificate.pdf",
    "summary": "As developers and designers, we need to ways to showcase our skills to potential employers.",
    "descriptions": [
      "As developers and designers, we need to ways to showcase our skills to potential employers.",
      "This course will take you through every single step of building a neat-looking portfolio website. You'll also learn to customize it to suit your personal style. Towards the end of the course, you will learn how to deploy the site to DigitalOcean, so that you will end up with a live website upon completing the course!"
    ],
    "skills": [
      "Understand how to set up a basic HTML structure for a webpage.",
      "Implement custom properties and general styles using CSS.",
      "Build an intro section with clear text formatting and structure.",
      "Design the services section with appropriate layout and design elements.",
      "Create a portfolio layout with images and project details.",
      "Incorporate Font Awesome icons for social media links.",
      "Set up a responsive navigation system with hamburger menu functionality.",
      "Understand the basics of deploying a website using DigitalOcean Droplets.",
      "Upload website files via FTP to a cloud server for hosting"
    ],
    "featured": false
  },
  {
    "id": "08",
    "slug": "build-multipage-website",
    "title": "Build Multipage Website",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack"
    ],
    "image": "/img/Certificates/images/Build-Multipage-Web-App-certificate.jpg",
    "secondaryImage": "/img/3D-Architect-480.jpg",
    "pdf": "/img/Certificates/pdfs/Build-Multipage-Web-App-certificate.pdf",
    "summary": "Build a Multi-Page Website with HTML and CSS is the perfect course for frontend developers  who   want to practice bringing high-quality Figma designs to life in the browser.\r\n\r\n                    It’s the ultimate collab: Frontend Mentor on design, Scrimba on toolkit, Kevin Powell as a guide and you as developer.\r\n\r\n                    During the course, you’ll test your HTML, CSS and JavaScript skills by building out a responsive, multi-page site featuring a homepage, buttons, a navigation bar, tabs, keyboard navigation and underline, dot and number indicators.\r\n\r\n                    You’ll also learn how to create an effective design system to ensure that your site is sharp and professional, and your coding is as efficient as possible.\r\n\r\n                    You’ll get as much independent practice as possible in this course, using detailed designs in Figma to craft a site which looks amazing on a variety of screen sizes and browsers.\r\n\r\n                    Thanks to Scrimba interactive technology, you’ll build the muscle memory you need to become a truly efficient developer.\r\n\r\n                    After completing this course, you’ll have a deep understanding of CSS and responsive design and the knowledge to build an interactive site which users will adore.\r\n\r\n                    Support during the course: While we can't offer one-to-one support (yet!), our friendly Discord community is waiting to welcome your questions, share ideas with you, or just chat on a coffee break.",
    "descriptions": [
      "Build a Multi-Page Website with HTML and CSS is the perfect course for frontend developers  who   want to practice bringing high-quality Figma designs to life in the browser.\r\n\r\n                    It’s the ultimate collab: Frontend Mentor on design, Scrimba on toolkit, Kevin Powell as a guide and you as developer.\r\n\r\n                    During the course, you’ll test your HTML, CSS and JavaScript skills by building out a responsive, multi-page site featuring a homepage, buttons, a navigation bar, tabs, keyboard navigation and underline, dot and number indicators.\r\n\r\n                    You’ll also learn how to create an effective design system to ensure that your site is sharp and professional, and your coding is as efficient as possible.\r\n\r\n                    You’ll get as much independent practice as possible in this course, using detailed designs in Figma to craft a site which looks amazing on a variety of screen sizes and browsers.\r\n\r\n                    Thanks to Scrimba interactive technology, you’ll build the muscle memory you need to become a truly efficient developer.\r\n\r\n                    After completing this course, you’ll have a deep understanding of CSS and responsive design and the knowledge to build an interactive site which users will adore.\r\n\r\n                    Support during the course: While we can't offer one-to-one support (yet!), our friendly Discord community is waiting to welcome your questions, share ideas with you, or just chat on a coffee break."
    ],
    "skills": [
      "Creating design systems",
      "CSS resets",
      "Utility classes",
      "Using color",
      "Responsive typography",
      "Adding spacing",
      "Effective buttons",
      "Underline indicators",
      "Dot indicators",
      "Number indicators",
      "Grid containers",
      "Responsiveness",
      "Adding background images",
      "Navigation",
      "Open/close buttons",
      "Accessibility tweaks",
      "Skip to content",
      "Alignment",
      "The picture element",
      "Keyboard navigation",
      "Tabs",
      "Refactoring"
    ],
    "featured": false
  },
  {
    "id": "09",
    "slug": "build-react-project-build-a-movie-search-project",
    "title": "build-react-project-build-a-movie-search-project-desc.html",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Build-React-Project-Build-A-Movie-Search-Project-certificate.jpg",
    "secondaryImage": "/img/UCCS-classroom-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Build-React-Project-Build-A-Movie-Search-Project-certificate.pdf",
    "summary": "This project-based course teaches you how to build a movie search application using React. You'll learn how to work with APIs, manage state, handle user input, and create a responsive interface. Throughout the course, you'll practice building features like search functionality, movie listings, and detailed movie information pages.",
    "descriptions": [
      "This project-based course teaches you how to build a movie search application using React. You'll learn how to work with APIs, manage state, handle user input, and create a responsive interface. Throughout the course, you'll practice building features like search functionality, movie listings, and detailed movie information pages.",
      "By the end of this course, you'll have a fully functional React application that demonstrates your ability to work with modern JavaScript frameworks and create interactive user experiences."
    ],
    "skills": [
      "React fundamentals and hooks",
      "Working with REST APIs",
      "State management with useState",
      "Form handling and validation",
      "Component composition",
      "Conditional rendering",
      "Event handling",
      "Styling React components",
      "Fetching and displaying data",
      "Building a complete project from scratch"
    ],
    "featured": false
  },
  {
    "id": "10",
    "slug": "build-reusable-react-components",
    "title": "build-reusable-react-components-desc.html",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Build-Reusable-React-Components-certificate.jpg",
    "secondaryImage": "/img/Storage-Tape-Drive-Blue-Library-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Build-Reusable-React-Components-certificate.pdf",
    "summary": "Learn to create reusable and maintainable React components that follow best practices. This course covers component composition patterns, prop management, state lifting, and component reusability principles. You'll understand how to design components that are flexible, easy to test, and can be used across multiple projects.",
    "descriptions": [
      "Learn to create reusable and maintainable React components that follow best practices. This course covers component composition patterns, prop management, state lifting, and component reusability principles. You'll understand how to design components that are flexible, easy to test, and can be used across multiple projects.",
      "Master the skills needed to write clean, efficient React code that scales well and makes your applications easier to maintain and enhance."
    ],
    "skills": [
      "Component composition patterns",
      "Prop drilling and prop management",
      "State lifting and context",
      "Render props pattern",
      "Higher-order components",
      "Custom hooks creation",
      "Component testing strategies",
      "Performance optimization",
      "Reusability best practices",
      "Real-world component design"
    ],
    "featured": false
  },
  {
    "id": "11",
    "slug": "build-websites-with-figma-html-css-and-javascript",
    "title": "build-websites-with-figma-html-css-and-javascript-desc.html",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend"
    ],
    "image": "/img/Certificates/images/Build-Websites-with-Figma,-HTML,-CSS,-and-JavaScript-certificate.jpg",
    "secondaryImage": "/img/Rebit-cloud-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Build-Websites-with-Figma,-HTML,-CSS,-and-JavaScript-certificate.pdf",
    "summary": "Learn the complete workflow of taking a design from Figma and converting it into a functional, responsive website. This course bridges the gap between design and development, showing you how to collaborate with designers and implement their vision with code. You'll work with real Figma designs and build them out using clean HTML, CSS, and JavaScript.",
    "descriptions": [
      "Learn the complete workflow of taking a design from Figma and converting it into a functional, responsive website. This course bridges the gap between design and development, showing you how to collaborate with designers and implement their vision with code. You'll work with real Figma designs and build them out using clean HTML, CSS, and JavaScript.",
      "Gain hands-on experience with the tools and techniques used by professional web developers to create beautiful, interactive websites that match designer specifications."
    ],
    "skills": [
      "Figma basics for developers",
      "Reading and understanding design specs",
      "Semantic HTML structure",
      "CSS layout techniques",
      "Responsive design implementation",
      "Interactive elements with JavaScript",
      "Typography and color implementation",
      "Animation and transitions",
      "Cross-browser compatibility",
      "Professional workflow and collaboration"
    ],
    "featured": false
  },
  {
    "id": "12",
    "slug": "deploy-ai-apps-with-cloudflare",
    "title": "Deploy AI apps with Cloudflare",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Deploy-AI-apps-with-Cloudflare-certificate.jpg",
    "secondaryImage": "/img/Enterprise-center-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Deploy-AI-apps-with-Cloudflare-certificate.pdf",
    "summary": "Learn how to deploy AI applications using Cloudflare's powerful infrastructure and AI services. This course covers the entire deployment process from development to production, including how to leverage Cloudflare Workers, AI models, and edge computing for fast, reliable AI application delivery.",
    "descriptions": [
      "Learn how to deploy AI applications using Cloudflare's powerful infrastructure and AI services. This course covers the entire deployment process from development to production, including how to leverage Cloudflare Workers, AI models, and edge computing for fast, reliable AI application delivery.",
      "Discover how to build scalable AI applications that run on the edge, providing low-latency responses and reduced infrastructure costs while maintaining high reliability."
    ],
    "skills": [
      "Cloudflare Workers introduction",
      "Edge computing fundamentals",
      "AI model integration with Cloudflare",
      "Deployment best practices",
      "Performance optimization",
      "Monitoring and logging",
      "Security and authentication",
      "Cost optimization strategies",
      "Scaling AI applications",
      "Real-world deployment scenarios"
    ],
    "featured": false
  },
  {
    "id": "13",
    "slug": "flexbox-learn-css-flexbox",
    "title": "Flexbox Learn CSS Flexbox",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend"
    ],
    "image": "/img/Certificates/images/Flexbox-TuLearn-CSS-Flexbox-certificate.jpg",
    "secondaryImage": "/img/Outer-Space-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Flexbox-TuLearn-CSS-Flexbox-certificate.pdf",
    "summary": "Master CSS Flexbox and make responsive layouts a breeze. This comprehensive course covers all aspects of Flexbox, from basic properties to advanced techniques. You'll learn how to create flexible, responsive layouts without complex hacks or workarounds using this powerful CSS module.",
    "descriptions": [
      "Master CSS Flexbox and make responsive layouts a breeze. This comprehensive course covers all aspects of Flexbox, from basic properties to advanced techniques. You'll learn how to create flexible, responsive layouts without complex hacks or workarounds using this powerful CSS module.",
      "Build your confidence in using Flexbox by working through practical exercises and real-world examples that show how modern web developers create responsive layouts efficiently and elegantly."
    ],
    "skills": [
      "Flexbox container properties",
      "Flex item properties",
      "Alignment and justification",
      "Flex directions and wrapping",
      "Growing and shrinking items",
      "Ordering elements",
      "Responsive layouts with Flexbox",
      "Common patterns and solutions",
      "Combining with CSS Grid",
      "Best practices and performance"
    ],
    "featured": false
  },
  {
    "id": "14",
    "slug": "front-end-developer-interview-tips",
    "title": "Front-End Developer Interview Tips",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Front-End-Developer-Interview-Tips.jpg",
    "secondaryImage": "/img/UCCS-classroom-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Front-End-Developer-Interview-Tips.pdf",
    "summary": "Ace your front-end developer interviews with practical tips and strategies. This course prepares you for technical interviews by covering common question types, coding challenges, and behavioral interview techniques. Learn how to communicate your skills effectively and demonstrate your expertise to potential employers.",
    "descriptions": [
      "Ace your front-end developer interviews with practical tips and strategies. This course prepares you for technical interviews by covering common question types, coding challenges, and behavioral interview techniques. Learn how to communicate your skills effectively and demonstrate your expertise to potential employers.",
      "Build confidence in your interview preparation with insider knowledge from experienced developers and learn the strategies that land top front-end development positions."
    ],
    "skills": [
      "Common interview questions",
      "JavaScript coding challenges",
      "HTML and CSS deep dives",
      "React and framework questions",
      "Behavioral interview tips",
      "Problem-solving strategies",
      "Portfolio projects to showcase",
      "Salary negotiation tips",
      "Remote interview best practices",
      "Post-interview follow-up"
    ],
    "featured": false
  },
  {
    "id": "15",
    "slug": "intro-mistral-ai",
    "title": "Intrto Mistral AI and Scrimba",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Intro-To-Mistral-AI.jpg",
    "secondaryImage": "/img/ai-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-Mistral-AI.pdf",
    "summary": "Learn Mistral AI, a powerful open-source language model, and how to use it for building AI applications. This course covers Mistral API usage, integration with Scrimba projects, and best practices for leveraging Mistral's capabilities in your applications. Discover how Mistral provides efficient, on-device AI processing.",
    "descriptions": [
      "Learn Mistral AI, a powerful open-source language model, and how to use it for building AI applications. This course covers Mistral API usage, integration with Scrimba projects, and best practices for leveraging Mistral's capabilities in your applications. Discover how Mistral provides efficient, on-device AI processing.",
      "Master Mistral AI and build efficient, intelligent applications with one of the most capable open-source language models."
    ],
    "skills": [
      "Mistral AI basics",
      "API authentication and setup",
      "Making API requests",
      "Model parameters and options",
      "Token management",
      "Streaming responses",
      "Function calling",
      "Error handling",
      "Scrimba integration",
      "Production deployment"
    ],
    "featured": false
  },
  {
    "id": "16",
    "slug": "intro-to-ai-engineering",
    "title": "Intro to AI Engineering",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Intro-to-AI-Engineering-certificate.jpg",
    "secondaryImage": "/img/ai-engineering-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-to-AI-Engineering-certificate.pdf",
    "summary": "Begin your journey into AI engineering with this comprehensive introduction. Learn the fundamentals of artificial intelligence, machine learning concepts, and how to apply them in practical projects. This course provides a solid foundation for understanding AI technologies and how to use them in real-world applications.",
    "descriptions": [
      "Begin your journey into AI engineering with this comprehensive introduction. Learn the fundamentals of artificial intelligence, machine learning concepts, and how to apply them in practical projects. This course provides a solid foundation for understanding AI technologies and how to use them in real-world applications.",
      "Discover the tools, frameworks, and techniques used by AI engineers to build intelligent systems that solve real problems."
    ],
    "skills": [
      "AI and machine learning basics",
      "Neural networks fundamentals",
      "Supervised and unsupervised learning",
      "Data preprocessing techniques",
      "Model training and evaluation",
      "Popular AI frameworks",
      "Natural language processing basics",
      "Computer vision introduction",
      "Ethics in AI",
      "Real-world AI applications"
    ],
    "featured": false
  },
  {
    "id": "17",
    "slug": "intro-to-claude-ai",
    "title": "Intro to Claude AI",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Intro-To-Claude-AI-certificate.jpg",
    "secondaryImage": "/img/claude-ai-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-To-Claude-AI-certificate.pdf",
    "summary": "Get started with Claude AI, Anthropic's powerful language model. This course teaches you how to use Claude for various tasks including text analysis, content generation, code assistance, and more. Learn how to integrate Claude into your applications and leverage its capabilities for intelligent automation.",
    "descriptions": [
      "Get started with Claude AI, Anthropic's powerful language model. This course teaches you how to use Claude for various tasks including text analysis, content generation, code assistance, and more. Learn how to integrate Claude into your applications and leverage its capabilities for intelligent automation.",
      "Learn the fundamentals of working with Claude AI and discover how to build intelligent applications with one of the most advanced language models available."
    ],
    "skills": [
      "Claude API basics",
      "Prompt engineering with Claude",
      "API authentication and setup",
      "Making API requests",
      "Context and token management",
      "Claude model capabilities",
      "Error handling and retry logic",
      "Real-time applications",
      "Integration patterns",
      "Best practices and optimization"
    ],
    "featured": false
  },
  {
    "id": "18",
    "slug": "intro-to-dall-e",
    "title": "Intro to Dall-E",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML"
    ],
    "image": "/img/Certificates/images/Intro-To-Dall-E-certificate.jpg",
    "secondaryImage": "/img/claude-ai-2-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-To-Dall-E-certificate.pdf",
    "summary": "Explore Dall-E, OpenAI's powerful image generation model. This course teaches you how to use Dall-E's API to create and manipulate images programmatically. Learn prompt engineering for image generation, integration with applications, and best practices for creating compelling visual content with AI.",
    "descriptions": [
      "Explore Dall-E, OpenAI's powerful image generation model. This course teaches you how to use Dall-E's API to create and manipulate images programmatically. Learn prompt engineering for image generation, integration with applications, and best practices for creating compelling visual content with AI.",
      "Learn to harness the power of Dall-E to generate, edit, and create variations of images using natural language prompts."
    ],
    "skills": [
      "Dall-E API basics",
      "Authentication and setup",
      "Image generation API",
      "Prompt engineering for images",
      "Image editing and variations",
      "API integration",
      "Error handling",
      "Cost optimization",
      "Real-world applications",
      "Advanced techniques"
    ],
    "featured": false
  },
  {
    "id": "19",
    "slug": "intro-to-nestjs",
    "title": "Intro to NestJS",
    "provider": "Scrimba",
    "category": "backend",
    "categoryLabel": "Backend, Cloud & Databases",
    "tags": [
      "Backend & APIs"
    ],
    "image": "/img/Certificates/images/Intro-To-NestJS-certificate.jpg",
    "secondaryImage": "/img/nest-js-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-To-NestJS-certificate.pdf",
    "summary": "Get started with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. This course teaches you NestJS fundamentals, including modules, controllers, services, and dependency injection. Build production-ready APIs with TypeScript and NestJS.",
    "descriptions": [
      "Get started with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. This course teaches you NestJS fundamentals, including modules, controllers, services, and dependency injection. Build production-ready APIs with TypeScript and NestJS.",
      "Learn the NestJS framework and discover how to build robust, maintainable backend applications following architectural best practices."
    ],
    "skills": [
      "NestJS project setup",
      "Controllers and routing",
      "Services and providers",
      "Modules and dependency injection",
      "Database integration",
      "Authentication and authorization",
      "Error handling",
      "Middleware and guards",
      "Testing strategies",
      "Deployment options"
    ],
    "featured": false
  },
  {
    "id": "20",
    "slug": "intro-to-supabase",
    "title": "Intro to Supabase",
    "provider": "Scrimba",
    "category": "backend",
    "categoryLabel": "Backend, Cloud & Databases",
    "tags": [
      "Backend & APIs",
      "Supabase"
    ],
    "image": "/img/Certificates/images/Intro-to-Supabase-certificate.jpg",
    "secondaryImage": "/img/database-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-to-Supabase-certificate.pdf",
    "summary": "Learn Supabase, an open-source Firebase alternative that provides a complete backend-as-a-service platform. This course covers user authentication, real-time database operations, file storage, and edge functions. Build production-ready applications with Supabase's powerful features.",
    "descriptions": [
      "Learn Supabase, an open-source Firebase alternative that provides a complete backend-as-a-service platform. This course covers user authentication, real-time database operations, file storage, and edge functions. Build production-ready applications with Supabase's powerful features.",
      "Discover how to use Supabase to quickly build and deploy full-stack applications with authentication, databases, and real-time capabilities."
    ],
    "skills": [
      "Supabase project setup",
      "Authentication and user management",
      "PostgreSQL database operations",
      "Real-time subscriptions",
      "File storage with Supabase",
      "Edge functions",
      "Security and policies",
      "API integration",
      "Performance optimization",
      "Deploying with Supabase"
    ],
    "featured": false
  },
  {
    "id": "21",
    "slug": "intro-to-typescript",
    "title": "Intro to TypeScript",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs",
      "TypeScript"
    ],
    "image": "/img/Certificates/images/Intro-To-TypeScript-certificate.jpg",
    "secondaryImage": "/img/typescript-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-To-TypeScript-certificate.pdf",
    "summary": "Learn TypeScript and add static typing to your JavaScript applications. This course covers TypeScript basics, type annotations, interfaces, and how to use TypeScript in various projects. Discover how TypeScript improves code quality and developer experience with its powerful type system.",
    "descriptions": [
      "Learn TypeScript and add static typing to your JavaScript applications. This course covers TypeScript basics, type annotations, interfaces, and how to use TypeScript in various projects. Discover how TypeScript improves code quality and developer experience with its powerful type system.",
      "Master TypeScript and build more maintainable, error-free applications with advanced type checking and tooling support."
    ],
    "skills": [
      "TypeScript basics and setup",
      "Basic types and type annotations",
      "Interfaces and types",
      "Classes and inheritance",
      "Generics",
      "Union and intersection types",
      "Type guards and narrowing",
      "Decorators",
      "Modules and namespaces",
      "Advanced types and patterns"
    ],
    "featured": false
  },
  {
    "id": "22",
    "slug": "intro-to-vite",
    "title": "Intro to Vite",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Intro-to-Vite-certificate.jpg",
    "secondaryImage": "/img/vite-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Intro-to-Vite-certificate.pdf",
    "summary": "Learn Vite, a next-generation frontend build tool that provides a faster and leaner development experience. This course covers Vite setup, hot module replacement, and optimized production builds. Discover how Vite improves developer experience and build performance for modern web applications.",
    "descriptions": [
      "Learn Vite, a next-generation frontend build tool that provides a faster and leaner development experience. This course covers Vite setup, hot module replacement, and optimized production builds. Discover how Vite improves developer experience and build performance for modern web applications.",
      "Master Vite and experience ultra-fast development with instant module replacement and lightning-quick builds."
    ],
    "skills": [
      "Vite project setup",
      "Hot module replacement HMR",
      "ES modules support",
      "Vue and React integration",
      "CSS preprocessing",
      "Static asset handling",
      "Build optimization",
      "Environment variables",
      "Plugin system",
      "Advanced configuration"
    ],
    "featured": false
  },
  {
    "id": "23",
    "slug": "introduction-to-es6-plus",
    "title": "Introduction to ES6+",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Introduction-to-ES6+-certificate.jpg",
    "secondaryImage": "/img/javascript-2-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Introduction-to-ES6+-certificate.pdf",
    "summary": "Master modern JavaScript with ES6+ features that power contemporary web development. This course covers arrow functions, destructuring, template literals, classes, promises, async/await, and more. Learn how ES6+ features make JavaScript code more readable, maintainable, and powerful.",
    "descriptions": [
      "Master modern JavaScript with ES6+ features that power contemporary web development. This course covers arrow functions, destructuring, template literals, classes, promises, async/await, and more. Learn how ES6+ features make JavaScript code more readable, maintainable, and powerful.",
      "Discover the modern JavaScript syntax and features that enable developers to write cleaner, more efficient code."
    ],
    "skills": [
      "Arrow functions and this binding",
      "Destructuring assignment",
      "Template literals",
      "Classes and inheritance",
      "Promises and async/await",
      "Modules and imports",
      "Spread and rest operators",
      "Array and object methods",
      "Map, Set, and WeakMap",
      "Generators and iterators"
    ],
    "featured": false
  },
  {
    "id": "24",
    "slug": "learn-advanced-react",
    "title": "Learn Advanced React",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Learn-Advanced-React-certificate.jpg",
    "secondaryImage": "/img/javascript-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Advanced-React-certification.pdf",
    "summary": "Take your React skills to the next level with advanced concepts and patterns. This course covers React hooks deep dives, performance optimization, state management solutions, and architectural patterns for large-scale applications. Learn how to build enterprise-grade React applications.",
    "descriptions": [
      "Take your React skills to the next level with advanced concepts and patterns. This course covers React hooks deep dives, performance optimization, state management solutions, and architectural patterns for large-scale applications. Learn how to build enterprise-grade React applications.",
      "Master advanced React techniques and patterns that enable you to build complex, high-performance applications at scale."
    ],
    "skills": [
      "Advanced hooks patterns",
      "Context API optimization",
      "State management solutions",
      "Performance profiling",
      "Code splitting and lazy loading",
      "Render optimization",
      "Error boundaries",
      "Concurrent features",
      "Advanced component patterns",
      "Testing advanced components"
    ],
    "featured": false
  },
  {
    "id": "25",
    "slug": "learn-basic-javascript",
    "title": "Learn Basic JavaScript",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Learn-Basic-JavaScript-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Basic-JavaScript-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Basic-JavaScript-certificate.pdf",
    "summary": "Start your JavaScript journey with this comprehensive basics course. Learn variables, data types, operators, control flow, functions, and DOM manipulation. This course provides a solid foundation for web development and prepares you for more advanced JavaScript concepts.",
    "descriptions": [
      "Start your JavaScript journey with this comprehensive basics course. Learn variables, data types, operators, control flow, functions, and DOM manipulation. This course provides a solid foundation for web development and prepares you for more advanced JavaScript concepts.",
      "Master the fundamentals of JavaScript and build the skills needed to create interactive web applications."
    ],
    "skills": [
      "Variables and data types",
      "Operators and expressions",
      "Control flow if/else and loops",
      "Functions and scope",
      "Arrays and objects",
      "DOM manipulation",
      "Event handling",
      "Debugging techniques",
      "Common patterns",
      "Best practices"
    ],
    "featured": false
  },
  {
    "id": "26",
    "slug": "learn-context-engineering",
    "title": "Learn Context Engineering",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML"
    ],
    "image": "/img/Certificates/images/Learn-Context-Engineering-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Context-Engineering-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Context-Engineering-certificate.pdf",
    "summary": "Master the art of context engineering for AI models. Learn how to structure prompts effectively, manage token usage, and provide the right context for optimal AI responses. This course teaches advanced techniques for working with language models and getting the best results from AI systems.",
    "descriptions": [
      "Master the art of context engineering for AI models. Learn how to structure prompts effectively, manage token usage, and provide the right context for optimal AI responses. This course teaches advanced techniques for working with language models and getting the best results from AI systems.",
      "Discover the strategies and techniques that experienced AI practitioners use to craft effective context for language models."
    ],
    "skills": [
      "Context fundamentals",
      "Prompt structure and design",
      "Token management",
      "Context window optimization",
      "Few-shot learning",
      "Role-playing and personas",
      "Chain-of-thought prompting",
      "Error correction strategies",
      "Testing and iteration",
      "Advanced techniques"
    ],
    "featured": true
  },
  {
    "id": "27",
    "slug": "learn-d3.js",
    "title": "Learn D3.js",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs",
      "D3.js"
    ],
    "image": "/img/Certificates/images/Learn-D3.js-certificate.jpg",
    "secondaryImage": "/img/d3-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-D3.js-certificate.pdf",
    "summary": "Master D3.js and create stunning data visualizations for the web. This course covers DOM manipulation, scales, axes, transitions, and complex visualization patterns. Learn how to transform raw data into compelling interactive visualizations that tell stories and engage users.",
    "descriptions": [
      "Master D3.js and create stunning data visualizations for the web. This course covers DOM manipulation, scales, axes, transitions, and complex visualization patterns. Learn how to transform raw data into compelling interactive visualizations that tell stories and engage users.",
      "Become proficient with D3.js and unlock the ability to create sophisticated data visualizations that bring insights to life."
    ],
    "skills": [
      "D3.js fundamentals",
      "Selections and bindings",
      "Data joins",
      "Scales and axes",
      "Transitions and animations",
      "SVG and canvas",
      "Layout algorithms",
      "Interactive visualizations",
      "Performance optimization",
      "Advanced techniques"
    ],
    "featured": false
  },
  {
    "id": "28",
    "slug": "learn-express.js",
    "title": "Learn Express.js",
    "provider": "Scrimba",
    "category": "backend",
    "categoryLabel": "Backend, Cloud & Databases",
    "tags": [
      "Backend & APIs",
      "Node.js"
    ],
    "image": "/img/Certificates/images/Learn-Express.js-certificate.jpg",
    "secondaryImage": "/img/express-js-1-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Express.js-certificate.pdf",
    "summary": "Learn Express.js and build robust web applications with Node.js. This course covers routing, middleware, error handling, and database integration. Master the fundamentals of Express.js and build RESTful APIs and full-stack applications efficiently.",
    "descriptions": [
      "Learn Express.js and build robust web applications with Node.js. This course covers routing, middleware, error handling, and database integration. Master the fundamentals of Express.js and build RESTful APIs and full-stack applications efficiently.",
      "Become proficient with Express.js and develop the skills to build scalable server-side applications."
    ],
    "skills": [
      "Express.js fundamentals",
      "Routing and HTTP methods",
      "Middleware and request handling",
      "Template engines",
      "Static file serving",
      "RESTful API design",
      "Database integration",
      "Authentication",
      "Error handling",
      "Deployment"
    ],
    "featured": false
  },
  {
    "id": "29",
    "slug": "learn-firebase",
    "title": "Learn Firebase",
    "provider": "Scrimba",
    "category": "backend",
    "categoryLabel": "Backend, Cloud & Databases",
    "tags": [
      "Backend & APIs",
      "Firebase"
    ],
    "image": "/img/Certificates/images/Learn-Firebase-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Firebase-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Firebase-certificate.pdf",
    "summary": "Learn Firebase and build real-time applications with Google's cloud platform. This course covers Realtime Database, Firestore, Authentication, Hosting, and Cloud Functions. Build complete applications with Firebase's comprehensive suite of backend services.",
    "descriptions": [
      "Learn Firebase and build real-time applications with Google's cloud platform. This course covers Realtime Database, Firestore, Authentication, Hosting, and Cloud Functions. Build complete applications with Firebase's comprehensive suite of backend services.",
      "Master Firebase and accelerate your development by leveraging a powerful backend-as-a-service platform."
    ],
    "skills": [
      "Firebase project setup",
      "Realtime Database operations",
      "Firestore collections and documents",
      "User authentication",
      "Security rules",
      "File storage",
      "Cloud Functions",
      "Hosting and deployment",
      "Analytics and monitoring",
      "Scalability and optimization"
    ],
    "featured": false
  },
  {
    "id": "30",
    "slug": "learn-interactive-react",
    "title": "Learn Interactive React",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Learn-Interactive-React-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Interactive-React-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Interactive-React-certificate.pdf",
    "summary": "Build interactive and dynamic React applications that engage users. This course teaches techniques for handling user interactions, managing state effectively, and creating responsive interfaces. Learn how to create compelling user experiences with React.",
    "descriptions": [
      "Build interactive and dynamic React applications that engage users. This course teaches techniques for handling user interactions, managing state effectively, and creating responsive interfaces. Learn how to create compelling user experiences with React.",
      "Master the techniques to build interactive React applications that respond to user input and provide engaging experiences."
    ],
    "skills": [
      "Event handling in React",
      "Form handling and validation",
      "State management strategies",
      "Controlled components",
      "User input processing",
      "Real-time updates",
      "Animations and transitions",
      "Gesture handling",
      "Accessibility for interactivity",
      "Performance optimization"
    ],
    "featured": false
  },
  {
    "id": "31",
    "slug": "learn-javascript",
    "title": "Learn JavaScript",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Learn-JavaScript-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-JavaScript-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-JavaScript-certificate.pdf",
    "summary": "Deepen your JavaScript knowledge with intermediate and advanced concepts. This course builds on basics to cover closures, asynchronous programming, event loop, and design patterns. Become a proficient JavaScript developer capable of writing complex applications.",
    "descriptions": [
      "Deepen your JavaScript knowledge with intermediate and advanced concepts. This course builds on basics to cover closures, asynchronous programming, event loop, and design patterns. Become a proficient JavaScript developer capable of writing complex applications.",
      "Master JavaScript and develop the deep understanding needed to build sophisticated web applications."
    ],
    "skills": [
      "Closures and scope chains",
      "Prototypes and inheritance",
      "Event loop and timing",
      "Promises and async/await",
      "Higher-order functions",
      "Design patterns",
      "Error handling",
      "Performance optimization",
      "Memory management",
      "Best practices"
    ],
    "featured": false
  },
  {
    "id": "32",
    "slug": "learn-markdown",
    "title": "Learn Markdown",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Learn-Markdown-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Markdown-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Markdown-certificate.pdf",
    "summary": "Master Markdown, the lightweight markup language used across the web. This course covers syntax, formatting, extensions, and practical applications. Learn to write clean, readable documentation and content with Markdown.",
    "descriptions": [
      "Master Markdown, the lightweight markup language used across the web. This course covers syntax, formatting, extensions, and practical applications. Learn to write clean, readable documentation and content with Markdown.",
      "Become proficient with Markdown and create well-formatted content efficiently."
    ],
    "skills": [
      "Markdown basics",
      "Headings and hierarchy",
      "Text formatting",
      "Lists and indentation",
      "Links and images",
      "Code blocks",
      "Tables and alignment",
      "Extensions and variants",
      "Best practices",
      "Tools and editors"
    ],
    "featured": false
  },
  {
    "id": "33",
    "slug": "learn-modern-javascript",
    "title": "Learn Modern JavaScript",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Learn-Modern-JavaScript-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Modern-JavaScript-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Modern-JavaScript-certificate.pdf",
    "summary": "Learn contemporary JavaScript development practices and tools. This course covers modern tooling, build processes, module systems, and latest language features. Stay current with JavaScript best practices used in professional development.",
    "descriptions": [
      "Learn contemporary JavaScript development practices and tools. This course covers modern tooling, build processes, module systems, and latest language features. Stay current with JavaScript best practices used in professional development.",
      "Master modern JavaScript development and stay up-to-date with current industry practices and tooling."
    ],
    "skills": [
      "ES6 modules and bundlers",
      "Build tools and task runners",
      "Package management",
      "Testing frameworks",
      "Linting and formatting",
      "Development environment setup",
      "Performance monitoring",
      "Security best practices",
      "Framework ecosystem",
      "Continuous integration"
    ],
    "featured": false
  },
  {
    "id": "34",
    "slug": "learn-next.js",
    "title": "Learn Next.js",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack",
      "Next.js"
    ],
    "image": "/img/Certificates/images/Learn-Next.js-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Next.js-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Next.js-certificate.pdf",
    "summary": "Build production-ready React applications with Next.js. This course covers server-side rendering, static generation, API routes, and deployment. Learn how to create fast, SEO-friendly applications with Next.js.",
    "descriptions": [
      "Build production-ready React applications with Next.js. This course covers server-side rendering, static generation, API routes, and deployment. Learn how to create fast, SEO-friendly applications with Next.js.",
      "Master Next.js and build full-stack React applications with advanced features and optimization."
    ],
    "skills": [
      "Next.js project setup",
      "File-based routing",
      "Server-side rendering SSR",
      "Static site generation SSG",
      "Incremental static regeneration",
      "API routes",
      "Data fetching patterns",
      "Image optimization",
      "Deployment strategies",
      "Performance optimization"
    ],
    "featured": false
  },
  {
    "id": "35",
    "slug": "learn-node.js",
    "title": "Learn Node.js",
    "provider": "Scrimba",
    "category": "backend",
    "categoryLabel": "Backend, Cloud & Databases",
    "tags": [
      "Backend & APIs",
      "Node.js"
    ],
    "image": "/img/Certificates/images/Learn-Node.js-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Node.js-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Node.js-certificate.pdf",
    "summary": "Build server-side applications with Node.js. This course covers core modules, file operations, streams, event emitters, and async patterns. Learn how to create scalable backend applications with JavaScript.",
    "descriptions": [
      "Build server-side applications with Node.js. This course covers core modules, file operations, streams, event emitters, and async patterns. Learn how to create scalable backend applications with JavaScript.",
      "Master Node.js and become proficient in server-side JavaScript development."
    ],
    "skills": [
      "Node.js fundamentals",
      "Core modules and APIs",
      "File system operations",
      "Streams and buffers",
      "Event emitters",
      "Asynchronous programming",
      "Error handling",
      "Process management",
      "Package management",
      "Performance and optimization"
    ],
    "featured": false
  },
  {
    "id": "36",
    "slug": "learn-rag",
    "title": "Learn RAG",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML"
    ],
    "image": "/img/Certificates/images/Learn-RAG-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-RAG-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-RAG-certificate.pdf",
    "summary": "Master Retrieval-Augmented Generation RAG systems for building knowledge-aware AI applications. This course covers vector databases, semantic search, information retrieval, and prompt engineering for RAG. Learn how to ground AI models with external knowledge.",
    "descriptions": [
      "Master Retrieval-Augmented Generation RAG systems for building knowledge-aware AI applications. This course covers vector databases, semantic search, information retrieval, and prompt engineering for RAG. Learn how to ground AI models with external knowledge.",
      "Discover how to build RAG systems that enhance AI capabilities with relevant, accurate information retrieval."
    ],
    "skills": [
      "RAG fundamentals",
      "Vector embeddings",
      "Vector databases",
      "Semantic search",
      "Retrieval strategies",
      "Prompt augmentation",
      "Ranking and reranking",
      "Evaluation metrics",
      "Integration patterns",
      "Advanced RAG techniques"
    ],
    "featured": false
  },
  {
    "id": "37",
    "slug": "learn-react-hooks-by-building-tic-tac-toe",
    "title": "Learn React Hooks by building Tic Tac Toe",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Learn-React-Hooks-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-React-Hooks-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-React-Hooks-certificate.pdf",
    "summary": "Learn React Hooks by building a practical project – Tic Tac Toe game. This hands-on course covers useState, useEffect, useContext, and custom hooks through implementing a classic game. Perfect for mastering hooks through practical application.",
    "descriptions": [
      "Learn React Hooks by building a practical project – Tic Tac Toe game. This hands-on course covers useState, useEffect, useContext, and custom hooks through implementing a classic game. Perfect for mastering hooks through practical application.",
      "Master React Hooks through project-based learning and build interactive applications with modern React patterns."
    ],
    "skills": [
      "useState hook",
      "useEffect hook",
      "useContext hook",
      "Custom hooks creation",
      "useReducer hook",
      "useCallback and useMemo",
      "useRef hook",
      "Game logic implementation",
      "State management patterns",
      "Performance optimization"
    ],
    "featured": false
  },
  {
    "id": "38",
    "slug": "learn-react-styled-components",
    "title": "Learn React Styled Components",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "React"
    ],
    "image": "/img/Certificates/images/Learn-React-Styled-Components-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-React-Styled-Components-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-React-Styled-Components-certificate.pdf",
    "summary": "Master styled-components for styling React applications with CSS-in-JS. This course covers component-scoped styling, global styles, theming, and advanced styling patterns. Learn how styled-components simplifies styling and improves component reusability.",
    "descriptions": [
      "Master styled-components for styling React applications with CSS-in-JS. This course covers component-scoped styling, global styles, theming, and advanced styling patterns. Learn how styled-components simplifies styling and improves component reusability.",
      "Discover the power of styled-components and build beautifully styled, scalable React applications."
    ],
    "skills": [
      "Styled-components basics",
      "Component styling",
      "Dynamic styling",
      "Props and styling",
      "Theming support",
      "Global styles",
      "Extending styles",
      "Animation with styled-components",
      "Performance optimization",
      "Best practices"
    ],
    "featured": false
  },
  {
    "id": "39",
    "slug": "learn-svelte-js",
    "title": "Learn Svelte JS",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "Svelte"
    ],
    "image": "/img/Certificates/images/Learn-Svelte-JS-certificate-.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Svelte-JS-certificate-.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Svelte-JS-certificate-.pdf",
    "summary": "Learn Svelte, the modern JavaScript framework that compiles to vanilla JavaScript with exceptional performance. This course covers reactive variables, component state, event handlers, and building interactive applications with minimal boilerplate.",
    "descriptions": [
      "Learn Svelte, the modern JavaScript framework that compiles to vanilla JavaScript with exceptional performance. This course covers reactive variables, component state, event handlers, and building interactive applications with minimal boilerplate.",
      "Discover how Svelte's unique approach to web development enables faster, more efficient applications with less code."
    ],
    "skills": [
      "Svelte basics",
      "Reactive variables",
      "Component state",
      "Event handling",
      "Conditional rendering",
      "Loops and iteration",
      "Props and communication",
      "Lifecycle methods",
      "Animation and transitions",
      "Building complete applications"
    ],
    "featured": false
  },
  {
    "id": "40",
    "slug": "learn-tailwind-css",
    "title": "Learn Tailwind CSS",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents",
      "Tailwind CSS"
    ],
    "image": "/img/Certificates/images/Learn-Tailwind-CSS-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Tailwind-CSS-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Tailwind-CSS-certificate.pdf",
    "summary": "Master Tailwind CSS, a utility-first CSS framework for rapid UI development. This course covers utility classes, responsive design, customization, and building modern interfaces with Tailwind's powerful styling system.",
    "descriptions": [
      "Master Tailwind CSS, a utility-first CSS framework for rapid UI development. This course covers utility classes, responsive design, customization, and building modern interfaces with Tailwind's powerful styling system.",
      "Learn how Tailwind CSS accelerates development and enables rapid prototyping with a comprehensive set of pre-built utilities."
    ],
    "skills": [
      "Tailwind CSS basics",
      "Utility-first approach",
      "Responsive design",
      "Color systems",
      "Spacing and sizing",
      "Typography utilities",
      "Layout components",
      "Customization",
      "Optimization techniques",
      "Building with Tailwind"
    ],
    "featured": false
  },
  {
    "id": "41",
    "slug": "learn-to-build-a-mobile-app-with-firebase",
    "title": "Learn To Build A Mobile App with Firebase",
    "provider": "Scrimba",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Frameworks",
    "tags": [
      "Fullstack",
      "Firebase"
    ],
    "image": "/img/Certificates/images/Learn-To-Build-A-Mobile-App-with-Firebase-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-To-Build-A-Mobile-App-with-Firebase-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-To-Build-A-Mobile-App-with-Firebase-certificate.pdf",
    "summary": "Build mobile applications using Firebase as your backend. This course covers Firebase authentication, cloud firestore, real-time databases, cloud storage, and deployment. Learn to create scalable mobile apps with minimal backend infrastructure.",
    "descriptions": [
      "Build mobile applications using Firebase as your backend. This course covers Firebase authentication, cloud firestore, real-time databases, cloud storage, and deployment. Learn to create scalable mobile apps with minimal backend infrastructure.",
      "Master Firebase development and create production-ready mobile applications with powerful cloud services."
    ],
    "skills": [
      "Firebase setup and configuration",
      "Authentication methods",
      "Cloud Firestore fundamentals",
      "Real-time data synchronization",
      "Cloud Storage integration",
      "Security rules",
      "Hosting and deployment",
      "Functions and triggers",
      "Performance optimization",
      "Building complete mobile apps"
    ],
    "featured": false
  },
  {
    "id": "42",
    "slug": "learn-to-code-with-ai",
    "title": "Learn to Code with AI",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Learn-to-Code-with-AI-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-to-Code-with-AI-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-to-Code-with-AI-certificate.pdf",
    "summary": "Learn coding fundamentals using AI assistance tools and resources. This course teaches how to leverage AI tools like ChatGPT and other AI assistants to accelerate learning, solve problems, and enhance productivity in your development workflow.",
    "descriptions": [
      "Learn coding fundamentals using AI assistance tools and resources. This course teaches how to leverage AI tools like ChatGPT and other AI assistants to accelerate learning, solve problems, and enhance productivity in your development workflow.",
      "Discover how to effectively use AI as a learning companion and productivity tool in your coding journey."
    ],
    "skills": [
      "AI tools overview",
      "Effective prompting techniques",
      "Code generation with AI",
      "Debugging with AI assistance",
      "Learning with AI tutors",
      "AI for documentation",
      "Collaborative development with AI",
      "Ethical AI usage",
      "Limitations and best practices",
      "Building with AI-assisted development"
    ],
    "featured": false
  },
  {
    "id": "43",
    "slug": "learn-typescript",
    "title": "Learn TypeScript",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs",
      "TypeScript"
    ],
    "image": "/img/Certificates/images/Learn-TypeScript-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-TypeScript-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-TypeScript-certificate.pdf",
    "summary": "Master TypeScript, a typed superset of JavaScript that adds static typing and enhanced tooling. This course covers type annotations, interfaces, generics, and best practices for building scalable, maintainable applications with TypeScript.",
    "descriptions": [
      "Master TypeScript, a typed superset of JavaScript that adds static typing and enhanced tooling. This course covers type annotations, interfaces, generics, and best practices for building scalable, maintainable applications with TypeScript.",
      "Learn how TypeScript improves code quality, enhances developer experience, and catches errors before runtime."
    ],
    "skills": [
      "TypeScript basics",
      "Type annotations",
      "Interfaces and types",
      "Generics",
      "Classes and inheritance",
      "Enums and unions",
      "Decorators",
      "Module system",
      "Advanced type patterns",
      "Building with TypeScript"
    ],
    "featured": true
  },
  {
    "id": "44",
    "slug": "learn-ui-design",
    "title": "Learn UI Design",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend"
    ],
    "image": "/img/Certificates/images/Learn-UI-Design-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-UI-Design-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-UI-Design-certificate.pdf",
    "summary": "Learn the principles and practices of User Interface Design. This course covers design fundamentals, color theory, typography, layout systems, and creating intuitive interfaces that users love. Develop visual design skills using industry-standard tools.",
    "descriptions": [
      "Learn the principles and practices of User Interface Design. This course covers design fundamentals, color theory, typography, layout systems, and creating intuitive interfaces that users love. Develop visual design skills using industry-standard tools.",
      "Master UI design principles and create beautiful, functional interfaces that enhance user experience."
    ],
    "skills": [
      "Design fundamentals",
      "Color theory and palettes",
      "Typography in UI",
      "Layout and grids",
      "Component design",
      "Accessibility in design",
      "Design systems",
      "Prototyping",
      "User feedback and iteration",
      "Building design portfolios"
    ],
    "featured": false
  },
  {
    "id": "45",
    "slug": "learn-unit-testing",
    "title": "Learn Unit Testing",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs",
      "Unit Testing"
    ],
    "image": "/img/Certificates/images/Learn-Unit-Testing-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Unit-Testing-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Unit-Testing-certificate.pdf",
    "summary": "Master unit testing practices and frameworks for writing reliable, maintainable code. This course covers test-driven development, testing frameworks, mocking, and best practices for ensuring code quality and preventing regressions.",
    "descriptions": [
      "Master unit testing practices and frameworks for writing reliable, maintainable code. This course covers test-driven development, testing frameworks, mocking, and best practices for ensuring code quality and preventing regressions.",
      "Learn how to write effective unit tests that improve code quality and developer confidence."
    ],
    "skills": [
      "Unit testing fundamentals",
      "Test frameworks and tools",
      "Writing effective tests",
      "Mocking and stubbing",
      "Test-driven development",
      "Code coverage",
      "Async testing",
      "Integration testing",
      "Testing best practices",
      "Continuous integration testing"
    ],
    "featured": false
  },
  {
    "id": "46",
    "slug": "learn-vue",
    "title": "Learn Vue",
    "provider": "Scrimba",
    "category": "frontend",
    "categoryLabel": "Frontend & UI Engineering",
    "tags": [
      "Frontend",
      "Vue"
    ],
    "image": "/img/Certificates/images/Learn-Vue-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Vue-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Vue-certificate.pdf",
    "summary": "Learn Vue.js, a progressive JavaScript framework for building user interfaces. This course covers Vue fundamentals, reactive data binding, components, state management, and routing. Build interactive web applications with Vue's intuitive API.",
    "descriptions": [
      "Learn Vue.js, a progressive JavaScript framework for building user interfaces. This course covers Vue fundamentals, reactive data binding, components, state management, and routing. Build interactive web applications with Vue's intuitive API.",
      "Master Vue.js and create dynamic, interactive applications with a developer-friendly framework."
    ],
    "skills": [
      "Vue basics and setup",
      "Reactive data binding",
      "Components and composition",
      "Event handling",
      "Form handling",
      "Conditional rendering",
      "List rendering",
      "Lifecycle hooks",
      "Vuex state management",
      "Building complete applications"
    ],
    "featured": false
  },
  {
    "id": "47",
    "slug": "learnmarkdown",
    "title": "LearnMarkdown",
    "provider": "Scrimba",
    "category": "languages-tools",
    "categoryLabel": "Languages & Developer Tools",
    "tags": [
      "Tools & Langs"
    ],
    "image": "/img/Certificates/images/Learn-Markdown-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Learn-Markdown-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Learn-Markdown-certificate.pdf",
    "summary": "Master Markdown syntax and become proficient at writing documentation and content. This course covers all Markdown formatting, from basic text styling to complex tables and code blocks. Learn how Markdown is used across GitHub, blogs, and technical writing.",
    "descriptions": [
      "Master Markdown syntax and become proficient at writing documentation and content. This course covers all Markdown formatting, from basic text styling to complex tables and code blocks. Learn how Markdown is used across GitHub, blogs, and technical writing.",
      "Learn the essential skill of Markdown writing and create professional documentation and content."
    ],
    "skills": [
      "Markdown basics",
      "Text formatting",
      "Headings and structure",
      "Lists and nesting",
      "Code blocks",
      "Links and images",
      "Tables and alignment",
      "Blockquotes",
      "GitHub flavored Markdown",
      "Writing documentation"
    ],
    "featured": false
  },
  {
    "id": "48",
    "slug": "openai-s-assistants-api",
    "title": "OpenAI's Assistants API",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML",
      "AI Agents"
    ],
    "image": "/img/Certificates/images/Free-OpenAI's-Assistants-API-certificate.jpg",
    "secondaryImage": "/img/SketchUp-extensibility-3096.jpg",
    "pdf": "/img/Certificates/pdfs/Free-OpenAI's-Assistants-API-certificate.pdf",
    "summary": "Learn to build intelligent applications using OpenAI's Assistants API. This course teaches you how to create AI-powered assistants that can handle conversations, retrieve information, and perform actions. You'll understand how to integrate the Assistants API into your applications to provide powerful AI capabilities.",
    "descriptions": [
      "Learn to build intelligent applications using OpenAI's Assistants API. This course teaches you how to create AI-powered assistants that can handle conversations, retrieve information, and perform actions. You'll understand how to integrate the Assistants API into your applications to provide powerful AI capabilities.",
      "Discover the tools and techniques needed to build a new generation of AI applications that leverage OpenAI's cutting-edge language models through the Assistants API."
    ],
    "skills": [
      "Assistants API basics",
      "Creating and managing assistants",
      "Thread and message management",
      "Function calling capabilities",
      "Retrieval and knowledge bases",
      "Building conversational interfaces",
      "Error handling and edge cases",
      "Integration with applications",
      "Performance optimization",
      "Real-world use cases"
    ],
    "featured": false
  },
  {
    "id": "49",
    "slug": "prompt-engineering-for-web-developers",
    "title": "Prompt Engineering For Web Developers",
    "provider": "Scrimba",
    "category": "ai-ml",
    "categoryLabel": "AI & Machine Learning",
    "tags": [
      "AI / ML"
    ],
    "image": "/img/Certificates/images/Prompt-Engineering-For-Web-Developers-certificate.jpg",
    "secondaryImage": "/img/Certificates/images/Prompt-Engineering-For-Web-Developers-certificate.jpg",
    "pdf": "/img/Certificates/pdfs/Prompt-Engineering-For-Web-Developers-certificate.pdf",
    "summary": "Learn prompt engineering specifically tailored for web developers. This course teaches how to effectively communicate with AI tools, generate code, debug issues, and accelerate development. Master the art of asking AI the right questions to get better results.",
    "descriptions": [
      "Learn prompt engineering specifically tailored for web developers. This course teaches how to effectively communicate with AI tools, generate code, debug issues, and accelerate development. Master the art of asking AI the right questions to get better results.",
      "Discover how prompt engineering can revolutionize your web development workflow and boost productivity."
    ],
    "skills": [
      "Prompt engineering fundamentals",
      "Crafting effective prompts",
      "Code generation techniques",
      "Debugging with AI",
      "Architectural guidance from AI",
      "Testing with AI assistance",
      "Documentation generation",
      "Performance optimization prompts",
      "Security and best practices",
      "Advanced prompt patterns"
    ],
    "featured": false
  }
];

export const certificationCategories = [
  { id: 'all', label: 'All Recent Certifications' },
  { id: 'ai-ml', label: 'AI & Machine Learning' },
  { id: 'fullstack', label: 'Fullstack & Frameworks' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & Cloud' },
  { id: 'languages-tools', label: 'Languages & Tools' },
];
