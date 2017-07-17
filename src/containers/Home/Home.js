import React, { Component, PropTypes} from 'react';
import { Image, HeroImage, RevealP} from './Home.style';
import {Container} from '../../theme/grid'

export default class Home extends Component{
  static propTypes = {};

  render(){
    return(
      <Container>
        <h1>Home</h1>
        <HeroImage>
          <h1>Arthur Rozenberg</h1>
          <h2>Web Developer | Application Developer</h2>
        </HeroImage>

        <RevealP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent facilisis felis velit, id pretium massa convallis et.
          Duis et nibh et ipsum efficitur congue. Aenean eu risus
          maximus quam dictum porttitor. Nulla sodales quam est,
          vel feugiat turpis vestibulum sed. Vestibulum ullamcorper efficitur pretium.
          Quisque libero purus, sodales vitae posuere at, hendrerit non purus.
          Sed maximus mauris porttitor odio maximus porta. Donec dolor quam,
          convallis eget erat eget, mattis porta purus.
        </RevealP>
      </Container>
    );
  }
}
