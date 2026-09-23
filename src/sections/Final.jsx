import { useInView } from "../hooks/useInView";
import noviosSentados from "../assets/novios-sentados.png";

export default function Final() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center items-center gap-2 md:gap-4 bg-beige pt-5 pb-20 md:pb-28 font-primary text-verde"
    >
      <img
        src={noviosSentados}
        alt=""
        className={`w-55 md:w-72 lg:w-80 anim-fade-in ${inView ? "in-view" : ""}`}
      />
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-extrabold anim-fade-up ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.3s" : "0s" }}
      >
        PILI <span className="font-thin text-lg md:text-2xl">&</span> FRAN
      </h2>
      <p
        className={`text-sm md:text-base font-extrabold tracking-[0.4em] anim-fade-up ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.5s" : "0s" }}
      >
        05.12.26
      </p>
    </section>
  );
}
