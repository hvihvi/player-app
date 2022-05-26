import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Player } from "./src/player/Player";
import { Home } from "./src/home/Home";

export type ParamList = {
  Home: undefined;
  Player: undefined;
};
const Stack = createNativeStackNavigator<ParamList>();

const App = () => (
  <NativeBaseProvider>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Player" component={Player} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);

export default App;
