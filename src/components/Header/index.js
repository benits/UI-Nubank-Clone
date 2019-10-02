import React from 'react';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header({translateY}) {
  const iconUp = <Icon name="expand-less" size={20} color="#fff" />;
  const iconDown = <Icon name="expand-more" size={20} color="#fff" />;

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>
      {translateY >= 100 ? iconUp : iconDown}
    </Container>
  );
}
