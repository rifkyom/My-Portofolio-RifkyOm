import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);   
            }
        };
        // 

        window.addEventListener("scroll", handleScroll); 
        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, []);  
    
  return (
    <div className="navbar py-7 flex items-center justify-between">
        <div className="logo cursor-pointer" onClick={() => window.location.href = "/"}>
        <h1 className="text-3xl font-bold text-violet-500 p-1 md:bg-transparent 
        md:text-violet-500 transition-colors hover:text-violet-400">Portfolio</h1>
        </div>
        <ul className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2
        md:translate-x-0 md:opacity-100 bg-violet-900/30 backdrop-blur-md p-4 rounded-br-2xl 
        rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${active ? "top-0 opacity-100" : 
        "-top-10 opacity-0"}`}>
            <li>
                <Link to="/#beranda" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Beranda</Link>
            </li>
             <li>
                <Link to="/#tentang" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Tentang</Link>
            </li>
             <li>
                <Link to="/#proyek" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Proyek</Link>
            </li>
             <li>
                <Link to="/#kontak" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Kontak</Link>
            </li>   
         </ul>
    </div>
  )
}

export default Navbar