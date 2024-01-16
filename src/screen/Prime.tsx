import {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Prime = () => {
  const [number, setNumber] = useState<number>(0);
  const [isPrime, setIsPrime] = useState(false);

  useEffect(() => {
    setIsPrime(verifyIsPrime(number));
  }, [number]);

  function verifyIsPrime(numero: number): boolean {
    // Caso especial: 0 e 1 não são primos
    if (numero <= 1) {
      return false;
    }

    // Verificar divisibilidade por números até a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        // Se for divisível por algum número, não é primo
        return false;
      }
    }

    // Se não foi divisível por nenhum número, é primo
    return true;
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
        {isPrime ? 'Prime' : 'Not a Prime'}
      </Text>
    </SafeAreaView>
  );
};

export default Prime;
