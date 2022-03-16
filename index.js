
/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import {AppRegistry,Alert} from 'react-native';
 import React from 'react'
 import App from './App';
 import {name as appName} from './app.json';
 import {Provider} from 'react-redux'
 
 
 
 
 
 import configureStore from './configureStore'
 
 
 const PraestanApp = () => (
     <Provider store={configureStore}>
       <App />
     </Provider>
   )
 
 AppRegistry.registerComponent(appName, () => PraestanApp);
