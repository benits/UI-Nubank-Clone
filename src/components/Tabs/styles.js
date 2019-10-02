import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
  showHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #fff;
`;
