import { Pagination, Navigation, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { skills } from "../../../../../../constants/global"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import SkillCard from "../SkillCard"

function SkillSlide() {
    return (
        <div className="skill-slide">
            <Swiper
                modules={[Pagination, Navigation, Grid]}
                grabCursor
                navigation
                pagination={{
                    clickable: true
                }}
                spaceBetween={40}
                breakpoints={{
                    515: {
                        slidesPerView: 2,
                        grid: {
                            fill: 'row',
                            rows: 2
                        }
                    },
                    768: {
                        slidesPerView: 3,
                        grid: {
                            fill: 'row',
                            rows: 2
                        }

                    },
                    1024: {
                        slidesPerView: 4,
                        grid: {
                            fill: 'row',
                            rows: 2
                        }
                    },

                }}
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