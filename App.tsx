import 'react-native-gesture-handler';
import React from 'react';

import { SafeAreaView } from 'react-native'

import NewNavigation from './src/Asigments/new/NewNavigation';
import Lab4_2 from './src/components/Lab4_2';
import Lab4_1 from './src/components/Lab4_1';
import ListtNew from './src/Asigments/new/ListtNew';
import Profile from './src/Asigments/new/Profile';
import Lab5 from './src/components/Lab5';
import Lab6 from './src/components/Lab6';
import Lab6_1 from './src/components/Lab6_1';
import Lab6_2 from './src/components/Lab6_2';
import Add from './src/Asigments/new/Add';
import Explore from './src/Asigments/new/Explore';
import Edit from './src/Asigments/new/Edit';
import Home1 from './src/components/Lab78/Home1';
import Baithem from './src/components/Baithem';
import Themne from './src/components/Themne';
import Them from './src/baove/Them';
import { UserProvider } from './src/Asigments/user/UserContext';
import { NewProvider } from './src/Asigments/new/NewContext';
import AppNavigation from './src/Asigments/navigation/AppNavigation';


function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserProvider>
        <NewProvider>
          <AppNavigation />
        </NewProvider>
      </UserProvider> */}
      <Them></Them> 
    </SafeAreaView>

  )
}

export default App;




