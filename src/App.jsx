import React, { useRef, useEffect } from 'react';
// import { div } from 'three/tsl';
import DataImage from './data';
import { listTools, listProyek } from './data';
import Particles from './Particles';
import Lanyard from './Lanyard.jsx';
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Variabel global agar diingat browser
let isFirstLoad = true;

function App() {
  const pdfRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // --- 1. EFEK BARU: Mematikan animasi delay setelah pertama kali buka ---
  useEffect(() => {
    isFirstLoad = false;
  }, []); // Kurung siku kosong artinya efek ini hanya jalan 1x di awal

  // --- 2. EFEK DETEKSI REFRESH: Tendang ke beranda jika di-refresh ---
  useEffect(() => {
    const navEntries = window.performance.getEntriesByType("navigation");

    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  // --- 3. EFEK AUTO-SCROLL: Meluncur ke menu tujuan ---
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="hero relative min-h-screen grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        {/* Tambahkan -mt-10 md:-mt-24 di bagian akhir class */}
        <div className={`animate__animated animate__fadeInUp ${isFirstLoad ? 'animate__delay-1s' : ''} -mt-10 md:-mt-24`}>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-[40px] md:ml-auto" loading='lazy' />
            <q>Bersyukurlah ketika kamu menemukan error, karena dengan error itulah
              menjadikan kamu lebih baik</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya <span className="text-violet-500">Rifky Octory Mulyana</span></h1>
          <p className="text-base/loose mb-6 opacity-50">
            Computer Engineering | System Administrator | IT Support
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <div className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
              <a href="CV_Rifky Octory Mulyana.pdf" download='CV_Rifky Octory Mulyana.pdf'>
                <button>
                  Download CV</button></a> <i className="ri-download-line ri-lg"></i>

            </div>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        {/* Mengubah absolute menjadi relative di HP agar Lanyard turun ke bawah teks */}
        <div className={`w-full h-[60vh] relative md:h-screen md:absolute md:top-[-5rem] md:right-0 lg:-right-10 lg:w-[655px] animate__animated animate__fadeInUp ${isFirstLoad ? 'animate__delay-2s' : ''}`}>
          <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
        </div>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg transition-all duration-1000 ease-in-out hover:-translate-y-3 hover:scale-[1.02] hover:drop-shadow-[0_10px_20px_rgba(139,92,246,0.4)] cursor-pointer"
          div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 
      sm:hidden" loading='lazy' />
          <p className="text-base/loose mb-10 text-justify">
            Hi, perkenalkan saya Rifky Octory Mulyana, Saya lulusan S1 Teknik Komputer dari Universitas Pendidikan Indonesia. Memiliki minat yang mendalam di bidang System Administration, IT Support, serta pengembangan 
            Front-End. Berpengalaman dalam manajemen Server, konfigurasi infrastruktur virtual, serta 
            pengembangan antarmuka aplikasi web menggunakan React.js dan Laravel. Mampu bekerja secara 
            efektif dalam tim untuk mencapai target operasional. Berorientasi pada hasil dan siap berkontribusi 
            dalam mengoptimalkan performa infrastruktur IT sekaligus mendukung kebutuhan pengembangan 
            aplikasi perusahaan.
          </p>
          <div className='flex items-center justify-between'>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden"
              loading='lazy' />
            <div className='flex items-center gap-6'>
              <div>
                <h1 className='text-4xl mb-1'>
                  3<span className='text-violet-500'>+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className='text-4xl mb-1'>
                  5<span className='text-violet-500'>+</span>
                </h1>
                <p>Tahun Studi Akademik IT</p>
              </div>
            </div>
          </div>
        </div>

        <div className='tools mt-32'>
          <h1 className='text-center text-4xl/snug font-bold mb-4'
            data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Tools</h1>
          <p className='text-base/loose text-center opacity-50'
            data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300"
            data-aos-once="true">Berikut adalah beberapa tools yang sering digunakan dalam proyek saya.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
        grid-cols-1 gap-4">

            {listTools.map(tool => (
              <div className='flex items-center gap-2 p-3 border border-zinc-600 rounded-md
        hover:bg-zinc-800 group transition-all duration-300 ease-out hover:-translate-y-6 hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(139,92,246,0.4)] cursor-pointer' key={tool.id} data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className='w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900'
                  loading='lazy' />
                <div>
                  <h4 className='font-bold'>{tool.nama}</h4>
                  <p className='opacity-50'>{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className='text-center text-4xl font-bold mb-2'
          data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className='text-base/loose text-center opacity-50'
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">Berikut ini beberapa proyek yang telah saya buat.</p>
        <div className='proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>

          {listProyek.map(proyek => (
            <div key={proyek.id} className='p-4 bg-zinc-800 rounded-md'
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className='text-2xl font-bold my-4'>{proyek.nama}</h1>
                <p className='text-base/loose mb-4'>{proyek.desk}</p>
                <div className='flex flex-wrap gap-2'>
                  {proyek.tools.map((tool, index) => (
                    <p className='py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold' key={index}>{tool}</p>
                  ))}
                </div>
                <div className='mt-8 text-center'>
                  <Link to={`/proyek/${proyek.slug}`} className='bg-violet-700 p-3 rounded-lg block border 
                border-zinc-600 hover:bg-violet-600'>Detail Proyek</Link>

                  {/* Tombol GitHub Baru */}
                  <a
                    href={proyek.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-3 bg-zinc-700 p-3 rounded-lg flex justify-center items-center gap-2 border border-zinc-500 hover:bg-zinc-600 transition-colors'>
                    <i className="ri-github-fill ri-lg"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className='text-4xl mb-2 font-bold text-center'
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Kontak</h1>
        <p className='text-base/loose text-center mb-10 opacity-50'
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Jika ada hal yang ingin ditanyakan, silahkan hubungi kontak saya.
        </p>
        <form action="https://formspree.io/f/xaqdkykj" method="POST"
          className='bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md' autoComplete='off'
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Nama Lengkap</label>
              <input type="text" name='nama' placeholder='Masukkan Nama...' className='border 
              border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold'>Email</label>
              <input type="email" name='email' placeholder='Masukkan Email...' className='border 
              border-zinc-500 p-2 rounded-md' required />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='pesan' className='font-semibold'>Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder='Pesan...' className='border 
              border-zinc-500 p-2 rounded-md' required></textarea>
            </div>
            <div className='text-center'>
              <button type="submit" className='bg-violet-700 p-3 rounded-lg w-full cursor-pointer border 
              border-zinc-600 hover:bg-violet-600'>Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
