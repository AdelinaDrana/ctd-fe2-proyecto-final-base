import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./Constants";
// import styles from "./styles.module.css";
import { BioContainer, BioDescription, BioImage, BioName, Button, ContainerButtons } from "./BiografiasStyled";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre}>
        {nombre}
      </Button>
    ));
  };

  return (
    <BioContainer>
      <ContainerButtons>{crearBotones()}</ContainerButtons>
      <div>
        <div>
          <BioImage 
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioName >{bioActiva.nombre}</BioName>
          <BioDescription>{bioActiva.descripcion}</BioDescription>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
