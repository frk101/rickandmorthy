import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import { getEpisodeDetail } from "../../business/action/episode";

import styles from "./styles";
import { FlatList } from "native-base";
import axios from "axios";

const HomeDetail = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [characters, setCharacters] = useState([]);

  const { getEpisodeDetailLoading, getEpisodeDetailResult } = useSelector(
    (x) => x.episode
  );
  useEffect(() => {
    _getEpisodeDetail();

    return () => {};
  }, [route.params]);

  const _getEpisodeDetail = async () => {
    dispatch(getEpisodeDetail(route.params)).then(
      async ({ payload: { data } }) => {
        if (data && data.characters && data.characters.length > 0) {
          const characterList = [];
          for (let i = 0; i < data.characters.length; i++) {
            const element = data.characters[i];
            const character = await axios.get(element);
            characterList.push(character.data);
          }
          setCharacters(characterList);
        }
      }
    );
  };

  return (
    <>
      {getEpisodeDetailLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{getEpisodeDetailResult.name}</Text>
              <Text>
                <Text style={styles.dec}>Sezon :</Text>{" "}
                {getEpisodeDetailResult.episode}
              </Text>
              <Text>
                <Text style={styles.dec}>Gösterim Tarihi :</Text>{" "}
                {getEpisodeDetailResult.air_date}
              </Text>
            </View>
          </View>
          <View style={styles.tasksWrapper1}>
            <Text style={styles.charactersBaslik}>Karakterler</Text>
          </View>
          <FlatList
            style={{ marginTop: 10 }}
            showsVerticalScrollIndicator={false}
            data={characters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CharactersList item={item} />}
          />
        </View>
      )}
    </>
  );
};

const CharactersList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemList}
      onPress={() => navigation.navigate("Character", item)}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 40, height: 40, borderRadius: 30 }}
      />
      <Text style={{ marginLeft: 30, fontWeight: "bold" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};
export default HomeDetail;
