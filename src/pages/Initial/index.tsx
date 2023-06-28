import React from "react";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { StackScreens } from "../../../App";
import { styles } from "./styles";

export const Initial = () => {
  const headerColor = 'red'

  const navigation = useNavigation<StackScreens>()

  const onMoreDetails = () => {
    navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, !!headerColor && { backgroundColor: headerColor }]}>
        <Text style={styles.headerText}>Cabeçalho</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>Corpo</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={onMoreDetails}>
          <Text style={styles.buttonText}>MAIS DETALHES</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Rodapé</Text>
      </View>
    </View>
  )
}
