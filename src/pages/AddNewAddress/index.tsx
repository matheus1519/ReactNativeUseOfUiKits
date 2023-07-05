import React, { useEffect, useState } from 'react'

import axios from 'axios'

import {
  FieldInput,
  FieldText,
  ContainerScrollView,
  FieldContainer,
  ButtonContainer,
  ButtonText,
  HeaderText
} from './styles'

import { addressFromApi } from './adapters/fromApi'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { api } from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { StackScreens } from '../../../App'

export const AddNewAddress = () => {
  const navigation = useNavigation<StackScreens>()

  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')

  const [isValidAddress, setIsValidAddress] = useState(false)

  useEffect(() => {
    const loadAddress = async () => {
      try {
        const { data } = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        )

        const addressMapped = addressFromApi(data)

        setStreet(addressMapped.street)
        setNumber('')
        setComplement('')
        setState(addressMapped.state)
        setCity(addressMapped.city)
        setNeighborhood(addressMapped.neighborhood)

        setIsValidAddress(true)

        if (data.erro) {
          Toast.show({
            type: 'error',
            text1: 'Cep não encontrado! ',
            text2: 'Insira outro cep.'
          })

          setIsValidAddress(false)
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Número máximo de cep excedido',
          text2: 'Insira um cep de 8 dígitos.'
        })

        setIsValidAddress(false)
      }
    }

    if (cep.length >= 8) {
      loadAddress()
    }
  }, [cep])

  const onRegisterAddress = async () => {
    if (!isValidAddress) {
      Toast.show({
        type: 'error',
        text1: 'CEP Inválido',
        text2: 'O cep ou não foi encontrado ou a largura máxima foi excedida. '
      })

      return
    }

    if (!cep || !street || !number || !state || !city || !neighborhood) {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Apenas o campo Complemento é opcional.'
      })

      return
    }

    try {
      await api.post('/addresses', {
        cep,
        street,
        number,
        complement,
        state,
        city,
        neighborhood
      })

      navigation.navigate('ListAddresses')

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Seu endereço foi cadastrado com sucesso.'
      })
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro genérico',
        text2: 'Erro ao cadastrar endereço!'
      })
    }
  }

  return (
    <ContainerScrollView>
      <HeaderText>Cadastre seu endereço de entrega da sua quentinha</HeaderText>
      <FieldContainer>
        <FieldText>CEP: </FieldText>
        <FieldInput
          value={cep}
          onChangeText={setCep}
          placeholder="Digite seu CEP (Ex: 28000101)"
          keyboardType="numeric"
        />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Rua: </FieldText>
        <FieldInput value={street} onChangeText={setStreet} />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Número: </FieldText>
        <FieldInput value={number} onChangeText={setNumber} />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Complemento: </FieldText>
        <FieldInput value={complement} onChangeText={setComplement} />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Estado: </FieldText>
        <FieldInput value={state} onChangeText={setState} />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Cidade: </FieldText>
        <FieldInput value={city} onChangeText={setCity} />
      </FieldContainer>
      <FieldContainer>
        <FieldText>Bairro: </FieldText>
        <FieldInput value={neighborhood} onChangeText={setNeighborhood} />
      </FieldContainer>
      <ButtonContainer onPress={onRegisterAddress}>
        <ButtonText>Cadastrar endereço</ButtonText>
      </ButtonContainer>
    </ContainerScrollView>
  )
}
