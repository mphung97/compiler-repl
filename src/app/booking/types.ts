import { Dispatch, SetStateAction } from "react";

type TextInputProps = { fieldName: "city" | "arrival" | "departure" };

type NumberInputProps = {
  fieldName: "star" | "room";
  value: number;
  setValue: (value: number | ((prevValue: number) => number)) => void;
};

type FieldsType = {
  city: string;
  arrival: string;
  departure: string;
};

type StoreType = [FieldsType, Dispatch<SetStateAction<FieldsType>>];

type ExternalStoreType = {
  get: () => FieldsType;
  set: (value: Partial<FieldsType>) => void;
  subscribe: (callback: () => void) => () => void;
};

export type {
  TextInputProps,
  NumberInputProps,
  FieldsType,
  StoreType,
  ExternalStoreType,
};
