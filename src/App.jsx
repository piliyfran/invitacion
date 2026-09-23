import ConfirmarAsistencia from "./sections/ConfirmarAsistencia";
import DatosBancarios from "./sections/DatosBancarios";
import DressCode from "./sections/DressCode";
import Faltan from "./sections/Faltan";
import Final from "./sections/Final";
import Hospedaje from "./sections/Hospedaje";
import Inicio from "./sections/Inicio";
import SectionCartas from "./sections/SectionCartas";
import SectionFoto from "./sections/SectionFoto";
import Traslado from "./sections/Traslado";
import Ubicacion from "./sections/Ubicacion";

function App() {
  return (
    <>
      <Inicio />
      <SectionCartas />
      <SectionFoto />
      <Faltan />
      <Ubicacion />
      <Traslado />
      <DressCode />
      <DatosBancarios />
      <Hospedaje />
      <ConfirmarAsistencia />
      <Final />
    </>
  );
}

export default App;
