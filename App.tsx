// import { StatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/home';

export default function App() {
  return (
    <>
      <StatusBar 
        style='light'
        backgroundColor='transparent'
        translucent
      />
      <Home/>
    </>
  );
}

