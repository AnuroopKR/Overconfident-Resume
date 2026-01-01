import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Hero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/hero.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.subtitle}>
        Create Your Legendary Resume
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#e1f2fdff",
  },
  image: {
    height: 400,
    width: 400,
  },
  subtitle: {
    fontSize: 20,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    fontWeight:"bold"
  },
  imageContainer:{
    height:270
  }
});

export default Hero;
