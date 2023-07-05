import styled from 'styled-components/native'

import { Link } from '@react-navigation/native'

export const Container = styled.View`
  flex: 1;
  background-color: #414654;

  padding: 24px 24px 0;

  gap: 16px;
`

export const HeaderText = styled.Text`
  color: white;
  font-size: 32px;
  font-weight: 700;

  text-align: center;
`

export const LinkContainer = styled(Link)`
  background-color: crimson;
  padding: 16px 24px;
  border-radius: 8px;

  text-align: center;

  color: white;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  text-transform: uppercase;
`

export const ListText = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 700;

  margin-top: 16px;
`

export const AllAddressFlatList = styled.FlatList``

export const AddressContainer = styled.View`
  background-color: white;

  border-radius: 4px;

  padding: 8px;

  margin-bottom: 16px;
`

export const AddressSeparator = styled.View`
  /* height: 16px; */
`
export const AddressText = styled.Text`
  color: #414654;
  font-size: 24px;

  font-weight: 700;
`

export const RegionText = styled.Text`
  color: #414654;

  font-size: 20px;
`
