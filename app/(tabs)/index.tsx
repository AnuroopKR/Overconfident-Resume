import Hero from '@/components/hero';
import Name from '@/components/Name';
import ResumeForm from '@/components/resume-form';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const Index = () => {
  return (
    <SafeAreaView >
          <View style={styles.container}>
            <Name/>   
               <Link href={"/resume"}><Text>resume</Text></Link>
      <Hero/>
      <ResumeForm/>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#e1f2fdff",
    paddingTop:30,
    height:"100%"
  }
})

export default Index;
