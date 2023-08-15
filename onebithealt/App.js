import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from '.scr/componets/Title/'
import Main from './scr/componets/Main/'

export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
