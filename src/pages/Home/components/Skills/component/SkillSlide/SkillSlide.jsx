import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { skills } from "../../../../../../constants/global"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SkillCard from "../SkillCard"

function SkillSlide() {
    return (
        <div className="skill-slide">
            <Swiper
                modules={[Pagination, Navigation]}
                grabCursor
                navigation
                pagination={{
                    clickable: true
                }}
                spaceBetween={40}
                slidesPerView={4}
            >
                {skills.map((skill, index) => {
                    return (
                        <SwiperSlide key={index} className="swiper-slide">
                            <SkillCard skill={skill} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export default SkillSlide