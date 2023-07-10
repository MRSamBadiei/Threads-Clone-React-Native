import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/AntDesign";

const One = () => {
  const iconSize = 25;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View
          style={{
            flex: 1 / 6,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: "#fff",
              width: 1,
              height: "50%",
              marginTop: 5,
              opacity: 0.3,
              borderRadius: 100,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 5 / 6,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text style={[styles.white, styles.id]}>qweqweqe</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8E8E8F", marginRight: 10 }}>15h</Text>
              <Icon
                name="dots-horizontal"
                size={25}
                color={styles.white.color}
              />
            </View>
          </View>

          <Text style={[styles.white, { marginBottom: 10, lineHeight: 22 }]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium deserunt.
          </Text>

          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Icon
              style={{ marginRight: 15 }}
              name="heart-outline"
              color={styles.white.color}
              size={iconSize}
            />
            <Icon2
              style={{ marginRight: 15, transform: [{ scaleX: -1 }] }}
              name="message-circle"
              color={styles.white.color}
              size={iconSize}
            />
            <Icon3
              style={{ marginRight: 15 }}
              name="retweet"
              color={styles.white.color}
              size={iconSize}
            />
            <Icon2 name="send" color={styles.white.color} size={iconSize} />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            position: "relative",
            flex: 1 / 6,
          }}
        >
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{
              width: 10,
              height: 10,
              borderRadius: 100,
              position: "absolute",
              top: 10,
              left: 12,
            }}
          />
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{
              width: 20,
              height: 20,
              borderRadius: 100,
              position: "absolute",
              top: 0,
              left: 28,
            }}
          />
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{
              width: 12,
              height: 12,
              borderRadius: 100,
              position: "absolute",
              top: 20,
              left: 20,
            }}
          />
        </View>

        <Text style={{ color: "#8E8E8F", flex: 5 / 6 }}>
          30 replies • 363 likes
        </Text>
      </View>

      <View
        style={{
          borderWidth: 0.2,
          borderColor: "#8E8E8F",
          marginTop: 20,
          opacity: 0.3,
        }}
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#101010",
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 0,
      }}
    >
      <One />
      <One />
      <One />
      <One />
      <One />
      <One />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  white: {
    color: "#fff",
  },
  id: {
    marginRight: "auto",
    fontWeight: "bold",
  },
});

export default HomeScreen;
