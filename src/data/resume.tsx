import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mohan",
  initials: "M",
  url: "https://dillion.io",
  location: "India",
  locationLink: "https://www.google.com/maps",
  description:
    "Business & Data Analyst focused on data, automation, and AI-assisted development. I love turning real-world problems into practical, data-driven solutions and building useful digital products.",
  summary:
    "I’m pursuing a <u>B.Tech in Artificial Intelligence & Machine Learning</u>, with my professional interests focused on <u>business and data analytics</u>, <u>workflow automation</u>, and AI-assisted development. I enjoy understanding real-world problems, finding meaningful insights in data, and turning repetitive processes into <u>practical automated solutions</u>. My work spans <u>SQL, Power BI, Python, n8n, and modern AI tools</u>, alongside projects where I build and experiment with useful digital products.",
  avatarUrl: "/mohan.png",
  skills: [
    { name: "SQL", icon: "/skills/sql.svg" },
    { name: "Power BI", icon: "/skills/powerbi.svg" },
    { name: "Excel", icon: "/skills/excel.svg" },
    { name: "Python", icon: "/skills/python.svg" },
    { name: "Power Query", icon: "/skills/powerquery.svg" },
    { name: "DAX", icon: "/skills/dax.svg" },
    { name: "N8N", icon: "/skills/n8n.svg" },
    { name: "Power Automate", icon: "/skills/powerautomate.svg" },
    { name: "Workflow Automation", icon: "/skills/workflow.svg" },
    { name: "Pandas", icon: "/skills/pandas.svg" },
    { name: "NumPy", icon: "/skills/numpy.svg" },
    { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
    { name: "Supabase", icon: "/skills/supabase.svg" },
    { name: "OpenAI API", icon: "/skills/openai.svg" },
    { name: "Gemini API", icon: "/skills/gemini.svg" },
    { name: "Claude API", icon: "/skills/claude.svg" },
    { name: "Git/GitHub", icon: "/skills/github.svg" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohanmanishankar01@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manishankar0922",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mohan-mani-shankar-834970283",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mohanmanishankar01@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Technical Hub Pvt Ltd",
      href: "#",
      badges: [],
      location: "",
      title: "Data Analytics Intern",
      logoUrl: "/technicalhub.png",
      start: "May 2026",
      end: "Jul 2026",
      description: "",
    },
    {
      company: "GUESSS India",
      href: "#",
      badges: [],
      location: "",
      title: "Campus Ambassador",
      logoUrl: "/guesss.png",
      start: "Sep 2025",
      end: "Dec 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "Aditya Engineering College",
      href: "#",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      logoUrl: "/aditya-university.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Aditya Junior College",
      href: "#",
      degree: "Intermediate / Higher Secondary Education",
      logoUrl: "/aditya-jnr.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Supply Chain Analytics",
      href: "https://github.com/manishankar0922/SupplyChainAnalysticsDashbard",
      dates: "",
      active: true,
      description:
        "An interactive analytics dashboard for analyzing supplier performance, transportation costs, inventory levels, manufacturing and shipping costs, and defect rates.",
      technologies: [
        "Power BI",
        "Power Query",
        "DAX",
        "Excel",
        "Data Analytics",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/SupplyChainAnalysticsDashbard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/supply-chain.png",
      video: "",
    },
    {
      title: "AI Data Quality Pipeline",
      href: "https://github.com/manishankar0922/AI_DataQuality_pipeline",
      dates: "",
      active: true,
      description:
        "An AI-powered data quality solution that analyzes datasets, identifies quality issues and anomalies, and generates actionable insights through automated workflows.",
      technologies: [
        "n8n",
        "Python",
        "AI Automation",
        "Data Quality",
        "Next.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/AI_DataQuality_pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-data-quality.png",
      video: "",
    },
    {
      title: "AI Incident Triage",
      href: "https://github.com/manishankar0922/AI-Incident_Triage_and_Escalation_System",
      dates: "",
      active: true,
      description:
        "An automated incident management system that validates incoming incidents, uses AI for classification and analysis, checks historical patterns, and routes alerts for escalation.",
      technologies: [
        "n8n",
        "AI Automation",
        "Python",
        "PostgreSQL",
        "LLM",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/AI-Incident_Triage_and_Escalation_System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-incident-triage.png",
      video: "",
    },
    {
      title: "Bandit",
      href: "https://addons.mozilla.org/en-US/firefox/addon/bandit/",
      dates: "",
      active: true,
      description:
        "An AI prompt companion and desktop pet that helps users improve rough prompts, use reusable prompt templates, and work more effectively with AI tools.",
      technologies: [
        "AI Tools",
        "Prompt Engineering",
        "JavaScript",
        "Browser Extension",
        "Manifest V3",
      ],
      links: [
        {
          type: "Website",
          href: "https://addons.mozilla.org/en-US/firefox/addon/bandit/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manishankar0922/Bandit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bandit.png",
      video: "",
    },
    {
      title: "U9Restro",
      href: "https://u9restro.vercel.app/",
      dates: "",
      active: true,
      description:
        "A modern restaurant-focused digital product designed to provide a practical web experience for restaurant businesses and their customers.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://u9restro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/u9restro.png",
      video: "",
    },
    {
      title: "EasyPG",
      href: "https://github.com/manishankar0922/EasyPG",
      dates: "",
      active: true,
      description:
        "A multi-tenant PG and hostel management platform designed to simplify property operations, tenant management, occupancy tracking, rent workflows, and operational visibility.",
      technologies: [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "BullMQ",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/EasyPG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/easypg.png",
      video: "",
    },
    {
      title: "Tesla Employee Insights Dashboard",
      href: "https://github.com/manishankar0922/TeslaEmployesDashboard",
      dates: "",
      active: true,
      description:
        "An interactive employee analytics dashboard exploring attrition, overtime, salary distribution, hiring trends, demographics, and workforce patterns.",
      technologies: [
        "Power BI",
        "Data Analytics",
        "Data Visualization",
        "Excel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/TeslaEmployesDashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tesla-dashboard.png",
      video: "",
    },
    {
      title: "Magna Hospitals",
      href: "https://magna-hospitals.vercel.app/",
      dates: "",
      active: true,
      description:
        "A healthcare web application and hospital management platform designed for patient services, department navigation, and appointment inquiries.",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Healthcare",
      ],
      links: [
        {
          type: "Website",
          href: "https://magna-hospitals.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/manishankar0922/MagnaHospitals",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/magna-hospitals.png",
      video: "",
    },
    {
      title: "Patient Dashboard",
      href: "https://github.com/manishankar0922/Patient-Dashboard",
      dates: "",
      active: true,
      description:
        "An interactive dashboard project focused on presenting patient-related information through a clean visual analytics interface.",
      technologies: [
        "Power BI",
        "Data Analytics",
        "Healthcare Analytics",
        "Excel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/Patient-Dashboard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Fitness & Wellness Analytics Dashboard",
      href: "https://github.com/manishankar0922/GymMembersDashBoard",
      dates: "",
      active: true,
      description:
        "An interactive analytics dashboard exploring member demographics, activity levels, trainer allocation, emotional well-being, and fitness performance.",
      technologies: [
        "Power BI",
        "Data Analytics",
        "Data Visualization",
        "Excel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/manishankar0922/GymMembersDashBoard",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/fitness-wellness.png",
      video: "",
    },
  ],
} as const;
