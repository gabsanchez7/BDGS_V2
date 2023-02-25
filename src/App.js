import './App.css';
import logo from './img/AI_logo.png';
import { Amplify } from 'aws-amplify';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';

import {Authenticator, View, Image, useTheme, Heading, Button, Flex, ThemeProvider} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { SignIn } from './pages/signin';
import { Ring } from './pages/ring';

//import awsExports from './aws-exports';
//Amplify.configure(awsExports);

const components = {
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
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to Home App
        </Heading>
      );
    },
  },
};

const myTheme = {
  name: 'my-theme',
  tokens: {
    colors: {
      background: {
        primary: { value: '{colors.neutral.90.value}'},
        secondary: { value: '{colors.neutral.100.value}'},
      },
      font: {
        // references colors.neutral.100
        // because the default theme defines that color already
        // we don't need to re-define it here
        primary: { value: '{colors.neutral.100.value}' },
      },
    },
  },
};

export default function App(){
  return (
    <ThemeProvider theme={myTheme}>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<SignIn />} />
    <Route path="/ring" element={<Ring />} />
    </Routes>
    </ThemeProvider>
  );
}