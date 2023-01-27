import React from "react";
import { View , StyleSheet } from "react-native/types";

function Viewer (){
    return <View styles={styles.container}>  
    </View> 
}
const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
    }
})

export  default Viewer;