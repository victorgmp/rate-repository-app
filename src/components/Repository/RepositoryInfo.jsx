import React from "react";
import RepositoryItem from "../RepositoryItem";

const RepositoryDetails = ({ repository }) => {
  return (
    <RepositoryItem repository={repository } detailView />
  );
};

export default RepositoryDetails;
