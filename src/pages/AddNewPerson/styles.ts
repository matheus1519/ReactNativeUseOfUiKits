import { Text } from '@react-native-material/core'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #414654;
  flex: 1;

  padding-top: 24px;
`

export const ContainerScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    rowGap: 16,
    paddingBottom: 24
  }
})`
  background-color: #e7edf8;

  flex: 1;
  padding: 8px;
`

export const HeaderText = styled(Text)`
  text-align: center;
`
