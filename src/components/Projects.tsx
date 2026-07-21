import { Title } from "./ui/Title";
import line from '../assets/lineprojects.svg'
import { useEffect, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

type Project = {
  title: string
  image: string
  technology: string[]
  description: string[]
  link: string
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null)

  const projects: Project[] = [
    {
      title: "Galeria de Arte",
      image: "frgaleriadeartecover.png",
      technology: ["Design (Figma)", "React", "Formspree", "Tailwind", "API"],
      description: [`Desenvolvimento de um site institucional com catálogo dinâmico para uma galeria de arte, focando na exibição de obras e conversão de visitantes em contatos comerciais.
        
        O cliente precisava de uma presença digital que funcionasse como vitrine, permitindo que os usuários navegassem pelas obras e entrassem em contato rapidamente.
        
        O sistema inclui: listagem dinâmica das obras com dados vindos do banco, páginas individuais com rotas dinâmicas baseadas em slug, filtros para facilitar a exploração, bem como uma barra de pesquisa, redirecionamento direto pra WhatsApp como principal canal de conversão e formulário de contato integrado.

        `],
      link: "https://fr-galeria-de-arte.vercel.app/",
    },
    {
      title: "Avancce Course",
      image: "avanccecoursecover.png",
      technology: ["Design (Figma)", "Next.js", "Tailwind", "Typescript", "Markdown", "Gray-Matter", "fs e path"],
      description: [
        `Desenvolvimento de um blog em Next.js com foco em performance, SEO e organização de conteúdo técnico.

        Os posts são escritos em Markdown e gerados estaticamente durante o build por meio de Static Site Generation (SSG), com rotas dinâmicas baseadas em arquivos locais, garantindo carregamento rápido e estabilidade.

        O conteúdo foi estruturado com Markdown e Gray-Matter para gerenciamento de metadados, enquanto Remark e Rehype realizam a conversão para HTML. A aplicação também utiliza os módulos fs e path do Node.js para leitura dos arquivos e TypeScript para maior segurança e previsibilidade no desenvolvimento.
        `
      ],
      link: "https://avanccecourse.vercel.app/",
    },
    {
      title: "Interactive Card",
      image: "interactivecardcover.png",
      technology: ["React", "React Router Dom", "Tailwind", "React Hook Form", "Zod", "Context API"],
      description: [
        `Desenvolvimento de uma aplicação interativa para simulação de preenchimento de cartão de crédito, baseada no desafio 'Interactive Card Details Form' da plataforma Frontend Mentor.

        A proposta foi criar um formulário com validação completa dos dados e atualização visual em tempo real, refletindo as informações diretamente no cartão exibido na interface.

        A aplicação foi estruturada como uma SPA com duas rotas principais: uma para entrada de dados e outra para confirmação, garantindo uma experiência fluida e responsiva em diferentes dispositivos.

        O projeto também priorizou boas práticas de componentização e responsividade, utilizando Tailwind CSS com abordagem mobile-first.`
      ],
      link: "https://galmeidabp.github.io/interactive-card/",
    }
  ]

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  return (
    <section id="projects" className="bg-dark-gray py-40">
      <div className="max-w-2xs flex items-center justify-center flex-col m-auto md:max-w-xl lg:max-w-5xl">
        <Title name="Projetos" />
        <img src={line} alt="" />
        <p className="text-center">Estes são alguns projetos que fazem parte do meu trabalho.</p>

        <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-3">

          {projects.map((project) => (
            <div key={project.title}
              className="bg-cover bg-center w-70 h-50 rounded-lg transition-transform duration-200 hover:scale-110 hover:shadow-lg"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/${project.image})` }}
            >
              <button
                aria-label={project.title}
                onClick={() => setSelectedProject(project)}
                className="bg-black/70 w-full h-full rounded-lg hover:cursor-pointer"
              >
                {project.title}
              </button>
            </div>
          ))}


        </div>

      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelectedProject(null)}
          />

          <div role="dialog" aria-modal="true" className="relative z-50 bg-light-gray w-[90%] max-w-2xl h-[80vh] rounded-xl shadow-lg p-6 flex flex-col md:max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {selectedProject.title}
              </h2>

              <button
                aria-label="Fechar modal"
                className="rounded-md p-3 hover:cursor-pointer hover:bg-white/10"
                onClick={() => setSelectedProject(null)}>
                ✕
              </button>
            </div>

            <div className="overflow-y-auto custom-scroll grid grid-cols-1 flex-col flex-1 md:grid-cols-2 md:gap-8">
              <div>
                <img src={`${import.meta.env.BASE_URL}/${selectedProject.image}`} alt={`Imagem do projeto ${selectedProject.title}`} />

                <a target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-2 text-baby-pink mt-10 hover:text-baby-pink/80" href={selectedProject.link}>Abrir site <SquareArrowOutUpRight /></a>

                <div className="flex flex-wrap py-4 gap-2 text-xs md:text-sm">
                  
                  {selectedProject.technology.map((tech) => (

                    <div
                      key={tech}
                      className="bg-baby-pink text-bordo rounded-full py-2 px-3 md:px-4">
                      {tech}
                    </div>

                  ))}
                </div>

              </div>

              <div className="text-sm font-ubuntu md:text-lg">
                <div className="whitespace-pre-line mr-1">
                  {selectedProject.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}