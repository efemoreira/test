import {useEffect, useState} from 'react';
import {Text, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Palindrome = () => {
  const [text, setText] = useState<string>('');
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);

  useEffect(() => {
    setIsPalindrome(verifyIsPalindrome(text));
  }, [text]);

  const verifyIsPalindrome = (str: string) => {
    // Remover espaços, pontuações e tornar minúsculas
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Comparar a string original com a versão invertida
    return cleanStr === cleanStr.split('').reverse().join('');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text => setText(text)}
        placeholder="Palindrome"
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          textAlign: 'center',
        }}>
        {isPalindrome ? 'Palindrome' : 'Not a Palindrome'}
      </Text>
    </SafeAreaView>
  );
};

export default Palindrome;
