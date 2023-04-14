import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"

import HERO_IMAGE from "../../../../assets/images/hero.png"

import Button from "../../../../components/Button"

function Hero() {
    return (
        <section id="home" className="hero min-h-screen flex flex-col md:flex-row items-center py-10">
            <div className="flex flex-1 justify-center items-center md:h-full">
                <img src={HERO_IMAGE} alt="hero image" className="w-11/12 md:h-full object-cover" />
            </div>

            <div className="flex-1">
                <div className="text-center md:text-left">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[60px] lg:!leading-[94px]">
                        <span className="block text-4xl lg:text-5xl xl:text-6xl text-cyan-600">Hello! </span>
                        My Name is Le Dinh Quoc
                    </h1>

                    <h4 className="text-gray-600 font-semibold text-xl lg:text-2xl mt-2">Web Developer</h4>

                    <Button className="mt-7">
                        Contact Me
                    </Button>

                    <div className="social-icons flex gap-5 md:justify-start justify-center items-center text-3xl text-gray-600 mt-8 cursor-pointer">
                        <a target="_blank" href="https://www.instagram.com/">
                            <BsInstagram />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/">
                            <BsFacebook />
                        </a>
                        {/* <BsLinkedin />
                        <BsTwitter /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;