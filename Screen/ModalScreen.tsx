import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ModalScreen = ({ closeModal }: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#8E8E8F",
          borderBottomWidth: 0.2,
          paddingBottom: 5,
        }}
      >
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Icon name="close" size={30} color={"#fff"} />
        </TouchableOpacity>

        <Text style={styles.title}>New Thread</Text>
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://xsgames.co/randomusers/avatar.php?g=female",
            }}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "#fff" }}>sampyv__</Text>
            <TextInput
              style={{ color: "#fff" }}
              placeholder="Start a thread..."
              placeholderTextColor={"#8E8E8F"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    height: height,
    width: width,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "auto",
    marginTop: "auto",
    color: "#fff",
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ModalScreen;
