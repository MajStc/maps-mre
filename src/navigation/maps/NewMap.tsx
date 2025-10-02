import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const NewMap = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }}>
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Marker"
          description="Marker Description"
        />
      </MapView>
    </View>
  );
};
