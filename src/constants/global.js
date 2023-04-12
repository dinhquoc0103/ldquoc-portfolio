import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel, FaSass, FaBootstrap, FaGithub } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiRedux, SiJquery, SiMysql, SiMicrosoftsqlserver } from "react-icons/si"
import { MdOutlineEmail, MdLocationPin } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { BsFiletypeSql } from "react-icons/bs"

import PROJECT1_IMAGE from "../assets/images/projects/project-1.png"
import PROJECT2_IMAGE from "../assets/images/projects/project-2.png"
import PROJECT3_IMAGE from "../assets/images/projects/project-3.png"
import PROJECT4_IMAGE from "../assets/images/projects/project-4.png"
import PROJECT5_IMAGE from "../assets/images/projects/project-5.png"

export const navItems = [
    { title: "Home", hash: "#home" },
    { title: "About", hash: "#about" },
    { title: "Skills", hash: "#skills" },
    { title: "Achievements", hash: "#achievements" },
    { title: "Projects", hash: "#projects" },
    { title: "Contact", hash: "#contact" },
]

export const skills = [
    { title: "HTML5", icon: FaHtml5, percent: 80 },
    { title: "CSS3", icon: FaCss3Alt, percent: 80 },
    { title: "JavaScript", icon: SiJavascript, percent: 80 },
    { title: "ReactJS", icon: FaReact, percent: 80 },
    { title: "PHP", icon: FaPhp, percent: 80 },
    { title: "Laravel", icon: FaLaravel, percent: 80 },
    { title: "SQL", icon: BsFiletypeSql, percent: 80 },
    { title: "TailwindCss", icon: SiTailwindcss, percent: 80 },
    { title: "SCSS/SASS", icon: FaSass, percent: 80, },
    { title: "Bootstrap", icon: FaBootstrap, percent: 80, },
    { title: "Redux", icon: SiRedux, percent: 80, },
    { title: "jQuery", icon: SiJquery, percent: 80, },
    { title: "Git/Github", icon: FaGithub, percent: 80, },
    { title: "MySQL", icon: SiMysql, percent: 80, },
    { title: "SQL Server", icon: SiMicrosoftsqlserver, percent: 80, },
]

export const projects = [
    {
        title: "Q Movie",
        thumb: PROJECT1_IMAGE,
        github: "https://github.com/dinhquoc0103/react-movie",
        demo: "https://qmovie.vercel.app/"
    },
    {
        title: "Q Photos",
        thumb: PROJECT2_IMAGE,
        github: "https://github.com/dinhquoc0103/photo-website",
        demo: "https://qphotowebsite.vercel.app/photos"
    },
    {
        title: "Shop Q",
        thumb: PROJECT3_IMAGE,
        github: "https://github.com/dinhquoc0103/shop-q",
        demo: "https://shopq-production.up.railway.app/"
    },
    {
        title: "Bookstore",
        thumb: PROJECT4_IMAGE,
        github: "https://github.com/dinhquoc0103/bookstore",
        demo: ""
    },
    {
        title: "Music Player",
        thumb: PROJECT5_IMAGE,
        github: "https://github.com/dinhquoc0103/music-player-javascript",
        demo: "https://music-player-using-javascript-dinhquoc0103.vercel.app/"
    },
]

export const contactInfo = [
    { icon: MdOutlineEmail, text: "dinhquoc0103@gmail.com" },
    { icon: FiPhoneCall, text: "0357658847" },
    { icon: MdLocationPin, text: "Thoi An, District 12, HCMC" },
]