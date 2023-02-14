import './App.css';

import { Amplify } from 'aws-amplify';


import {Authenticator, View, Image, useTheme} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Adavanced Intralogistics logo"
          src="/img/AI_logo.png"
        />
      </View>
    );
  }
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
