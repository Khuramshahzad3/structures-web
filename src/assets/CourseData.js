import MADImage from "../assets/MADImage.jpg";
import WebImage from "../assets/WebImage.jpg";
import ShopifyImage from "../assets/ShopifyImage.jpg";
import FreeImage from "../assets/FreeImage.jpg";
import CanvaImage from "../assets/CanvaImage.png";
import CreativeImage from "../assets/CreativeImage.jpg";
import MSOImage from "../assets/MSOImage.jpg";
import CSImage from "../assets/CSImage.jpg";
import AIImage from "../assets/AIImage.jpg";
import MLImage from "../assets/MLImage.jpg";
import SDImage from "../assets/SDImage.jpg";
import WordPImage from "../assets/WordPImage.jpg";
import VEImage from "../assets/VEImage.jpg";
import UxImage from "../assets/UxImage.jpg";
import GDImage from "../assets/GDImage.jpg";
import MDImage from "../assets/MDImage.webp";
import EnglishImage from "../assets/EnglishImage.webp";
import AnimationImage from "../assets/AnimationImage.jpg";
import SEOImage from "../assets/SEOImage.jpg";
import SMMImage from "../assets/SMMImage.png";
import DSImage from "../assets/DSImage.jpeg";

const CourseData = [
  {
    id: 1,
    course: "Web Development",
    image: WebImage,
    routes: "webdev",
    Price: "20,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Web Development",
      "HTML, CSS, JavaScript Basics",
      "Responsive Design",
      "Frontend Frameworks",
      "Backend Development",
      "Databases and APIs",
      "Version Control Systems",
      "Final Project",
    ],
  },
  {
    id: 2,
    course: "SHOPIFY",
    image: ShopifyImage,
    routes: "shopify",
    Price: "20,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Shopify",
      "Customizing Themes",
      "Product Management",
      "Managing Payments and Shipping",
      "SEO for Shopify Stores",
      "Shopify Marketing Tools",
      "Testing and Launching",
      "Post-Launch Maintenance",
    ],
  },
  {
    id: 3,
    course: "WORDPRESS DEVELOPMENT",
    image: WordPImage,
    routes: "wordpressdev",
    Price: "20,000/-",
    duration: "2 months",
    outline: [
      "Introduction to WordPress",
      "Setting Up Themes",
      "Managing Plugins",
      "Content Creation",
      "Customizing with CSS and JS",
      "WordPress SEO",
      "E-commerce Integration",
      "Final Project",
    ],
  },
  {
    id: 4,
    course: "FREELANCING",
    image: FreeImage,
    routes: "freelancing",
    Price: "15,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Freelancing",
      "Setting up Profiles",
      "Building a Portfolio",
      "Finding Clients",
      "Managing Payments",
      "Handling Contracts",
      "Communication Skills",
      "Project Management",
    ],
  },
  {
    id: 5,
    course: "CONTENT WRITING",
    image: CreativeImage,
    routes: "contentwriting",
    Price: "10,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Content Writing",
      "SEO Writing",
      "Writing for Different Platforms",
      "Editing and Proofreading",
      "Blogging",
      "Copywriting",
      "Content Strategy",
      "Building a Writing Portfolio",
    ],
  },
  {
    id: 6,
    course: "MICROSOFT OFFICE (BASIC IT)",
    image: MSOImage,
    routes: "msoffice",
    Price: "18,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Microsoft Office Suite",
      "Microsoft Word Basics",
      "Microsoft Excel Basics",
      "Microsoft PowerPoint Basics",
      "Data Management",
      "Email Handling with Outlook",
      "OneDrive and SharePoint",
      "Final Project",
    ],
  },
  {
    id: 7,
    course: "CYBER SECURITY",
    image: CSImage,
    routes: "cybersecurity",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Cybersecurity",
      "Network Security Fundamentals",
      "Malware and Phishing Attacks",
      "Cryptography",
      "Cloud Security",
      "Ethical Hacking",
      "Cybersecurity Tools",
      "Incident Response",
    ],
  },
  {
    id: 8,
    course: "ARTIFICIAL INTELLIGENCE",
    image: AIImage,
    routes: "ai",
    Price: "30,000/-",
    duration: "2 months",
    outline: [
      "Introduction to AI",
      "AI Algorithms",
      "NLP and Neural Networks",
      "Machine Learning in AI",
      "AI in Robotics",
      "AI Ethics",
      "Building an AI Model",
      "Final AI Project",
    ],
  },
  {
    id: 9,
    course: "Machine Learning",
    image: MLImage,
    routes: "machinelearning",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Model Evaluation",
      "Cross-validation",
      "ML Applications",
      "Final ML Project",
    ],
  },
  {
    id: 10,
    course: "SOFTWARE DEVELOPMENT",
    image: SDImage,
    routes: "softwaredevelopment",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to SDLC",
      "Programming Concepts",
      "Object-Oriented Programming",
      "Version Control",
      "Debugging",
      "Software Testing",
      "Agile Methodologies",
      "Final Project",
    ],
  },
  {
    id: 11,
    course: "MOBILE APP DEVELOPMENT",
    image: MADImage,
    routes: "mobileappdevelopment",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Mobile App Development",
      "Setting Up Development Environment",
      "UI Design Principles",
      "Working with APIs",
      "User Authentication",
      "Mobile App Performance",
      "App Store Deployment",
      "Final Mobile App Project",
    ],
  },
  {
    id: 12,
    course: "CANVA DESIGN",
    image: CanvaImage,
    routes: "canvadesign",
    Price: "11,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Canva",
      "Designing Social Media Graphics",
      "Logo and Banner Design",
      "Presentation Design",
      "Business Cards and Flyers",
      "YouTube Thumbnails",
      "Poster Design",
      "Final Canva Project",
    ],
  },
  {
    id: 13,
    course: "VIDEO EDITING",
    image: VEImage,
    routes: "videoediting",
    Price: "18,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Video Editing",
      "Advanced Editing Techniques",
      "Audio Editing",
      "Color Grading",
      "Motion Graphics",
      "Green Screen Effects",
      "Final Video Project",
    ],
  },
  {
    id: 14,
    course: "UI/UX DESIGNING",
    image: UxImage,
    routes: "ui/uxdesigning",
    Price: "20,000/-",
    duration: "2 months",
    outline: [
      "Introduction to UI/UX Design",
      "User Research",
      "Wireframing",
      "Design Tools",
      "Typography and Color Theory",
      "Prototyping",
      "User Testing",
      "Final UI/UX Project",
    ],
  },
  {
    id: 15,
    course: "GRAPHIC DESIGNING",
    image: GDImage,
    routes: "graphicdesigning",
    Price: "22,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Graphic Design",
      "Logo Design",
      "Branding",
      "Social Media Graphics",
      "Print Design",
      "Portfolio Development",
      "Color Theory",
      "Final Design Project",
    ],
  },
  {
    id: 16,
    course: "Motion Graphic",
    image: MDImage,
    routes: "motiongraphic",
    Price: "20,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Motion Graphics",
      "Keyframing and Animation Basics",
      "2D and 3D Animation",
      "Effects and Transitions",
      "Rendering and Compositing",
      "Audio Syncing",
      "Final Motion Graphic Project",
    ],
  },
  {
    id: 17,
    course: "SOCIAL MEDIA MARKETING",
    image: SMMImage,
    routes: "socialmediamarketing",
    Price: "22,000/-",
    duration: "2 months",
    outline: [
      "Introduction to SMM",
      "Facebook & Instagram Ads",
      "Business Planning and Analysis",
      "YouTube Monetization",
      "LinkedIn Ads",
      "Followers & Likes Strategies",
      "Content Creation for SMM",
      "Final SMM Project",
    ],
  },
  {
    id: 18,
    course: "SEARCH ENGINE OPTIMIZATION (SEO)",
    image: SEOImage,
    routes: "seo",
    Price: "22,000/-",
    duration: "2 months",
    outline: [
      "Introduction to SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Keyword Research",
      "SEO Tools and Analytics",
      "Content Optimization",
      "Link Building",
      "Final SEO Project",
    ],
  },
  {
    id: 19,
    course: "ENGLISH LANGUAGE COURSES",
    image: EnglishImage,
    routes: "english",
    Price: "15,000/-",
    duration: "2 months",
    outline: [
      "Introduction to English Language",
      "Grammar and Vocabulary",
      "Speaking Skills",
      "Listening and Comprehension",
      "Writing Techniques",
      "Reading Practice",
      "Pronunciation",
      "Final English Language Project",
    ],
  },
  {
    id: 20,
    course: "DATA SCIENCE",
    image: DSImage,
    routes: "datascience",
    Price: "30,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Data Science",
      "Data Analysis Techniques",
      "Data Visualization",
      "Statistical Methods",
      "Machine Learning in Data Science",
      "Big Data Concepts",
      "Python for Data Science",
      "Final Data Science Project",
    ],
  },
  {
    id: 21,
    course: "Animation",
    image: AnimationImage,
    routes: "animation",
    Price: "30,000/-",
    duration: "3 months",
    outline: [
      "Introduction to Animation",
      "2D Animation Techniques",
      "3D Animation Basics",
      "Character Animation",
      "Visual Effects (VFX)",
      "Storyboarding and Scriptwriting",
      "Animation Tools and Software",
      "Final Animation Project",
    ],
  },
  {
    id: 22,
    course: "SQA (Software Quality Assurance)",
    image: DSImage,
    routes: "sqa",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Software Quality Assurance",
      "Software Testing Lifecycle",
      "Manual Testing Techniques",
      "Automation Testing Tools",
      "Bug Tracking and Reporting",
      "Testing Strategies and Best Practices",
      "Test Case Design and Execution",
      "Final SQA Project",
    ],
  },
  {
    id: 23,
    course: "Project Management",
    image: AnimationImage,
    routes: "projectmanagement",
    Price: "25,000/-",
    duration: "2 months",
    outline: [
      "Introduction to Project Management",
      "Project Planning and Scheduling",
      "Resource Allocation and Budgeting",
      "Risk Management",
      "Agile and Scrum Methodologies",
      "Project Management Tools",
      "Team Collaboration and Leadership",
      "Final Project Management Project",
    ],
  },
];

export default CourseData;
