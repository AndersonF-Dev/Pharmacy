import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CarouselContainer,
  ImageWrapper,
  LeftButton,
  RightButton,
  IndicatorContainer,
  Indicator,
  ButtonContainer,
  ImageList
} from "./styles.js";

export default function Carousel() {
  const imagesPerView = 4; // Sempre mostrar 4 imagens por vez
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/imagens/Operational.svg",
    "/assets/imagens/Financial.svg",
    "/assets/imagens/Staff.svg",
    "/assets/imagens/Patient.svg",
    "/assets/imagens/Patient.svg",
    "/assets/imagens/Financial.svg",
    "/assets/imagens/Staff.svg",
    "/assets/imagens/Operational.svg",
    
  ];

  const totalImages = images.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <ImageList
          style={{
            transform: `translateX(-${currentIndex * 33}%)`, // Agora move 25% por vez
          }}
        >
          {images.map((src, index) => (
            <ImageWrapper key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </ImageWrapper>
          ))}
        </ImageList>
      </div>

      <ButtonContainer>

      <LeftButton onClick={prevSlide}>
            <img src="/assets/icones/setaLeft.svg" alt="Esquerda" width="30" />
        </LeftButton>
        
        <IndicatorContainer>
             {Array.from({ length: totalImages }).map((_, index) => (
            <Indicator key={index} active={index === currentIndex} />
            ))}
        </IndicatorContainer>

        <RightButton onClick={nextSlide}>
            <img src="/assets/icones/setaRight.svg" alt="Direita" width="30" />
        </RightButton>

      </ButtonContainer>
    </CarouselContainer>
  );
}
