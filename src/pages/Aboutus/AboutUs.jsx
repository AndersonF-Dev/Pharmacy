import React from 'react';
import ImagSoli from '/assets/imagens/ImagFrame.svg';
import { Conteiner, ImgSolutions} from './stylesAboutUs.js';

const AboutUs = () => {
  return (
    <Conteiner>
      <ImgSolutions src={ImagSoli} alt="Icon Book Appointment" />
      AboutUs
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est pariatur officiis tempore expedita magnam saepe veritatis culpa sit molestias, eum nam repellat placeat cupiditate quidem obcaecati maiores! Alias, pariatur.
    </Conteiner>
  )
}

export default AboutUs