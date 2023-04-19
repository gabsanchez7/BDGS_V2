import './App.css';
import logo from './img/AI_logo.png';
import { Amplify } from 'aws-amplify';
import React from 'react';

import {Authenticator, View, Image, useTheme, Button, Flex, ThemeProvider, Grid, Card} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);




async function sendPost() {

  const url = "https://entfv7ccep2gyljgp6jqchzibm0mfucu.lambda-url.us-east-2.on.aws/";

  const params = {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type":"application/json"}
  };

  const response = await fetch(url,params);
  const code = response;
  console.log(code);
  window.alert("Door Open");
}


const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space}>
      </View>
    );
  },
  SignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <View textAlign="center" padding={tokens.space.small}>
        <Image width="40%"
          height="40%"
          alt="Adavanced Intralogistics logo"
          src={logo}
        />
      </View>
      );
    },
  },
};

const myTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: 'white'},
      },
      font: {
        primary: { value: 'black' },
      },
    },
  },
};

document.body.style.background = "dimgray";

export default function App(){
  return (
    
    <ThemeProvider theme={myTheme}>
    <Authenticator hideSignUp={true} components={components}>
        {({ signOut, user }) => (
          <main>
            <Flex justifyContent={'right'} size>
              <Button onClick={signOut}>Sign out</Button>
            </Flex>
            <h2>Hello {user.attributes.email}</h2>
            <Grid
  columnGap="0.5rem"
  rowGap="0.5rem"
  templateColumns="1fr 1fr 1fr"
  templateRows="1fr 3fr 1fr"
>
  <Card
    columnStart="1"
    columnEnd="3"
    rowStart="1"
    rowEnd="40"
  >
    Ring
  </Card>
  <Card
    columnStart="3"
    columnEnd="-1"
    rowStart="1"
    rowEnd="20"
  >
    <a href="https://access.brivo.com/events">
          brivo
    </a>
    <button onClick={sendPost}>Authenticate</button>
  </Card>
  </Grid>
          </main>
        )}
    </Authenticator>
    </ThemeProvider>
  );
}