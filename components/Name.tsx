import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Name = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Overconfident Ressume</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1f2fdff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    borderBottomColor: "gray",
  },
});

export default Name;
