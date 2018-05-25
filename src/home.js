import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StackNavigator } from "react-navigation";


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#1E88E5', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFEE58' }}>
                    Peta Lokasi Toko Komputer Di Bali
            </Text>
                <TouchableOpacity style={styles.buttom} onPress={() => this.props.navigation.navigate('MapScreen')}>
                <Text style={{fontSize: 20, color: '#fff'}} >Lihat Maps</Text>
            </TouchableOpacity>

            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    buttom: { 
        borderWidth: 3, 
        borderRadius: 15, 
        borderColor: 'black', 
        backgroundColor: '#F57F17', 
        marginTop: 25, 
        width: 200,
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})