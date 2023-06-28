import React from "react";

import { ButtonContainer, Title, ButtonText, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Details = () => {
  const navigation = useNavigation()

  const onComeBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <Title>Tela de Detalhes</Title>
      <ButtonContainer onPress={onComeBack}>
        <ButtonText>VOLTAR PARA A TELA ANTERIOR</ButtonText>
      </ButtonContainer>
    </Container>
  )
}
