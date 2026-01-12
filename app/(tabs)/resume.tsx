import ResumeContent from "@/components/resume/resumeContent";
import Title from "@/components/resume/title";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Resume = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <Title />

        <View style={styles.resume}>
          <View style={styles.topAccent} />
          <ResumeContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },

  scroll: {
    paddingBottom: 40, // ✅ allows full scroll
  },

  resume: {
    backgroundColor: "#F8F9FB",
    borderColor: "#3A6EA5",
    borderWidth: 1,
    margin: 10,

  },

  topAccent: {
    height: 4,
    backgroundColor: "#F2B705",
    marginTop:14

  },
});


export default Resume;


