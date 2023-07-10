import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import ActivityScreen from "./ActivityScreen";
import Icon from "react-native-vector-icons/Octicons";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import ModalScreen from "./ModalScreen";

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#101010" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: { backgroundColor: "#101010", borderTopWidth: 0 },
              tabBarActiveTintColor: "#ffffff",
              tabBarHideOnKeyboard: true,
              headerShown: false,
            }}
          >
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => {
                  return <Icon color={color} size={size} name="home"></Icon>;
                },
              }}
              name="Home"
              component={HomeScreen}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => {
                  return <Icon color={color} size={size} name="search"></Icon>;
                },
              }}
              name="Explore"
              component={ExploreScreen}
            />
            <Tab.Screen
              options={{
                tabBarButton: ({ onFocus }) => (
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalVisible(true)}
                  >
                    <Icon3 color="#8E8E8F" size={30} name="add" />
                  </TouchableOpacity>
                ),
              }}
              listeners={{}}
              name="Post"
              component={() => null}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size, focused }) => {
                  return focused ? (
                    <Icon color={color} size={size} name="heart-fill" />
                  ) : (
                    <Icon color={color} size={size} name="heart" />
                  );
                },
              }}
              name="Activity"
              component={ActivityScreen}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size, focused }) => {
                  return focused ? (
                    <Icon2 color={color} size={size} name="person" />
                  ) : (
                    <Icon2 color={color} size={size} name="person-outline" />
                  );
                },
              }}
              name="Profile"
              component={ProfileScreen}
            />
          </Tab.Navigator>
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={[styles.modalContainer]}>
              <View style={styles.modalContent}>
                <ModalScreen closeModal={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101010",
  },
  modalContent: {
    backgroundColor: "#101010",
    padding: 20,
    borderRadius: 8,
  },
});
