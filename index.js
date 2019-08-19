/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './login';
import BookList from './components/BookList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BookList);
