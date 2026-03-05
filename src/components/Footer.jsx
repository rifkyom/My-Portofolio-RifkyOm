import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
       <Link to>
        <h1 className="text-2xl font-bold text-violet-500">Portfolio</h1></Link>
        <div className="text-2xl flex gap-7 text-center">
            <Link to="/#beranda" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Beranda</Link>
            <Link to="/#tentang" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Tentang</Link>
            <Link to="/#proyek" className="sm:text-lg relative text-base font-medium 
                transition duration-300 hover:text-violet-500">Proyek</Link>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/rifkyom">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/rifky_om/">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/rifky-octory-mulyana-239058223/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://www.youtube.com/@rifkyom">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default footer