import PropTypes from "prop-types"

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
}

function ProjectCard({ project }) {
    const { title, thumb, github, demo } = project

    return (
        <div className="project-card">
            <div>
                <img src={thumb} alt={title} />
            </div>

            <h3 className="py-4 text-xl">{title}</h3>

            <div className="flex gap-3">
                {github && <a target="_blank" className="py-1 px-2 text-cyan-600 bg-gray-800" href={github}>Github</a>}
                {demo && <a target="_blank" className="py-1 px-2 text-cyan-600 bg-gray-800" href={demo}>Live demo</a>}
            </div>
        </div>
    )
}

export default ProjectCard