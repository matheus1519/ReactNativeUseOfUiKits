import styled from 'styled-components/native'

export const ContainerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 16
  }
})`
  flex: 1;
  background-color: #414654;

  padding: 24px;

  /* gap: 16px; */
`

export const HeaderText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 700;

  text-align: center;
`

export const FieldContainer = styled.View`
  flex-direction: row;

  align-items: center;
`

export const FieldText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`

export const FieldInput = styled.TextInput`
  flex: 1;
  padding: 8px 16px;

  background-color: #d6dfff;

  border-radius: 8px;
  font-size: 20px;
`

export const ButtonContainer = styled.TouchableOpacity`
  margin-top: 16px;

  background-color: crimson;
  padding: 16px 24px;
  border-radius: 8px;

  margin-bottom: 40px;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  text-transform: uppercase;
`
