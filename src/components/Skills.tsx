import { Monitor, Smartphone } from "lucide-react"
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import reactjs from '../assets/reactjs.svg'
import next from '../assets/next.svg'
import tailwind from '../assets/tailwind.svg'
import javascript from '../assets/javascript.svg'
import line from '../assets/lineskill.svg'
import jest from '../assets/jest.svg'
import { Title } from "./ui/Title"
import { SkillItem } from "./ui/Skillitem"

export function Skills() {
  return (
    <section id="skills" className="relative bg-[url(/codeskillsbg.png)] bg-cover bg-center py-24">
      <div className="absolute inset-0 bg-dark-gray/95 pointer-events-none"></div>

      <div className="relative flex flex-col items-center justify-center max-w-2xs m-auto md:max-w-xl lg:max-w-5xl">
        <Title name="Skills" />
        <img src={line} aria-hidden="true" alt="" />

        <div className="bg-pink-100 text-bordo flex flex-col items-center justify-center p-4 rounded-md my-8">
          <div className="flex gap-2"><Monitor /> <Smartphone /></div>
          <p className="my-1.5">Desenvolvimento Web</p>
          <span className="text-xs text-bordo/60">Sites responsivos e mobile-first</span>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 my-8 justify-items-center gap-10 font-ubuntu">
          <li><SkillItem name="HTML" icon={html} color="#e54c22" textColor="#e54c22" /></li>

          <li><SkillItem name="css" icon={css} color="#0f72b6" textColor="#0f72b6" /></li>

          <li><SkillItem name="javascript" icon={javascript} color="#e5a21d" textColor="#e5a21d" /></li>

          <li><SkillItem name="react" icon={reactjs} color="#27aade" textColor="#27aade" /></li>
        </ul>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center font-ubuntu max-w-89 mx-auto">

          <li><SkillItem name="next.js" icon={next} color="#000" textColor="#fff" /></li>

          <li><SkillItem name="tailwind" icon={tailwind} color="#51aeb5" textColor="#51aeb5" /></li>

          <li><SkillItem name="jest" icon={jest} color="#9d4a64" textColor="#9d4a64" /></li>
        </ul>

      </div>
    </section>
  )
}