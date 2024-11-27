import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLinks } from '../navbar/Navbar'
import { IoMdMail } from 'react-icons/io';



const Footer = () => {
  return (
    <div className="dark:bg-black text-white dark:text-white pt-10">
      <div className="container">
        <ul className="flex  items-center justify-center gap-6">
          {NavLinks.map(({ id, name, link }) => (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* footer icons */}
      <div className="bg-dark container">
        <div className="mt-10 p-6 flex items-center justify-between gap-6 ">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <a href="https://github.com/Anujsingh2002?tab=repositories"> <FaGithub  className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" />            </a>
            <a href="https://www.linkedin.com/in/anuj-singh-440426203/"><FaLinkedin className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" /></a>
            <a href="mailto:anujpratapsinghchbs@gmail.com"><IoMdMail className="text-2xl text-white/60 hover:text-primary cursor-pointer duration-300" /></a>
          </div>
          <div className="hidden sm:block">❤️ by Anuj Singh</div>
        </div>
      </div>
    </div>
  );
}

export default Footer