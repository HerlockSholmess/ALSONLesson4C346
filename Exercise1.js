import {StyleSheet, Text, View} from "react-native";
import React from "react";

<Text style={{ fontSize: 24 }}>RP Values</Text>
<Text style={{ color: 'green' }}>Excellence</Text>
<Text style={{ backgroundColor: 'yellow' }}>Customer-Centric</Text>
<Text style={{ fontStyle: 'italic' }}>Integrity</Text>
<Text style={{ textAlign: 'center' }}>Teamwork</Text>
<Text style={{ color: 'white', backgroundColor: 'black' }}>Enterprising</Text>



<Text style={[styles.boxText, styles.Title, styles.greenBox]}> Who we are</Text>
<Text style={[styles.boxText, styles.greenBox]}> Our People</Text>
<Text style={[styles.boxText, styles.greenBox]}> Our Campus</Text>
<StatusBar hidden={true} />


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
});




    // exercise 3

const App = () => {
    return (
        <View style={[styles.parent ]}>
            <Text style ={[styles.child, { backgroundColor: 'powderblue', maxWidth:90 }]}>Child 1</Text>
            <Text style ={[styles.child, { backgroundColor: 'skyblue' }]}>Child 2</Text>
            <Text style ={[styles.child, { backgroundColor: 'steelblue' , maxHeight: 120   }]}>Child 3</Text>
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
        flexDirection: 'centre',
        borderWidth: 5,
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        flex: 1

    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'row',
        fontSize: 24,
        flexDirection: 'column',
        textAlignVertical: 'center',
    },
});
