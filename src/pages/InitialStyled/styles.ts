import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: red;
  flex: 1;
`

export const HeaderContainer = styled.View`
  background-color: ${({ color }: { color: string }) => color || 'black'};
  flex: 1px;
  padding: 16px;
`

export const HeaderText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 700;
`

export const BodyContainer = styled.View`
  background-color: blueviolet;
  flex: 1;
  padding: 16px;
  gap: 32px;
`

export const BodyText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 700;
`

export const ButtonContainer = styled.TouchableOpacity`
  background-color: crimson;
  padding: 24px 32px;
  border-radius: 8px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

export const FooterContainer = styled.View`
  background-color: purple;
  flex: 1;
  padding: 16px;
`

export const FooterText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 700;
`
