import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Ionicons from '@react-native-vector-icons/ionicons';
import {StatusBar} from 'react-native';
import MainStack from './src/navigation/MainStack';
import {store, persistor} from './src/store';

// Ensure vector icon font is loaded once on startup (helps iOS render glyphs)
(Ionicons as unknown as {loadFont?: () => Promise<void> | void}).loadFont?.();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    </Provider>
  );
}
