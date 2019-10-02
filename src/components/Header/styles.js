import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px
  color: #FFF;
  font-weight: bold;
  margin-left: 8px;
`;
