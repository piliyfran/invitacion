import { useInView } from "../hooks/useInView";
import novios2 from "../assets/novios2.png";
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
        className={`anim-scale-in ${inView ? "in-view" : ""} absolute z-20 right-10 bottom-10 md:right-35 lg:right-160 lg:bottom-15 `}
        style={{ transitionDelay: inView ? "0.35s" : "0s" }}
      >
        <img
          src={novios2}
          alt=""
          className="w-37 md:w-55 lg:w-65 object-contain rotate-2"
        />
      </div>
    </section>
  );
}
