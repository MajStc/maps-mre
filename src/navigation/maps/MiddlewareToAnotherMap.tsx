import { useNavigation } from "@react-navigation/native";
import { Text, View, Button } from "react-native";

export const MiddlewareToAnotherMap = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Middleware To Another Map</Text>
      <Button
        title="Go to NewMap"
        onPress={() => navigation.navigate("NewMap")}
      />
    </View>
  );
};
