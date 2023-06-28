import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StackScreens } from "../../../App";

import { BodyContainer, BodyText, ButtonContainer, ButtonText, Container, FooterContainer, FooterText, HeaderContainer, HeaderText } from "./styles";

export const InitialStyled = () => {
  const headerColor = 'blue'

  const navigation = useNavigation<StackScreens>()

  const onMoreDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <Container>
      <HeaderContainer color={headerColor}>
        <HeaderText>Cabeçalho Styled</HeaderText>
      </HeaderContainer>
      <BodyContainer>
        <BodyText>Corpo Styled</BodyText>
        <ButtonContainer onPress={onMoreDetails}>
          <ButtonText>MAIS DETALHES</ButtonText>
        </ButtonContainer>
      </BodyContainer>
      <FooterContainer>
        <FooterText>Rodapé Styled</FooterText>
      </FooterContainer>
    </Container>
  )
}
