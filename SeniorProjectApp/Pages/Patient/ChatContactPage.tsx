import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

import ContactCard from '../../Components/ContactCard';
const screenWidth: number = Dimensions.get('window').width;
const screenHeight: number = Dimensions.get('window').width;
export default function ChatContactPage({
  navigation,
}: {
  navigation: any;
}): JSX.Element {
  return (
    <View>
      <ScrollView contentContainerStyle={{alignItems: 'center', padding: 10}}>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('contact1')}>
          <ContactCard name={'First1 Last1(Provider)'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('test')}>
          <ContactCard name={'First2 Last2'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <ContactCard name={'First3 Last3'} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
});
