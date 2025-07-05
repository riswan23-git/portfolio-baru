import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Aplikasi Penjualan Buku",
      tech: "PHP, MySQL, JavaScript",
      desc: "Aplikasi berbasis web untuk pengelolaan transaksi penjualan buku.",
      github: "https://github.com/haekal061/musimpanas"
    },
    {
      title: "Website Portofolio",
      tech: "React, Tailwind CSS",
      desc: "Website pribadi untuk menampilkan profil, proyek, dan kontak secara modern.",
      github: "https://github.com/riswan23-git/portfolio-mahasiswa"
    },
    {
      title: "Aplikasi Manajemen Keuangan",
      tech: "PHP, MySQL",
      desc: "Aplikasi berbasis web untuk pengelolaan Keuangan sederhana.",
      github: "https://github.com/riswan23-git/Manajemen-Keuangaan"
    },
    {
      title: "SIJAIL (Sistem Jadwal, Absensi, dan Nilai)",
      tech: "Python",
      desc: "Aplikasi yang saya buat untuk meningkatkan Logika Pemograman.",
      github: "https://github.com/haekal061/musimpanas"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-12 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        🚀 Proyek Saya
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-gray-400 mb-10"
      >
        Berisi kumpulan proyek-proyek yang pernah saya kerjakan.
      </motion.p>

      <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.tech}</p>
            <p className="mt-3 text-gray-300">{project.desc}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3 inline-block"
            >
              Lihat di GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
