import {StyleSheet, Animated} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  margin: 0 40px;
`;

export const Code = styled.View`
  background: #FFF
  padding: 10px;
  align-self: center;
  overflow: hidden;
`;

export const Information = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const InformationText = styled.Text`
  color: #FFF
  font-size: 14px;
`;

export const InformationTextBold = styled.Text`
  font-weight: bold;
`;

export const Nav = styled.View`
  margin-top: 40px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;
export const NavInfo = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

export const NavInfoTexts = styled.View`
  align-items: flex-start;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;

export const NavDescription = styled.Text`
  font-size: 11px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1.5px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;
