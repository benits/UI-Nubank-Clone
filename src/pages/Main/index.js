import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Description,
  DescriptionHeader,
  Strong,
  SubDescription,
  SubDescriptionValor,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duaration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header translateY={translateY} />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="credit-card" size={38} color="#666" />
              <DescriptionHeader>Cartão de Crédito</DescriptionHeader>
            </CardHeader>
            <CardContent>
              <Title>FATURA ATUAL</Title>
              <Description>
                R$ <Strong>5.504</Strong>,65
              </Description>
              <SubDescription>
                Limite disponivel{' '}
                <SubDescriptionValor>R$ 23.002,00</SubDescriptionValor>
              </SubDescription>
            </CardContent>
            <CardFooter>
              <Icon
                name="shopping-cart"
                size={32}
                color="rgba(102, 102, 102, 0.8)"
              />
              <Annotation>
                Compra mais recente em Supermercado Extra, valor R$ 150,00 hoje
                às 08:00h
              </Annotation>
              <Icon
                name="chevron-right"
                size={32}
                color="rgba(102, 102, 102, 0.5)"
              />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
}
