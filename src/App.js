// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Shield, Brain, Network, Home, FileText,
//   Settings, LogOut, Phone, Mail, Github
// } from 'lucide-react';

// // Enhanced Login Component with 3D effects
// const Login = ({ onLogin }) => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });

//   const container3D = {
//     hidden: { rotateX: -15, opacity: 0 },
//     show: {
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item3D = {
//     hidden: { y: 20, opacity: 0, rotateX: -15 },
//     show: { y: 0, opacity: 1, rotateX: 0 }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 perspective-1000">
//       <motion.div
//         variants={container3D}
//         initial="hidden"
//         animate="show"
//         className="bg-white p-8 rounded-lg shadow-xl w-96 transform-gpu"
//       >
//         <motion.div
//           initial={{ scale: 0, rotateY: 180 }}
//           animate={{ scale: 1, rotateY: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center mb-6"
//         >
//           <Shield className="h-12 w-12 text-blue-600" />
//         </motion.div>

//         <motion.h2
//           variants={item3D}
//           className="text-2xl font-bold text-center mb-6"
//         >
//           AI-Powered Fraud Shield
//         </motion.h2>

//         <form onSubmit={(e) => {
//           e.preventDefault();
//           onLogin();
//         }}>
//           <motion.div variants={item3D} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//                 value={credentials.email}
//                 onChange={(e) => setCredentials({...credentials, email: e.target.value})}
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your password"
//                 value={credentials.password}
//                 onChange={(e) => setCredentials({...credentials, password: e.target.value})}
//               />
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05, rotateX: 5 }}
//               whileTap={{ scale: 0.95, rotateX: -5 }}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors transform-gpu"
//               type="submit"
//             >
//               Sign In
//             </motion.button>
//           </motion.div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// // Enhanced Dashboard Component with 3D animations
// const Dashboard = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const container3D = {
//     hidden: { rotateX: -15, opacity: 0 },
//     show: {
//       rotateX: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const card3D = {
//     hidden: { rotateY: -90, opacity: 0 },
//     show: { rotateY: 0, opacity: 1 }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % 3);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       variants={container3D}
//       initial="hidden"
//       animate="show"
//       className="min-h-screen bg-gray-50 perspective-1000"
//     >
//       <VideoBanner />

//       <motion.div
//         variants={card3D}
//         className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6"
//       >
//         {[
//           { title: "Total Claims", value: "1,234", color: "blue" },
//           { title: "Processing Time", value: "48h", color: "green" },
//           { title: "Success Rate", value: "99.9%", color: "purple" }
//         ].map((stat, index) => (
//           <motion.div
//             key={stat.title}
//             whileHover={{
//               rotateY: 10,
//               rotateX: 5,
//               scale: 1.05,
//               transition: { duration: 0.2 }
//             }}
//             className={`bg-${stat.color}-50 p-6 rounded-lg shadow-lg transform-gpu`}
//           >
//             <h3 className="text-lg font-semibold">{stat.title}</h3>
//             <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       <AIFeatures />

//       <motion.div
//         variants={container3D}
//         className="max-w-7xl mx-auto px-4 py-8"
//       >
//         <motion.div
//           whileHover={{
//             rotateX: 5,
//             scale: 1.02,
//             transition: { duration: 0.2 }
//           }}
//           className="bg-white rounded-lg shadow-lg p-6 transform-gpu"
//         >
//           <h3 className="text-xl font-semibold mb-4 flex items-center">
//             <Brain className="h-6 w-6 mr-2 text-blue-600" />
//             AI Analysis Dashboard
//           </h3>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSlide}
//               initial={{ rotateY: -90, opacity: 0 }}
//               animate={{ rotateY: 0, opacity: 1 }}
//               exit={{ rotateY: 90, opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               className="p-4 bg-blue-50 rounded-lg"
//             >
//               {[
//                 "AI detected unusual pattern in Region A",
//                 "Network analysis completed for Q3",
//                 "Document verification system updated"
//               ][activeSlide]}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// // Existing components (Navbar, Footer, ClaimsForm, AnalysisPage, SettingsPage) remain the same...
// [Previous components code remains unchanged]

// // Add perspective utility classes
// const perspectiveStyle = `
//   .perspective-1000 {
//     perspective: 1000px;
//   }
//   .transform-gpu {
//     transform-style: preserve-3d;
//     backface-visibility: hidden;
//   }
// `;

// // Update Main App
// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');

//   const pageVariants = {
//     initial: {
//       rotateY: -90,
//       opacity: 0,
//       scale: 0.9
//     },
//     animate: {
//       rotateY: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       rotateY: 90,
//       opacity: 0,
//       scale: 0.9,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   const renderPage = () => {
//     return (
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentPage}
//           variants={pageVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           className="transform-gpu"
//         >
//           {(() => {
//             switch(currentPage) {
//               case 'home':
//                 return <Dashboard />;
//               case 'file-claim':
//                 return <ClaimsForm />;
//               case 'analysis':
//                 return <AnalysisPage />;
//               case 'settings':
//                 return <SettingsPage />;
//               default:
//                 return <Dashboard />;
//             }
//           })()}
//         </motion.div>
//       </AnimatePresence>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <style>{perspectiveStyle}</style>
//       {!isLoggedIn ? (
//         <Login onLogin={() => setIsLoggedIn(true)} />
//       ) : (
//         <>
//           <Navbar
//             onLogout={() => setIsLoggedIn(false)}
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//           />
//           {renderPage()}
//           <Footer />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Brain,
  Network,
  Home,
  FileText,
  Settings as SettingsIcon,
  LogOut,
  Phone,
  Mail,
  Github,
  ContainerIcon,
  AlertCircle,
  ChartBar,
  FileSearch,
} from "lucide-react";

// Login Component
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const ContainerIcon = {
    hidden: { rotateX: -15, opacity: 0 },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const item3D = {
    hidden: { y: 20, opacity: 0, rotateX: -15 },
    show: { y: 0, opacity: 1, rotateX: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 perspective-1000">
      <motion.div
        variants={ContainerIcon}
        initial="hidden"
        animate="show"
        className="bg-white p-8 rounded-lg shadow-xl w-96 transform-gpu">
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6">
          <Shield className="h-12 w-12 text-blue-600" />
        </motion.div>

        <motion.h2
          variants={item3D}
          className="text-2xl font-bold text-center mb-6">
          AI-Powered Fraud Shield
        </motion.h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}>
          <motion.div variants={item3D} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95, rotateX: -5 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors transform-gpu"
              type="submit">
              Sign In
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

// Navbar Component
const Navbar = ({ onLogout, currentPage, setCurrentPage }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold">FraudShield</span>
        </motion.div>

        <div className="flex items-center space-x-4">
          {[
            { icon: Home, page: "home" },
            { icon: FileText, page: "file-claim" },
            { icon: Brain, page: "analysis" },
            { icon: SettingsIcon, page: "settings" },
          ].map(({ icon: Icon, page }) => (
            <motion.button
              key={page}
              onClick={() => setCurrentPage(page)}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 rounded-md ${
                currentPage === page ? "bg-blue-100 text-blue-600" : ""
              }`}>
              <Icon className="h-5 w-5" />
            </motion.button>
          ))}
          <motion.button
            onClick={onLogout}
            whileHover={{ scale: 1.1, rotateZ: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-2 rounded-md text-red-500">
            <LogOut className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  </motion.nav>
);

// Video Banner Component
const VideoBanner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="relative h-96 w-full overflow-hidden">
    <video
      autoPlay
      loop
      muted
      className="absolute w-full h-full object-cover"
      src="/api/placeholder/video">
      Your browser does not support the video tag.
    </video>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4">
          Next-Gen Insurance Fraud Detection
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-8">
          Powered by Advanced AI and Machine Learning
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, rotateX: 5 }}
          whileTap={{ scale: 0.95, rotateX: -5 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors transform-gpu">
          Learn More
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

// AI Features Component
const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Deep Learning Analysis",
      description:
        "Advanced neural networks analyze claim patterns and detect anomalies in real-time",
    },
    {
      icon: Network,
      title: "Network Detection",
      description:
        "AI-powered graph analysis to uncover hidden fraud networks and relationships",
    },
    {
      icon: AlertCircle,
      title: "Early Warning System",
      description:
        "Proactive detection of potential fraud patterns before claims are processed",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12">
          AI-Powered Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotateY: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-6 rounded-lg shadow-lg transform-gpu">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const ContainerIcon= {
    hidden: { rotateX: -15, opacity: 0 },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const card3D = {
    hidden: { rotateY: -90, opacity: 0 },
    show: { rotateY: 0, opacity: 1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={ContainerIcon}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gray-50 perspective-1000">
      <VideoBanner />

      <motion.div
        variants={card3D}
        className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Total Claims", value: "1,234", color: "blue" },
          { title: "Processing Time", value: "48h", color: "green" },
          { title: "Success Rate", value: "99.9%", color: "purple" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className={`bg-${stat.color}-50 p-6 rounded-lg shadow-lg transform-gpu`}>
            <h3 className="text-lg font-semibold">{stat.title}</h3>
            <p className={`text-3xl font-bold text-${stat.color}-600`}>
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <AIFeatures />

      <motion.div
        variants={ContainerIcon}
        className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          whileHover={{
            rotateX: 5,
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
          className="bg-white rounded-lg shadow-lg p-6 transform-gpu">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Brain className="h-6 w-6 mr-2 text-blue-600" />
            AI Analysis Dashboard
          </h3>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-blue-50 rounded-lg">
              {
                [
                  "AI detected unusual pattern in Region A",
                  "Network analysis completed for Q3",
                  "Document verification system updated",
                ][activeSlide]
              }
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Claims Form Component
const ClaimsForm = () => (
  <motion.div
    initial={{ opacity: 0, rotateX: -15 }}
    animate={{ opacity: 1, rotateX: 0 }}
    className="max-w-2xl mx-auto py-8 px-4 perspective-1000">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-bold mb-6">
      File a New Insurance Claim
    </motion.h2>
    <motion.form
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      
        variants={ContainerIcon}>
        <div>
          <label className="block text-sm font-medium mb-2">First Name</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            className="w-full px-4 py-2 border rounded-lg transform-gpu"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last Name</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            className="w-full px-4 py-2 border rounded-lg transform-gpu"
          />
        </div>
      </motion.div>

      <div>
        <label className="block text-sm font-medium mb-2">Policy Number</label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          className="w-full px-4 py-2 border rounded-lg transform-gpu"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Claim Description
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          className="w-full px-4 py-2 border rounded-lg h-32 resize-none transform-gpu"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Date of Incident
        </label>
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="date"
          className="w-full px-4 py-2 border rounded-lg transform-gpu"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Upload Documents
        </label>
        <motion.input
          whileHover={{ scale: 1.02 }}
          type="file"
          multiple
          className="w-full px-4 py-2 border rounded-lg transform-gpu"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.95, rotateX: -5 }}
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors transform-gpu">
        Submit Claim
      </motion.button>
    </motion.form>
  </motion.div>
);

// Analysis Page Component (Previously missing)
const AnalysisPage = () => {
  const ContainerIcon = {
    hidden: { rotateX: -15, opacity: 0 },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={ContainerIcon}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto py-8 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6">
        Fraud Analysis Dashboard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.02, rotateX: 5 }}
          className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <ChartBar className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Risk Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-medium">Current Risk Level</p>
              <p className="text-2xl font-bold text-blue-600">Low</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm font-medium">Claims Processed</p>
              <p className="text-2xl font-bold text-green-600">98.5%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02, rotateX: 5 }}
          className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <FileSearch className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Recent Activities</h3>
          </div>
          <div className="space-y-4">
            {[
              "Pattern analysis completed",
              "Network scan finished",
              "Risk assessment updated",
            ].map((activity, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Footer Component (Previously missing)
const Footer = () => (
  <footer className="bg-white shadow-lg mt-auto">
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Shield className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-lg font-semibold">FraudShield</span>
        </div>

        <div className="flex space-x-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600">
            <Phone className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600">
            <Mail className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-gray-600 hover:text-blue-600">
            <Github className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-500">
        © 2024 FraudShield. All rights reserved.
      </div>
    </div>
  </footer>
);

// Add perspective utility styles
const perspectiveStyle = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-gpu {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;

// Settings Component
const Settings = () => (
  <motion.div
    initial={{ opacity: 0, rotateX: -15 }}
    animate={{ opacity: 1, rotateX: 0 }}
    className="max-w-2xl mx-auto py-8 px-4 perspective-1000">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-bold mb-6">
      Account Settings
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              className="w-full px-4 py-2 border rounded-lg transform-gpu"
              defaultValue="user@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="password"
              className="w-full px-4 py-2 border rounded-lg transform-gpu"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <motion.input
              whileHover={{ scale: 1.1 }}
              type="checkbox"
              className="h-6 w-6 transform-gpu"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>SMS Alerts</span>
            <motion.input
              whileHover={{ scale: 1.1 }}
              type="checkbox"
              className="h-6 w-6 transform-gpu"
            />
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, rotateX: 5 }}
        whileTap={{ scale: 0.95, rotateX: -5 }}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors transform-gpu">
        Save Changes
      </motion.button>
    </motion.div>
  </motion.div>
);

// Main App Component (Updated with all components and smooth transitions)
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const pageVariants = {
    initial: {
      rotateY: -90,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      rotateY: 90,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderPage = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="transform-gpu">
          {(() => {
            switch (currentPage) {
              case "home":
                return <Dashboard />;
              case "file-claim":
                return <ClaimsForm />;
              case "analysis":
                return <AnalysisPage />;
              case "settings":
                return <Settings />;
              default:
                return <Dashboard />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style>{perspectiveStyle}</style>
      <AnimatePresence mode="wait">
        {!isLoggedIn ? (
          <Login key="login" onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <>
            <Navbar
              onLogout={() => setIsLoggedIn(false)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            {renderPage()}
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
