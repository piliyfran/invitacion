import { useInView } from "../hooks/useInView";
import LogoCircular from "../components/LogoCircular";

export default function Inicio() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-around font-primary font-bold text-beige w-full h-screen bg-verde"
    >
      <h1
        className={`text-lg md:text-2xl lg:text-3xl tracking-widest anim-fade-in ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.2s" : "0s" }}
      >
        INVITACIÓN OFICIAL
      </h1>

      <div
        className={`w-60 md:w-80 lg:w-96 anim-scale-in ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.4s" : "0s" }}
      >
        <LogoCircular
          bgColor="fill-verde"
          texto1="P"
          texto2="F"
          rotateDeg={-13}
          centerFontSize={65}
        />
      </div>

      <div
        className={`flex flex-col items-center gap-3 text-lg md:text-xl tracking-widest anim-fade-up ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.6s" : "0s" }}
      >
        <p>DESLIZA</p>
        <p className="text-sm animate-bounce">V</p>
      </div>
    </section>
  );
}
