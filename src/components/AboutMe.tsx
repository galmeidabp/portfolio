export function AboutMe() {
  return (
    <section id="aboutme" aria-labelledby="aboutme-title" className='bg-dark-gray'>
      <div className='bg-[url(/gridaboutbg.svg)] bg-cover bg-center py-20'>

        <div className='max-w-2xs m-auto md:max-w-xl lg:max-w-5xl' >

          <div className='flex flex-col items-center md:items-end justify-center gap-10'>
            <h2 id="aboutme-title" className='text-4xl bg-baby-pink text-bordo px-10 py-4 rounded-4xl font-bold font-ubuntu flex items-center justify-center'>Sobre mim</h2>

            <div className='bg-light-gray p-10 rounded-3xl flex flex-col gap-2'>
              <span className="text-baby-pink text-xs">&lt;p&gt;</span>
              <p className='text-baby-pink text-2xl ml-3 md:ml-5'>Olá!</p>
              <p className="ml-3 text-sm md:text-lg md:ml-5">Sou formada em Análise e Desenvolvimento de Sistemas e me interesso principalmente por desenvolvimento front-end. Trabalho com tecnologias como <span className='text-baby-pink'>HTML</span>, <span className='text-baby-pink'>JavaScript</span>, <span className='text-baby-pink'>React</span> e <span className='text-baby-pink'>Next.js</span>.
              </p>
              <p className="ml-3 text-sm md:text-lg md:ml-5">Estou constantemente aprendendo novas tecnologias. Atualmente, também comecei a me aprofundar em estudos de <span className="text-baby-pink">back-end</span>.</p>
              <p className="ml-3 text-sm md:text-lg md:ml-5">Fora da programação, sou apaixonada por literatura. E, claro, tenho um carinho especial por gatos.</p>
              <span className="text-baby-pink text-xs">&lt;/p&gt;</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}