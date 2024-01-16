import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AppStackParamList = {
  Main: undefined;
  NestedData: undefined;
  Palindrome: undefined;
  Factorial: undefined;
  Prime: undefined;
  MergeArray: undefined;
  FindDuplicates: undefined;
  Sudoku: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
