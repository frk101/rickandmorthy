import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getEpisode } from "../../business/action/episode";
import styles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const { getEpisodeLoading, getEpisodeResult } = useSelector((x) => x.episode);

  useEffect(() => {
    _getEpisodeList();
    return () => {};
  }, []);

  const _getEpisodeList = async () => {
    dispatch(getEpisode());
  };

  return (
    <>
      {getEpisodeLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Rick and Morty</Text>
            <SafeAreaView style={styles.items}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={getEpisodeResult.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <EpisodeList item={item} />}
              />
            </SafeAreaView>
          </View>
        </View>
      )}
    </>
  );
};

const EpisodeList = ({ item }) => {
  const navigation = useNavigation();
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HomeDetail", item.id)}
    >
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View
            style={[styles.square, { backgroundColor: generateColor() }]}
          ></View>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
        <Text style={styles.itemEpisode}>{item.episode}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Home;
