import { useInView } from "../hooks/useInView";
import dressCode from "../assets/dress-code.png";
import piliFran2 from "../assets/pili-fran2.png";

export default function DressCode() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-beige h-[48vh] md:h-[58vh] lg:h-[65vh]"
    >
      {/* Imagen dress code — entra desde la derecha */}
      <img
        src={dressCode}
        alt=""
        className={`absolute
          w-60 md:w-80 lg:w-96
          right-10 md:right-[12%] lg:right-[28%]
          -top-12 md:-top-16 lg:-top-20
          anim-dress-right ${inView ? "in-view" : ""}`}
      />
      {/* Imagen novios — entra desde la izquierda */}
      <img
        src={piliFran2}
        alt=""
        className={`absolute
          w-45 md:w-60 lg:w-72
          left-10 md:left-[12%] lg:left-[28%]
          -bottom-20 md:-bottom-28 lg:-bottom-36
          anim-dress-left ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.35s" : "0s" }}
      />
    </section>
  );
}
