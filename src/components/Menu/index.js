import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  NavInfo,
  NavInfoTexts,
  NavDescription,
  SignOutButton,
  SignOutButtonText,
  Information,
  InformationText,
  InformationTextBold,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://www.linkedin.com/in/benites-amorim/"
          backgroundColor="#6d2177"
          color="#fff"
          size={80}
        />
      </Code>
      <Information>
        <InformationText>
          Banco{' '}
          <InformationTextBold>260 - Nu Pagamentos S.A</InformationTextBold>
        </InformationText>
        <InformationText>
          Agência <InformationTextBold>0001</InformationTextBold>
        </InformationText>
        <InformationText>
          Conta <InformationTextBold>000000-0</InformationTextBold>
        </InformationText>
      </Information>

      <Nav>
        <NavItem>
          <NavInfo>
            <Icon name="help-outline" size={28} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="person-outline" size={28} color="#FFF" />
            <NavInfoTexts>
              <NavText>Perfil</NavText>
              <NavDescription>
                Nome de Preferência, Telefone, Email
              </NavDescription>
            </NavInfoTexts>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="account-balance" size={28} color="#FFF" />
            <NavText>Configurar NuConta</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="credit-card" size={28} color="#FFF" />
            <NavText>Configurar Cartão</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
        <NavItem>
          <NavInfo>
            <Icon name="smartphone" size={28} color="#FFF" />
            <NavText>Configurações do App</NavText>
          </NavInfo>
          <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
