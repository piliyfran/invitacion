import { useInView } from "../hooks/useInView";

export default function ConfirmarAsistencia() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section className="font-primary font-bold bg-beige flex items-center justify-center h-100 md:h-[28rem] lg:h-[32rem] text-center text-bordo">
      {/*
        Wrapper para la animación de escala — separado de la rotación
        para evitar conflicto de transforms entre Tailwind y la clase anim-*.
      */}
      <div ref={ref} className={`anim-scale-in ${inView ? "in-view" : ""}`}>
        <div className="flex flex-col items-center justify-center -rotate-4 tracking-wide rounded-2xl gap-5 bg-white py-15 md:py-20 px-10 md:px-16 relative">
          <p className="absolute text-lg md:text-xl tracking-normal -top-7 md:-top-8 w-15 h-15 md:w-18 md:h-18 flex items-center justify-center bg-bordo text-beige rounded-full">
            P<span className="font-thin text-[14px] align-baseline">&</span>F
          </p>

          <h2 className="text-lg md:text-xl lg:text-2xl font-thin">
            ESTE DÍA NO SERÍA <br /> LO MISMO{" "}
            <span className="font-black">SIN VOS</span>
          </h2>
          <a
            href="https://forms.gle/N7bzmmajkQEco7BF6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs tracking-widest font-secondary bg-bordo text-beige py-2 px-4 md:py-3 md:px-6 rounded-lg"
          >
            CONFIRMAR ASISTENCIA
          </a>
          <p className="absolute right-5 bottom-3 -rotate-6 tracking-normal text-3xl md:text-4xl font-fave">
            ¡NOS VEMOS AHÍ!
          </p>
        </div>
      </div>
    </section>
  );
}
