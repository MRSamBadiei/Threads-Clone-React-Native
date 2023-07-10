import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./Screen/MainScreen";

//const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return <MainScreen />;
}

/*
 <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Group>
          <RootStack.Screen name="Main" component={MainScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen name="Modal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
*/

export default App;
