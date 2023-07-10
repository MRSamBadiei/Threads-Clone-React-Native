import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const users = [
  {
    fullName: "John Doe",
    nameId: "johndoe",
    followers: 1000,
  },
  {
    fullName: "Jane Smith",
    nameId: "janesmith",
    followers: 500,
  },
  {
    fullName: "Michael Johnson",
    nameId: "michaeljohnson",
    followers: 2000,
  },
  {
    fullName: "Emily Brown",
    nameId: "emilybrown",
    followers: 1500,
  },
  {
    fullName: "David Lee",
    nameId: "davidlee",
    followers: 800,
  },
  {
    fullName: "Sarah Wilson",
    nameId: "sarahwilson",
    followers: 1200,
  },
  {
    fullName: "Robert Davis",
    nameId: "robertdavis",
    followers: 2500,
  },
  {
    fullName: "Jennifer Thompson",
    nameId: "jenniferthompson",
    followers: 900,
  },
  {
    fullName: "Christopher Martinez",
    nameId: "christophermartinez",
    followers: 1800,
  },
  {
    fullName: "Jessica Turner",
    nameId: "jessicaturner",
    followers: 600,
  },
  {
    fullName: "Matthew Harris",
    nameId: "matthewharris",
    followers: 3000,
  },
  {
    fullName: "Olivia Clark",
    nameId: "oliviaclark",
    followers: 700,
  },
  {
    fullName: "Daniel Moore",
    nameId: "danielmoore",
    followers: 400,
  },
  {
    fullName: "Ava Rodriguez",
    nameId: "avarodriguez",
    followers: 1600,
  },
  {
    fullName: "William Turner",
    nameId: "williamturner",
    followers: 1100,
  },
  {
    fullName: "Sophia Baker",
    nameId: "sophiabaker",
    followers: 2200,
  },
  {
    fullName: "James Green",
    nameId: "jamesgreen",
    followers: 1400,
  },
  {
    fullName: "Emma Hill",
    nameId: "emmahill",
    followers: 950,
  },
  {
    fullName: "Alexander Young",
    nameId: "alexanderyoung",
    followers: 1300,
  },
  {
    fullName: "Grace Roberts",
    nameId: "graceroberts",
    followers: 100,
  },
];

const ActivityScreen = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#101010",
        flex: 1,
        padding: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: 32,
            marginBottom: 10,
          }}
        >
          Activity
        </Text>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "row",
                  flex: 1,
                  borderBottomColor: "#B0B0B0",
                  borderBottomWidth: 0.2,
                }}
              >
                <View style={{ marginRight: "auto" }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 16,
                    }}
                  >
                    {item.nameId}
                  </Text>
                  <Text
                    style={{ color: "#B0B0B0", fontSize: 16, marginBottom: 5 }}
                  >
                    Followed you
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    borderColor: "#B0B0B0",
                    borderWidth: 1 / 2,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    width: 100,
                  }}
                >
                  <Text style={{ color: "#fff" }}>Follow</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.nameId}
      />
    </ScrollView>
  );
};

export default ActivityScreen;
