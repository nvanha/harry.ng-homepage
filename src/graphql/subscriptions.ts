/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newOnUpdateLikes = /* GraphQL */ `
  subscription NewOnUpdateLikes {
    newOnUpdateLikes {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const newOnUpdateViews = /* GraphQL */ `
  subscription NewOnUpdateViews {
    newOnUpdateViews {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onCreateLikes(filter: $filter) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes($filter: ModelSubscriptionLikesFilterInput) {
    onUpdateLikes(filter: $filter) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes($filter: ModelSubscriptionLikesFilterInput) {
    onDeleteLikes(filter: $filter) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const onCreateViews = /* GraphQL */ `
  subscription OnCreateViews($filter: ModelSubscriptionViewsFilterInput) {
    onCreateViews(filter: $filter) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateViews = /* GraphQL */ `
  subscription OnUpdateViews($filter: ModelSubscriptionViewsFilterInput) {
    onUpdateViews(filter: $filter) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteViews = /* GraphQL */ `
  subscription OnDeleteViews($filter: ModelSubscriptionViewsFilterInput) {
    onDeleteViews(filter: $filter) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
