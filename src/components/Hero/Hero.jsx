import React from 'react'
import PersonImg from '../../assets/Anujpassportphoto.jpg'

const Hero = () => {
    return (
        <>
        <span id="about"></span>
        <div className="dark:bg-black dark:text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
                    {/* image */}
                    <div className="px-8  justify-items-center">
                        <img className="py-12 h-4/5 w-10/12" src={PersonImg} alt=""  />
                    </div>
                    
                    {/* discription */}
                    <div className="space-y-3 ">
                        <p className="text-primary text-3xl">Hello I'm Anuj Singh</p>
                        <h1 className="text-5xl font-semibold">Web Developer<br/>Software Developer</h1>
                        <p>
                            Programmer and skilled Full-Stack Developer (frontend primary) seeking employment and willing to learn new skills.
                        </p>
                        <button className="uppercase bg-primary hover:bg-primary/80 hover:scale-105 duration-500 py-2 px-6 text-white">
                            About me
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Hero