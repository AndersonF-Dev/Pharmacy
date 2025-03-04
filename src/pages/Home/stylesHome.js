import styled from "styled-components";

export const BannerConteiner = styled.div`
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70.215rem;
    height: 940px;
`;
export const Banner = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #16215B;
    width: 70.215rem;
    height: 550px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem; 
    overflow: hidden;
`;

export const NomeLogo = styled.h1`
    color: #DBECFF;
    font-size: 200px;
    font-family: 'RebondGrotesque', sans-serif;
`;

export const PositionInformacao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 410px;
    position: relative;
    
    
    /* background-color: bisque; */
`;

export const ParagraphInfoBanner = styled.p`
    font-size: 15px;
    width: 311px;
    height: 78px;
    text-align: left;
    line-height: 1.6;
    margin-bottom: 10px;
    margin-left: 20px;
    color: #F2F5F9;

    /* background-color: aqua; */
`;

export const ImgMadica =  styled.img`
    width: 466px;
    height: 504px;
    margin-top: -170px;
    /* background-color: aqua; */
`;

export const IconBook =  styled.img`
    width: 25px;
`;

export const ButtonInfoBanner = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #E7C2D4;
    width: 203px;
    height: 64px;
    font-size: 14.19px;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    margin-right: 20px;
    padding: 21px 10px;
    color: #16215B;
`;

export const MineBannerConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F5F9;
    width: 70.215rem;
    height: 450px;
    border-radius: 2rem;
    z-index: 7;
    margin-top: -20px;
    /* position: absolute; */
`;