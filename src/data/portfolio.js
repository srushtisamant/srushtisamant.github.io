// All site content lives here. Wrap text in **double asterisks** to make it bold.

export const profile = {
  name: "Srushti Samant",
  role: "Software Development Engineer at Amazon",
  headline:
    "I build cloud-native backend services, secure AI integrations, and enterprise applications, mostly in Python, Java, and C#/.NET on AWS.",
  facts: [
    { value: "4+", label: "years of experience" },
    { value: "22 min → 30 s", label: "emergency response time at Hewlett Packard Enterprise" },
    { value: "1,200+", label: "tests automated for British Telecom" },
    { value: "3.9", label: "GPA, MS in Computer Science" },
  ],
  image: "/images/about_img.png",
  imageAlt: "Illustration of Srushti Samant working at a laptop",
  email: "srushtisamant.ss@gmail.com",
  resume:
    "https://drive.google.com/file/d/1H9XlvKAi2kcMrpJrJIsnspWChV4niYrw/view?usp=sharing",
  github: "https://github.com/srushtisamant",
  linkedin: "https://www.linkedin.com/in/srushti-samant/",
};

export const navItems = [
  { id: "about", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const projects = [
  {
    name: "Posturelytics.AI",
    image: "/images/posturelyticsAI.png",
    alt: "Posturelytics.AI home page",
    description:
      "Built a full-stack app with Vue.js, FastAPI, and MongoDB to track posture and attention in real time using MediaPipe, with 95%+ accuracy, GPT-4 feedback, charts, and a live anatomical heatmap.",
    stack: ["Vue.js", "FastAPI", "MongoDB", "AI", "MediaPipe", "Python"],
    source: "https://github.com/srushtisamant/posturelytics-ai",
  },
  {
    name: "AI1y",
    image: "/images/AI1y.png",
    alt: "AI1y Chrome extension running on a news site",
    description:
      "AI1y (pronounced Ally) is a Chrome extension that uses AI to make websites more accessible for visually impaired users through smart voice feedback, page summarization, and structural awareness.",
    stack: ["JavaScript", "AI", "Chrome Extension"],
    source: "https://github.com/srushtisamant/AI1y",
  },
];

export const experience = [
  {
    title: "Software Development Engineer",
    logo: "/images/amazon_logo.svg",
    logoAlt: "Amazon",
    date: "Sep 2025 – Present",
    bullets: [
      "Enabled secure enterprise AI assistant integrations supporting **91K+** token issuances by implementing MCP authentication using OAuth 2.0/PKCE, OIDC, Python AWS Lambda, and DynamoDB.",
      "Supported **734K** authorization checks with **zero** authorizer Lambda errors by building a CloudFront API entry point connecting ECS and Lambda services with OIDC and AWS CDK.",
      "Reduced AI assistant setup to a **single command** and eliminated **860** duplicate lines by building a Python standard-library MCP proxy and automating versioned releases with AWS CDK and S3.",
      "Contributed to reducing backend 5XX errors from approximately **25%** to below **0.01%** at over **200K** requests/day by improving token refresh, SSE handling, session recovery, and identity mapping.",
      "Increased enterprise search results per query by **50%** by enriching location metadata, supporting single-character queries, and adding sources to the indexing pipeline.",
    ],
  },
  {
    title: "Instructional Assistant",
    logo: "/images/uncc_logo.png",
    logoAlt: "University of North Carolina at Charlotte",
    date: "Sep 2024 – May 2025",
    bullets: [
      "Mentored **60+** students in data structures, algorithms, and system design through office hours, weekly labs, and classroom instruction.",
    ],
  },
  {
    title: "Software Development Intern",
    logo: "/images/miac_logo.png",
    logoAlt: "MIAC Analytics",
    date: "June 2024 – Aug 2024",
    bullets: [
      "Improved pricing-tool usability by migrating legacy C#/.NET desktop applications to an Angular web platform, increasing user accuracy by **30%**.",
      "Built .NET Web APIs for mortgage pricing workflows with JSON validation, error handling, and data persistence.",
    ],
  },
  {
    title: "Research Assistant",
    logo: "/images/uncc_logo.png",
    logoAlt: "University of North Carolina at Charlotte",
    date: "Jan 2024 – May 2024",
    bullets: [
      "Built a Streamlit cause-and-effect analysis dashboard to identify academic performance trends with **90%** accuracy across **30+** student gradebook datasets.",
      "Visualized statistical relationships, including R-squared and p-values, using interactive Pyvis graphs for faculty research.",
    ],
  },
  {
    title: "Software Engineer II",
    logo: "/images/accenture_logo.png",
    logoAlt: "Accenture",
    date: "Mar 2021 – Jul 2023",
    bullets: [
      "Led automation of **1,200+** UI and API test cases for British Telecom, reducing QA effort by **70%** and improving test reliability.",
      "Optimized Jenkins CI/CD pipelines, enabling **50%** faster release cycles and reducing integration failures.",
    ],
  },
  {
    title: "Software Engineer Intern",
    logo: "/images/hpe_logo.png",
    logoAlt: "Hewlett Packard Enterprise",
    date: "Mar 2020 – Sep 2020",
    bullets: [
      "Built a fault-tolerant emergency response system supporting **20+** hospitals using Java, Hibernate, REST APIs, and SQL.",
      "Reduced response time from **22 minutes to 30 seconds** by optimizing SQL, refactoring alerting logic, and removing synchronous work from the critical path.",
    ],
  },
];

export const education = [
  {
    title: "Master of Science in Computer Science",
    subtitle: "University of North Carolina at Charlotte",
    logo: "/images/uncc_logo.png",
    logoAlt: "University of North Carolina at Charlotte",
    date: "Aug 2023 – May 2025",
    gpa: "GPA: 3.9/4.0",
    coursework: [
      "Cloud Computing for Data Analysis",
      "Parallel Computing",
      "Machine Learning",
      "Software System Design and Implementation",
      "Network-Based Application Development",
    ],
  },
  {
    title: "Bachelor of Engineering in Information Technology",
    subtitle: "University of Pune, India",
    logo: "/images/sppu_logo.png",
    logoAlt: "University of Pune",
    date: "Aug 2016 – May 2020",
    gpa: "GPA: 3.7/4.0",
    coursework: [
      "Information and Cyber Security",
      "Machine Learning and Applications",
      "Software Design and Modeling",
      "Distributed Computing System",
      "Ubiquitous Computing",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "C#",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Web",
    skills: [
      "Node.js",
      "FastAPI",
      ".NET",
      "REST APIs",
      "Angular",
      "React",
      "Vue.js",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle",
      "BigQuery",
      "DynamoDB",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, CloudFront, ECS, CDK, S3, SSM, SQS, SNS, CloudWatch)",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Pub/Sub",
      "DLQ",
    ],
  },
  {
    title: "Security & AI",
    skills: [
      "MCP",
      "OAuth 2.0",
      "PKCE",
      "OIDC",
      "TLS",
      "AI tool integrations",
      "Feature flags",
    ],
  },
];

export const certifications = [
  {
    name: "Microsoft Azure: Azure Data Fundamentals (DP-900)",
    issued: "Feb 2023",
    id: "I6505-0896",
    url: "https://www.credly.com/badges/27180616-de8d-422f-b79d-db3a283f505a",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issued: "Jan 2023",
    id: "I587-8208",
    url: "https://www.credly.com/badges/9e8c49cb-c939-4eed-a836-2fc363f1285c/public_url",
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issued: "Oct 2022",
    id: "I449-9084",
    url: "https://www.credly.com/badges/7eb63e73-c6cf-4dfb-992e-8c9bcbfbf2f9",
  },
  {
    name: "Introduction to Programming Using Java",
    issued: "Oct 2020",
    id: "H539-5142",
    url: "https://www.credly.com/badges/c28d5784-33f1-4c02-81e9-45e9f7f144ef/public_url",
  },
];
