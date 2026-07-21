import { Send } from 'lucide-react'
import line from '../assets/linecta.svg'
import { Title } from './ui/Title'
import { useForm } from '@formspree/react'
import { useEffect } from 'react'

export function CallToAction() {
  const [state, handleSubmit] = useForm("mojpabrd")

  useEffect(() => {
    if (state.succeeded) {
      document.querySelector("form")?.reset()
    }
  }, [state.succeeded])

  return (
    <section id='calltoaction' className="my-30 max-w-2xs flex items-center justify-center flex-col m-auto md:max-w-xl lg:max-w-5xl">
      <Title name='Me Contate!' />
      <img src={line} alt="" />

      <p className='mt-6 text-white/70 text-center'>Tem uma ideia, projeto ou dúvida? Estou disponível para conversar.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10 mt-14">
        <div className="flex gap-10 flex-col md:flex-row md:gap-14">
          <div className="flex gap-2 flex-col">
            <label htmlFor="name" className="text-baby-pink">Seu nome*</label>
            <input id='name' required name="name" type="text" placeholder="Digite seu nome" className="w-[288px] lg:w-107.5 px-2 border-b border-baby-pink/50 focus:border-b focus:border-baby-pink focus:outline-none" />
          </div>

          <div className="flex gap-2 flex-col">
            <label htmlFor="email" className="text-baby-pink">Seu email*</label>
            <input id='email' required name='email' type="email" placeholder="Digite seu email" className="w-[288px] lg:w-107.5 px-2 border-b border-baby-pink/50 focus:border-b focus:border-baby-pink focus:outline-none" />
          </div>

        </div>
        <div className="flex gap-2 flex-col">
          <label htmlFor="message" className="text-baby-pink">Sua mensagem*</label>
          <textarea id='message' rows={2} required name="message" placeholder="Digite sua mensagem..." className="border-b px-2 border-baby-pink/50 focus:border-b focus:border-baby-pink focus:outline-none" />
        </div>

        <p className='text-xs text-baby-pink flex'>Ao enviar este formulário, você concorda que seus dados serão utilizados apenas para contato e resposta à sua mensagem.</p>

        {state.succeeded && (
          <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-md">
            <p className="font-semibold">Mensagem enviada com sucesso.</p>
            <p className="text-sm">Retornarei o mais breve possível.</p>
          </div>
        )}

        {state.errors && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-md">
            <p className="font-semibold">Erro ao enviar.</p>
            <p className="text-sm">Tente novamente ou use outro meio de contato.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-baby-pink flex w-60 items-center gap-4 px-6 py-4 rounded-4xl disabled:opacity-50 hover:bg-baby-pink/80 hover:cursor-pointer" 
        >
          {state.submitting ? "Enviando..." : "Enviar mensagem"}
          <Send size={18} />
        </button>



      </form>
    </section>
  )
}