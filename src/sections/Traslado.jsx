import { useInView } from "../hooks/useInView";
import miniBus from "../assets/minibus.png";

export default function Traslado() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-bordo font-primary text-beige font-bold flex flex-col items-center gap-7 py-30 md:py-40 tracking-wide"
    >
      <div className={`anim-fade-in ${inView ? "in-view" : ""}`}>
        <img src={miniBus} alt="" className="w-35 md:w-44 lg:w-52" />
      </div>

      <div className="flex flex-col items-center">
        <h2
          className={`text-md md:text-xl lg:text-2xl mb-2 font-secondary text-white anim-fade-up ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.2s" : "0s" }}
        >
          INFO IMPORTANTE
        </h2>
        <p
          className={`text-[12px] md:text-sm lg:text-base text-center px-12 md:px-20 lg:max-w-lg pb-5 tracking-wide anim-fade-up ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.35s" : "0s" }}
        >
          Si necesitás coordinar un traslado para asistir a la fiesta, podés
          comunicarte con alguno de los siguientes números para recibir más
          detalles.
        </p>
      </div>

      {/* Contactos: columna en mobile, fila en md+ */}
      <div className="flex flex-col md:flex-row md:gap-20 lg:gap-32 gap-3 tracking-normal items-center">
        <div className="w-50 h-px bg-beige md:hidden"></div>

        <div
          className={`flex flex-col items-center anim-fade-right ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.5s" : "0s" }}
        >
          <h3 className="md:text-lg lg:text-xl">Ine</h3>
          <p className="text-[12px] md:text-sm">+54 9 3364 34-0024</p>
          <a
            href="https://wa.link/f59cmz"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 md:py-2 md:px-4 text-bordo bg-beige rounded-full text-[10px] md:text-xs mt-4"
          >
            ENVIAR WHATSAPP
          </a>
        </div>

        {/* Separador vertical en desktop */}
        <div className="hidden md:block w-px h-24 bg-beige opacity-40"></div>

        <div className="w-50 h-px bg-beige md:hidden mt-4"></div>

        <div
          className={`flex flex-col items-center anim-fade-left ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.65s" : "0s" }}
        >
          <h3 className="md:text-lg lg:text-xl">Isma</h3>
          <p className="text-[12px] md:text-sm">+54 9 3412 50-0324</p>
          <a
            href="https://wa.link/8tbqw3"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-2 md:py-2 md:px-4 text-bordo bg-beige rounded-full text-[10px] md:text-xs mt-3"
          >
            ENVIAR WHATSAPP
          </a>
        </div>

        <div className="w-50 h-px bg-beige md:hidden"></div>
      </div>
    </section>
  );
}
