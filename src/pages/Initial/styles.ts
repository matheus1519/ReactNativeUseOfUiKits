import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'black',
    flex: 1,
    padding: 16
  },
  headerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  bodyContainer: {
    backgroundColor: 'blueviolet',
    flex: 1,
    padding: 16,
    gap: 32
  },
  bodyText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
  buttonContainer:{
    backgroundColor: 'crimson',
    paddingVertical: 24,
    paddingHorizontal: 32,
    textAlign: 'center',
    borderRadius: 8
  },
  buttonText:{
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  footerContainer: {
    backgroundColor: 'purple',
    flex: 1,
    padding: 16
  },
  footerText: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
  },
})