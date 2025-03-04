import React from 'react'
import IconBookBut from '/assets/icones/iconBook.svg'
import ImgMedicaBaner from '/assets/imagens/medica.svg'
import Carrossel from '../../components/Carrossel/Carrossel.jsx';
import AboutUs from '../Aboutus/AboutUs.jsx'
import { BannerConteiner, Banner, NomeLogo, ParagraphInfoBanner, PositionInformacao, ImgMadica, IconBook, ButtonInfoBanner, MineBannerConteiner } from './stylesHome.js';

const Home = () => {
  return (
      <>
    <BannerConteiner>
      <Banner>
        <NomeLogo>Pharmacy</NomeLogo>
        <PositionInformacao>
      
          <ParagraphInfoBanner>
            Operational bottlenecks, frequent billing errors, and mismanaged schedules can lead to revenue loss and frustrated patients.
          </ParagraphInfoBanner>
      
          <ImgMadica src={ImgMedicaBaner} alt="Img Medica"/>
      
          <ButtonInfoBanner>
            <IconBook src={IconBookBut} alt="Icon Book Appointment"/>
            Book Appointment
          </ButtonInfoBanner>
        </PositionInformacao>
      </Banner>
      <MineBannerConteiner>
        <Carrossel />
      </MineBannerConteiner>
    </BannerConteiner>
    <AboutUs />
  </>
  )
}

export default Home