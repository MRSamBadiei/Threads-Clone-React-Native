import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#101010",
      }}
    >
      <Text style={{ color: "#B0B0B0", marginTop: 25 }}>
        You haven't posted any threads yet.
      </Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#101010" }}>
      <Text style={{ color: "#B0B0B0", marginTop: 25 }}>
        You haven't posted any replies yet.
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function Tap() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarContentContainerStyle: {
          backgroundColor: "#101010",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
          borderColor: "#fff",
          shadowColor: "#fff",
        },
        tabBarAndroidRipple: {
          color: "#fff",
        },
      }}
    >
      <Tab.Screen name="Threads" component={HomeScreen} />
      <Tab.Screen name="Replies" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const ProfileScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#101010",
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <Icon
            style={{ marginRight: "auto" }}
            name="earth"
            size={30}
            color="#fff"
          />
          <View style={{ flexDirection: "row" }}>
            <Icon
              style={{ marginRight: 10 }}
              name="instagram"
              size={30}
              color="#fff"
            />
            <Icon2 name="menu" size={30} color="#fff" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "#fff",
              }}
            >
              Sam Badiei
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
              }}
            >
              samypv__
            </Text>
          </View>
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{ width: 75, height: 75, borderRadius: 100 }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            minima velit!
          </Text>
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: "#B0B0B0",
              fontSize: 18,
            }}
          >
            100k followers
          </Text>
        </View>
      </View>

      <Tap />
    </View>
  );
};

export default ProfileScreen;
