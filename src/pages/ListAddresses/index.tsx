import React, { useState, useEffect } from 'react'

import {
  LinkContainer,
  Container,
  HeaderText,
  ListText,
  AddressContainer,
  AddressText,
  RegionText,
  AllAddressFlatList,
  AddressSeparator
} from './styles'

import { api } from '../../services/api'
import { useIsFocused } from '@react-navigation/native'

interface AddressDomain {
  id: 4
  cep: '28035125'
  street: 'Rua Alvarenga Filho'
  number: '32'
  complement: ''
  state: 'RJ'
  city: 'Campos dos Goytacazes'
  neighborhood: 'Centro'
}

export const ListAddresses = () => {
  const [addresses, setAddresses] = useState([] as AddressDomain[])

  const isFocused = useIsFocused()

  useEffect(() => {
    const loadAddresses = async () => {
      try {
        const { data } = await api.get('/addresses')

        setAddresses(data)
      } catch (error) {}
    }

    loadAddresses()
  }, [isFocused])

  return (
    <Container>
      <HeaderText>Endereços</HeaderText>
      <LinkContainer to={'/AddNewAddress'}>Cadastrar endereço</LinkContainer>
      <ListText>Todos os Endereços</ListText>
      <AllAddressFlatList
        data={addresses}
        renderItem={({ item: address }: { item: AddressDomain }) => (
          <AddressContainer>
            <AddressText>
              {address.street}, {address.number} {address.complement}
            </AddressText>
            <RegionText>
              {address.neighborhood}, {address.city} / {address.state}
            </RegionText>
          </AddressContainer>
        )}
        ItemSeparatorComponent={() => <AddressSeparator />}
        keyExtractor={(item: AddressDomain) => item.id.toString()}
      />
    </Container>
  )
}
