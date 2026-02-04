import { SiC, SiCplusplus, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiNodedotjs, SiExpress, SiSpring, SiMongodb, SiPostgresql, SiGithub, SiIntellijidea, SiGit, SiSocketdotio } from 'react-icons/si';
import { TbBrandReactNative, TbApi, TbDatabase, TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { BiCodeBlock, BiNetworkChart } from 'react-icons/bi';
import { HiCubeTransparent } from 'react-icons/hi';
import { MdLayers } from 'react-icons/md';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export const skillsData = {
  programmingLanguages: [
    { name: 'C', icon: SiC },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
  ],
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'React.js', icon: SiReact },
    { name: 'React Native', icon: TbBrandReactNative },
    { name: 'NativeWind', icon: HiCubeTransparent },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Spring', icon: SiSpring },
    { name: 'Spring Boot', icon: SiSpring },
    { name: 'REST APIs', icon: TbApi },
  ],
  databases: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'SQL', icon: TbDatabase },
    { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  tools: [
    { name: 'VS Code', icon: VscCode },
    { name: 'GitHub', icon: SiGithub },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea },
    { name: 'Git', icon: SiGit },
    { name: 'Socket.IO', icon: SiSocketdotio },
  ],
  concepts: [
    { name: 'Data Structures', icon: BiCodeBlock },
    { name: 'Algorithms', icon: TbDeviceDesktopAnalytics },
    { name: 'OOP', icon: HiCubeTransparent },
    { name: 'MERN Stack', icon: MdLayers },
    { name: 'Full Stack Development', icon: MdLayers },
    { name: 'RESTful APIs', icon: TbApi },
    { name: 'WebSocket', icon: BiNetworkChart },
  ],
};
