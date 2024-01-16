import {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Factorial = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    setResult(factorialRecursive(number));
  }, [number]);

  function factorialRecursive(n: number): number {
    // Caso base: fatorial de 0 é 1
    if (n === 0) {
      return 1;
    } else {
      // Caso recursivo: fatorial de n é n multiplicado pelo fatorial de n-1
      return n * factorialRecursive(n - 1);
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text => setNumber(+text)}
        placeholder="Put a number"
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          textAlign: 'center',
        }}>
        {result}
      </Text>
    </SafeAreaView>
  );
};

export default Factorial;
