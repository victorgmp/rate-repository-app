import React from 'react';
import { FlatList } from 'react-native';

import RepositoryItem from '../RepositoryItem';
import ItemSeparator from '../ItemSeparator';

const renderItem = ({ item }) => (
  <RepositoryItem repository={item} />
);

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
};

export default RepositoryListContainer;
