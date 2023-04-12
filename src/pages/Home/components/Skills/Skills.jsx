import SkillSlide from "./component/SkillSlide"


function Skills() {
    return (
        <section id="skills" className="py-10 bg-gray-800">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600 ">Skills</span>
                </h3>

                <p className="text-lg text-gray-400 py-3">My Knowledge</p>

                <div className="my-12 max-w-5xl mx-auto">
                    <SkillSlide />
                </div>
            </div>
        </section>
    )
}

export default Skills