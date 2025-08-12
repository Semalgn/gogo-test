const navLinks = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Cources",
    link: "#cources",
  },
  {
    name: "Gallery",
    link: "#gallery",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "FAQs",
    link: "#faqs",
  },
];

const words = [
  { text: "Programming " },
  { text: "Web Development " },
  { text: "Graphics  Design" },
  { text: "Video Editing" },
  { text: "Robotics" },
  { text: "Photography" },
  { text: "Language" },
  { text: "Basic Computer" },
];

const counterItems = [
  { value: 400, suffix: "+", label: "Students" },
  { value: 200, suffix: "+", label: "Certified" },
  { value: 10, suffix: "+", label: "Courses" },
  { value: 12, suffix: "+", label: "Membership" },
];

const abilities = [
  {
    imgPath: "/images/who-we-are.png",
    title: "Who we are?",
    desc: "Googo Tech School is a modern, impact-driven digital education center based in Hossana, Ethiopia, dedicated to equipping the next generation with in-demand tech skills and creative capabilities.",
  },
  {
    imgPath: "/images/mission.png",
    title: "Mission ",
    desc: "Our mission is to deliver accessible, practical, and high-quality digital education that equips learners with the skills, confidence, and mindset needed to succeed in today's fast changing world.",
  },
  {
    imgPath: "/images/vision.png",
    title: "vision",
    desc: "A leading center of digital excellence in Ethiopia and beyond empowering individuals with practical tech and creative skills that unlock personal growth and sustainable impact in community.",
  },
];

const MembersCard = [
  {
    name: "Henock Adane",
    imageSrc: "images/heni.jpg",
    responsiblity: "Software Developer",
  },
  {
    name: "Deginet Haile",
    imageSrc: "images/dege.jpg",
    responsiblity: "Software Developer",
  },
  {
    name: "Walombo Solomon",
    imageSrc: "images/wale.jpg",
    responsiblity: "Graphics Designer",
  },
  {
    name: "Bereket Assefa",
    imageSrc: "images/beki.jpg",
    responsiblity: "Graphics Designer",
  },
  // {
  //   name: "Henock Creative",
  //   imageSrc: "images/henicreative.jpg",
  //   responsiblity: "Video Editor",
  // },
  // {
  //   name: "Photography",
  //   imageSrc: "./src/assets/images/portfolio6.jpg",
  //   responsiblity: "Photographer",
  // },
  // {
  //   name: "Language",
  //   imageSrc: "./src/assets/images/portfolio1.jpg",
  //   responsiblity: "Language Lecturer",
  // },
  // {
  //   name: "Dibora",
  //   imageSrc: "./src/assets/images/portfolio2.jpg",
  //   responsiblity: "Reception",
  // },
];

const expCards = [
  {
    imageSrc: "/images/service1.jpg",
    logoPath: "/images/logos/webdev.png",
    title: "Website Development",
    responsibilities: [
      {
        title: "Custom Website Design:",
        desc: "Tailored, responsive designs that reflect your brand and deliver seamless user experiences.",
      },
      {
        title: "Frontend Development:",
        desc: "Interactive, fast-loading user interfaces using modern technologies like React, Vue, and Tailwind CSS.",
      },
      {
        title: "Backend Development:",
        desc: "Robust, secure server-side solutions with Node.js, PHP, and database integration.",
      },
      {
        title: "E-commerce Development:",
        desc: "Scalable online stores with payment gateways, product management, and customer-friendly navigation.",
      },
    ],
  },
  {
    imageSrc: "/images/service2.jpg",
    logoPath: "/images/logos/videoediting.png",
    title: "Video Editing",
    responsibilities: [
      {
        title: "Promotional Video Editing:",
        desc: "Create engaging promos with dynamic cuts, transitions, and branding for marketing impact.",
      },
      {
        title: "Social Media Content Editing:",
        desc: "Optimized short-form videos tailored for Instagram, TikTok, and YouTube engagement.",
      },
      {
        title: "Event Video Highlights:",
        desc: "Turn raw footage into captivating highlight reels for weddings, conferences, and celebrations.",
      },
      {
        title: "Educational Video Editing:",
        desc: "Clean, structured editing for tutorials, courses, and training materials with clear visuals and audio.",
      },
    ],
  },
  {
    imageSrc: "/images/service3.jpg",
    logoPath: "/images/logos/graphicsdesign.png",
    title: "Graphics Design",
    responsibilities: [
      {
        title: "Logo & Brand Identity Design:",
        desc: "Unique logos and brand assets that represent your business professionally and memorably.",
      },
      {
        title: "Social Media Graphics:",
        desc: "Eye-catching designs for posts, stories, and ads that boost online engagement.",
      },
      {
        title: "Marketing Materials Design:",
        desc: "Flyers, posters, and brochures crafted to clearly communicate your message and attract attention.",
      },
      {
        title: "UI/UX Design:",
        desc: "Modern, user-friendly interface designs for websites and mobile apps to enhance user experience.",
      },
    ],
  },
];

const CourceCards = [
  {
    image: "/images/programingclass.jpg",
    title: "Web Development",
    badgeColor: "text-gray-800",
    badgeBg: "bg-[#ffffff]",
    desc: "🔧 Frontend & Backend Skills Learn HTML, CSS, JavaScript, React, and Node.js, Project-Based Learning Build real-world responsive webapps, Version Control & Deployment - Use Git, GitHub, and deploy with modern tools, Responsive Design, Create mobile friendly interfaces for all devices, Career Ready - Gain skills needed for freelancing or full-time tech jobs.",
    link: "#",
  },
  {
    image: "/images/graphics.jpg",
    title: "Graphics Design",
    badgeColor: "text-gray-800",
    badgeBg: "bg-[#ffffff]",
    desc: "🎨 Design Fundamentals - Master color theory, typography, and composition, Professional Tools, Learn Adobe Photoshop, Illustrator, and Canva, Creative Projects, Design logos, posters, banners, and social media content, Brand Identity Build visual branding skills for businesses and startups, Portfolio Development - Create a strong portfolio for job or freelance work.",
    link: "#",
  },
  {
    image: "/images/henicreative.jpg",
    title: "Video Editing",
    badgeColor: "text-gray-800",
    badgeBg: "bg-[#ffffff]",
    desc: "🎬 Editing Essentials - Learn cutting, trimming, transitions, and storytelling basics, Pro Tools Training - Use Adobe Premiere Pro, After Effects, and CapCut, Audio & Effects - Add sound effects, music, and voiceovers with precision, Motion Graphics - Create animated text, titles, and visual effects, Content Creation - Edit videos for YouTube, TikTok, events, and business use.",
    link: "#",
  },
  {
    image: "/images/language.jpg",
    title: "Language",
    badgeColor: "text-gray-800",
    badgeBg: "bg-[#ffffff]",
    desc: "🗣️ Speaking & Listening - fluency with conversation practice and listening exercises, Enhance comprehension and writing skills through structured lessons, Learn language in context with cultural insights and real-world examples, Grammar & Vocabulary - Build a strong foundation in grammar rules and vocabulary expansion, Prepare for language proficiency tests.",
    link: "#",
  },
  {
    image: "/images/photography.jpg",
    title: "Photography",
    badgeColor: "text-gray-800",
    badgeBg: "bg-[#ffffff]",
    desc: "📸 Camera Techniques- Master camera settings, composition, and lighting, Landscape & Portraits - Capture stunning landscapes and expressive portraits, Photo Editing - Edit photos using Adobe Lightroom and Photoshop, Creative Projects - Work on personal projects to develop your unique style, Portfolio Building - Create a professional portfolio to showcase your work.",
    link: "#",
  },
];

const galleryImages = [
  {
    imageSrc: "images/founders.jpg",
    alt: "image",
    desc: "The founders of Googo Tech School radiate both exhaustion and excitement.",
  },

  {
    imageSrc: "images/startupday.jpg",
    alt: "image",
    desc: " The attendants of Googo Tech School on startup day event.",
  },
  {
    imageSrc: "images/kidscode.jpg",
    alt: "image",
    desc: "With bright eyes and tiny fingers dancing across keyboards, the children in the coding class explore the digital world with wonder and curiosity.",
  },
  {
    imageSrc: "images/programingclass.jpg",
    alt: "image",
    desc: "Captured in a moment of pride and ambition, the first batch of Googo Tech School's web development class stands together.",
  },
  {
    imageSrc: "images/videoclass.jpg",
    alt: "image",
    desc: "Framed by glowing monitors and timelines full of cuts, clips, and effects, the students in Googo Tech School's video editing class work with focus and flair.",
  },
  {
    imageSrc: "images/graphics.jpg",
    alt: "image",
    desc: "Surrounded by mood boards, color palettes, and layers of digital canvases, the students in Googo Tech School's graphics design class bring their ideas to life.",
  },
  {
    imageSrc: "images/language.jpg",
    alt: "image",
    desc: "In a lively classroom filled with dialogue, laughter, and attentive listening, students in Googo Tech School’s language class practice speaking, reading, and writing.",
  },
   {
    imageSrc: "images/startupcake.jpg",
    alt: "image",
    desc: "The vibe on startup.",
  },
  {
    imageSrc: "images/photography.jpg",
    alt: "image",
    desc: "With cameras in hand and eyes trained on light, angles, and composition, students in Googo Tech School’s photography class explore the art of visual storytelling.",
  },
  {
    imageSrc: "images/certified.jpg",
    alt: "image",
    desc: "Beaming with pride and holding their certificates high, the graduates of Googo Tech School represent a diverse mix of talents.",
  },
  {
    imageSrc: "images/giveaway.jpg",
    alt: "image",
    desc: "Web development fist batch of the School.",
  },
  {
    imageSrc: "images/freelancing.jpg",
    alt: "image",
    desc: "Beaming with pride and holding their certificates high, the graduates of Googo Tech School represent a diverse mix of talents.",
  },
  {
    imageSrc: "images/certificationday.jpg",
    alt: "image",
    desc: "Certificate reward for Basic computer class student.",
  },
  {
    imageSrc: "images/guestonstartup.jpg",
    alt: "image",
    desc: "Guests Attending the startup day.",
  },
  {
    imageSrc: "images/kb&nati.jpg",
    alt: "image",
    desc: "Guests Attending the startup day.",
  },
  {
    imageSrc: "images/kidsoncode.jpg",
    alt: "image",
    desc: "Kids Can code.",
  },
  {
    imageSrc: "images/kidsstartup.jpg",
    alt: "image",
    desc: "Kids Can code.",
  },
   {
    imageSrc: "images/msgevideo.jpg",
    alt: "image",
    desc: "Video editing class.",
  },
];

const testimonials = [
  {
    name: "Semalgn Tilahun",
    mentions: "@semalgn",
    review:
      "Googo Tech School changed my life. I started as a student and now work here as a web developer. The practical training, supportive mentors, and real-world projects prepared me for a successful career in tech.",
    imgPath: "/images/semetest.jpg",
  },
  {
    name: "Ephrem Deneke",
    mentions: "@ephrem",
    review:
      "Joining Googo Tech School was the best decision I made. The knowledge I gained as a student now fuels my work as a web developer on their team. It's a place where solutions for every challages growth never stops.",
    imgPath: "/images/efotest.jpg",
  },
  {
    name: "Dawit Tesfaye",
    mentions: "@dev",
    review:
      "Googo Tech School gave me the skills and confidence to grow. From student to web developer, the journey has been both inspiring and empowering thanks to their hands-on learning approach & encouragment.",
    imgPath: "/images/davetest.jpg",
  },
  // {
  //   name: "Abebe Kebede",
  //   mentions: "@abebe",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint ex commodi delectus optio vero quae libero dignissimos beatae atque? Architecto veniam ab, odio blanditiis architecto veniam ab!",
  //   imgPath: "/images/client5.png",
  // },
  // {
  //   name: "Abebe Kebede",
  //   mentions: "@abebe",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint ex commodi delectus optio vero quae libero dignissimos beatae atque? Architecto veniam ab, odio blanditiis architecto veniam ab!",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "Abebe Kebede",
  //   mentions: "@abebe",
  //   review:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sint ex commodi delectus optio vero quae libero dignissimos beatae atque? Architecto veniam ab, odio blanditiis architecto veniam ab!",
  //   imgPath: "/images/client6.png",
  // },
];

const faqs = [
  {
    question: "Price range for courses?",
    answer:
      "Googo Tech School offers a flexible and accessible pricing structure tailored to meet the needs of students from various backgrounds. Our course fees vary depending on the subject, duration, and depth of the training. For example, short-term workshops and basic skill courses are priced more affordably, while advanced programs involving in-depth mentoring, project-based learning, and job preparation support are slightly higher in cost.",
  },
  {
    question: "Time line to complete course?",
    answer:
      "The duration of each course at Googo Tech School depends on its structure and complexity. On average, our full-time professional courses range from 3 to 6 months, while part-time or evening programs can extend up to 9 months. We also offer fast-track options for experienced learners who want to upskill in a shorter timeframe. Every course is designed with a balance of theory, hands-on practice, assessments, and real-world project application to ensure deep learning.",
  },
  {
    question: "Market demand after completing?",
    answer:
      "Graduates of Googo Tech School are well-prepared to enter high-demand industries such as web development, UI/UX design, digital marketing, software engineering, and more. The school constantly updates its curriculum based on current market needs, ensuring that students learn skills that are directly applicable in the real world. Many alumni have gone on to secure remote jobs, freelance work, and even launch their own tech startups. To ensure smooth learning, Googo Tech School recommends a laptop or desktop computer with modern hardware capabilities.",
  },
  {
    question: "Support available during & after the course?",
    answer:
      "Absolutely. Googo Tech School prides itself on offering comprehensive support during and after course completion. During the learning journey, students have access to mentors, live Q&A sessions, project feedback, and community forums. Post-graduation, we offer career coaching, resume reviews, interview preparation, and connections to job opportunities through our growing network. This ensures students not only gain knowledge but are guided on how to apply it for real career growth.",
  },
  {
    question: "Devices or Tools for study?",
    answer:
      "To get the most out of your learning experience at Googo Tech School, students are recommended to have access to a laptop or desktop computer with a stable internet connection. While high-end devices are not mandatory, a machine with at least 8GB RAM, modern browser support, and the ability to run code editors and basic design software is ideal. We also provide guidance for installing required tools like Visual Studio Code, Figma, and development environments depending on the course. In some cases, mobile devices or tablets may be used for supplementary tasks.",
  },
];

export {
  navLinks,
  words,
  counterItems,
  abilities,
  MembersCard,
  expCards,
  CourceCards,
  galleryImages,
  testimonials,
  faqs,
};
