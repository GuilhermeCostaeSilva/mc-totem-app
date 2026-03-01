import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const App: React.FC = () => {
  return <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  </SafeAreaProvider>;
};
