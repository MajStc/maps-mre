import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MiddlewareToAnotherMap } from "./maps/MiddlewareToAnotherMap";
import { OGMap } from "./maps/OGMap";
import { NewMap } from "./maps/NewMap";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    animation: "fade",
  },
  screens: {
    OGMap: OGMap,
    MiddleWareToAnotherMap: MiddlewareToAnotherMap,
    NewMap: NewMap,
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
