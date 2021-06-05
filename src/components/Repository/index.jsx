import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList } from 'react-native';
import { useParams } from 'react-router-native';

import { GET_REPOSITORY } from '../../graphql/queries';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from '../ReviewItem';
import ItemSeparator from '../ItemSeparator';

const Repository = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  console.log('data', data);

  const repository = data?.repository;

  const reviews = data?.repository.reviews?.edges;

  if (loading) return null;

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ node: { id } }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default Repository;