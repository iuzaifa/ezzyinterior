
export const websiteData = {
  navbar: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Our Team", path: "/ourteam" },
    { name: "Contact Us", path: "/contact" },
  ],

  hero: {
    title: "Transforming Spaces Into Elegant Living Experiences",
    subtitle:
      "We design modern, stylish, and functional interiors for homes, offices, and commercial spaces.",
    cta: {
      primary: "Get Free Consultation",
      secondary: "Explore Projects",
    },
  },

  services: [
    {
      icon: "FiUsers",
      title: "Residential Interiors",
      description:
        "Beautiful home interiors designed to match your lifestyle, comfort, and personality.",
      hasAccent: false,
    },
    {
      icon: "FiMonitor",
      title: "Commercial Spaces",
      description:
        "Smart and modern interiors for offices, shops, and business environments.",
      hasAccent: true,
    },
    {
      icon: "FiGlobe",
      title: "Restaurant & Café Design",
      description:
        "Stylish dining spaces with premium ambiance and efficient layouts.",
      hasAccent: false,
    },
    {
      icon: "FiLayers",
      title: "Custom Furniture",
      description:
        "High-quality furniture tailored to your space and design theme.",
      hasAccent: false,
    },
    {
      icon: "FiRefreshCw",
      title: "Renovation & Remodeling",
      description:
        "Upgrade your old interiors into modern, elegant, and functional spaces.",
      hasAccent: false,
    },
    {
      icon: "FiZap",
      title: "Space Planning",
      description:
        "Efficient layouts that maximize space utilization and aesthetics.",
      hasAccent: false,
    },
    {
      icon: "FiTool",
      title: "Turnkey Solutions",
      description:
        "Complete interior solutions from design to execution under one roof.",
      hasAccent: false,
    },
    {
      icon: "FiCode",
      title: "3D Visualization",
      description:
        "Realistic 3D designs to help you visualize your dream space before execution.",
      hasAccent: false,
    },
  ],

  projects: [
    {
      title: "Kitchen",
      images: Array(10).fill("/images/kitchen.jpg"),
    },
    {
      title: "Bathroom",
      images: Array(6).fill("/images/bathroom.jpg"),
    },
    {
      title: "Bedroom",
      images: Array(6).fill("/images/bedroom.jpg"),
    },
    {
      title: "Living Room",
      images: Array(8).fill("/images/living.jpg"),
    },
    {
      title: "Furniture",
      images: Array(5).fill("/images/furniture.jpg"),
    },
    {
      title: "Renovation",
      images: Array(6).fill("/images/reno.jpg"),
    },
  ],

  gallery: [
    {
      title: "Modern Living Room",
      desc: "Elegant interiors with warm lighting and minimal aesthetics.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Dining Space",
      desc: "Premium dining interiors designed for comfort and style.",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Retail Store Design",
      desc: "Modern shop interiors to enhance customer experience.",
      img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Office Workspace",
      desc: "Creative office interiors focused on productivity and comfort.",
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    },
  ],

  testimonials: [
    {
      name: "Rahul Sharma",
      role: "Home Owner",
      image: "https://placehold.net/avatar-4.svg",
      text: "EZZY Interior transformed my home beautifully. The design is modern and exactly what we imagined.",
    },
    {
      name: "Neha Gupta",
      role: "Restaurant Owner",
      image: "https://placehold.net/avatar-4.svg",
      text: "The café design is stunning. Customers love the ambiance and we see more engagement.",
    },
    {
      name: "Amit Verma",
      role: "Shop Owner",
      image: "https://placehold.net/avatar-4.svg",
      text: "Professional team with great execution. Highly recommended for interior work.",
    },
    {
      name: "Priya Singh",
      role: "Office Manager",
      image: "https://placehold.net/avatar-4.svg",
      text: "Our office looks modern and productive. Amazing work by the team.",
    },
  ],

  team: [
    {
      name: "Irfan Hussain",
      role: "Manager",
      image:
        "https://eu.ui-avatars.com/api/?name=Irfan+Hussain&size=250",
    },
    {
      name: "Ayesha Khurshid",
      role: "Senior Interior Designer",
      image:
        "https://eu.ui-avatars.com/api/?name=Ayesha+Khurshid&size=250",
    },
    {
      name: "Prashant Kumar",
      role: "Senior Interior Designers",
      image:
        "https://eu.ui-avatars.com/api/?name=Prashant+Kumar&size=250",
    },
    {
      name: "Saif Khursheed",
      role: "Marketing Manager",
      image:
        "https://eu.ui-avatars.com/api/?name=Saif+Khursheed&size=250",
    },
  ],

  contact: {
    info: [
      {
        icon: "FiMail",
        title: "Email Address",
        content: ["Ezzy.interior@gmail.com", "ezzyinterior@gmail.com"],
      },
      {
        icon: "FiPhone",
        title: "Phone Number",
        content: ["+91 9693486096", "+91 9155196766"],
      },
      {
        icon: "FiHome",
        title: "Office Address",
        content: ["B-854, Ground Floor, L.F Road, Ranchi – 834001"],
      },
    ],
    floatingPhone: "9693486096",
  },

  footer: {
    links: ["Home", "About", "Project", "Contact", "FAQ"],
    social: [
      { icon: "FaTwitter", label: "Twitter" },
      { icon: "FaInstagram", label: "Instagram" },
      { icon: "FaYoutube", label: "Youtube" },
      { icon: "FaLinkedin", label: "Linkedin" },
    ],
    about:
      "We design homes, shops, restaurants, and modern spaces with premium interior solutions.",
    copyright: "© 2026 EZZY Interior",
  },

  sections: {
    ourWork: {
      title: "Our Latest Work",
      subtitle:
        "Explore our recent interior projects crafted with creativity, elegance, and attention to detail.",
      projectsTitle: "Our Latest Projects",
      stats: "total project images",
    },
    gallery: {
      title: "Our Creative Gallery",
      subtitle:
        "Explore our finest interior designs created with precision and modern aesthetics.",
    },
    testimonials: {
      title: "Trusted by homeowners, businesses & design lovers",
    },
    team: {
      title: "Our Team",
      subtitle: "Meet the creative minds behind our stunning interior designs.",
    },
    contactInfo: {
      title: "Visit Our Office",
    },
    services: {
      title: "Our Services",
      subtitle:
        "Complete interior design solutions for homes, offices, and commercial spaces.",
    },
    cta: {
      tag: "✨ Transform Your Space",
      title: "Ready to Design Your Dream Space?",
      subtitle:
        "We turn your ideas into reality with modern, elegant, and functional interiors.",
      buttons: {
        primary: "Get Free Consultation",
        secondary: "View Our Work",
      },
    },
  },

  workGallery: {
    images: [
      [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      ],
      [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      ],
      [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      ],
      [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      ],
    ],
  },
  about: {
    title: "About Our Interior Design",
    subtitle:
      "A visual collection of our most recent interior works — crafted with creativity, precision, and elegance.",

    sectionTitle: "Designing Spaces That Inspire",
    description:
      "We specialize in creating modern, functional, and beautiful interiors for homes, offices, and commercial spaces. Our goal is to transform your vision into reality with creativity, quality, and attention to detail.",

    image:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop",

    features: [
      {
        icon: "FaBolt",
        title: "Smart Space Planning",
        desc: "Efficient layouts that maximize space utilization and comfort.",
      },
      {
        icon: "FaPalette",
        title: "Premium Interior Design",
        desc: "Modern, elegant designs tailored to your lifestyle and taste.",
      },
      {
        icon: "FaPuzzlePiece",
        title: "End-to-End Execution",
        desc: "From concept to completion, we handle everything seamlessly.",
      },
    ],
  },
};
