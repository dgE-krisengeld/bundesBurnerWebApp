import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {Icon} from '../Utils/Icon';

export function BusinessComponent({marker}) {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{height: 150}}
        initialRegion={{
          latitude: 50.014123,
          longitude: 8.263218,
          latitudeDelta: 0.012,
          longitudeDelta: 0.011,
        }}>
        <Marker
          title={marker.title}
          key={marker.id}
          coordinate={marker.coordinates}>
          <Icon name={marker.icon} style={{color: 'red', fontSize: 22}} />
        </Marker>
      </MapView>
        <View style={{margin: 20}}>
            <Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, animi assumenda aut cum debitis dolores eius esse est laborum maiores modi perferendis provident qui ratione sequi tempora ut vel voluptates.</Text>
        </View>
        <View>
            <Button title={"Bezahlen"} onPress={() => Alert.alert("Pay now")}/>
        </View>
    </View>
  );
}
