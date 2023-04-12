import PROJECTS_IMAGE from "../../../../assets/images/projects.png"

import ProjectSlide from "./components/ProjectSlide"

function Projects() {
    return (
        <section id="projects" className="py-10">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My
                    <span className="text-cyan-600"> Projects</span>
                </h3>

                <p className="mt-3 text-lg text-gray-400">My awesome works</p>
            </div>

            <div className="max-w-6xl mx-auto px-5 flex items-center gap-6 mt-12">
                <ProjectSlide />

                {/* <div className="w-2/3">
                    <ProjectSlide />
                </div> 

                 <div>
                    <img src={PROJECTS_IMAGE} alt="My Projects" />
                </div> */}
            </div>
        </section>
    )
}

export default Projects