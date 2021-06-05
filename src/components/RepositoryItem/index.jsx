import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from "expo-linking";
import { Link } from "react-router-native";

import theme from '../../theme';

import Text from '../Text';
import CountItem from './CountItem';
import Button from "../Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  listHeader: {
    marginBottom: 10,
  },
  btnContainer: {
    marginTop: 10,
  },
});

const RepositoryItem = ({ repository, detailView }) => {
  const {
    id,
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = repository;

  const openGithub = () => {
    Linking.openURL(url);
  };

  return (
    <Link to={`/repository/${id}`} component={TouchableOpacity}>
      <View style={[styles.container, detailView && styles.listHeader]}>
        <View style={styles.topContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
          </View>
          <View style={styles.contentContainer}>
            <Text
              style={styles.nameText}
              fontWeight="bold"
              fontSize="subheading"
              numberOfLines={1}
              testID="fullname"
            >
              {fullName}
            </Text>
            <Text style={styles.descriptionText} color="textSecondary" testID="description">
              {description}
            </Text>
            {language ? (
              <View style={styles.languageContainer}>
                <Text style={styles.languageText} testID="language">{language}</Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <CountItem count={stargazersCount} label="Stars" testID="stargazer-count" />
          <CountItem count={forksCount} label="Forks" testID="forks-count" />
          <CountItem count={reviewCount} label="Reviews" testID="review-count" />
          <CountItem count={ratingAverage} label="Rating" testID="rating" />
        </View>
          {detailView && (
            <View style={styles.btnContainer}>
              <Button onPress={openGithub}>Open in GitHub</Button>
            </View>
          )}
      </View>
    </Link>
  );
};

export default RepositoryItem;