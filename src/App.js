import './App.css';
import logo from './img/AI_logo.png';
import { Amplify } from 'aws-amplify';

import {Authenticator, View, Image, useTheme, Heading} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image width="50%"
          height="50%"
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

export default function App(){
  return (
    <Authenticator hideSignUp={true} components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}