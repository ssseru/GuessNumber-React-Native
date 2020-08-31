import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The Game is Over!!!</Text>
      <Text style={styles.text}>Number of rounds: {props.roundsNumber}</Text>
      <Text style={styles.text}>Number was: {props.userNumber}</Text>

      <View style={styles.button}>
        <Button
          color={colors.primary}
          title="NEW GAME"
          onPress={props.onRestart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  button: {
    width: "30%",
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default GameOverScreen;
