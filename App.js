import { SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Test from './components/Test';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Test />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF3B4',
    padding: 8,
  },
});
