import { useInView } from "../hooks/useInView";
import tarjeta1 from "../assets/tarjeta-1.png";
import tarjeta2 from "../assets/tarjeta-2.png";
import LogoCircular from "../components/LogoCircular";

export default function SectionCartas() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="flex relative items-center justify-center py-80 bg-beige"
    >
      {/* Tarjeta izquierda — layout mobile original, escala en md/lg */}
      <img
        src={tarjeta1}
        alt=""
        className={`w-58 md:w-72 lg:w-80 ml-20 h-auto object-contain absolute z-10 anim-card-left ${inView ? "in-view" : ""}`}
      />

      {/* Tarjeta derecha — layout mobile original, escala en md/lg */}
      <img
        src={tarjeta2}
        alt=""
        className={`w-68 md:w-80 lg:w-96 h-auto mt-50 mr-20 object-contain absolute z-20 anim-card-right ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.35s" : "0s" }}
      />

      {/* Logo central — escala en md/lg */}
      <div
        className={`absolute w-40 md:w-52 lg:w-60 z-30 anim-card-top ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.7s" : "0s" }}
      >
        <LogoCircular bgColor="fill-bordo">
          <p className="text-5xl">
            PILI <span className="font-thin text-4xl">&</span>
            <br />
            FRAN
          </p>
        </LogoCircular>
      </div>
    </section>
  );
}
