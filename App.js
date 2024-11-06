import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    return (
        <View style={[styles.parent ]}>
            <Text style ={[styles.child, { backgroundColor: 'powderblue', maxWidth:90 }]}>Square 1</Text>
            <Text style ={[styles.child, { backgroundColor: 'green' }]}>Square 2</Text>
            <Text style ={[styles.child, { backgroundColor: 'red' , maxHeight: 120   }]}>Square 3</Text>
            <StatusBar hidden={true} />



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    greenBox: {
            backgroundColor: 'green',
            width: 100,
            height: 100,
            marginTop: 30,
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 1

    },

    boxText: {
        alignItems: 'center',
        color: 'white',
    },

    Title: {
        fontWeight: 'bold'
    },

    parent: {
       backgroundColor:'whitesmoke',
        marginTop:30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    child: {

        borderWidth: 2,
        textAlign: 'center',
        flexDirection: 'column',
        textAlignVertical: 'center',
        width: 80,
        height: 80,


    },
});

export default App;

