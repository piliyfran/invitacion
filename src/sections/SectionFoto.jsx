import { useInView } from "../hooks/useInView";
import piliFran1 from "../assets/pili-fran1.png";

export default function SectionFoto() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="flex items-center justify-center py-40 md:py-52 lg:py-60 bg-bordo">
      {/*
        Wrapper para la animación de escala — separado de la rotación
        para evitar conflicto de transforms entre Tailwind y la clase anim-*.
      */}
      <div
        ref={ref}
        className={`anim-scale-in ${inView ? "in-view" : ""}`}
      >
        <img
          src={piliFran1}
          alt=""
          className="w-60 md:w-72 lg:w-80 object-contain rotate-3"
        />
      </div>
    </section>
  );
}
