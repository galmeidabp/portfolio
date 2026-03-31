import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [show, setShow] = useState(true)
  const lastScrollRef = useRef(0)
  const menuRef = useRef<HTMLElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  function toggleMenu() {
    setOpenMenu((prev) => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScrollRef.current && currentScroll > 80) {
        setShow(false)
      } else {
        setShow(true)
      }

      lastScrollRef.current = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-light-gray transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-2xs md:max-w-xl lg:max-w-5xl m-auto flex justify-between items-center py-6 text-baby-pink px-4">

        <h1><a href="#hero">galmeidabp</a></h1>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-controls="mobile-menu"
          aria-expanded={openMenu}
          className="flex md:hidden relative w-6 h-6"
        >
          <span
            className={`absolute transition-all duration-500 ${openMenu ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`}
          >
            <Menu />
          </span>

          <span
            ref={buttonRef}
            className={`absolute transition-all duration-500 ${openMenu ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`}
          >
            <X />
          </span>
        </button>

        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-hidden={!openMenu}
          className={`${openMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
            } w-50 absolute top-full right-8 flex flex-col bg-baby-pink text-white rounded-md shadow-xl border-2 border-bordo z-50 transform transition-all duration-300 ease-out md:hidden`}
        >
          <ul className="px-4 py-6">
            <li><a href="#hero" onClick={() => setOpenMenu(false)} className="block border-b border-bordo mb-4">Início</a></li>
            <li><a href="#aboutme" onClick={() => setOpenMenu(false)} className="block border-b border-bordo mb-4">Sobre</a></li>
            <li><a href="#skills" onClick={() => setOpenMenu(false)} className="block border-b border-bordo mb-4">Skills</a></li>
            <li><a href="#projects" onClick={() => setOpenMenu(false)} className="block border-b border-bordo mb-4">Projetos</a></li>
            <li><a href="#calltoaction" onClick={() => setOpenMenu(false)} className="block border-b border-bordo">Contato</a></li>
          </ul>
        </nav>

        <ul className="hidden md:flex gap-6">
          {[
            ["Início", "hero"],
            ["Sobre", "aboutme"],
            ["Skills", "skills"],
            ["Projetos", "projects"],
            ["Contato", "calltoaction"]
          ].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-baby-pink after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-baby-pink/80"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-70 md:w-220 m-auto h-px bg-bordo"></div>
    </header>
  )
}