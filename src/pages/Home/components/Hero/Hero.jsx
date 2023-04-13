import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs"

import HERO_IMAGE from "../../../../assets/images/hero.png"

import Button from "../../../../components/Button"

function Hero() {
    return (
        <section id="home" className="hero flex items-center py-10">
            <div className="flex flex-1 justify-center items-center">
                <img src={HERO_IMAGE} alt="hero image" className="w-11/12 h-full object-cover" />
            </div>

            <div className="flex-1">
                <div className="text-left">
                    <h1 className="text-white text-5xl font-semibold text-left leading-[94px]">
                        <span className="block text-6xl text-cyan-600">Hello! </span>
                        My Name is Le Dinh Quoc
                    </h1>

                    <h4 className="text-gray-600 text-left font-semibold text-2xl mt-2">Web Developer</h4>

                    <Button className="mt-7">
                        Contact Me
                    </Button>

                    <div className="social-icons flex gap-5 justify-start items-center text-3xl text-gray-600 mt-8 cursor-pointer">
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