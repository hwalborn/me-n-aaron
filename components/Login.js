import React from 'react'
import { View } from 'react-native'
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

export default Login = () => {
  return(
    <View>
      <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
              alert('hi')
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  alert(data.accessToken.toString())
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
      </View>
  )
}
