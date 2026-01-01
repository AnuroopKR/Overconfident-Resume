import Hero from '@/components/hero';
import Name from '@/components/Name';
import ResumeForm from '@/components/resume-form';
import React from 'react';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView >
          <View style={styles.container}>
            <Name/>
      <Hero/>
      <ResumeForm/>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#e1f2fdff",
    paddingTop:30
  }
})

export default Index;
