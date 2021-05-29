import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import theme from "../../theme";
import Counts from './Counts';
import ItemInfo from './ItemInfo';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: theme.colors.itembackground,
  },
  listHeader: {
    marginBottom: 10,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    borderRadius: 7,
  },
  btnContainer: {
    marginTop: 10,
  },
});

export const formatCounts = (num) => {
  return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
};

const RepositoryItem = ({ item, detailView }) => (
  // const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => (
  <View style={[styles.container, detailView && styles.listHeader]}>
    <View style={styles.infoContainer}>
      <Image
        style={styles.image}
        source={{ uri: item.ownerAvatarUrl, width: 50, height: 50 }}
      />
      <ItemInfo
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
    </View>
    <Counts
      stars={formatCounts(item.stargazersCount)}
      forksCount={formatCounts(item.forksCount)}
      reviewCount={formatCounts(item.reviewCount)}
      ratingAverage={formatCounts(item.ratingAverage)}
    />
  </View>
);

export default RepositoryItem;
