import {Animated} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #8424a1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
`;

export const DescriptionHeader = styled.Text`
  font-size: 16px;
  color: #999;
  margin-left: 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #13b2ba;
`;

export const Strong = styled.Text`
  font-weight: bold;
  color: #13b2ba;
`;

export const Description = styled.Text`
  font-size: 35px;
  margin-top: 3px;
  font-family: notoserif;
  color: #13b2ba;
`;

export const SubDescription = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #999;
`;
export const SubDescriptionValor = styled.Text`
  font-size: 13px;
  color: #54e320;
  font-weight: bold;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  background: #eee;
  border-radius: 4px;
`;
export const Annotation = styled.Text`
  margin-left: 30px;
  margin-right: 25px;
  justify-content: center;
  font-size: 12px;
  color: #999e9e;
`;
