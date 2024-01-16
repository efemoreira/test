import {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, View, Text, FlatList} from 'react-native';
import Row from '../component/Row';
import mock from '../mock/index.json';

const NestedData = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState<string>('');

  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  useEffect(() => {
    const tempEvent = extractEvents(mock);
    setEvents(tempEvent);
  }, []);

  useEffect(() => {
    setFilteredEvents(searchEvents);
  }, [search]);

  const extractEvents = (node: Node): Event[] => {
    let events = node.events.map(
      event => ({...event, nodeId: node.id} as Event),
    );
    if (node.children) {
      for (let child of node.children) {
        events = [...events, ...extractEvents(child)];
      }
    }
    return events;
  };

  const searchEvents = events.filter(event => {
    const priceRegex = /^[0-9]*\.?[0-9]+$/;
    const cityRegex = /^[a-zA-Z\s]*$/;

    const matchesPrice =
      priceRegex.test(search) && event.price.toString() === search;
    const matchesCity = cityRegex.test(search) && event.city.includes(search);

    return matchesPrice || matchesCity;
  });

  return (
    <SafeAreaView>
      <TextInput
        style={{borderColor: '#000', borderWidth: 1, padding: 10, margin: 10}}
        onChangeText={text => setSearch(text)}
        placeholder="Search"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, fontWeight: '800'}}>City</Text>
        <Text style={{fontSize: 18, fontWeight: '800'}}>Price</Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: 'black',
          width: '100%',
          marginVertical: 5,
        }}
      />
      {search.length > 0 && filteredEvents.length === 0 ? (
        <View>
          <Text>No results found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredEvents.length > 0 ? filteredEvents : events}
          renderItem={item => <Row line={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default NestedData;
