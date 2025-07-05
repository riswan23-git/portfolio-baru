import React from "react";
import { motion } from "framer-motion";

function Home() {
  const frontendSkills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", alt: "Tailwind CSS" }
  ];

  const backendSkills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" }
  ];

  return (
    <section className="px-6 py-12 text-center">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src="/riswan.jpg.jpeg"
        alt="Foto Profil"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-bold mb-2"
      >
        Riswan Fachrezy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 mb-4"
      >
        Mahasiswa IT | Web Developer | Cybersecurity Enthusiast
      </motion.p>

      {/* Tentang Saya */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-12 bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-500 border-b border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6">👨‍💻 Tentang Saya</h2>
        <div className="md:flex md:items-center md:gap-8">
          <div className="mt-6 md:mt-0 text-lg leading-relaxed text-gray-300">
            <p>
              Hai! Saya <strong>Riswan Fachrezy</strong>, mahasiswa Ilmu Komputer ITH (Institut Teknologi Bacharuddin Jusuf Habibie) yang memiliki
              ketertarikan tinggi pada pengembangan web modern, keamanan siber, dan data science.
              Saya menikmati membangun antarmuka bersih dan fungsional dengan React dan Tailwind.
            </p>
            <p className="mt-4">
              Saat ini saya sedang mendalami React serta Python untuk AI. Saya percaya teknologi adalah
              alat untuk menyelesaikan masalah nyata dengan cara yang efisien dan elegan.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-2xl font-semibold mt-10 mb-4"
      >
        💻 Skills
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 border border-gray-700 rounded-lg p-6">
        {/* Frontend Column */}
        <div className="border-r border-gray-600 pr-4">
          <h3 className="text-lg font-semibold text-center mb-2">Frontend</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 items-center"
          >
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="tooltip relative group"
              >
                <img src={skill.src} alt={skill.alt} className="w-12 h-12" />
                <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {skill.alt}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend Column */}
        <div className="pl-4">
          <h3 className="text-lg font-semibold text-center mb-2">Backend</h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 items-center"
          >
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="tooltip relative group"
              >
                <img src={skill.src} alt={skill.alt} className="w-12 h-12" />
                <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  {skill.alt}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
