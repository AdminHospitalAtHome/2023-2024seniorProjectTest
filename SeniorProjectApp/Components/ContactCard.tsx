import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Circle} from 'react-native-svg';

export default function ContactCard({name}: {name: string}): JSX.Element {
  const screenWidth: number = Dimensions.get('window').width;
  const screenHeight: number = Dimensions.get('window').width;
  return (
    <View style={{flexDirection: 'row'}}>
      {/*picture holder*/}
      <View style={{flex: 2}}>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}
        />
      </View>
      {/*info holder*/}
      <View style={{flex: 7}}>
        <Text style={{fontSize: 20}}>{name}</Text>
        <Text>replace this with most recent chat history</Text>
      </View>
    </View>
  );
}
