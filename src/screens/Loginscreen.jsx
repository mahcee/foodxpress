import {useContext, useState} from 'react';
import {collection, query, where, getDocs,and} from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {app, db} from '../../firebase';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {StateContext} from "../context/state"
function Loginscreen({navigation}) {
  const {currentUserId, setCurrentUserId}=useContext(StateContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  // const auth = initializeAuth(app, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  // });
  function handleClick() {
    const auth = getAuth(app);
    const errors = {};
    if (!email) {
      errors.email = 'please enter your email address';
    }
    if (!password) {
      errors.password = 'please enter your password';
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          const user = userCredential.user;
          if (user) {
           setCurrentUserId(user.uid)
           navigation.navigate("Home")
          }
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    setError(errors);
  }
  return (
    <View className="container mx-auto w-[90%]">
      <Image source={require('../../images/logo.png')} className="w-[100%]" />
      <View className="flex flex-col mb-2 ">
        <TextInput
          placeholder="Email Address"
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
          onChangeText={email => setEmail(email)}
          name="email"
        />
        <Text className="text-red-500 font-bold">
          {error.email && error.email}
        </Text>
        <TextInput
          placeholder="Password"
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
          onChangeText={password => setPassword(password)}
          name="password"
        />
        <Text className="text-red-500 font-bold">
          {error.password && error.password}
        </Text>
        <TouchableOpacity onPress={handleClick}>
          <View className="bg-[#FF7356] p-[30px]  rounded-full cursor-pointer ">
            <Text className="font-bold text-white text-center text-[30px]">
              Creact Account
            </Text>
          </View>
        </TouchableOpacity>
        <Text className="text-center  text-black">OR</Text>
        <Text className="border border-gray-300 p-[30px] text-center font-bold text-[25px] rounded-full text-black">
          Sign Up With Google
        </Text>
        <Text>Already Have an Account?</Text>
      </View>
    </View>
  );
}
export default Loginscreen;
