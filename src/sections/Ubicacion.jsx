import { useInView } from "../hooks/useInView";
import novios from "../assets/novios.png";
import mesa from "../assets/mesa.png";

export default function Ubicacion() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-[80vh] lg:h-[85vh] bg-lila text-verde text-center font-primary font-bold tracking-[0.15em]"
    >
      {/* Panel ceremonia — entra desde la derecha */}
      <div
        className={`absolute top-[-60px] md:top-[-80px]
          right-10 md:right-[5%] lg:right-[10%]
          w-[65%] md:w-[52%] lg:w-[45%]
          bg-white mx-auto flex flex-col justify-center items-center
          pt-7 pb-15 md:pt-10 md:pb-20 gap-5 md:gap-7
          anim-panel-right ${inView ? "in-view" : ""}`}
      >
        <img src={novios} alt="" className="w-30 md:w-40 lg:w-48" />
        <h2 className="text-[12px] md:text-sm lg:text-base">CEREMONIA</h2>
        <div>
          <p className="text-[12px] md:text-sm mb-2">17:30 HS</p>
          <p className="text-[10px] md:text-xs lg:text-sm">
            Colegio Marista Nuestra Señora del Rosario
          </p>
          <p className="font-thin text-[10px] md:text-xs lg:text-sm">
            Blvd. Oroño 770, Rosario
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/on4wTBY9emEzAsjKA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
        >
          <p className="text-[10px] md:text-xs tracking-widest">VER MAPA</p>
          <div className="h-0.5 w-12 bg-verde"></div>
        </a>
      </div>

      {/* Panel fiesta — entra desde la izquierda con delay */}
      <div
        className={`absolute bottom-[-45px] md:bottom-[-65px]
          left-10 md:left-[5%] lg:left-[10%]
          w-[65%] md:w-[52%] lg:w-[45%]
          bg-beige rounded-2xl mx-auto flex flex-col justify-center items-center
          py-10 md:py-14 gap-7
          anim-panel-left ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.35s" : "0s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={mesa} alt="" className="w-35 md:w-44 lg:w-52" />
          <h2 className="text-[12px] md:text-sm lg:text-base">FIESTA</h2>
          <p className="text-[10px] md:text-xs lg:text-sm tracking-widest">
            La Delfina
          </p>
          <p className="font-thin text-[10px] md:text-xs lg:text-sm">
            AJH, Cullen y Ugarte <br />
            4100, Rosario
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/jWBxejz2Tcw8oyKg9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1"
        >
          <p className="text-[10px] md:text-xs tracking-widest">VER MAPA</p>
          <div className="h-0.5 w-12 bg-verde"></div>
        </a>
      </div>
    </section>
  );
}
