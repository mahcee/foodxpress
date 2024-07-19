import {useState} from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {setDoc, collection} from 'firebase/firestore';
import {Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import{doc}from 'firebase/firestore';

import {db,app}from "../../firebase"
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  function handleClick() {
   
    const auth = getAuth(app);
    const errors = {};
    if (!firstName) {
      errors.firstName = 'please enter your name';
    }
    if (!lastName) {
      errors.lastName = 'please enter your name';
    }
    if (!email) {
      errors.email = 'please enter your email address';
    }
    if (!password) {
      errors.password = 'please enter your password';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    } else {
      createUserWithEmailAndPassword(auth, email, password).then(
        async userCredential => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            try {
              const docRef = await setDoc(doc(db, 'user',user,vid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              });
              console.log('Document written with ID: ', docRef.id);
            } catch (e) {
              console.error('Error adding document: ', e);
            }
          }
        },
      );
    }
    setError(errors);
  }
  return (
    <View className="container mx-auto w-[90%]">
    
      <View className="flex flex-col mb-2 ">
        <TextInput
          placeholder="First Name"
          className="border border-gray-200 rounded-full bg-[#F0F0F0]  p-[20px]"
          onChangeText={firstName => setFirstName(firstName)}
       
          name="firstName"
        />
        <Text className="text-red-500 font-bold">
          {error.firstName && error.firstName}
        </Text>
        <TextInput
          placeholder="Last Name"
          className="border border-gray-200 rounded-full bg-[#F0F0F0]  p-[20px]"
          onChangeText={lastName => setLastName(lastName)}
          name="lastName"
        />
        <Text className="text-red-500 font-bold">
          {error.lastName && error.lastName}
        </Text>
        <TextInput
          placeholder="Email Address"
          className="border border-gray-200 rounded-full bg-[#F0F0F0]  p-[20px]"
          onChangeText={email => setEmail(email)}
          name="email"
        />
        <Text className="text-red-500 font-bold">
          {error.email && error.email}
        </Text>
        <TextInput
          placeholder="Password"
          className="border border-gray-200 rounded-full bg-[#F0F0F0]  p-[20px]"
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
        <Text className="text-center  text-black line-through">OR</Text>
        <Text className="border border-gray-400 p-[20px] text-center font-bold text-[25px] rounded-full text-black">
          Sign Up With Google
        </Text>
        <View className="flex justify-center items-center">
          <Text className=" text-[20px]">Already Have an Account?</Text>
          <Text className="flex-end text-[20px] text-[#FF7356]">Login</Text>
        </View>
      </View>
    </View>
  );
}
export default Signup;