import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Amazon — SDE Intern (Fall 2025)",
    location: "Minneapolis, MN",
    logo: "/home/Images/amazon.png",
    description:
      "I will be joining Amazon as a Software Development Engineer Intern, where I'll work on large-scale distributed systems powering customer experiences at global scale. My focus will be on backend services, reliability, and optimizing performance across high-volume infrastructure.",
  },
  {
    title: "Grammarly — ML Research Intern (Summer 2025)",
    location: "San Francisco, CA",
    logo: "/home/Images/grammarly.png",
    description: (
      <>
        At Grammarly, I contributed as a Machine Learning Research Intern in agentic AI safety. Under the mentorship of the 🐐 
        <a
          href="https://drkhalil.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-indigo-300"
        >
          Khalil Mrini
        </a>
        , I developed a meta-agent that evaluates codebases and related literature to automatically design and test adaptive dialogues. I also led the synthesis of multiple research papers into technical specifications, benchmarked the system against human annotations, and first-authored a paper that is being submitted to NLP venues and released open source.
      </>
    ),
  },
  {
    title: "Chamberlain Group — SWE Intern (2023 & 2024)",
    location: "Oak Brook, IL",
    logo: "/home/Images/chamberlain_group.jpg",
    description:
      "I spent two summers as a Software Engineering Intern at Chamberlain Group, modernizing and automating their engineering workflows. Under the mentorship of Ram Manoher, I built a dependency graph tool that automatically generated API documentation, saving engineers time across repositories. I also migrated production services to .NET 6, cutting runtimes dramatically, and worked with Azure DevOps and CosmosDB to manage high-volume user data migrations.",
  },
  {
    title: "Fermilab — Student Researcher (2020–2022)",
    location: "Batavia, IL",
    logo: "/home/Images/fermilab.png",
    description:
      "I began my research journey at Fermilab, where I worked on deep learning methods for high-energy physics under the mentorship of Peter Dong. Using DNNs, I filtered lepton events with high efficiency in the search for dark photons, while processing tens of thousands of simulated particle interactions. I authored custom C++ packages to analyze and store experimental data, and my work contributed to multiple publications on arXiv, along with conference presentations.",
  },
];

export default function MagicalResume() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 right-0 z-50 p-6 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex space-x-6">
          <a 
            href="/" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Home
          </a>
          <a 
            href="/hobbies" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Hobbies
          </a>
          <a 
            href="/publications" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Publications
          </a>
          <a 
            href="/funny-photos" 
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Funny Photos
          </a>
          <a 
            href="/home/Sameer_K_2025_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium"
          >
            Resume
          </a>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 fixed top-0 left-0 h-full flex flex-col items-center justify-center border-r border-gray-800 p-6">
                  <div className="h-40 w-40 rounded-full border-4 border-indigo-500 shadow-lg bg-gray-700 flex items-center justify-center">
                      <img 
              src="/home/Images/IMG_4308.jpg" 
              alt="Sameer Komoravolu" 
              className="h-36 w-36 rounded-full object-cover"
            />
        </div>
          <h1 className="text-2xl font-bold mt-4">Sameer Komoravolu</h1>
          <p className="text-sm text-gray-400">ML Researcher • Software Engineer</p>
          <div className="w-full h-px bg-gray-700 my-6"></div>
          <p className="text-xs text-gray-500 text-center">
            skomo2@illinois.edu<br />
            linkedin.com/in/sameer-komoravolu-80a7ba229
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="ml-[25%] w-3/4 p-12 space-y-12">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
          >
            journey ✈️
          </motion.h1>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`max-w-4xl ${idx === 0 ? 'pt-8' : ''}`}
            >
              <div className="relative">
                {/* Gradient card background per recency */}
                <div className={`bg-gradient-to-r ${idx === 0 ? 'from-purple-600 to-indigo-600' : idx === 1 ? 'from-indigo-600 to-blue-600' : idx === 2 ? 'from-blue-600 to-cyan-600' : 'from-cyan-600 to-sky-600'} border border-gray-700 shadow-2xl rounded-2xl hover:shadow-indigo-500/30 transition-all duration-300 p-8`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.title} logo`}
                        className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                      />
                      {/* Title now white for readability on gradient */}
                      <h2 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h2>
                    </div>
                    <span className="text-sm text-white/80 bg-white/10 px-3 py-1 rounded-full">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>

                {/* Progression dots below each card except the last */}
                {idx < experiences.length - 1 && (
                  <div className="flex flex-col items-center mt-4 -mb-4 space-y-2" aria-hidden>
                    <span className={`block w-2 h-2 rounded-full bg-gradient-to-b ${idx === 0 ? 'from-purple-400 to-indigo-400' : idx === 1 ? 'from-indigo-400 to-blue-400' : 'from-blue-400 to-blue-300'}`}></span>
                    <span className={`block w-1 h-12 rounded-full bg-gradient-to-b ${idx === 0 ? 'from-purple-400 to-indigo-400' : idx === 1 ? 'from-indigo-400 to-blue-400' : 'from-blue-400 to-blue-300'}`}></span>
                    <span className={`block w-2 h-2 rounded-full bg-gradient-to-b ${idx === 0 ? 'from-purple-400 to-indigo-400' : idx === 1 ? 'from-indigo-400 to-blue-400' : 'from-blue-400 to-blue-300'}`}></span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
