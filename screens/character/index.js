import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Ionicons,
  FontAwesome,
  Zocial,
  FontAwesome5,
  MaterialIcons,
} from "react-native-vector-icons";

import style from "./styles";

const Character = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#E8EAED" }}>
      <Image source={{ uri: route.params.image }} style={style.image} />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.buttonContainer}
      >
        <Ionicons name="arrow-bak-outline" size={18} color="#ffffff" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={style.name}>{route.params.name}</Text>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Cinsiyet:
            <Text style={style.title}>
              {route.params.gender === "Male" ? "Erkek" : "Kadın"}
            </Text>
          </Text>
          <FontAwesome
            name={route.params.gender === "Male" ? "male" : "female"}
            size={30}
            color={generateColor()}
          />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Lokasyon:
            <Text style={style.title}>
              {route.params.location.name == "unknown"
                ? "-"
                : route.params.location.name}
            </Text>
          </Text>
          <MaterialIcons
            name="location-history"
            size={30}
            color={generateColor()}
          />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Statu:
            <Text style={style.title}>{route.params.status}</Text>
          </Text>
          <Zocial name="statusnet" size={30} color={generateColor()} />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Çeşit:
            <Text style={style.title}>{route.params.species}</Text>
          </Text>
          <FontAwesome5 name="ghost" size={30} color={generateColor()} />
        </View>
        <View style={style.listContainer}>
          <Text style={style.baslik}>
            Köken:
            <Text style={style.title}>{route.params.origin.name}</Text>
          </Text>

          <Ionicons name="location" size={30} color={generateColor()} />
        </View>
      </ScrollView>
    </View>
  );
};
export default Character;
