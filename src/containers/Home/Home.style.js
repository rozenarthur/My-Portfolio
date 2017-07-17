import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

export const HeroImage = styled.div`
      height: 70vh;
      background-image: url('${require('../../assets/fancy.JPG')}');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      
      flex-direction: column;
      align-content: center;
      justify-content: center;
      
      text-align: center;
      font-size: 1.7em;
      color: #212626;
      
      h1{
        margin-bottom: 0;
      }
  `;

export const RevealP = styled.p`

  `;