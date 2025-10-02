import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

export const OGMap = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Go to MiddleWareToAnotherMap"
        onPress={() => navigation.navigate("MiddleWareToAnotherMap")}
      />
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
