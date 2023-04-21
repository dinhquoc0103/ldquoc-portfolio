import ACHIEVEMENTS_IMAGE from "../../../../assets/images/achievements.png"

import Button from "../../../../components/Button"

function Achievements() {
    return (
        <section id="achievements" className="achievements py-10 px-3">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My
                    <span className="text-cyan-600"> Achievements</span>
                </h3>

                <p className="mt-3 text-lg text-gray-400">My achievements while studying at school</p>
            </div>

            <div className="mt-10 mlg:mt-24 py-5 px-8 bg-gray-700 max-w-4xl mx-auto rounded-2xl flex flex-col-reverse lg:flex-row items-center gap-6 relative min-h-[24rem]">
                <div className="max-w-lg ">
                    <h2 className="text-2xl font-semibold text-center md:text-left">Some academic achievements</h2>

                    <p className="text-sm mt-4 text-justify md:text-left leading-6">
                        Very Good Certificate of Merit for Semester I, II (2018 - 2019), Semester I (2019 - 2020), Semester II (2020 - 2021). Scholarships to encourage study, very good grades for semesters I and II (2019-2020).
                    </p>

                    <a href="#" className="mt-10 block text-center md:text-left">
                        <Button>
                            See It
                        </Button>
                    </a>
                </div>

                <div className="lg:absolute h-80 lg:h-[32rem] lg:bottom-0 lg:right-1">
                    <img src={ACHIEVEMENTS_IMAGE} alt="My Achievements" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Achievements