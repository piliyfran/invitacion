import { useInView } from "../hooks/useInView";

export default function Faltan() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  function calcularDias() {
    const fechaBoda = new Date(2026, 11, 5);
    const fechaActual = new Date();
    const dias = Math.floor((fechaBoda - fechaActual) / (1000 * 60 * 60 * 24));
    return dias;
  }
  const dias = calcularDias();

  return (
    <section className="flex justify-center items-center py-30 md:py-40 tracking-[0.4em] text-lg md:text-xl lg:text-2xl text-center font-primary font-bold text-bordo bg-beige">
      <h2
        ref={ref}
        className={`anim-fade-up ${inView ? "in-view" : ""}`}
      >
        FALTAN{" "}
        <span className="text-5xl md:text-7xl lg:text-8xl tracking-normal font-bold">{dias}</span>{" "}
        DIAS <br /> PARA CELEBRAR
      </h2>
    </section>
  );
}
