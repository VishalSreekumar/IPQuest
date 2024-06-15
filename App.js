import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider,  SignedIn, SignedOut} from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { UserPointsContext } from './App/Context/UserPointsContext';
import { useContext } from 'react';




const tokenCache = {
  async getToken(key){
    try{
      return SecureStore.getItemAsync(key);
    } catch (err){
      return null;
    }
  },
  async saveToken (key, value) {
    try{
      return SecureStore.setItemAsync(key,value);
    }catch (err){
      return;
    }
  },
}
export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'welcome': require('./assets/fonts/welcome.ttf')
  });  
  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={"pk_test_Ym9zcy1icmVhbS04OS5jbGVyay5hY2NvdW50cy5kZXYk"}>
      {/* Your Clerk API key for authentication purposes .*/}
      {/* <UserPointsContext.Provider value={{userPoints,setUserPoints}=useContext(UserPointsContext)}> */}
    <View style={styles.container}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
    </View>
    {/* </UserPointsContext.Provider> */}
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 30
  },
});
