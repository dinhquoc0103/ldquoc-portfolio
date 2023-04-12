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

            <div className="mt-24 py-5 px-8 bg-gray-700 max-w-4xl mx-auto rounded-2xl flex items-center gap-6 relative min-h-[24rem]">
                <div className="max-w-lg">
                    <h2 className="text-2xl font-semibold">Some academic achievements</h2>

                    <p className="text-sm mt-4 text-left leading-6">
                        Very Good Certificate of Merit for Semester I, II (2018 - 2019), Semester I (2019 - 2020), Semester II (2020 - 2021). Scholarships to encourage study, very good grades for semesters I and II (2019-2020).
                    </p>

                    <a href="#" className="mt-10 block">
                        <Button>
                            Go to my achievements
                        </Button>
                    </a>
                </div>

                <div className="absolute h-[32rem] bottom-0 -right-3 ">
                    <img src={ACHIEVEMENTS_IMAGE} alt="My Achievements" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default Achievements