/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLikesInput = {
  id?: string | null,
  liked: string,
};

export type ModelLikesConditionInput = {
  liked?: ModelStringInput | null,
  and?: Array< ModelLikesConditionInput | null > | null,
  or?: Array< ModelLikesConditionInput | null > | null,
  not?: ModelLikesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Likes = {
  __typename: "Likes",
  id: string,
  liked: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLikesInput = {
  id: string,
  liked?: string | null,
};

export type DeleteLikesInput = {
  id: string,
};

export type CreateViewsInput = {
  id?: string | null,
  viewed: string,
};

export type ModelViewsConditionInput = {
  viewed?: ModelStringInput | null,
  and?: Array< ModelViewsConditionInput | null > | null,
  or?: Array< ModelViewsConditionInput | null > | null,
  not?: ModelViewsConditionInput | null,
};

export type Views = {
  __typename: "Views",
  id: string,
  viewed: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateViewsInput = {
  id: string,
  viewed?: string | null,
};

export type DeleteViewsInput = {
  id: string,
};

export type ModelLikesFilterInput = {
  id?: ModelIDInput | null,
  liked?: ModelStringInput | null,
  and?: Array< ModelLikesFilterInput | null > | null,
  or?: Array< ModelLikesFilterInput | null > | null,
  not?: ModelLikesFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLikesConnection = {
  __typename: "ModelLikesConnection",
  items:  Array<Likes | null >,
  nextToken?: string | null,
};

export type ModelViewsFilterInput = {
  id?: ModelIDInput | null,
  viewed?: ModelStringInput | null,
  and?: Array< ModelViewsFilterInput | null > | null,
  or?: Array< ModelViewsFilterInput | null > | null,
  not?: ModelViewsFilterInput | null,
};

export type ModelViewsConnection = {
  __typename: "ModelViewsConnection",
  items:  Array<Views | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionLikesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  liked?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLikesFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionViewsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  viewed?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionViewsFilterInput | null > | null,
  or?: Array< ModelSubscriptionViewsFilterInput | null > | null,
};

export type CreateLikesMutationVariables = {
  input: CreateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type CreateLikesMutation = {
  createLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikesMutationVariables = {
  input: UpdateLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type UpdateLikesMutation = {
  updateLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikesMutationVariables = {
  input: DeleteLikesInput,
  condition?: ModelLikesConditionInput | null,
};

export type DeleteLikesMutation = {
  deleteLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateViewsMutationVariables = {
  input: CreateViewsInput,
  condition?: ModelViewsConditionInput | null,
};

export type CreateViewsMutation = {
  createViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateViewsMutationVariables = {
  input: UpdateViewsInput,
  condition?: ModelViewsConditionInput | null,
};

export type UpdateViewsMutation = {
  updateViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteViewsMutationVariables = {
  input: DeleteViewsInput,
  condition?: ModelViewsConditionInput | null,
};

export type DeleteViewsMutation = {
  deleteViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLikesQueryVariables = {
  id: string,
};

export type GetLikesQuery = {
  getLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikesConnection",
    items:  Array< {
      __typename: "Likes",
      id: string,
      liked: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetViewsQueryVariables = {
  id: string,
};

export type GetViewsQuery = {
  getViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListViewsQueryVariables = {
  filter?: ModelViewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListViewsQuery = {
  listViews?:  {
    __typename: "ModelViewsConnection",
    items:  Array< {
      __typename: "Views",
      id: string,
      viewed: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NewOnUpdateLikesSubscription = {
  newOnUpdateLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type NewOnUpdateViewsSubscription = {
  newOnUpdateViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnCreateLikesSubscription = {
  onCreateLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnUpdateLikesSubscription = {
  onUpdateLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikesSubscriptionVariables = {
  filter?: ModelSubscriptionLikesFilterInput | null,
};

export type OnDeleteLikesSubscription = {
  onDeleteLikes?:  {
    __typename: "Likes",
    id: string,
    liked: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateViewsSubscriptionVariables = {
  filter?: ModelSubscriptionViewsFilterInput | null,
};

export type OnCreateViewsSubscription = {
  onCreateViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateViewsSubscriptionVariables = {
  filter?: ModelSubscriptionViewsFilterInput | null,
};

export type OnUpdateViewsSubscription = {
  onUpdateViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteViewsSubscriptionVariables = {
  filter?: ModelSubscriptionViewsFilterInput | null,
};

export type OnDeleteViewsSubscription = {
  onDeleteViews?:  {
    __typename: "Views",
    id: string,
    viewed: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
