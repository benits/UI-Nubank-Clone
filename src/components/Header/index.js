import React, {useState, useEffect} from 'react';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Header({translateY}) {
  const [iconName, setIconName] = useState(
    translateY._offset >= 100 ? 'expand-less' : 'expand-more',
  );
  useEffect(() => {
    setIconName(translateY._offset >= 100 ? 'expand-less' : 'expand-more');
    console.log(translateY);
  }, [translateY]);

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Matheus</Title>
      </Top>
      <Icon name={iconName} size={20} color="#fff" />
    </Container>
  );
}
