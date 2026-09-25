import { useState } from "react";
import { useInView } from "../hooks/useInView";

export default function Hospedaje() {
  const [showMore, setShowMore] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.25 });

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center font-primary font-bold py-30 md:py-40 bg-bordo tracking-[0.2em] text-center text-beige"
    >
      <h2
        className={`font-secondary text-3xl md:text-4xl lg:text-5xl anim-fade-up ${inView ? "in-view" : ""}`}
      >
        DÓNDE <br />
        HOSPEDARSE
      </h2>
      <p
        className={`font-fave text-3xl md:text-4xl tracking-wide -rotate-2 mt-2 anim-fade-in ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.3s" : "0s" }}
      >
        (NUESTRA RECOMENDACIÓN)
      </p>

      {/* Contenedor con transición suave usando grid-template-rows trick */}
      <div
        className={`hospedaje-expand w-full${showMore ? "" : " hidden-expand"}`}
      >
        <div className="hospedaje-inner">
          <div className="flex flex-col items-center justify-center tracking-wider mt-7 px-8 md:px-16 lg:max-w-2xl lg:mx-auto gap-10 text-[12px] md:text-sm lg:text-base">
            <div className="flex flex-col items-center justify-center text-center  md:flex-row  gap-4">
              <div className=" flex flex-col items-center gap-4 md:w-[50%] ">
                <p className="font-secondary text-lg tracking-wider mt-2 md:px-12">
                  Holiday Inn Rosario
                </p>
                <a
                  href="https://maps.app.goo.gl/FjdGtUPV3oadm2zEA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-secondary text-[12px] md:text-[14px] tracking-wider bg-beige text-bordo py-2 px-6 rounded-xl"
                >
                  VER MAPA
                </a>
              </div>
              <div className="flex flex-col items-center gap-4 md:w-[50%] ">
                <p className="font-secondary text-lg tracking-wider mt-2 md:px-12">
                  Holiday Inn Express
                </p>
                <a
                  href="https://maps.app.goo.gl/Fcsu2RoxQwAGXUe46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-secondary text-[12px] md:text-[14px] tracking-wider bg-beige text-bordo py-2 px-6 rounded-xl"
                >
                  VER MAPA
                </a>
              </div>
            </div>
            <p>
              La opción estratégica para participantes del evento. Con una gran
              trayectoria en Rosario, y como parte del grupo IHG Hotels;
              nuestros hoteles ofrecen el equilibrio justo entre confort,
              eficiencia y atención personalizada. Somos la elección preferida
              de empresas líderes que valoran una experiencia confiable para sus
              colaboradores clientes.
            </p>
            <p>
              Ubicación privilegiada: Cerca de todo. Estamos ubicados en una de
              las zonas más estratégicas y seguras de Rosario.
            </p>
            <p>. . . .</p>
            <p>
              Propuesta exclusiva para Asistentes: <br />
              <span className="font-secondary font-black">
                Código de reserva: PILIYFRAN
              </span>
            </p>
            <p>
              Reservas directas, preguntar por coordinadoras, Julieta o Martina:
            </p>
            <p>
              Julieta: reservas@holidayinnrosario.com <br /> Martina:
              reservas@hierosaro.com <br /> WhatsApp: +54 9 341 7410823 <br />{" "}
              Teléfono: +54 341 4100 000
            </p>
            <p>
              Beneficios: <br /> Tarifas preferenciales <br /> Acceso
              prioritario a disponibilidad <br /> Late check out 16hs <br />{" "}
              Parking bonificado 100%
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={handleClick}
        className={`font-secondary text-sm cursor-pointer md:text-base tracking-wider bg-beige text-bordo py-2 px-6 mt-7 rounded-xl anim-fade-up ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.5s" : "0s" }}
      >
        {showMore ? "OCULTAR INFORMACIÓN" : "VER INFORMACIÓN"}
      </button>
    </section>
  );
}
