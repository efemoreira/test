import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {AppStackParamList} from './types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator initialRouteName="Main">
      <AppStack.Screen
        name="Main"
        getComponent={() => require('../screen/Main').default}
      />
      <AppStack.Screen
        name="NestedData"
        getComponent={() => require('../screen/NestedData').default}
      />
      <AppStack.Screen
        name="Palindrome"
        getComponent={() => require('../screen/Palindrome').default}
      />
      <AppStack.Screen
        name="Factorial"
        getComponent={() => require('../screen/Factorial').default}
      />
      <AppStack.Screen
        name="Prime"
        getComponent={() => require('../screen/Prime').default}
      />
      <AppStack.Screen
        name="MergeArray"
        getComponent={() => require('../screen/MergeArray').default}
      />
      <AppStack.Screen
        name="FindDuplicates"
        getComponent={() => require('../screen/FindDuplicates').default}
      />
      <AppStack.Screen
        name="Sudoku"
        getComponent={() => require('../screen/Sudoku').default}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
