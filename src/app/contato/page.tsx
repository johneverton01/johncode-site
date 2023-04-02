import { Hero } from '@/components/Hero'
import bgHero from '../../../public/hero-portfolio.png'
import { IconBlue } from '@/components/IconBlue'

export default function Contato() {
  return (
    <>
      <Hero img={bgHero} title="Contato" />
      <main className="container mx-auto flex md:flex-row flex-col justify-between md:gap-12 gap-7 py-10 md:px-7 px-4">
        <div className="flex flex-col gap-9 md:w-1/2 w-full">
          <div>
            <p>
              Have a project you´re interested in discussing with us? Drop us a
              line beliw, we´d love to talk.
            </p>
            <p>
              Lörem ipsum tirölingar tir: redat. Kroprel syda. Euskap
              eurosöprerade prett trenivis ossade. Sonera dism ism fodat
              lapönade. Mik revar desk ifall mibår fören. Polygt lack abmatisk
              fastän suprande, när nynade. Rära tepoktig befövis. Tise vade
              gapeligt. Obåktiga mekakeras till svenna sitt liv i prot pism.
              Gigaras megaröns medan jöbel.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-10 max-w-sm">
            <IconBlue
              icon="envelope"
              title="Email"
              label="contato@johncode.com"
              link="mailto:contato@johncode.com"
            />
            <IconBlue
              icon="phone"
              title="Telefone"
              label="(31) 9 9813-1385"
              link="tel:31998131385"
            />
            <IconBlue
              icon="lifebuoy"
              title="Chamados"
              label="chamados.johncode.com"
              link="chamados.johncode.com"
            />
          </div>
        </div>
        <div className="flex-1 md:max-w-[575px] md:w-1/2 w-full">
          <form className="flex flex-col gap-4">
            <div className="w-full">
              <input
                className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder="Nome:"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500"
                type="email"
                placeholder="Email:"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500"
                type="tel"
                placeholder="Celular:"
              />
              <input
                className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500"
                type="tel"
                placeholder="Telefone:"
              />
            </div>
            <div className="w-full">
              <input
                className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500"
                type="text"
                placeholder="Assunto:"
              />
            </div>
            <div className="w-full">
              <textarea className="w-full px-4 py-3 rounded outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div className="flex justify-end">
              <button className="outline-none bg-blue-500 hover:bg-blue-400 transition-colors py-4 w-full md:max-w-[220px] rounded-lg text-white font-bold text-lg">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
