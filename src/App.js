import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

const Portfolio = () => {
  // Profile data
  const profile = {
    name: "SANDIP PRAJAPATI",
    image: "https://i.postimg.cc/15qh67vz/pp2.jpg",
    std: " MCA Computer Science ",
    email: "prajapatisandip2003@gmail.com",
    summary: "Experienced Software Developer skilled in Java, Spring Boot, Flutter, and MERN stack. Expertise in building scalable backend systems, cross-platform mobile apps, and full-stack web applications. Passionate about clean code, performance optimization, and problem-solving.",
    tagline: "Web Developer | Problem Solver | Android Developer",
    backgroundImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    resumeLink: "https://drive.google.com/file/d/1Fvu9m3-LBTE8X4C2CdeGqEgKH-jqTp15/view?usp=sharing" // Add your resume link here
  };

  // Coding profiles
  const codingProfiles = [
    {
      name: "LeetCode",
      icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
      link: "https://leetcode.com/u/__sandeep___13/",
      username: "sandeep___13"
    },
    {
      name: "HackerRank",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      link: "https://www.hackerrank.com/profile/sandip___13",
      username: "sandip___13"
    },
    {
      name: "Codeforces",
      icon: "https://codeforces.org/s/0/favicon-96x96.png",
      link: "https://codeforces.com/profile/prajapatisandip2003",
      username: "prajapatisandip2003"
    }
  ];

  // Social links with WhatsApp added
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      link: "https://www.linkedin.com/in/sandip-prajapati-/"
    },
    {
      name: "GitHub",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      link: "https://github.com/sandeep8780"
    },
    {
      name: "WhatsApp",
      icon: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
      link: "https://wa.me/+918780372089" // Add your WhatsApp number
    },
    {
      name: "Email",
      icon: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
      link: "mailto:prajapatisandip2003@gmail.com"
    }
  ];

  // Skills data with icons
  const skills = [
    { 
      name: "Java", 
      level: "Advanced", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      description: "Object-oriented programming, Collections, Multithreading"
    },
    { 
      name: "Spring Boot", 
      level: "Advanced", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      description: "REST APIs, Microservices, Spring Security"
    },
    { 
      name: "React js", 
      level: "Advanced", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Hooks, Context API, Redux, Component Lifecycle"
    },
    { 
      name: "Node.js", 
      level: "Advanced", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Server-side JavaScript, Express, RESTful APIs"
    },
    { 
      name: "Express js", 
      level: "Intermediate", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Middleware, Routing, API Development"
    },
    { 
      name: "Flutter", 
      level: "Intermediate", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      description: "Widgets, State Management, Firebase Integration"
    },
    { 
      name: "Kotlin", 
      level: "Intermediate", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      description: "Android Development, Coroutines, Extension Functions"
    },
    { 
      name: "Data Structures", 
      level: "Advanced", 
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      description: "Arrays, Trees, Graphs, Hash Tables, Algorithms"
    },
    { 
      name: "Algorithms", 
      level: "Advanced", 
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103651.png",
      description: "Sorting, Searching, Dynamic Programming, Big-O"
    },
    { 
      name: "MongoDB", 
      level: "Intermediate", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL, Document Storage, Aggregation Pipeline"
    },
    { 
      name: "SQL", 
      level: "Advanced", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      description: "Database Design, Query Optimization, Transactions"
    },
    { 
      name: "Firebase", 
      level: "Intermediate", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      description: "Authentication, Cloud Firestore, Cloud Functions"
    }
  ];

 

  // Education data with achievements


  // Achievements data
  const achievements = [
    {
      title: "IIT Madras Certificate",
      description: "Certified in Advanced Programming Concepts from IIT Madras",
      link: "https://drive.google.com/file/d/1miLSCf1MReGcd-vKrPYIjdYrxdHuQpdP/view?usp=sharing",
      icon: "🏛️"
    },
    {
      title: "District Level Chess Champion",
      description: "Fourth place in District Level Chess Tournament",
      //link: "https://example.com/chess-certificate",
      icon: "♟️"
    }
  ];

  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For WhatsApp integration:
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Education animation variants
  const educationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  // Project animation variants
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(187, 134, 252, 0.3)"
    }
  };

  // Achievement animation variants
  const achievementVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(187, 134, 252, 0.1)"
    }
  };

  return (
    <div className="portfolio-container dark-theme">
      {/* Navigation Bar */}
      <nav className="navbar">
        <motion.ul 
          className="nav-links"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {['home', 'about', 'coding', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact'].map((section, index) => (
            <motion.li 
              key={section}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${section}`} 
                className={activeSection === section ? 'active' : ''}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Hero Section with Background Image */}
      <motion.section 
        id="home" 
        className="hero-section" 
        style={{ backgroundImage: `url(${profile.backgroundImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay dark-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          
          {/* Social Links with Icons */}
          <motion.div 
            className="social-links"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <img src={social.icon} alt={social.name} className="social-icon" />
                <span>{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Download Resume Button */}
          <motion.a
            href={profile.resumeLink}
            download
            className="resume-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-section">
          <motion.div 
            className="profile-image-container"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={profile.image} alt={profile.name} className="profile-image" />
          </motion.div>
          <motion.div 
            className="profile-info"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>About Me</h2>
            <p>{profile.summary}</p>
            <p><strong>Email:</strong> {profile.email}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Coding Profiles Section */}
<motion.section 
  id="coding" 
  className="section coding-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <h2>Coding Profiles</h2>
  <motion.div 
    className="coding-profiles"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {codingProfiles.map((profile, index) => (
      <motion.div 
        key={index} 
        className="coding-profile-card"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        <div className="coding-profile-header">
          <img src={profile.icon} alt={profile.name} className="coding-profile-icon" />
          <h3>{profile.name}</h3>
        </div>
        <p className="coding-profile-username">@{profile.username}</p>
        <a 
          href={profile.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="coding-profile-link"
        >
          Visit Profile
        </a>
      </motion.div>
    ))}
    
    {/* GFG Profile Card */}
    <motion.div 
      className="coding-profile-card"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="coding-profile-header">
        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" alt="GeeksforGeeks" className="coding-profile-icon" />
        <h3>GeeksforGeeks</h3>
      </div>
      <p className="coding-profile-username">@prajapatis3139</p>
      <a 
        href="https://www.geeksforgeeks.org/user/prajapatis3139/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="coding-profile-link"
      >
        Visit Profile
      </a>
    </motion.div>
    
    {/* Accio Job Profile Card */}
    <motion.div 
      className="coding-profile-card"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="coding-profile-header">
      <img 
  src="https://i.ibb.co/svmhDNnM/image.png" 
  alt="Accio Job" 
  className="coding-profile-icon" 
/>
        <h3>Accio Job</h3>
      </div>
      <p className="coding-profile-username">Prajapati Sandip</p>
      <a 
        href="https://ibb.co/FcmQdJT" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="coding-profile-link"
      >
        Visit Profile
      </a>
    </motion.div>
  </motion.div>
</motion.section>

      {/* Skills Section with Flipping Cards */}
      <motion.section 
        id="skills" 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <motion.div 
          className="skills-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item" 
              data-skill={skill.name.replace(/\s+/g, ' ').trim()}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-front">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
              <div className="skill-back">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-desc">{skill.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section with Animation */}
<motion.section 
  id="education" 
  className="section education-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <h2>Education</h2>
  <motion.div 
    className="education-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    <motion.div 
      className="education-card"
      custom={0}
      variants={educationVariants}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px rgba(187, 134, 252, 0.3)"
      }}
    >
      <div className="education-header">
        <h3>Master of Computer Application (MCA)</h3>
        <div className="education-meta">
          <span className="institution">Parul University</span>
          <span className="year">2023-2025</span>
        </div>
      </div>
      <div className="education-achievements">
        <h4>Key Achievements:</h4>
        <ul>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Published research paper on 'Optimizing Search Algorithms'
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Lead organizer of annual coding competition with 200+ participants
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Worked on Project: Specialization in FullStack Development
          </motion.li>
        </ul>
      </div>
    </motion.div>
  </motion.div>
</motion.section>

   {/* Projects Section with Vertical Layout and Icons */}
<motion.section 
  id="projects" 
  className="section projects-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8 }}
>
  <h2>Projects</h2>
  <motion.div 
    className="projects-vertical"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    {/* Project 1: E-commerce */}
    <motion.div 
      className="project-vertical-card"
      custom={0}
      variants={projectVariants}
      whileHover="hover"
    >
      <div className="project-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>E-commerce Platform</h3>
          <a href="https://github.com/sandeep8780/E-commerce_website" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
        <p className="project-description">A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.</p>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              User authentication and authorization
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Product catalog with categories and filters
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Shopping cart and checkout process
            </motion.li>
          </ul>
        </div>
        <div className="project-technologies">
          <span className="tech-label">Technologies:</span>
          <div className="tech-stack">
            <span className="tech-tag" data-tech="spring">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#6DB33F">
                <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-2-16.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm-10 10c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"/>
              </svg>
              Spring Boot
            </span>
            <span className="tech-tag" data-tech="java">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#5382a1">
                <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-2-16.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm-10 10c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"/>
              </svg>
              Java
            </span>
            <span className="tech-tag" data-tech="mysql">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#00758F">
                <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 22c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm-2-16.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm-10 10c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 0c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"/>
              </svg>
              MySQL
            </span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Project 2: YourWay */}
    <motion.div 
      className="project-vertical-card"
      custom={1}
      variants={projectVariants}
      whileHover="hover"
    >
      <div className="project-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>YourWay <span className="team-badge">Team Project</span></h3>
          <a href="https://github.com/jyotpatel14/YourWay" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
        <p className="project-description">A mobile application for personalized navigation and location-based services.</p>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Customizable route planning
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Real-time traffic updates
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Points of interest recommendations
            </motion.li>
          </ul>
        </div>
        <div className="project-technologies">
          <span className="tech-label">Technologies:</span>
          <div className="tech-stack">
            <span className="tech-tag" data-tech="android">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3DDC84">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.04-.84.26l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.71c-.16-.3-.54-.41-.84-.26-.3.16-.42.54-.26.85l1.84 3.18C3.5 11.1 2.56 13.28 2.56 15.6v1.64c0 1.1.9 2 2 2h14.88c1.1 0 2-.9 2-2v-1.64c0-2.32-.94-4.5-2.56-6.12zM7 15.38c0-.83-.67-1.5-1.5-1.5S4 14.55 4 15.38 4.67 16.88 5.5 16.88 7 16.21 7 15.38zm10 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z"/>
              </svg>
              Android Studio
            </span>
            <span className="tech-tag" data-tech="kotlin">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#7F52FF">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Kotlin
            </span>
            <span className="tech-tag" data-tech="maps">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 0C8.1 0 5 3.1 5 7c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
              Google Maps API
            </span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Project 3: EventEase */}
    <motion.div 
      className="project-vertical-card"
      custom={2}
      variants={projectVariants}
      whileHover="hover"
    >
      <div className="project-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>EventEase</h3>
          <a href="https://github.com/sandeep8780/Event-Ease" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
        <p className="project-description">An event management application that simplifies organizing and attending events.</p>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Event creation and management
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ticket booking and payment integration
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Real-time notifications and updates
            </motion.li>
          </ul>
        </div>
        <div className="project-technologies">
          <span className="tech-label">Technologies:</span>
          <div className="tech-stack">
            <span className="tech-tag" data-tech="flutter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#02569B">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Flutter
            </span>
            <span className="tech-tag" data-tech="dart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0175C2">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Dart
            </span>
            <span className="tech-tag" data-tech="firebase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFCA28">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Firebase
            </span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Project 4: GPS Lense */}
    <motion.div 
      className="project-vertical-card"
      custom={3}
      variants={projectVariants}
      whileHover="hover"
    >
      <div className="project-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </svg>
      </div>
      <div className="project-content">
        <div className="project-header">
          <h3>GPS Lense</h3>
          <a href="https://github.com/sandeep8780/Gpslens" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
        <p className="project-description">An augmented reality application that enhances real-world navigation with digital overlays.</p>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AR-powered navigation assistance
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Location-based AR content
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Interactive points of interest
            </motion.li>
          </ul>
        </div>
        <div className="project-technologies">
          <span className="tech-label">Technologies:</span>
          <div className="tech-stack">
            <span className="tech-tag" data-tech="flutter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#02569B">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Flutter
            </span>
            <span className="tech-tag" data-tech="dart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0175C2">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Dart
            </span>
            <span className="tech-tag" data-tech="firebase">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFCA28">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              Firebase
            </span>
            <span className="tech-tag" data-tech="ar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 0L1.75 6v12L12 24l10.25-6V6L12 0zm0 1.5l9.25 5.5v11L12 22.5l-9.25-5.5V7L12 1.5z"/>
              </svg>
              ARCore
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
</motion.section>

      {/* Achievements Section */}
      
      <motion.section 

        id="achievements" 
        className="section achievements-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2>Achievements</h2>
        <motion.div 
          className="achievements-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-card"
              custom={index}
              variants={achievementVariants}
              whileHover="hover"
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section with WhatsApp Integration */}
      <motion.section 
        id="contact" 
        className="section contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get In Touch</h2>
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.form 
            className="contact-form"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Your Message" 
                required
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(`https://wa.me/918780372089`, '_blank')}
            >
               <img 
    src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" 
    alt="WhatsApp" 
    style={{ width: '20px', marginRight: '8px' }} 
  />
              Send via WhatsApp
            </motion.button>
          </motion.form>
          <motion.div 
            className="contact-info"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-item">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" />
              <span>{profile.email}</span>
            </div>
            <div className="contact-item">
             
              <span>Ahmedabad, India</span>
            </div>
            <div className="social-links contact-social">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={social.icon} alt={social.name} className="social-icon" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
