/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        liked
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getViews = /* GraphQL */ `
  query GetViews($id: ID!) {
    getViews(id: $id) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const listViews = /* GraphQL */ `
  query ListViews(
    $filter: ModelViewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        viewed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
