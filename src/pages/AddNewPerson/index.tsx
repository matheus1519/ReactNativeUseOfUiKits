import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import {
  TextInput,
  IconButton,
  Text,
  AppBar,
  HStack,
  Switch,
  ListItem,
  Button
} from '@react-native-material/core'
import {
  Datepicker,
  RadioGroup,
  Radio,
  RangeCalendar,
  CheckBox,
  Autocomplete,
  AutocompleteItem
} from '@ui-kitten/components'

import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { Container, ContainerScrollView, HeaderText } from './styles'
import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'
import { STATES } from './constants/STATES'

export const AddNewPerson = () => {
  const [password, setPassword] = useState('')
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const [isForReceivingMessages, setIsForReceivingMessages] = useState(false)

  const [maritalStatus, setMaritalStatus] = useState('')

  const [birthDate, setBirthDate] = useState(new Date())

  const [city, setCity] = useState('')
  const [brazilianStates, setBrazilianStates] = useState(STATES)

  const [planChoosen, setPlanChoosen] = useState(0)

  const [subscriptionPeriod, setSubscriptionPeriod] = useState({})

  const [isReceiveReactUpdates, setIsReceiveReactUpdates] = useState(false)

  const tooglePassword = () => {
    setIsPasswordHidden(!isPasswordHidden)
  }

  const toogleReceivingMessages = () => {
    setIsForReceivingMessages(!isForReceivingMessages)
  }

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <AppBar
          title="Barra Superior"
          leading={props => (
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              {...props}
            />
          )}
          trailing={props => (
            <HStack>
              <IconButton
                icon={props => <Icon name="magnify" {...props} />}
                {...props}
              />
              <IconButton
                icon={props => <Icon name="dots-vertical" {...props} />}
                {...props}
              />
            </HStack>
          )}
        />
        <ContainerScrollView>
          <HeaderText variant="h4">
            Formulário de Cadastro de Pessoa Física
          </HeaderText>
          <TextInput
            label="Nome"
            placeholder="Insira seu nome completo..."
            leading={props => <Icon name="account" {...props} />}
            helperText="Exemplo: Alex da Silva Pessanha"
          />
          {/* <mat-form-field>
            <mat-label>Nome</mat-label>
            <input matInput placeholder="Insira seu nome completo...">
            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
            <mat-hint>Exemplo: Alex da Silva Pessanha</mat-hint>
          </mat-form-field> */}
          <TextInput
            label="Senha"
            placeholder="Digite uma senha segura..."
            trailing={props => (
              <IconButton
                icon={props => (
                  <Icon
                    name={isPasswordHidden ? 'eye' : 'eye-off'}
                    {...props}
                  />
                )}
                onPress={tooglePassword}
                {...props}
              />
            )}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isPasswordHidden}
          />
          <TextInput label="Biografia" multiline numberOfLines={3} />
          {/* <mat-form-field>
            <mat-label>Biografia</mat-label>
            <textarea matInput rows="3"></textarea>
          </mat-form-field> */}

          <ListItem
            title="Deseja receber mensagens pelo Whatsapp?"
            trailing={
              <Switch
                value={isForReceivingMessages}
                onValueChange={toogleReceivingMessages}
              />
            }
          />

          <Picker
            placeholder="Selecione um Estado Civil"
            selectedValue={maritalStatus}
            style={{ backgroundColor: 'white' }}
            onValueChange={itemValue => setMaritalStatus(itemValue)}
          >
            <Picker.Item label="Selecione um Estado Civil" value="" />
            <Picker.Item label="Solteir*" value="single" />
            <Picker.Item label="Casad*" value="married" />
            <Picker.Item label="Divorciad*" value="divorced" />
            <Picker.Item label="Viuv*" value="widowed" />
          </Picker>

          <View style={{ gap: 8 }}>
            <Text>Data de Nascimento</Text>
            <Datepicker
              date={birthDate}
              onSelect={nextDate => setBirthDate(nextDate)}
            />
          </View>

          <View style={{ gap: 8 }}>
            <Text>Estado de Nascimento</Text>
            <Autocomplete
              // style={{ width: '100%' }}
              placeholder="Selecione um Estado..."
              value={city}
              onSelect={index => {
                setCity(brazilianStates[index])
              }}
              onChangeText={autocompleteInput => {
                setCity(autocompleteInput)
                setBrazilianStates(
                  STATES.filter(state =>
                    state
                      .toLocaleLowerCase()
                      .includes(autocompleteInput.toLocaleLowerCase())
                  )
                )
              }}
            >
              {brazilianStates.map((state, index) => (
                <AutocompleteItem key={index} title={state} />
              ))}
            </Autocomplete>
          </View>

          <View>
            <Text>Escolha um Plano:</Text>
            <RadioGroup
              selectedIndex={planChoosen}
              onChange={index => setPlanChoosen(index)}
            >
              <Radio>Plano Básico</Radio>
              <Radio>Plano Intermediario</Radio>
              <Radio>Plano Mais</Radio>
            </RadioGroup>
          </View>

          <View style={{ gap: 8 }}>
            <Text>Escolha o período da assinatura:</Text>
            <RangeCalendar
              style={{ width: '100%' }}
              range={subscriptionPeriod}
              onSelect={nextRange => setSubscriptionPeriod(nextRange)}
            />
          </View>

          {/* No angular */}
          {/*
            <label matTooltip="No total, desde que conheceu o React!">Há quantos anos trabalha com React?</label>
            <mat-slider min="0" max="10" step="1" discrete>
              <input matSliderThumb>
            </mat-slider>
          */}
          {/* https://www.npmjs.com/package/@react-native-community/slider */}

          <View style={{ gap: 8 }}>
            <Text>De quais tecnologias quer receber atualizações?</Text>
            <CheckBox
              checked={isReceiveReactUpdates}
              onChange={nextChecked => setIsReceiveReactUpdates(nextChecked)}
            >
              React
            </CheckBox>
            <CheckBox>Angular</CheckBox>
            <CheckBox>Vue</CheckBox>
            <CheckBox disabled>Typescript (Em breve)</CheckBox>
          </View>
          <Button title="CADASTRAR PESSOA" />
        </ContainerScrollView>
      </Container>
    </>
  )
}
