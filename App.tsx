import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './src/screens/home';

export default function App() {
  return (
    <>
      <HomeScreen />
      <StatusBar 
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
