import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class MapScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421
    },
    markers: [
      {
        key: 1,
        latlng: {
          latitude: -8.11096,
          longitude: 115.087363
        },
        title: "Indo Tech",
        subtitle: "berlokasi di Jl Ahyani no 558 singaraja Bali"
      },
      {
        key: 2,
        latlng: {
          latitude: -8.666581,
          longitude: 115.215089
        },
        title: "RTC",
        subtitle: "Tempat Terlengkan Toko-Toko Speart Part Komputer"
      },
      {
        key: 3,
        latlng: {
          latitude: -8.67716,
          longitude: 115.214729
        },
        title: "AW COMP"
      },
      {
        key: 4,
        latlng: {
          latitude: -8.675527,
          longitude: 115.218076
        },
        title: "Dewata Computer"
      },
      {
        key: 5,
        latlng: {
          latitude: -8.117158,
          longitude: 115.090059
        },
        title: "Swasty Computer"
      },
      {
        key: 6,
        latlng: {
          latitude: -8.110572,
          longitude: 115.085725
        },
        title: "Swasty Computer"
      },
      {
        key: 7,
        latlng: {
          latitude: -8.453825,
          longitude: 115.354018
        },
        title: "Microtech Computer"
      },
      {
        key: 8,
        latlng: {
          latitude: -8.454074,
          longitude: 115.354007
        },
        title: "Bali Yoni Computer"
      },
      {
        key: 9,
        latlng: {
          latitude: -8.549837,
          longitude: 115.123886
        },
        title: "Rusell Teknologi"
      },
      {
        key: 10,
        latlng: {
          latitude: -8.351025,
          longitude: 114.600487
        },
        title: "Kenji Komputer"
      }
    ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
          <Text style={styles.textHeader}>Peta Toko Computer Di Bali</Text>
        </View>
        <View style={styles.contMaps}>
          <MapView style={styles.map} region={this.state.region}>
            {this.state.markers.map(mark => (
              <Marker
                key={mark.key}
                coordinate={mark.latlng}
                title={mark.title}
                description={mark.subtitle}
              />
            ))}
          </MapView>
        </View>
        <View style={styles.contFooter}>
          <Text style={styles.textFooter}> http://wahanawar.com/ </Text>
        </View>
      </View>
    );
  }
}
export default MapScreen;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    },
    contMain: {
        flex: 1
    },
    contHeader: {
        backgroundColor: "#1E88E5",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        position: "relative"
    },
    contMaps: {
        flex: 10
    },
    textHeader: {
        fontSize: 20,
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    contFooter: {
        backgroundColor: "#1E88E5",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        position: "relative"
    },
    textFooter: {
        fontSize: 16,
        color: "white",
        alignItems: "center",
        justifyContent: "center"
    }
});