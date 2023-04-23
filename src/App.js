import './App.css';
import logo from './img/AI_logo.png';
import { Amplify } from 'aws-amplify';
import React from 'react';

import {Authenticator, View, Image, useTheme, Button, Flex, ThemeProvider, Grid, Card, Alert, Text, Expander, ExpanderItem } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);




async function sendPost() {
  var unlock = document.getElementById("unlock");
  unlock.classList.toggle("button--loading");
  const url = "https://entfv7ccep2gyljgp6jqchzibm0mfucu.lambda-url.us-east-2.on.aws/";

  const params = {
      method: "POST",
      mode: "no-cors",
      headers: {"Content-Type":"application/json"}
  };

  const response = await fetch(url,params);
  const code = response;
  console.log(code);
  unlock.classList.remove("button--loading");
  window.alert("Door Open");
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function loading(){
  var unlock = document.getElementById("unlock");
  unlock.classList.toggle("button--loading");
  await sleep(3000);
  unlock.classList.remove("button--loading");
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
              <Flex justifyContent={'left'} size>
                  <Image width="7%"
                  height="7%"
                  alt="Adavanced Intralogistics logo"
                  src={logo}
                />
                <Text>Home App</Text>
              </Flex>
              <Grid
              columnGap="0.5rem"
              rowGap="0.5rem"
              templateColumns="1fr 1fr 1fr"
              templateRows="1fr 3fr 1fr"
            >
              <Card
                columnStart="1"
                columnEnd="-1"
              >
                
              <Flex justifyContent="space-between">
                <Text>
                  Hello {user.attributes.email}
                </Text>
                <Button size="small" onClick={signOut}>Sign out</Button>
              </Flex>
              </Card>
              <Card
                columnStart="1"
                columnEnd="2"
              >
              <Expander type="single">
              <ExpanderItem title="How to use brivo button" value="item-1">
                Click the red button labeled "unlock door" once the door is unlocked
                a message will be prompted. (NOTE: Only click the button once)
              </ExpanderItem>
              <ExpanderItem title="Credentials for HomeAssistant" value="item-2">
                Username: HOMEAPP, Password: Forklift@23                
              </ExpanderItem>
            </Expander>
              <Flex paddingTop="50px" justifyContent="center">
                  <button type="button" class="button" id="unlock" onClick={sendPost}>
                    <span class="button__text">Unlock Door</span>
                  </button>
              </Flex>
              </Card>
              <Card
                columnStart="2"
                columnEnd="-1"
                rowStart="2"
                rowEnd="50"
              >
              <flex>
              <iframe src="https://homeassistantaihomeapp.uk/" name="HOMEAPP" allowTransparency="true" width="100%" height="100%" >
              </iframe>
              </flex>
              </Card>
            </Grid>
        </main>
        )}
    </Authenticator>
    </ThemeProvider>
  );
}