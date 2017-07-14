import React, { Component, PropTypes} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/container'

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component{
  static propTypes = {};

  render(){
    return(
      <Container>
        <h1>Home</h1>
        <Image src = {require('../assets/fancy.JPG')} alt = "Fancy-image"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent facilisis felis velit, id pretium massa convallis et.
          Duis et nibh et ipsum efficitur congue. Aenean eu risus
          maximus quam dictum porttitor. Nulla sodales quam est,
          vel feugiat turpis vestibulum sed. Vestibulum ullamcorper efficitur pretium.
          Quisque libero purus, sodales vitae posuere at, hendrerit non purus.
          Sed maximus mauris porttitor odio maximus porta. Donec dolor quam,
          convallis eget erat eget, mattis porta purus.
        </p>
      </Container>
    );
  }
}
