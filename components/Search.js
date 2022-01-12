// Components/Search.js
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import FilmItem from "./FilmsItem";

import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

const Search = () => {
  const [films, setFilms] = useState();
  const [inputFilms, setInputFilms] = useState();
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsloading] = useState(false);

  // Function
  const handleGetMoreFilm = () => {
    if (inputFilms.length > 0) {
      setIsloading(true);
      getFilmsFromApiWithSearchedText(inputFilms, page + 1).then((res) => {
        setPage(res.data.page);
        setTotalPage(res.data.total_pages);
        setFilms([...films, ...res.data.results]);
        setIsloading(false);
      });
    }
  };
  const handleSearchFilm = () => {
    setTotalPage(0);
    setPage(0);
    setFilms([]);
  };

  useEffect(() => {
    if (films && films.length === 0) {
      handleGetMoreFilm();
    }
  }, [films]);

  return (
    <View style={styles.main_container}>
      <TextInput
        style={styles.textinput}
        placeholder="Titre du film"
        onChangeText={(text) => setInputFilms(text)}
        onSubmitEditing={handleSearchFilm}
      />
      <Button title="Rechercher" onPress={handleSearchFilm} />

      {isLoading && (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )}
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FilmItem film={item} />}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (page < totalPage) {
            // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
            handleGetMoreFilm();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Search;
