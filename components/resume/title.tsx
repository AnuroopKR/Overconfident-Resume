import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Your Resume is here
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:8


    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default Title;
