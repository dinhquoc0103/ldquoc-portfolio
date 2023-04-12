import ABOUT_IMAGE from "../../../../assets/images/about.png"
import UIT_LOGO from "../../../../assets/images/logo/uit.png"
import MMTT_LOGO from "../../../../assets/images/logo/mmtt.png"

import Button from "../../../../components/Button/Button"

function About() {
    return (
        <section id="about" className="py-10">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    About
                    <span className="text-cyan-600"> Me</span>
                </h3>

                <p className="my-3 text-lg text-gray-400 ">My Introduction</p>

                <div className="max-w-6xl mx-auto px-10 flex items-center gap-6">
                    <div className="px-2 py-5">
                        <p className="text-justify w-11/12 mx-auto leading-7">
                            I'm Le Dinh Quoc, a web developer. I just graduated from
                            <b> University of Information Technology (UIT) </b>
                            , my major is
                            <b> Computer Networking and Communication </b>
                            . I’m currently looking for job in web development with the desire to apply my knowledge and skills in
                            <b> JavaScript, ReactJS, Redux Toolkit, Tailwind CSS, PHP, Laravel, SQL, ... </b>
                            to solve problems at work and bring efficiency to the company. I believe with my ability and effort, I will try to complete the assigned task in the best way.</p>

                        <div className="flex items-center gap-7 pt-9 ml-6">
                            <div className="w-28">
                                <img src={UIT_LOGO} alt="uit logo" className="w-full object-cover" />
                            </div>

                            <div className="w-28">
                                <img src={MMTT_LOGO} alt="mmtt logo" className="w-full object-cover" />
                            </div>

                            {/* <div>
                                <h3 className="text-4xl font-semibold">
                                    04
                                    <span className="text-cyan-600">+</span>
                                </h3>

                                <span className="text-gray-400">Years experience</span>
                            </div>

                            <div>
                                <h3 className="text-4xl font-semibold">
                                    24
                                    <span className="text-cyan-600">+</span>
                                </h3>

                                <span className="text-gray-400">Completed Projects</span>
                            </div>

                            <div>
                                <h3 className="text-4xl font-semibold">
                                    06
                                    <span className="text-cyan-600">+</span>
                                </h3>
                                <span className="text-gray-400">Companies Work</span>
                            </div> */}
                        </div>
                        <br />
                        <br />
                        <div className="text-left ml-6">
                            <Button>
                                Download CV
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-1 ">
                        <div className="w-96 h-full relative about-img">
                            <img src={ABOUT_IMAGE} alt="About Me" className="bg-cyan-600 rounded-xl object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About