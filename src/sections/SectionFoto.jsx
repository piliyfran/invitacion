import { useInView } from "../hooks/useInView";
import piliFran1 from "../assets/pili-fran1.png";
import fecha from "../assets/fecha.png";

export default function SectionFoto() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative flex items-center justify-center bg-bordo">
      {/*
        Wrapper para la animación de escala — separado de la rotación
        para evitar conflicto de transforms entre Tailwind y la clase anim-*.
      */}
      <div ref={ref} className={`anim-scale-in ${inView ? "in-view" : ""} `}>
        <img src={fecha} alt="" className="md:max-w-2xl" />
      </div>
      <div
        ref={ref}
        className={`anim-scale-in ${inView ? "in-view" : ""} absolute z-20 right-10 -bottom-18 md:right-30 lg:right-150 `}
        style={{ transitionDelay: inView ? "0.35s" : "0s" }}
      >
        <img
          src={piliFran1}
          alt=""
          className="w-40 md:w-50 lg:w-60 object-contain rotate-2"
        />
      </div>
    </section>
  );
}
