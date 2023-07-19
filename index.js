/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import IntroScreen from './src/screens/IntroScreen/IntroScreen';

AppRegistry.registerComponent(appName, () => IntroScreen);
