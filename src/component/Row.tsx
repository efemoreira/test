import {ListRenderItemInfo, Text, View} from 'react-native';

const Row = ({line}: {line: ListRenderItemInfo<Event>}) => {
  const event: Event = line.item;
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{event.city}</Text>
        <Text>${event.price}</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'black',
          width: '100%',
          marginVertical: 5,
        }}
      />
    </View>
  );
};

export default Row;
