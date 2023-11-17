import { Loaders } from "redux/types/loaders";
import { AddToBucketProps, setBucketProps } from "redux/types/types";

export const ADD_TO_BUCKET = "ADD_TO_BUCKET";
export const REMOVE_FROM_BUCKET = "REMOVE_FROM_BUCKET";
export const SET_BUCKET = "SET_BUCKET";
export const GET_ALL_BUCKET_ITEMS_SERVER = "GET_ALL_BUCKET_ITEMS_SERVER";

export const addToBucket = ({ bucketItem }: AddToBucketProps) => ({
  type: ADD_TO_BUCKET,
  payload: {
    bucketItem,
  },
});

export const setBucket = ({ bucket }: setBucketProps) => ({
  type: SET_BUCKET,
  payload: {
    bucket,
  },
});

export const getAllBucketItemsServer = () => ({
  type: GET_ALL_BUCKET_ITEMS_SERVER,
  payload: {
    request: {
      method: "GET",
      url: "items",
    },
    loader: Loaders.items,
  },
});
