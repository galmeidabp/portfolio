import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'

export function Footer() {
  return (
    <footer className="text-[8px] border-t border-bordo text-white/50 md:text-xs">
      <div className="max-w-2xs my-8 flex gap-2 flex-col-reverse items-center justify-between m-auto md:gap-0 md:flex-row md:max-w-xl lg:max-w-5xl">
        <p>&copy; 2026 Gabriella de Almeida. Todos os direitos reservados.</p>

        <nav aria-label='Redes sociais' className='flex gap-6'>
          <a aria-label='Acessar Github' href='https://github.com/galmeidabp' target='_blank' rel="noopener noreferrer" className='bg-baby-pink rounded-full p-2 hover:bg-baby-pink/80'>
            <img src={github} alt="Github" className='w-5' />
          </a>
          <a aria-label='Acessar LinkedIn' href='https://www.linkedin.com/in/galmeidabp/' target='_blank' rel="noopener noreferrer" className='bg-baby-pink rounded-full p-2 hover:bg-baby-pink/80'>
            <img src={linkedin} alt="LinkedIn" className='w-5' />
          </a>
        </nav>
      </div>
    </footer>
  )
}