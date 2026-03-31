import squareBg from '/squarebg.svg'
import pessoa from '../assets/pessoa.png'
import pessoaRedonda from '../assets/pessoaredondo.png'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Hero() {
  return (
    <main id="hero" className="max-w-2xs m-auto mt-10 pt-23 mb-20 md:max-w-xl lg:max-w-5xl md:mb-30">
      <p className="flex text-2xl mb-4 text-baby-pink justify-center m-auto font-ubuntu md:text-7xl md:mb-0">Desenvolvedora</p>

      <div className="block md:hidden w-40 h-40 m-auto rounded-full border-3 border-baby-pink overflow-hidden">
        <img src={pessoaRedonda} alt="Foto de Gabriella" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between md:gap-20 md:mt-10">

        <div>
          <span className="text-baby-pink text-xs">&lt;h1&gt;</span>
          <h1 className="pl-5 text-xl lg:text-4xl">Oi, <br /> Eu sou Gabriella, <br />Dev Front-End  <span className="text-baby-pink text-xs">&lt;/h1&gt;</span></h1>


          <div className="mt-4">
            <span className="text-baby-pink text-xs">&lt;p&gt;</span>
            <p className="pl-5 max-w-2xl text-xs md:text-sm">Equilibro a experiência visual, funcionalidade e as necessidades do usuário.</p>
            <span className="text-baby-pink text-xs">&lt;/p&gt;</span>
          </div>

          <div className='flex justify-center md:justify-start gap-2 mt-4'>
            <a href='mailto:galmeidabp@gmail.com' aria-label='Me envie um email' className='hover:bg-baby-pink p-2 rounded-full hover:scale-118'><Mail /></a>
            <a href="https://github.com/galmeidabp" target='_blank' rel='noopener noreferrer' aria-label='Entre no meu Github' className='hover:bg-baby-pink p-2 rounded-full hover:scale-118'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/galmeidabp/" target='_blank' rel='noopener noreferrer' aria-label='Entre no meu LinkedIn' className='hover:bg-baby-pink p-2 rounded-full hover:scale-118'><FaLinkedin /></a>
          </div>
        </div>

        <div className="m-auto hidden md:flex">
          <div style={{ backgroundImage: `url(${squareBg})` }} className="relative bg-no-repeat bg-cover bg-center w-100 h-100">

            <img src={pessoa} alt="Foto de Gabriella" className='h-100 absolute inset-0 m-auto' />

            <div className="absolute top-10 -left-18 bg-baby-pink text-bordo px-4 py-2 rounded-3xl">
              +2 anos de xp
            </div>

            <div className="absolute top-30 -left-14 bg-baby-pink text-bordo px-4 py-2 rounded-3xl">
              +10 projetos
            </div>

            <div className="absolute top-50 -left-8 bg-baby-pink text-bordo px-4 py-2 rounded-3xl">
              +100 commits
            </div>

          </div>

        </div>
      </div>
    </main>
  )
}