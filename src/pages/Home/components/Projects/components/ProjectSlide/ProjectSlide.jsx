import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { projects } from "../../../../../../constants/global"
import 'swiper/css'
import 'swiper/css/pagination'

import ProjectCard from "../ProjectCard"

function ProjectSlide() {
    return (

        <Swiper
            modules={[Pagination]}
            grabCursor
            pagination={{
                clickable: true
            }}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }}
        >
            {projects.map((project, index) => {
                return (
                    <SwiperSlide key={index} >
                        <ProjectCard project={project} />
                    </SwiperSlide>
                )
            })}

        </Swiper>


    )
}

export default ProjectSlide;