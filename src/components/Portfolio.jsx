import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
 const [activeSection, setActiveSection] = useState('home');
 const [roleIndex, setRoleIndex] = useState(0);
 const [flippedCard, setFlippedCard] = useState(null);
 const [hoveredCert, setHoveredCert] = useState(null);
 const [hoveredSocial, setHoveredSocial] = useState(null);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: ''
 });

 const scrollToSection = (id) => {
   const element = document.getElementById(id);
   element?.scrollIntoView({ behavior: 'smooth' });
   setActiveSection(id);
 };

 // Track active section on scroll
 useEffect(() => {
   const handleScroll = () => {
     const sections = ['home', 'skills', 'education', 'projects', 'certificates', 'contact'];
     const scrollPosition = window.scrollY + 100;

     for (const section of sections) {
       const element = document.getElementById(section);
       if (element) {
         const { offsetTop, offsetHeight } = element;
         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
           setActiveSection(section);
           break;
         }
       }
     }
   };

   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 // Auto-rotate roles every 3 seconds
 const roles = [
   { text: "Data Scientist", color: "text-orange-600" },
   { text: "ML Engineer", color: "text-orange-700" },
   { text: "Business Analyst", color: "text-amber-600" },
   { text: "Python Developer", color: "text-rose-600" }
 ];

 useEffect(() => {
   const interval = setInterval(() => {
     setRoleIndex((prev) => (prev + 1) % 4); // 4 roles total
   }, 3000);
   return () => clearInterval(interval);
 }, []); // Empty dependency array since roles is constant

 const navItems = ['Home', 'Skills', 'Education', 'Projects', 'Certificates', 'Contact'];

 // Skills with Icons and Percentages
 const skills = [
   { name: "Python", level: 90, icon: "fab fa-python", color: "text-blue-600" },
   { name: "Machine Learning", level: 85, icon: "fas fa-brain", color: "text-purple-600" },
   { name: "Power BI", level: 88, icon: "fas fa-chart-line", color: "text-yellow-600" },
   { name: "SQL", level: 82, icon: "fas fa-database", color: "text-green-600" },
   { name: "Data Analysis", level: 87, icon: "fas fa-chart-bar", color: "text-indigo-600" },
   { name: "Java", level: 75, icon: "fab fa-java", color: "text-red-600" },
   { name: "Pandas", level: 85, icon: "fas fa-table", color: "text-teal-600" },
   { name: "NumPy", level: 83, icon: "fas fa-square-root-alt", color: "text-blue-700" },
   { name: "Tableau", level: 80, icon: "fas fa-chart-pie", color: "text-orange-500" },
   { name: "React JS", level: 75, icon: "fab fa-react", color: "text-cyan-500" },
   { name: "Excel", level: 90, icon: "fas fa-file-excel", color: "text-green-700" },
   { name: "GitHub", level: 78, icon: "fab fa-github", color: "text-gray-800" }
 ];

 // Education Timeline Data
 const education = [
   {
     year: "2026",
     degree: "B.Tech Computer Engineering",
     institution: "Vishwakarma Institute of Information Technology",
     location: "Pune",
     grade: "8.53",
     gradeType: "CGPA",
     duration: "2022 - 2026",
     icon: "🎓",
     color: "blue",
     isOngoing: true
   },
   {
     year: "2022",
     degree: "HSC - PCM",
     institution: "Private Highschool and Junior College",
     location: "Kolhapur",
     grade: "85.67",
     gradeType: "%",
     duration: "2022",
     icon: "📚",
     color: "amber",
     isOngoing: false
   },
   {
     year: "2020",
     degree: "SSC",
     institution: "Vidyapeeth Highschool",
     location: "Kolhapur",
     grade: "97.60",
     gradeType: "%",
     duration: "2020",
     icon: "📖",
     color: "green",
     isOngoing: false
   }
 ];

 // Projects Data with GitHub Links
 const projects = [
   {
     id: 1,
     title: "Safest Route Navigation",
     description: "AI-powered women safety navigation system with 92.7% accuracy in crime detection using machine learning algorithms and A* pathfinding",
     tech: ["Python", "ML", "A* Algorithm", "Scikit-learn"],
     year: "2025",
     icon: "🗺️",
     metric: "92.7%",
     metricLabel: "Accuracy",
     color: "purple",
     github: "https://github.com/Sarthak-07-09/Safest-Route-Navigation"
   },
   {
     id: 2,
     title: "E-Commerce Analytics Dashboard",
     description: "Real-time sales and customer analytics dashboard for Olist platform with comprehensive KPI tracking and data visualization",
     tech: ["Power BI", "DAX", "SQL", "Star Schema"],
     year: "2024",
     icon: "📊",
     metric: "Live",
     metricLabel: "Real-time Data",
     color: "green",
     github: "https://github.com/Sarthak-07-09/E-Commerce-Dashboard"
   },
   {
     id: 3,
     title: "Timetable Automation",
     description: "Automated email-to-calendar synchronization using RPA, eliminating 100% of manual scheduling work",
     tech: ["UiPath", "Google Calendar API", "Automation"],
     year: "2024",
     icon: "📅",
     metric: "100%",
     metricLabel: "Automated",
     color: "orange",
     github: "https://github.com/Sarthak-07-09/Timetable-Automation-System"
   }
 ];

 // Certificates Data
 const certificates = [
   {
     id: 1,
     title: "Microsoft Power BI Data Analyst",
     organization: "Microsoft",
     icon: "📊",
     color: "blue",
     skills: ["DAX", "Data Visualization", "Business Intelligence"],
     issued: "2024",
     link: "https://drive.google.com/file/d/1Sd_hKtwhso6qB_tMhrDJODdnBtJ19cto/preview"
   },
   {
     id: 2,
     title: "UiPath Automation Developer",
     organization: "UiPath",
     icon: "🤖",
     color: "orange",
     skills: ["RPA", "Process Automation", "Workflow Design"],
     issued: "2024",
     link: "https://drive.google.com/file/d/1HAX-Bawgy9IfPRXSAzsQpC7ESsIlBq0P/preview"
   },
   {
     id: 3,
     title: "Data Processing & Visualization",
     organization: "Accenture - NASSCOM",
     icon: "📈",
     color: "purple",
     skills: ["Data Processing", "Analytics", "Visualization"],
     issued: "2023",
     link: "https://drive.google.com/file/d/1bTSPThNzFT12D0Wis2tM2SFNVdc88n3h/preview"
   },
   {
     id: 4,
     title: "Machine Learning in Python",
     organization: "Udemy",
     icon: "🧠",
     color: "green",
     skills: ["Machine Learning", "Python", "Scikit-learn"],
     issued: "2023",
     link: "https://drive.google.com/file/d/1Y2XgpCzBzKrGyVhV8-JCmqodSRzq0w7E/preview"
   }
 ];

 // Social Links with Drive
 const socialLinks = [
   {
     id: 'github',
     icon: 'fab fa-github',
     label: 'GitHub',
     url: 'https://github.com/Sarthak-07-09',
     color: 'hover:text-gray-900',
     bgColor: 'hover:bg-gray-100'
   },
   {
     id: 'linkedin',
     icon: 'fab fa-linkedin',
     label: 'LinkedIn',
     url: 'https://www.linkedin.com/in/sarthak-sarikar-08b4b22b0/',
     color: 'hover:text-blue-600',
     bgColor: 'hover:bg-blue-50'
   },
   {
     id: 'drive',
     icon: 'fab fa-google-drive',
     label: 'Google Drive',
     url: 'https://drive.google.com/drive/folders/1sTwm85WcYJybIfcVglBZccdd73jOpe78?usp=drive_link',
     color: 'hover:text-green-600',
     bgColor: 'hover:bg-green-50'
   },
   {
     id: 'phone',
     icon: 'fas fa-phone',
     label: 'Phone',
     url: 'tel:+919307940002',
     color: 'hover:text-purple-600',
     bgColor: 'hover:bg-purple-50'
   },
   {
     id: 'email',
     icon: 'fas fa-envelope',
     label: 'Email',
     url: 'mailto:sarikarsarthak@gmail.com',
     color: 'hover:text-red-600',
     bgColor: 'hover:bg-red-50'
   }
 ];

 // Form Submit Handler
 const handleSubmit = (e) => {
   e.preventDefault();
   setFormSubmitted(true);
  
   // Reset after 3 seconds
   setTimeout(() => {
     setFormSubmitted(false);
     setFormData({ name: '', email: '', message: '' });
   }, 3000);
 };

 const handleInputChange = (e) => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   });
 };

 const colorScheme = {
   name: "Peach Cream",
   bg: "from-orange-50 via-amber-50 to-rose-50",
   text: "text-amber-900",
   heading: "text-orange-600",
   muted: "text-amber-700",
   accent: "bg-orange-500 hover:bg-orange-600",
   accentText: "text-orange-600",
   cardBg: "bg-white/70",
   navBg: "bg-white/80",
   border: "border-orange-200",
   inputBg: "bg-white/90 border-orange-200",
   buttonSecondary: "border-orange-400 hover:border-orange-600 text-orange-600 hover:bg-orange-50",
   skillBar: "from-orange-400 to-rose-400",
   tagBg: "bg-orange-100 text-orange-700",
   iconBg: "bg-orange-100",
   glowColor: "bg-orange-300/40",
   patternColor: "rgba(251, 146, 60, 0.15)"
 };

 // Get certificate colors
 const getCertificateColor = (color) => {
   const colors = {
     blue: {
       bg: "bg-blue-50",
       border: "border-blue-300",
       gradient: "from-blue-500 to-cyan-500",
       text: "text-blue-700",
       badge: "bg-blue-500",
       hover: "hover:shadow-blue-500/30"
     },
     orange: {
       bg: "bg-orange-50",
       border: "border-orange-300",
       gradient: "from-orange-500 to-amber-500",
       text: "text-orange-700",
       badge: "bg-orange-500",
       hover: "hover:shadow-orange-500/30"
     },
     purple: {
       bg: "bg-purple-50",
       border: "border-purple-300",
       gradient: "from-purple-500 to-pink-500",
       text: "text-purple-700",
       badge: "bg-purple-500",
       hover: "hover:shadow-purple-500/30"
     },
     green: {
       bg: "bg-green-50",
       border: "border-green-300",
       gradient: "from-green-500 to-teal-500",
       text: "text-green-700",
       badge: "bg-green-500",
       hover: "hover:shadow-green-500/30"
     }
   };
   return colors[color];
 };

 // Get project colors
 const getProjectColor = (color) => {
   const colors = {
     purple: {
       bg: "bg-purple-50",
       border: "border-purple-300",
       badge: "bg-purple-500"
     },
     green: {
       bg: "bg-green-50",
       border: "border-green-300",
       badge: "bg-green-500"
     },
     orange: {
       bg: "bg-orange-50",
       border: "border-orange-300",
       badge: "bg-orange-500"
     }
   };
   return colors[color];
 };

 // Function to calculate stars
 const getStars = (percentage) => {
   const stars = Math.round((percentage / 100) * 5);
   return stars;
 };

 const renderStars = (percentage) => {
   const filledStars = getStars(percentage);
   const emptyStars = 5 - filledStars;
  
   return (
     <div className="flex items-center gap-1">
       {[...Array(filledStars)].map((_, i) => (
         <motion.i
           key={`filled-${i}`}
           initial={{ scale: 0, rotate: -180 }}
           whileInView={{ scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ delay: i * 0.1, type: "spring" }}
           className="fas fa-star text-yellow-500 text-lg"
         ></motion.i>
       ))}
       {[...Array(emptyStars)].map((_, i) => (
         <motion.i
           key={`empty-${i}`}
           initial={{ scale: 0, rotate: -180 }}
           whileInView={{ scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ delay: (filledStars + i) * 0.1, type: "spring" }}
           className="far fa-star text-gray-400 text-lg"
         ></motion.i>
       ))}
       <span className="ml-2 text-sm font-semibold text-orange-600">
         {percentage}%
       </span>
     </div>
   );
 };

 const getEducationColors = (color) => {
   const colors = {
     blue: {
       bg: "bg-blue-50",
       border: "border-blue-300",
       dot: "bg-blue-500",
       glow: "shadow-blue-500/30",
       text: "text-blue-700",
       icon: "bg-blue-100"
     },
     amber: {
       bg: "bg-amber-50",
       border: "border-amber-300",
       dot: "bg-amber-500",
       glow: "shadow-amber-500/30",
       text: "text-amber-700",
       icon: "bg-amber-100"
     },
     green: {
       bg: "bg-green-50",
       border: "border-green-300",
       dot: "bg-green-500",
       glow: "shadow-green-500/30",
       text: "text-green-700",
       icon: "bg-green-100"
     }
   };
   return colors[color];
 };

 return (
   <div className={`min-h-screen ${colorScheme.text} relative`}>
    
     {/* Background */}
     <div className={`fixed inset-0 -z-10 bg-gradient-to-br ${colorScheme.bg}`}>
       <div className="absolute inset-0 opacity-40">
         <svg width="100%" height="100%">
           <defs>
             <pattern id="dots-peach" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1" fill={colorScheme.patternColor} />
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#dots-peach)" />
         </svg>
       </div>
       <motion.div
         className="absolute inset-0"
         animate={{
           background: [
             `radial-gradient(circle at 30% 30%, ${colorScheme.patternColor} 0%, transparent 50%)`,
             `radial-gradient(circle at 70% 70%, ${colorScheme.patternColor} 0%, transparent 50%)`,
             `radial-gradient(circle at 30% 30%, ${colorScheme.patternColor} 0%, transparent 50%)`,
           ],
         }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
         className={`absolute top-1/4 right-1/4 w-96 h-96 ${colorScheme.glowColor} rounded-full blur-3xl`}
       />
       <motion.div
         animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
         transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
         className={`absolute bottom-1/3 left-1/3 w-80 h-80 ${colorScheme.glowColor} rounded-full blur-3xl`}
       />
     </div>

     {/* Navigation */}
     <nav className={`fixed top-0 w-full z-50 ${colorScheme.navBg} backdrop-blur-md shadow-lg ${colorScheme.border} border-b`}>
       <div className="max-w-7xl mx-auto px-8 py-5">
         <div className="flex justify-between items-center">
           <div className={`text-2xl font-bold ${colorScheme.heading}`}>Portfolio</div>
           <div className="hidden md:flex space-x-8">
             {navItems.map((item) => (
               <button
                 key={item}
                 onClick={() => scrollToSection(item.toLowerCase())}
                 className={`text-sm font-medium transition-all duration-300 relative ${
                   activeSection === item.toLowerCase()
                     ? `${colorScheme.heading} scale-110`
                     : `${colorScheme.muted} hover:${colorScheme.heading}`
                 }`}
               >
                 {item}
                 {activeSection === item.toLowerCase() && (
                   <motion.div
                     layoutId="activeIndicator"
                     className={`absolute -bottom-2 left-0 right-0 h-1 ${colorScheme.accent} rounded-full`}
                     initial={false}
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
               </button>
             ))}
           </div>
         </div>
       </div>
     </nav>

     {/* Hero Section */}
     <section id="home" className="min-h-screen flex items-center pt-20">
       <div className="max-w-7xl mx-auto px-8 w-full">
         <div className="grid md:grid-cols-2 gap-16 items-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${colorScheme.text}`}>
               Hi, I'm <span className={colorScheme.heading}>Sarthak</span>
               <br />
               <span className={colorScheme.heading}>Sarikar</span>
             </h1>
            
             <div className="text-2xl md:text-3xl mb-8">
               <span className={colorScheme.muted}>I'm a </span>
               <div className="inline-block relative overflow-hidden h-12 w-72 align-middle">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={roleIndex}
                     initial={{ y: 50, opacity: 0, rotateX: -90 }}
                     animate={{ y: 0, opacity: 1, rotateX: 0 }}
                     exit={{ y: -50, opacity: 0, rotateX: 90 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     className={`absolute font-bold text-2xl md:text-3xl ${roles[roleIndex].color}`}
                   >
                     {roles[roleIndex].text}
                   </motion.div>
                 </AnimatePresence>
               </div>
             </div>

             <p className={`${colorScheme.muted} text-lg mb-8 leading-relaxed`}>
               Passionate Data Scientist with hands-on experience in Python, Machine Learning,
               Power BI, SQL, and Business Intelligence. Skilled in developing and deploying
               intelligent data-driven solutions.
             </p>

             <div className="flex flex-wrap gap-4 mb-8">
               <motion.button
                 onClick={() => scrollToSection('projects')}
                 whileTap={{ scale: 0.95 }}
                 whileHover={{ scale: 1.05 }}
                 className={`px-8 py-3 ${colorScheme.accent} text-white rounded-lg font-semibold transition-all hover:shadow-xl`}
               >
                 View My Work
               </motion.button>
              
               <motion.button
                 onClick={() => scrollToSection('contact')}
                 whileTap={{ scale: 0.95 }}
                 whileHover={{ scale: 1.05 }}
                 className={`px-8 py-3 bg-transparent border-2 ${colorScheme.buttonSecondary} rounded-lg font-semibold transition-all`}
               >
                 Let's Connect
               </motion.button>
              
               <motion.a
                 href="/resume.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 whileTap={{ scale: 0.95 }}
                 whileHover={{ scale: 1.05 }}
                 className={`px-8 py-3 ${colorScheme.text} bg-white/80 hover:bg-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg border ${colorScheme.border}`}
               >
                 View Resume
               </motion.a>
             </div>

             {/* Social Links with Animations */}
             <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <motion.a
                   key={social.id}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   onMouseEnter={() => setHoveredSocial(social.id)}
                   onMouseLeave={() => setHoveredSocial(null)}
                   whileHover={{ y: -5, scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                   className={`relative transition-colors ${colorScheme.muted} ${social.color}`}
                 >
                   {/* Background Circle */}
                   <motion.div
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{
                       scale: hoveredSocial === social.id ? 1 : 0,
                       opacity: hoveredSocial === social.id ? 1 : 0
                     }}
                     transition={{ duration: 0.2 }}
                     className={`absolute -inset-2 rounded-full ${social.bgColor} -z-10`}
                   />
                  
                   <motion.i
                     className={`${social.icon} text-2xl`}
                     animate={{
                       rotate: hoveredSocial === social.id ? [0, -10, 10, 0] : 0
                     }}
                     transition={{ duration: 0.5 }}
                   />
                 </motion.a>
               ))}
             </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="flex justify-center items-center"
           >
             <div className="relative">
               <motion.div
                 animate={{
                   scale: [1, 1.2, 1],
                   opacity: [0.3, 0.6, 0.3],
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className={`absolute inset-0 rounded-full ${colorScheme.glowColor} blur-3xl`}
               ></motion.div>
              
               <motion.div
                 animate={{
                   scale: [1, 1.3, 1],
                   opacity: [0.2, 0.5, 0.2],
                 }}
                 transition={{
                   duration: 4,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 0.5
                 }}
                 className={`absolute inset-0 rounded-full ${colorScheme.glowColor} blur-2xl`}
               ></motion.div>

               <div className={`relative w-80 h-80 rounded-full overflow-hidden border-4 ${colorScheme.border} shadow-2xl`}>
                 <div className={`w-full h-full bg-gradient-to-br ${colorScheme.bg} flex items-center justify-center`}>
                   <div className="text-8xl">👨‍💻</div>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>

     {/* Skills Section */}
     <section id="skills" className="py-20">
       <div className="max-w-7xl mx-auto px-8">
         <h2 className={`text-4xl font-bold mb-12 text-center ${colorScheme.text}`}>
           My <span className={colorScheme.heading}>Skills</span>
         </h2>
        
         <div className="grid md:grid-cols-3 gap-6">
           {skills.map((skill, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 20, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               whileHover={{ scale: 1.05, y: -5 }}
               className={`${colorScheme.cardBg} backdrop-blur-sm p-6 rounded-xl border ${colorScheme.border} shadow-lg hover:shadow-2xl transition-all`}
             >
               <div className="flex items-center gap-4 mb-4">
                 <motion.div
                   initial={{ rotate: -180, scale: 0 }}
                   whileInView={{ rotate: 0, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ type: "spring", delay: index * 0.05 }}
                   className={`text-4xl ${skill.color}`}
                 >
                   <i className={skill.icon}></i>
                 </motion.div>
                 <div className="flex-1">
                   <h3 className={`font-bold text-lg ${colorScheme.text}`}>{skill.name}</h3>
                 </div>
               </div>
              
               <div className="flex items-center justify-between">
                 {renderStars(skill.level)}
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>

     {/* Education Section */}
     <section id="education" className="py-20">
       <div className="max-w-7xl mx-auto px-8">
         <h2 className={`text-4xl font-bold mb-16 text-center ${colorScheme.text}`}>
           My <span className={colorScheme.heading}>Education Journey</span>
         </h2>
        
         <div className="max-w-4xl mx-auto relative">
           <motion.div
             initial={{ height: 0 }}
             whileInView={{ height: "100%" }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-500 via-amber-500 to-green-500 rounded-full"
             style={{ height: "calc(100% - 60px)" }}
           />

           <div className="space-y-12">
             {education.map((edu, index) => {
               const colors = getEducationColors(edu.color);
              
               return (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.3, duration: 0.6 }}
                   className="relative"
                 >
                   <motion.div
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.3 + 0.2, type: "spring" }}
                     className={`absolute left-8 -translate-x-1/2 w-8 h-8 ${colors.dot} rounded-full border-4 border-white shadow-lg z-10`}
                     animate={{
                       boxShadow: [
                         `0 0 0 0 ${colors.dot}`,
                         `0 0 0 10px transparent`,
                         `0 0 0 0 transparent`
                       ]
                     }}
                     transition={{
                       duration: 2,
                       repeat: Infinity,
                       delay: index * 0.5
                     }}
                   />

                   <motion.div
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.3 + 0.1 }}
                     className={`absolute -left-2 top-0 ${colors.text} font-bold text-sm`}
                   >
                     {edu.year}
                   </motion.div>

                   <motion.div
                     whileHover={{ scale: 1.02, y: -5 }}
                     className={`ml-20 ${colors.bg} border-2 ${colors.border} rounded-xl p-6 shadow-xl hover:shadow-2xl ${colors.glow} transition-all`}
                   >
                     <div className="flex items-start gap-4">
                       <div className={`text-5xl ${colors.icon} p-4 rounded-lg`}>
                         {edu.icon}
                       </div>

                       <div className="flex-1">
                         <h3 className={`text-2xl font-bold ${colorScheme.text} mb-2`}>
                           {edu.degree}
                         </h3>
                        
                         <p className={`${colorScheme.heading} font-semibold mb-1`}>
                           {edu.institution}
                         </p>
                        
                         <p className={`${colorScheme.muted} text-sm mb-3`}>
                           📍 {edu.location} • 📅 {edu.duration}
                         </p>

                         <div className="flex items-center gap-2">
                           <span className={`text-3xl font-black ${colors.text}`}>
                             {edu.grade}
                           </span>
                           <span className={`text-lg ${colorScheme.muted}`}>
                             {edu.gradeType}
                           </span>
                           {edu.isOngoing && (
                             <motion.span
                               animate={{ opacity: [1, 0.5, 1] }}
                               transition={{ duration: 1.5, repeat: Infinity }}
                               className="ml-2 px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-semibold"
                             >
                               Ongoing
                             </motion.span>
                           )}
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 </motion.div>
               );
             })}
           </div>
         </div>
       </div>
     </section>

     {/* Projects Section */}
     <section id="projects" className="py-20">
       <div className="max-w-7xl mx-auto px-8">
         <h2 className={`text-4xl font-bold mb-12 text-center ${colorScheme.text}`}>
           My <span className={colorScheme.heading}>Projects</span>
         </h2>
        
         <div className="grid md:grid-cols-3 gap-8">
           {projects.map((project, index) => {
             const colors = getProjectColor(project.color);
             const isFlipped = flippedCard === project.id;
            
             return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className="relative h-96"
                 style={{ perspective: '1000px' }}
                 onClick={() => setFlippedCard(isFlipped ? null : project.id)}
               >
               <motion.div
                   className="relative w-full h-full transition-transform duration-500"
                   style={{
                     transformStyle: 'preserve-3d',
                     transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                   }}
                 >
                   {/* Front Side */}
                   <div
                     className={`absolute w-full h-full ${colors.bg} border-2 ${colors.border} rounded-xl p-8 shadow-xl cursor-pointer`}
                     style={{ backfaceVisibility: 'hidden' }}
                   >
                     <div className="flex flex-col items-center justify-center h-full">
                       <div className="text-7xl mb-6">{project.icon}</div>
                       <h3 className={`text-2xl font-bold ${colorScheme.text} text-center mb-4`}>
                         {project.title}
                       </h3>
                       <div className={`px-6 py-3 ${colors.badge} text-white rounded-full font-bold text-2xl`}>
                         {project.metric}
                       </div>
                       <p className={`text-sm ${colorScheme.muted} mt-2`}>{project.metricLabel}</p>
                       <p className="text-xs text-gray-500 mt-4">Click to flip</p>
                     </div>
                   </div>
                  
                   {/* Back Side */}
                   <div
                     className={`absolute w-full h-full ${colors.bg} border-2 ${colors.border} rounded-xl p-6 shadow-xl`}
                     style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                   >
                     <div className="text-sm text-gray-600 mb-2">{project.year}</div>
                     <h3 className={`text-xl font-bold ${colorScheme.text} mb-3`}>{project.title}</h3>
                     <p className={`${colorScheme.muted} text-sm mb-4 leading-relaxed`}>{project.description}</p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       {project.tech.map((tech, i) => (
                         <span key={i} className={`px-2 py-1 ${colorScheme.tagBg} rounded text-xs`}>
                           {tech}
                         </span>
                       ))}
                     </div>
                     <motion.a
                       href={project.github}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="w-full py-3 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 flex items-center justify-center gap-2 transition-all"
                       onClick={(e) => e.stopPropagation()}
                     >
                       <i className="fab fa-github"></i> View on GitHub
                     </motion.a>
                   </div>
                 </motion.div>
               </motion.div>
             );
           })}
         </div>
       </div>
     </section>

     {/* Certificates Section */}
     <section id="certificates" className="py-20">
       <div className="max-w-7xl mx-auto px-8">
         <h2 className={`text-4xl font-bold mb-12 text-center ${colorScheme.text}`}>
           My <span className={colorScheme.heading}>Certifications</span>
         </h2>
        
         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {certificates.map((cert, index) => {
             const colors = getCertificateColor(cert.color);
             const isHovered = hoveredCert === cert.id;
            
             return (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.15 }}
                 onMouseEnter={() => setHoveredCert(cert.id)}
                 onMouseLeave={() => setHoveredCert(null)}
                 whileHover={{ y: -10, scale: 1.02 }}
                 className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-6 shadow-xl ${colors.hover} hover:shadow-2xl transition-all relative overflow-hidden cursor-pointer`}
               >
                 {/* Gradient Overlay on Hover */}
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: isHovered ? 0.15 : 0 }}
                   className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}
                 />

                 <div className="relative z-10">
                   {/* Icon and Organization Badge */}
                   <div className="flex items-center justify-between mb-4">
                     <motion.div
                       className="text-6xl"
                       animate={{
                         scale: isHovered ? 1.1 : 1,
                         rotate: isHovered ? 5 : 0
                       }}
                       transition={{ type: "spring", stiffness: 300 }}
                     >
                       {cert.icon}
                     </motion.div>
                     <motion.span
                       animate={{ scale: isHovered ? 1.1 : 1 }}
                       className={`px-3 py-1 ${colors.badge} text-white rounded-full text-xs font-semibold shadow-md`}
                     >
                       ✓ Verified
                     </motion.span>
                   </div>

                   {/* Certificate Title */}
                   <motion.h3
                     className={`text-xl font-bold ${colorScheme.text} mb-2`}
                     animate={{ x: isHovered ? 5 : 0 }}
                   >
                     {cert.title}
                   </motion.h3>

                   {/* Organization */}
                   <p className={`${colors.text} font-semibold mb-3 flex items-center gap-2`}>
                     <i className="fas fa-building"></i>
                     {cert.organization}
                   </p>

                   {/* Skills Tags */}
                   <div className="flex flex-wrap gap-2 mb-4">
                     {cert.skills.map((skill, i) => (
                       <motion.span
                         key={i}
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.15 + 0.1 + i * 0.1 }}
                         animate={{
                           scale: isHovered ? 1.05 : 1,
                           y: isHovered ? -2 : 0
                         }}
                         className={`px-3 py-1 ${colorScheme.tagBg} rounded-full text-xs font-medium`}
                       >
                         {skill}
                       </motion.span>
                     ))}
                   </div>

                   {/* Certificate Details */}
                   <div className={`${colorScheme.muted} text-xs mb-4`}>
                     <p className="flex items-center gap-2">
                       <i className="fas fa-calendar text-xs"></i>
                       Issued: {cert.issued}
                     </p>
                   </div>

                   {/* View Certificate Button */}
                   <motion.a
                     href={cert.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`w-full py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                   >
                     <i className="fas fa-external-link-alt"></i>
                     View Certificate
                   </motion.a>
                 </div>

                 {/* Hover Effect - Corner Accent */}
                 <motion.div
                   initial={{ scale: 0 }}
                   animate={{ scale: isHovered ? 1 : 0 }}
                   className={`absolute top-0 right-0 w-20 h-20 ${colors.badge} rounded-bl-full opacity-20`}
                 />
               </motion.div>
             );
           })}
         </div>
       </div>
     </section>

     {/* Contact Section - Let's Connect */}
<section id="contact" className="py-20">
 <div className="max-w-7xl mx-auto px-8">
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     className="text-center mb-12"
   >
     <h2 className={`text-4xl font-bold ${colorScheme.text}`}>
       Let's <span className={colorScheme.heading}>Connect</span> 👋
     </h2>
     <p className={`${colorScheme.muted} mt-4 text-lg`}>
       Whether it's a project, collaboration, or just a chat - feel free to reach out!
     </p>
   </motion.div>
  
   <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
     {/* Contact Info */}
     <motion.div
       initial={{ opacity: 0, x: -30 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
     >
       <h3 className={`text-2xl font-bold mb-6 ${colorScheme.text}`}>
         Contact Information
       </h3>
      
       <div className="space-y-4 mb-8">
         {/* Email */}
         <div className="flex items-center gap-4">
           <div className={`w-12 h-12 ${colorScheme.iconBg} rounded-full flex items-center justify-center`}>
             <i className={`fas fa-envelope ${colorScheme.accentText}`}></i>
           </div>
           <div>
             <p className={`text-sm ${colorScheme.muted}`}>Email</p>
             <a href="mailto:sarikarsarthak@gmail.com" className={`${colorScheme.text} hover:${colorScheme.heading} font-medium`}>
               sarikarsarthak@gmail.com
             </a>
           </div>
         </div>
        
         {/* Phone */}
         <div className="flex items-center gap-4">
           <div className={`w-12 h-12 ${colorScheme.iconBg} rounded-full flex items-center justify-center`}>
             <i className={`fas fa-phone ${colorScheme.accentText}`}></i>
           </div>
           <div>
             <p className={`text-sm ${colorScheme.muted}`}>Phone</p>
             <a href="tel:+919307940002" className={`${colorScheme.text} hover:${colorScheme.heading} font-medium`}>
               +91 9307940002
             </a>
           </div>
         </div>
        
         {/* Location with Embedded Map */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className={`${colorScheme.cardBg} backdrop-blur-sm rounded-xl p-4 border ${colorScheme.border} shadow-lg`}
         >
           <div className="flex items-center gap-3 mb-3">
             <motion.div
               className={`w-10 h-10 ${colorScheme.iconBg} rounded-full flex items-center justify-center relative`}
               whileHover={{ scale: 1.1 }}
             >
               {/* Ripple Effect */}
               <motion.div
                 className="absolute inset-0 bg-orange-500 rounded-full opacity-20"
                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
               <i className={`fas fa-map-marker-alt ${colorScheme.accentText} relative z-10`}></i>
             </motion.div>
             <div>
               <p className={`text-sm ${colorScheme.muted}`}>Location</p>
               <p className={`${colorScheme.text} font-medium`}>Pune, Maharashtra</p>
             </div>
           </div>
          
           {/* Interactive Google Map */}
           <motion.div
             className="rounded-lg overflow-hidden border-2 border-orange-200"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.3 }}
           >
             <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.18175097447!2d73.72288039999999!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
               title="Pune Location Map"
               width="100%"
               height="120"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
           </motion.div>
          
           {/* Get Directions Button */}
           <motion.a
             href="https://www.google.com/maps/search/?api=1&query=Pune,+Maharashtra,+India"
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className={`mt-3 w-full py-3 ${colorScheme.accent} text-white rounded-lg font-semibold flex items-center justify-center gap-2 text-sm hover:shadow-xl transition-all`}
           >
             <i className="fas fa-directions"></i>
             Get Directions
           </motion.a>
         </motion.div>
       </div>

       {/* Social Links - Follow Me */}
       <div>
         <h4 className={`text-lg font-bold mb-4 ${colorScheme.text}`}>
           Follow Me
         </h4>
         <div className="flex gap-3">
           {socialLinks.map((social) => (
             <motion.a
               key={social.id}
               href={social.url}
               target="_blank"
               rel="noopener noreferrer"
               onMouseEnter={() => setHoveredSocial(social.id)}
               onMouseLeave={() => setHoveredSocial(null)}
               whileHover={{ y: -8, scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               className={`relative w-14 h-14 rounded-xl flex items-center justify-center transition-all ${colorScheme.cardBg} border ${colorScheme.border} ${social.color}`}
             >
               {/* Glow Effect */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{
                   opacity: hoveredSocial === social.id ? 0.6 : 0,
                   scale: hoveredSocial === social.id ? 1.2 : 0.8
                 }}
                 className={`absolute inset-0 rounded-xl blur-md ${social.bgColor}`}
               />
              
               <motion.i
                 className={`${social.icon} text-2xl relative z-10`}
                 animate={{
                   rotate: hoveredSocial === social.id ? [0, -10, 10, -10, 0] : 0
                 }}
                 transition={{ duration: 0.5 }}
               />

               {/* Tooltip */}
               <AnimatePresence>
                 {hoveredSocial === social.id && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 ${colorScheme.accent} text-white text-xs rounded whitespace-nowrap`}
                   >
                     {social.label}
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.a>
           ))}
         </div>
       </div>
     </motion.div>

     {/* Contact Form - Floating Labels */}
     <motion.div
       initial={{ opacity: 0, x: 30 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true }}
     >
       <AnimatePresence mode="wait">
         {!formSubmitted ? (
           <motion.form
             onSubmit={handleSubmit}
             className="space-y-6"
             initial={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           >
             {/* Name Field */}
             <div className="relative">
               <input
                 type="text"
                 name="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 required
                 className={`w-full px-6 py-4 ${colorScheme.inputBg} backdrop-blur-sm border-2 rounded-lg focus:outline-none focus:border-orange-500 transition-all peer ${colorScheme.text}`}
                 placeholder=" "
               />
               <label className={`absolute left-6 top-4 ${colorScheme.muted} transition-all pointer-events-none peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:${colorScheme.heading} peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:${colorScheme.heading} peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2`}>
                 Your Name
               </label>
             </div>

             {/* Email Field */}
             <div className="relative">
               <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 required
                 className={`w-full px-6 py-4 ${colorScheme.inputBg} backdrop-blur-sm border-2 rounded-lg focus:outline-none focus:border-orange-500 transition-all peer ${colorScheme.text}`}
                 placeholder=" "
               />
               <label className={`absolute left-6 top-4 ${colorScheme.muted} transition-all pointer-events-none peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:${colorScheme.heading} peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:${colorScheme.heading} peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2`}>
                 Your Email
               </label>
             </div>

             {/* Message Field */}
             <div className="relative">
               <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 required
                 rows="5"
                 className={`w-full px-6 py-4 ${colorScheme.inputBg} backdrop-blur-sm border-2 rounded-lg focus:outline-none focus:border-orange-500 transition-all resize-none peer ${colorScheme.text}`}
                 placeholder=" "
               ></textarea>
               <label className={`absolute left-6 top-4 ${colorScheme.muted} transition-all pointer-events-none peer-focus:-top-2 peer-focus:left-4 peer-focus:text-xs peer-focus:${colorScheme.heading} peer-focus:bg-white peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:${colorScheme.heading} peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2`}>
                 Your Message
               </label>
               <div className={`absolute bottom-3 right-4 text-xs ${colorScheme.muted}`}>
                 {formData.message.length} / 500
               </div>
             </div>

             {/* Submit Button */}
             <motion.button
               type="submit"
               whileTap={{ scale: 0.95 }}
               whileHover={{ scale: 1.02 }}
               className={`w-full py-4 ${colorScheme.accent} text-white rounded-lg font-semibold transition-all hover:shadow-xl flex items-center justify-center gap-2`}
             >
               <span>Send Message</span>
               <i className="fas fa-paper-plane"></i>
             </motion.button>
           </motion.form>
         ) : (
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.8 }}
             className={`${colorScheme.cardBg} backdrop-blur-sm rounded-2xl p-12 text-center border ${colorScheme.border}`}
           >
             {/* Success Animation */}
             <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ type: "spring", stiffness: 200 }}
               className="mb-6"
             >
               <div className={`w-24 h-24 ${colorScheme.accent} rounded-full flex items-center justify-center mx-auto`}>
                 <motion.i
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ delay: 0.2, type: "spring" }}
                   className="fas fa-check text-5xl text-white"
                 ></motion.i>
               </div>
             </motion.div>
            
             <motion.h3
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className={`text-3xl font-bold ${colorScheme.text} mb-4`}
             >
               Message Sent! 🎉
             </motion.h3>
            
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className={`${colorScheme.muted} text-lg`}
             >
               Thank you for reaching out! I'll get back to you soon.
             </motion.p>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.div>
   </div>
 </div>
</section>

     {/* Footer */}
     <footer className={`py-8 ${colorScheme.cardBg} border-t ${colorScheme.border} text-center ${colorScheme.muted}`}>
       <p className="font-medium">© 2026 Sarthak Sarikar • Built with React & Tailwind CSS</p>
     </footer>
   </div>
 );
};

export default Portfolio;

