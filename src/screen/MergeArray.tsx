import {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MergeArray = () => {
  const [firstArray, setFirstArray] = useState<number[]>([]);
  const [secondArray, setSecondArray] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([]);

  useEffect(() => {
    setResult(mergeSortedArrays(firstArray, secondArray));
  }, [firstArray, secondArray]);

  function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray: number[] = [];

    let i = 0; // Index for arr1
    let j = 0; // Index for arr2

    // Traverse both arrays
    while (i < arr1.length && j < arr2.length) {
      // Compare current elements of arr1 and arr2
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    // Add remaining elements from arr1 to the result
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }

    // Add remaining elements from arr2 to the result
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }

    return mergedArray.sort((a, b) => a - b); // Sort the merged array
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text =>
          setFirstArray(
            text.trim() === '0'
              ? [0]
              : text
                  .split(/[,\s]+/)
                  .filter(Boolean)
                  .map(Number),
          )
        }
        placeholder="Put the number separated by comma or space"
      />
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text =>
          setSecondArray(
            text.trim() === '0'
              ? [0]
              : text
                  .split(/[,\s]+/)
                  .filter(Boolean)
                  .map(Number),
          )
        }
        placeholder="Put the number separated by comma or space"
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          textAlign: 'center',
        }}>
        {result.join(', ')}
      </Text>
    </SafeAreaView>
  );
};

export default MergeArray;
