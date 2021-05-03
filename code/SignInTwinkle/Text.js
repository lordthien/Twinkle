import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

import MiddleInput from "./Component/MiddleInput";
import Button from "../../code/SignInTwinkle/Component/Button";

// import useLogin from "./useLogin";
const url = "https://training.softech.cloud/api/users/login";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //  /    ngothanhtung.it@outlook.com
  const SignIn = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(url, data)
      .then((response) => {
        console.log("DONE-useLogin");
        console.log(JSON.stringify(response.data));
        console.log("--------------------------------");
        if (response.data.ok === false) {
          Alert.alert(
            "Thông báo",
            "Email của bạn chưa đăng ký. Vui lòng kiểm tra lại!"
          );
        } else {
          Alert.alert("Thông báo", "Đăng nhập thành công");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Begin: Middle */}
      <View style={styles.middleContainer}>
        {/* EMAIL */}
        <MiddleInput
          textLable="Email"
          input="Enter Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        {/* PASSWORD */}
        <MiddleInput
          textLable="Password"
          input="Enter your password"
          hidePass={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <Text>{email.email}</Text>
        <Text>{password.password}</Text>

        {/* LOGIN */}
        <View>
          <Button
            color="#FF6C44"
            titleColor="white"
            title="Sign In"
            onPress={SignIn}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middleContainer: {
    flex: 4,
  },
});
export default Login;
