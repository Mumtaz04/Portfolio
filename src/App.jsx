import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import profilePic from './assets/profile.jpg'; // Pastikan file ini ada
import portfolioImage from './assets/image.png';
import bugReportImage from './assets/Pelaporan Bug.png';
import cvFile from './assets/cv.pdf';

// --- TAMBAHAN: CSS Sederhana untuk animasi fade-in ---
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;

// --- 1. KOMPONEN PROJECTS (BARU DITAMBAHKAN) ---
const ProjectsSection = () => {
  // --- DAFTAR PROJECT ANDA DISINI ---
  const projects = [
    {
      id: 1,
      title: "Absensi",
      description: "Absensi untuk karyawan, dimana terdapat absensi ditempat atau di luar kantor (berguna untuk work from home).",
      image: portfolioImage, // Ganti dengan variable import gambar nanti
      tech: ["Typescript", "Tailwind CSS (SCSS)", "JavaScript"],
      github: "https://github.com/Mumtaz04?tab=repositories", // Ganti link github asli
      demo: "#" // Link demo jika ada (atau biarkan #)
    },
   {
     id: 2,
     title: "Pengajuan Bug",
     description: "Aplikasi pengajuan bug telah ditemukan sebuah bug pada aplikasi client yang menyebabkan aplikasi tidak berjalan sebagaimana mestinya. Bug ini muncul ketika pengguna melakukan [jelaskan aksi pengguna, misalnya login / submit data / membuka menu tertentu].",
     image: bugReportImage,
     tech: ["HTML", "Tailwind CSS", "JavaScript (Framework Vue)"],
      github: "https://github.com/Mumtaz04",
     demo: "#"
   },
 //   {
//      id: 3,
//      title: "AI Image Classifier",
//      description: "Project eksperimen menggunakan Python untuk mendeteksi objek dalam gambar menggunakan library TensorFlow.",
//      image: "https://placehold.co/600x400/1e293b/white?text=AI+Project",
//      tech: ["Python", "TensorFlow", "Jupyter"],
//      github: "https://github.com/Mumtaz04",
//      demo: null // Set null jika tidak ada link demo
//    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 md:py-10 fade-in">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
        <div className="w-16 h-1 bg-blue-500"></div>
        <p className="text-slate-400 mt-4">
          Berikut adalah beberapa project yang telah saya kerjakan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((item) => (
          <div key={item.id} className="bg-[#1e293b] border border-slate-700 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 shadow-lg group">
            {/* Bagian Gambar */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-500 hover:text-white transition" title="View Code">
                  <i className="fab fa-github text-lg"></i>
                </a>
                {item.demo && (
                  <a href={item.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-blue-500 hover:text-white transition" title="Live Demo">
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Bagian Konten */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
              
              {/* Tags Teknologi */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-blue-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              {/* Tombol Mobile (Opsional jika ingin tombol terlihat jelas di HP) */}
              <div className="lg:hidden flex gap-3 mt-auto">
                 <a href={item.github} className="flex-1 text-center py-2 bg-slate-800 rounded-lg text-white text-sm font-medium hover:bg-slate-700 border border-slate-600">
                    GitHub
                 </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 2. KOMPONEN SKILLS (Sama seperti sebelumnya) ---
const SkillsSection = () => {
  const skills = [
    { name: "HTML", pct: "100%", w: "100%" },
    { name: "CSS (Tailwind)", pct: "90%", w: "90%" },
    { name: "PHP (Laravel)", pct: "80%", w: "80%" },
    { name: "JavaScript", pct: "60%", w: "60%" },
    { name: "Database (MySQL)", pct: "75%", w: "75%" },
    { name: "C/C++", pct: "60%", w: "60%" },
    { name: "Python", pct: "70%", w: "70%" },
    { name: "Sketchup", pct: "60%", w: "60%" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10 fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
        <div className="w-16 h-1 bg-blue-500"></div>
        <p className="text-slate-400 mt-4">
          Berikut adalah rincian kemampuan teknis yang saya kuasai dalam pengembangan perangkat lunak.
        </p>
      </div>

      <div className="bg-[#1e293b] border border-slate-700 p-6 md:p-10 rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-between mb-2">
                <span className="text-base font-semibold text-blue-400 group-hover:text-blue-300 transition">{skill.name}</span>
                <span className="text-sm font-medium text-slate-400">{skill.pct}</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-3 backdrop-blur-sm border border-slate-600">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                  style={{ width: skill.w }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. KOMPONEN SIDEBAR (Sama seperti sebelumnya) ---
const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'projects', icon: 'fa-rocket', label: 'Projects' },
    { id: 'skills', icon: 'fa-code', label: 'Skills' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsOpen(false); 
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0f172a] border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:h-screen lg:shrink-0 shadow-2xl lg:shadow-none`}
      >
        <div className="p-6">
          <div className="flex flex-col mb-8">
            <div className="flex items-center justify-between mb-6 lg:mb-0 lg:justify-center">
               <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white absolute right-6 top-6">
                <i className="fas fa-times text-xl"></i>
              </button>
              <div className="flex flex-col items-center w-full">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] bg-slate-800 flex items-center justify-center mb-3">
                  {profilePic ? (
                     <img
                     src={profilePic}
                     alt="Profile"
                     className="w-full h-full object-cover"
                     onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = 'M'; e.target.parentElement.classList.add('text-white', 'font-bold', 'text-2xl'); }}
                   />
                  ) : (
                    <span className="text-white font-bold text-2xl">M</span>
                  )}
                </div>
                <h2 className="text-white font-bold text-xl leading-tight text-center">Mumtaz</h2>
                <p className="text-sm text-slate-500 mb-4 text-center">Software Engineer</p>
                <a 
                  href={cvFile}
                  download="MUMTAZ FIKRI NASRULLAH CV.pdf"
                  className="px-4 py-2 bg-slate-800 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 mb-2 group"
                >
                  <i className="fas fa-download group-hover:animate-bounce"></i> Download CV
                </a>
              </div>
            </div>
          </div>
          <nav className="space-y-2 mt-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${activeTab === item.id
                  ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                <i className={`fas ${item.icon} w-5 text-center`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="p-6">
          <div className="bg-[#1e293b] p-4 rounded-xl border border-slate-700 text-center">
            <p className="text-xs text-slate-400 mb-3">Butuh bantuan project?</p>
            <button onClick={() => handleTabClick('contact')} className="w-full bg-white text-[#0f172a] font-bold py-2 rounded-lg hover:bg-slate-200 transition text-sm">Hire Me Now</button>
          </div>
        </div>
      </aside>
      {isOpen && (<div className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>)}
    </>
  );
};

// --- 4. KOMPONEN HOME ---
// --- 4. KOMPONEN HOME ---
const HomeSection = ({ setTab }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const fullText1 = "Hello, I'm ";
  const fullText2 = "Mumtaz";

  React.useEffect(() => {
    const handleTyping = () => {
      // Determine full string state based on what we are currently typing/deleting
      
      // LOGIC: 
      // 1. Type text1
      // 2. Type text2
      // 3. Wait
      // 4. Delete text2
      // 5. Delete text1
      // 6. Loop

      if (!isDeleting) {
        // TYPING PHASE
        if (text1 !== fullText1) {
          setText1(fullText1.substring(0, text1.length + 1));
          setTypingSpeed(100);
        } else if (text2 !== fullText2) {
          setText2(fullText2.substring(0, text2.length + 1));
          setTypingSpeed(100); 
        } else {
          // Both full, wait before deleting
          setIsDeleting(true);
          setTypingSpeed(2000); // Pause at end
        }
      } else {
        // DELETING PHASE
        if (text2 !== '') {
          setText2(fullText2.substring(0, text2.length - 1));
          setTypingSpeed(50);
        } else if (text1 !== '') {
          setText1(fullText1.substring(0, text1.length - 1));
          setTypingSpeed(50);
        } else {
          // Both deleted, restart
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(500); // Pause before starting next loop
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text1, text2, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10 fade-in">
      <div className="mb-2">
        <span className="text-blue-500 font-mono text-sm">&lt;/&gt; WELCOME TO MY PORTFOLIO</span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight mt-4 min-h-[160px] md:min-h-[120px]">
        {text1}<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {text2}
        </span>
        <span className="animate-pulse text-blue-400">|</span>
      </h1>
      <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
        Junior Software Engineer crafting with team or individual <strong className="text-white">project magang android mobile</strong> and <strong className="text-white">pengajuan bug report (frontend)</strong>language pemrograman <strong className="text-white"> with Laravel, Vue & Tailwind.</strong>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button onClick={() => setTab('projects')} className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2">
          View My Projects <i className="fas fa-arrow-right"></i>
        </button>
        <button onClick={() => setTab('contact')} className="px-6 py-3 border border-slate-600 text-white rounded-full hover:bg-slate-800 transition font-medium text-center">
          Contact Me
        </button>
      </div>
      
      {/* Latest Projects Preview (Sederhana) */}
      <div className="border-l-4 border-blue-500 pl-4 mb-6 flex justify-between items-end">
        <h2 className="text-xl md:text-2xl font-bold text-white">Latest Projects</h2>
        <button onClick={() => setTab('projects')} className="text-sm text-slate-500 hover:text-blue-400">See all projects -&gt;</button>
      </div>
      {/* Menggunakan grid kecil untuk preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div onClick={() => setTab('projects')} className="bg-[#1e293b] p-6 rounded-xl border border-slate-700 hover:border-blue-500 cursor-pointer transition group">
           <h3 className="text-white font-bold mb-2 group-hover:text-blue-400">Absensi</h3>
           <p className="text-slate-400 text-sm">HTML, Typescript, Tailwind CSS (SCSS), JavaScript </p>
        </div>
        {<div onClick={() => setTab('projects')} className="bg-[#1e293b] p-6 rounded-xl border border-slate-700 hover:border-blue-500 cursor-pointer transition group">
           <h3 className="text-white font-bold mb-2 group-hover:text-blue-400">Pelaporan Bug</h3>
           <p className="text-slate-400 text-sm">HTML, Tailwind CSS (SCSS), JavaScript </p>
        </div>}
      </div>
    </div>
  );
};

// --- 5. KOMPONEN ABOUT ---
const AboutSection = () => (
  <div className="max-w-5xl mx-auto py-6 md:py-10 fade-in">
    <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
    <div className="w-16 h-1 bg-purple-500 mb-10"></div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-[#1e293b] border border-slate-700 p-6 md:p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <i className="fas fa-user-astronaut text-blue-400"></i> Who am I?
          </h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Halo! Saya <strong className="text-white">Mumtaz F N</strong>, seorang Junior Software Engineer yang memiliki ketertarikan mendalam pada dunia pengembangan web dan kecerdasan buatan (AI).
          </p>
          <p className="text-slate-400 leading-relaxed">
            Saya senang memecahkan masalah kompleks melalui kode yang bersih dan efisien. Saat ini, saya fokus membangun aplikasi web modern seperti absensi dan pengajuan bug (untuk pengajuan bug saya belum meminta izin apakah boleh diposting digithub atau tidak boleh, karena milik perusahaan magang PT TAS).
          </p>
        </div>
        <div className="bg-[#1e293b] border border-slate-700 p-6 md:p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <i className="fas fa-graduation-cap text-purple-400"></i> Education
          </h3>
          <div className="relative border-l-2 border-slate-700 ml-3 space-y-10 pb-2">
            <div className="ml-8 relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-[#0f172a]"></span>
              <h4 className="text-white font-bold text-base md:text-lg">Universitas Islam Sultan Agung (UNISSULA)</h4>
              <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded inline-block mb-2 mt-1">2020 - Sekarang</span>
              <p className="text-slate-400 text-sm">Teknik Informatika</p>
            </div>
            <div className="ml-8 relative">
              <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-slate-600 ring-4 ring-[#0f172a]"></span>
              <h4 className="text-white font-bold text-base md:text-lg">SMK Negeri 55 Jakarta Utara</h4>
              <span className="text-xs text-slate-500 block mb-1 mt-1">2018 - 2021</span>
              <p className="text-slate-400 text-sm">Teknik Bisnis Sepeda Motor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-[#1e293b] border border-slate-700 p-6 rounded-2xl sticky top-8">
          <h3 className="text-lg font-bold text-white mb-6">Personal Info</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-blue-400 shrink-0"><i className="fas fa-user"></i></div>
              <div className="overflow-hidden"><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Full Name</p><p className="text-white font-medium truncate">Mumtaz F N</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-yellow-400 shrink-0"><i className="fas fa-envelope"></i></div>
              <div className="overflow-hidden"><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</p><p className="text-white font-medium truncate" title="mumtazproject0@gmail.com">mumtazproject0@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-red-400 shrink-0"><i className="fas fa-briefcase"></i></div>
              <div><p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</p><span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-bold mt-1">Open to Work</span></div>
            </div>
          </div>
          <a href={cvFile} download="MUMTAZ FIKRI NASRULLAH CV.pdf" className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 text-[#0f172a] font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 cursor-pointer"><i className="fas fa-download"></i> Download CV</a>
        </div>
      </div>
    </div>
  </div>
);

// --- 6. KOMPONEN CONTACT ---
const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_twwmb0p', 'template_rt5gaad', form.current, { publicKey: 'T3tJSCOPhPlZQcpgo' })
      .then(() => { alert('Pesan BERHASIL terkirim!'); e.target.reset(); }, (error) => { alert('GAGAL kirim pesan.'); console.log(error.text); });
  };
  const socialLinks = [
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/mumtaz-fikri-nasrullah-688b66307/", color: "text-blue-500", sub: "Let's Connect" },
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com/Mumtaz04", color: "text-gray-300", sub: "Check my Code" },
    { name: "WhatsApp", icon: "fab fa-whatsapp", url: "https://wa.me/6281938154598", color: "text-green-500", sub: "Chat Me" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/mumtaz_vg04/", color: "text-pink-500", sub: "Follow Me" }
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10 fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in <span className="text-blue-500">Touch</span></h2>
        <p className="text-slate-400 max-w-lg mx-auto">Punya ide project menarik atau sekadar ingin menyapa? Hubungi saya.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1e293b] border border-slate-700 p-6 md:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center min-h-[400px]">
          <h3 className="text-xl font-bold text-white mb-6 z-10">Social Media</h3>
          <div className="space-y-4 relative z-10">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-3 rounded-xl hover:bg-slate-800 transition border border-transparent hover:border-slate-600 group cursor-pointer">
                <div className={`w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-2xl border border-slate-700 shadow-sm group-hover:scale-110 transition ${social.color} shrink-0`}><i className={social.icon}></i></div>
                <div className="min-w-0"><p className="text-white font-bold text-lg group-hover:text-blue-400 transition truncate">{social.name}</p><p className="text-slate-400 text-xs truncate">{social.sub}</p></div>
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 bg-[#1e293b] border border-slate-700 p-6 md:p-8 rounded-2xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div><label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Your Name</label><input type="text" name="user_name" placeholder="Siapa nama Anda?" required className="w-full bg-[#020617] border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition" /></div>
            <div><label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Email Address</label><input type="email" name="user_email" placeholder="emailanda@example.com" required className="w-full bg-[#020617] border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition" /></div>
            <div><label className="block text-slate-400 text-sm font-bold mb-2 ml-1">Message</label><textarea name="message" rows="5" placeholder="Tulis pesan Anda disini..." required className="w-full bg-[#020617] border border-slate-600 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition resize-none"></textarea></div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 mt-4"><i className="fas fa-paper-plane"></i> Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- APP COMPONENT UTAMA ---
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#020617]">
      <style>{styles}</style>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 h-full flex flex-col relative w-full transition-all duration-300">
        <div className="lg:hidden p-4 flex items-center justify-between sticky top-0 z-30 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800">
          <div className="font-bold text-white text-lg">Mumtaz Portfolio</div>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition"><i className="fas fa-bars text-xl"></i></button>
        </div>
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
          {activeTab === 'home' && <HomeSection setTab={setActiveTab} />}
          {activeTab === 'projects' && <ProjectsSection />} {/* <-- PANGGIL KOMPONEN DISINI */}
          {activeTab === 'skills' && <SkillsSection />}
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'contact' && <ContactSection />}
        </main>
      </div>
    </div>
  );
}

export default App;