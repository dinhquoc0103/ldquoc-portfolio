import PropTypes from "prop-types"

SkillCard.propTypes = {
    skill: PropTypes.object.isRequired
}

function SkillCard({ skill }) {
    const { title, icon, percent } = skill
    const IconComponent = icon

    return (

        <div className="skill-card">
            <div
                className="flex justify-center items-center  w-28 h-28 md:w-32 md:h-32 rounded-full"
                style={{ background: `conic-gradient(rgb(8, 145, 170) ${percent}%, rgb(221, 221, 221) ${100 - percent}%)` }}
            >
                <div className="flex justify-center items-center w-24 h-24 md:w-28 md:h-28 bg-slate-100 rounded-full text-5xl">
                    <IconComponent className="text-red-500" />
                </div>
            </div>

            <p className="text-xl mt-3 text-[#f3f4f6]">{title}</p>
        </div>
    )
}

export default SkillCard