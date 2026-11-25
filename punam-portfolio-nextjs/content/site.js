// ======================================================================
// ALL EDITABLE TEXT LIVES HERE. Change the words, save, commit: the site
// updates. The resume is NOT edited here: replace public/resume.pdf.
// ======================================================================
export const site = {
  name: 'Punam Sarkar',
  title: 'Punam Sarkar — UI/UX Designer | Product Designer',
  description: 'UI/UX Designer and Product Designer designing CRM, dashboard and product interfaces, with experience at Scratchly and a product design case study, EarthPulse AI. Open to UI/UX Designer and Product Designer roles.',
  email: 'sarkarpunam56789@gmail.com',
  linkedin: 'https://linkedin.com/in/punamsarkar',
  behance: 'https://behance.net/punamsarkar3',
  location: 'Agartala, Tripura',
  resume: { file: '/resume.pdf', downloadName: 'Punam_Sarkar_UIUX_Resume.pdf' },

  hero: {
    badge: 'Open to UI/UX Designer and Product Designer roles',
    title: 'UI/UX Designer | Product Designer',
    text: 'I’m Punam Sarkar. I design CRM workflows, dashboards and product interfaces in Figma, and I’ve worked on a real product at Scratchly. Google UX Design certified.',
    photo: { src: '/images/punam-profile.jpg', alt: 'Portrait of Punam Sarkar', w: 900, h: 1200 },
    photoCaption: 'Punam Sarkar',
    photoRole: 'UI/UX Designer | Product Designer',
  },

  about: {
    title: 'Thoughtful design, driven by curiosity.',
    paragraphs: [
      'I’m Punam, a UX/UI designer who enjoys making digital products easier to understand and use.',
      'At Scratchly, I worked for three months on CRM workflows, dashboards, inventory management interfaces, landing pages and user flows. That experience showed me how design decisions connect user needs with business requirements.',
      'I enjoy exploring problems, organizing information and turning ideas into clear, functional interfaces. I’m still growing my skills in UX, UI and product design, and I’m looking for a UI/UX Designer or Product Designer role where I can do that on a real product team.',
    ],
  },

  experience: [{
    role: 'UX/UI Design Intern', company: 'Scratchly', dates: 'Jun–Aug 2026 (3 months)',
    bullets: [
      'Designed CRM screens in Figma for leads, deals, activities, messages, reports and team workflows.',
      'Created inventory-management screens, landing-page UI and user flows from product requirements.',
      'Iterated on layouts and navigation so multi-step business tasks were easier to follow.',
    ],
    link: { href: '/projects/scratchly-crm-dashboard', label: 'Read the case study' },
  }],

  skills: [
    { group: 'UX and product', items: ['User flows', 'Information architecture', 'Wireframing', 'High-fidelity prototyping', 'Interaction design', 'UX problem framing'] },
    { group: 'UI design', items: ['Interface design', 'Dashboard design', 'CRM design', 'Landing pages', 'Mobile UI', 'Visual hierarchy'] },
    { group: 'Tools', items: ['Figma (Auto Layout, components, prototyping)', 'Framer', 'Notion', 'Claude AI'] },
  ],

  education: [{ name: 'Bachelor of Computer Applications (BCA)', by: 'Manipal University Jaipur', when: 'Expected 2026' }],
  certificates: [{ name: 'Google UX Design Professional Certificate', by: 'Coursera', when: 'November 2025' }],

  contact: {
    title: 'Looking for a UI/UX or Product Designer?',
    text: 'I’m looking for UI/UX Designer and Product Designer roles, and I’m also open to suitable internship opportunities. Email me, find me on LinkedIn or Behance, or read my resume.',
  },

  // ---------------------------------------------------------------
  // PROJECTS. To add screenshots: put the image in public/images and add
  // { src:'/images/name.jpg', alt:'what it shows', caption:'…', w:1200, h:800 }
  // to that project’s "images" list. An empty list is hidden automatically.
  // ---------------------------------------------------------------
  projects: [
    {
      slug: 'scratchly-crm-dashboard', title: 'Scratchly CRM & Dashboard', tag: 'Live project · Web app',
      url: 'https://www.scratchlycrm.app/', cta: 'View live project',
      card: 'Screens and flows for Leads, Deals, Activities, Messages, Reports, Team workflows and inventory management, designed during my 3-month internship.',
      intro: 'A real product project from my UX/UI design internship at Scratchly: CRM workflows, dashboards and business management interfaces that simplify complex operations.',
      meta: [['Role', 'UX/UI Design Intern'], ['Duration', 'Jun–Aug 2026 (3 months)'], ['Tools', 'Figma, Notion'], ['Type', 'Internship project']],
      chips: ['Leads', 'Deals', 'Activities', 'Messages', 'Reports', 'Team workflows', 'Inventory management', 'Landing page', 'User flows'],
      images: [],
      sections: [
        ['Overview', 'Scratchly is a product-focused project I worked on during my UX/UI internship. My work involved designing CRM workflows, dashboards, inventory management interfaces, landing pages and user flows to support business operations and improve usability.'],
        ['The challenge', 'CRM platforms hold large amounts of data and many workflows. The challenge was to organize information so users can quickly reach important tasks, track progress and manage business activities without feeling overwhelmed.'],
        ['Design goals', ['Make workflows efficient to follow', 'Design clear dashboard experiences', 'Simplify CRM navigation', 'Create scalable interfaces for business operations', 'Support decisions through organized information architecture']],
        ['My responsibilities', ['CRM design', 'Dashboard design', 'Inventory management interfaces', 'User flow creation', 'Landing page design', 'Wireframing and UI design', 'Design iterations based on product requirements']],
        ['Process', 'I started by understanding product requirements and business workflows. After mapping user flows, I created wireframes and dashboard structures focused on clarity and usability, then refined them through multiple iterations so information stayed organized and easy to navigate.'],
        ['Design decisions', 'I focused on information hierarchy and workflow efficiency. Clear navigation, structured layouts and consistent components were used to help users manage leads, activities, inventory and reports.'],
        ['What I delivered', 'CRM and dashboard designs covering leads, activities, inventory and reports, refined over several iterations against product requirements.'],
        ['What I learned', 'Working from real product requirements taught me to balance user needs with business goals.'],
      ],
    },
    {
      slug: 'earthpulse-ai', external: true,
      title: 'EarthPulse AI — Product Design Case Study', tag: 'Product design case study · Web platform',
      url: 'https://earthpulse-ai-product-design-case-s-psi.vercel.app/', cta: 'View case study',
      card: 'An India-first sustainability platform designed to help individuals understand and improve their environmental impact through carbon, water and waste tracking, personalized insights and sustainable actions.',
      chips: ['Carbon tracking', 'Water tracking', 'Waste tracking', 'Personalized insights', 'Sustainable actions'],
      highlights: ['Product design', 'UX thinking', 'Problem-solving'],
    },
    {
      slug: 'daily-habit-journal', title: 'Daily Habit Journal', tag: 'Self-initiated concept · Mobile app',
      card: 'A lightweight habit tracker and journal designed so daily logging feels simple and motivating.',
      intro: 'A habit-tracking and journaling mobile app concept that helps users build routines, reflect on progress and stay consistent through a simple, motivating experience.',
      meta: [['Role', 'UI/UX Designer'], ['Duration', '2 weeks'], ['Tools', 'Figma'], ['Type', 'Self-initiated concept']],
      images: [],
      sections: [
        ['Overview', 'Daily Habit Journal is a mobile app concept that helps users build positive habits, track daily progress and reflect on personal growth, without unnecessary complexity.'],
        ['The challenge', 'Many habit and journaling apps become hard to keep up because they demand too much effort or show too much at once. The challenge was an experience that feels lightweight, motivating and easy to use every day.'],
        ['Goals', ['Encourage daily habit tracking', 'Make journaling simple and accessible', 'Encourage consistent daily use', 'Create a clean, distraction-free experience', 'Help users see their progress over time']],
        ['Process', 'I explored how people track habits and keep daily routines, then mapped user flows, created wireframes and designed interfaces focused on simplicity, clarity and motivation.'],
        ['Design decisions', 'The design is minimal and easy to use. Clean layouts, clear visual hierarchy and encouraging progress indicators help users log habits quickly, review progress and stay motivated without feeling pressured.'],
        ['Outcome', 'A mobile journaling and habit-tracking experience that combines daily reflection, goal tracking and progress visualization in a way that feels intuitive and rewarding to use.'],
      ],
    },
  ],
};
