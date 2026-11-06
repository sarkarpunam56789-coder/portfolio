// ======================================================================
// ALL EDITABLE TEXT LIVES HERE. Change the words, save, commit: the site
// updates. The resume is NOT edited here: replace public/resume.pdf.
// ======================================================================
export const site = {
  name: 'Punam Sarkar',
  title: 'Punam Sarkar — UI/UX Designer, open to paid internships',
  description: 'UI/UX designer with a 3-month internship at Scratchly designing CRM and dashboard interfaces. Available for paid UI/UX internships and junior roles.',
  email: 'sarkarpunam56789@gmail.com',
  linkedin: 'https://linkedin.com/in/punamsarkar',
  behance: 'https://behance.net/punamsarkar3',
  location: 'Agartala, Tripura',
  resume: { file: '/resume.pdf', downloadName: 'Punam_Sarkar_UIUX_Resume.pdf' },

  hero: {
    badge: 'Available for paid UI/UX internships and junior roles',
    title: 'UI/UX designer for CRM, dashboards and product interfaces.',
    text: 'I’m Punam Sarkar. I spent three months as a UX/UI Design Intern at Scratchly, designing CRM workflows, dashboards and inventory screens for a real product. Google UX Design certified. I work in Figma.',
    ledgerTitle: 'Scratchly internship',
    ledgerText: 'Jun–Aug 2026 · 3 months · UX/UI Design Intern. Designed:',
    ledger: ['Leads', 'Deals', 'Activities', 'Messages', 'Reports', 'Team workflows', 'Inventory management', 'Landing page', 'User flows'],
  },

  about: {
    title: 'Thoughtful design, driven by curiosity.',
    paragraphs: [
      'I’m Punam, a UX/UI designer who enjoys making digital products easier to understand and use.',
      'During my three-month internship at Scratchly, I worked on CRM workflows, dashboards, inventory management interfaces, landing pages and user flows. That experience showed me how design decisions connect user needs with business requirements.',
      'I enjoy exploring problems, organizing information and turning ideas into clear, functional interfaces. I’m still growing my skills in UX, UI and product design, and I’m looking for a paid internship or junior role where I can do that on a real product team.',
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
    title: 'Hire me for a paid UI/UX internship',
    text: 'I’m available for paid UI/UX internships and junior designer roles. Email me, find me on LinkedIn or Behance, or read my resume.',
  },

  // ---------------------------------------------------------------
  // PROJECTS. To add screenshots: put the image in public/images and add
  // { src:'/images/name.jpg', alt:'what it shows', caption:'…', w:1200, h:800 }
  // to that project’s "images" list. An empty list is hidden automatically.
  // ---------------------------------------------------------------
  projects: [
    {
      slug: 'scratchly-crm-dashboard', title: 'Scratchly CRM & Dashboard', tag: 'Internship project · Web app',
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
      slug: 'earthpulse-ai', title: 'EarthPulse AI', tag: 'Self-initiated concept · Web platform · Version 2.0',
      card: 'A sustainability platform concept that turns environmental data into one Earth score and a clear next action. Includes an interactive Version 2.0 prototype.',
      intro: 'EarthPulse AI is a self-initiated product concept that makes sustainability insights more accessible through AI. Version 1 covered brand, landing page and dashboard. Version 2.0 rebuilds the idea around one Earth score and a next best action.',
      meta: [['Role', 'UX/UI Designer'], ['Version 1', '2 months, Figma'], ['Version 2.0', 'Interactive prototype'], ['Tools', 'Figma, Claude AI']],
      cover: { src: '/images/ep-dashboard.jpg', w: 1091, h: 748 },
      embed: { src: '/earthpulse-v2.html', title: 'EarthPulse AI Version 2.0 interactive case study and prototype', heading: 'Version 2.0: interactive case study and prototype', text: 'Connect sources, see a score, add the recommended action and try the AI Coach. All numbers are illustrative sample data and the coach uses scripted replies.' },
      images: [
        { src: '/images/ep-hero.jpg', alt: 'EarthPulse AI version 1 landing page hero with headline and two buttons over a green globe photo', caption: 'Version 1: landing page hero', w: 1091, h: 639 },
        { src: '/images/ep-journey.jpg', alt: 'Five-stage user journey: Discovers, Landing page visitor, Signs up and connects accounts, First dashboard view, Week 3 habit formed', caption: 'Version 1: concept user journey for the persona Maya', w: 1091, h: 411 },
        { src: '/images/ep-dashboard.jpg', alt: 'EarthPulse version 1 dashboard with sidebar, summary cards, carbon chart, Earth score ring, and goals and community panels', caption: 'Version 1: dashboard (sample data)', w: 1091, h: 748 },
        { src: '/images/ep-steps.jpg', alt: 'Three setup steps: Connect your data, See your impact, Act on AI insights', caption: 'Version 1: three-step setup', w: 1091, h: 374 },
      ],
      sections: [
        ['Overview', 'EarthPulse AI is a concept platform that explores how artificial intelligence can support sustainability by making environmental insights accessible and actionable. The goal was a modern digital experience that explains complex information simply.'],
        ['The challenge', 'Sustainability platforms often present large amounts of technical information that can feel overwhelming. The challenge was to design an experience that feels approachable while staying credible and clear.'],
        ['Goals', ['Create a modern AI-focused brand identity', 'Present sustainability insights in an easy-to-understand format', 'Design an engaging landing page', 'Build trust through clear communication and visual hierarchy']],
        ['Process', 'I researched sustainability-focused platforms and AI products to understand common design patterns and user expectations. I then created wireframes, explored visual directions and developed the final interface. To plan the experience, I mapped a concept user journey for a persona, Maya, from discovering the product to forming a habit in week three. The persona is a concept based on my review of existing tools, not on interviews.'],
        ['Design decisions', ['One score: a single 0–100 Earth score answers “how am I doing?” before showing detail.', 'Next best action: a recommendation next to the score, with a “Why this?” explanation.', 'Three-step setup: connect your data, see your impact, act on AI insights, with a privacy panel before any data is requested.', 'Deep green with separate data colours, and 44px minimum tap targets.']],
        ['What changed in Version 2.0', ['Removed invented statistics, testimonials and unproven research claims.', 'Added a next best action, onboarding, an AI Coach and a mobile dashboard.', 'Fixed contradictory dashboard data and inconsistent labels.']],
        ['Information architecture', ['Dashboard: Overview, Carbon tracker, Water usage, Waste tracking, Sustainability score', 'My goals: Goals, Achievements, Milestones, Eco challenge', 'Chat assistant: AI coach, Action plans, Recommendations, Insights feed', 'Community: Leaderboard, Team challenges, Friends, Local groups', 'Account: Report and export, Integration, Settings, Billing']],
        ['What I would test next', ['Can a new user connect a source and see a score quickly?', 'Do users understand what the Earth score means?', 'Which suggested action do people choose first?']],
        ['A note on the data', 'This is a concept and has not been tested with users. All numbers shown are illustrative sample data, not real user or environmental data.'],
      ],
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
