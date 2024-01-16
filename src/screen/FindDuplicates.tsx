import {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const FindDuplicates = () => {
  const [array, setArray] = useState<number[]>([]);
  const [result, setResult] = useState<number[]>([]);

  useEffect(() => {
    setResult(findDuplicates(array));
  }, [array]);

  function findDuplicates(nums: number[]): number[] {
    const countMap: Map<number, number> = new Map();
    const duplicatas: number[] = [];

    // Conta a ocorrência de cada número no array
    for (const num of nums) {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num)! + 1);
      } else {
        countMap.set(num, 1);
      }
    }

    // Adiciona os números duplicados ao array de duplicatas
    for (const [num, count] of countMap) {
      if (count > 1) {
        duplicatas.push(num);
      }
    }

    return duplicatas;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text =>
          setArray(
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
        {result.length > 0 ? result.join(', ') : 'No duplicates found'}
      </Text>
    </SafeAreaView>
  );
};

export default FindDuplicates;
