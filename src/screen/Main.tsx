import React from 'react';
import {View, Button} from 'react-native';
import {AppStackScreenProps} from '../routes/types';

const MainScreen = ({navigation}: AppStackScreenProps<'Main'>) => {
  return (
    <View>
      <Button
        title="Nested Data"
        onPress={() => navigation.navigate('NestedData')}
      />
      <Button
        title="Palindrome"
        onPress={() => navigation.navigate('Palindrome')}
      />
      <Button
        title="Factorial"
        onPress={() => navigation.navigate('Factorial')}
      />
      <Button title="Prime" onPress={() => navigation.navigate('Prime')} />
      <Button
        title="Merge Array"
        onPress={() => navigation.navigate('MergeArray')}
      />
      <Button
        title="Find Duplicates"
        onPress={() => navigation.navigate('FindDuplicates')}
      />
      <Button title="Sudoku" onPress={() => navigation.navigate('Sudoku')} />
    </View>
  );
};

export default MainScreen;
