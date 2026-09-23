import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function DatosBancarios() {
  const [copiadoPesosAlias, setCopiadoPesosAlias] = useState(false);
  const [copiadoDolaresAlias, setCopiadoDolaresAlias] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.15 });

  const handleClickAliasPesos = () => {
    setCopiadoPesosAlias(true);
    setTimeout(() => setCopiadoPesosAlias(false), 2000);
  };
  const handleClickAliasDolares = () => {
    setCopiadoDolaresAlias(true);
    setTimeout(() => setCopiadoDolaresAlias(false), 2000);
  };

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center bg-lila px-10 md:px-20 text-center gap-7 font-primary text-bordo pt-40 pb-20 md:pt-52 md:pb-28"
    >
      <h2
        className={`text-justify text-xl md:text-2xl lg:text-3xl font-thin tracking-widest leading-8 md:leading-10 [text-align-last:justify] anim-fade-up ${inView ? "in-view" : ""}`}
      >
        LO MÁS IMPORTANTE PARA NOSOTROS ES CELEBRAR
        <span className="font-bold"> JUNTOS</span>
      </h2>

      <p
        className={`tracking-normal font-bold text-[14px] md:text-base lg:text-lg anim-fade-up ${inView ? "in-view" : ""}`}
        style={{ transitionDelay: inView ? "0.2s" : "0s" }}
      >
        Si desean hacernos un presente, <br /> les dejamos nuestra cuenta:
      </p>

      {/* Cuentas: columna en mobile, fila en md+ */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-20 lg:gap-32 items-center gap-8 font-bold text-[12px] md:text-sm">
        <div
          className={`anim-fade-right ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.35s" : "0s" }}
        >
          <p className="mb-4">CUENTA PESOS</p>
          <p>Banco Galicia Francisco Celoria</p>
          <p>CTA: 4071063-6 220-7</p>
          <p>CBU: 00702203-30004071063677</p>
          <p>CUIL: 20401154753</p>
          <p className="font-black">ALIAS: Bodapiliyfran</p>
          <CopyToClipboard text="Bodapiliyfran" onCopy={handleClickAliasPesos}>
            <button className="bg-bordo cursor-pointer text-lila py-0.5 px-3 rounded-full font-secondary text-xs mt-6">
              {copiadoPesosAlias ? "COPIADO" : "COPIAR"}
            </button>
          </CopyToClipboard>
        </div>

        {/* Separador: horizontal en mobile, vertical en desktop */}
        <div className="w-30 h-px bg-bordo md:hidden"></div>
        <div className="hidden md:block w-px h-40 bg-bordo opacity-30 self-center"></div>

        <div
          className={`anim-fade-left ${inView ? "in-view" : ""}`}
          style={{ transitionDelay: inView ? "0.5s" : "0s" }}
        >
          <p className="mb-4">CUENTA DÓLARES</p>
          <p>Banco Galicia Francisco Celoria</p>
          <p>CTA: 4053707-1 220-1</p>
          <p>CBU: 00702203-31004053707118</p>
          <p>CUIL: 20401154753</p>
          <p className="font-black">ALIAS: Bodapiliyfran.usd</p>
          <CopyToClipboard
            text="Bodapiliyfran.usd"
            onCopy={handleClickAliasDolares}
          >
            <button className="bg-bordo cursor-pointer text-lila py-0.5 px-3 rounded-full font-secondary text-xs mt-6">
              {copiadoDolaresAlias ? "COPIADO" : "COPIAR"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </section>
  );
}
