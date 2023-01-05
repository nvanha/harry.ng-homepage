/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
      id
      liked
      createdAt
      updatedAt
    }
  }
`;
export const createViews = /* GraphQL */ `
  mutation CreateViews(
    $input: CreateViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    createViews(input: $input, condition: $condition) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const updateViews = /* GraphQL */ `
  mutation UpdateViews(
    $input: UpdateViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    updateViews(input: $input, condition: $condition) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
export const deleteViews = /* GraphQL */ `
  mutation DeleteViews(
    $input: DeleteViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    deleteViews(input: $input, condition: $condition) {
      id
      viewed
      createdAt
      updatedAt
    }
  }
`;
