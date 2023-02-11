import './App.css';

import { Amplify } from 'aws-amplify';

import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


const styles = {
  container: {padding: 100 },
}

export default function App(){
  return (
    <div style={styles.container}>
    <Authenticator hideSignUp={true}>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
    </Authenticator>
    </div>
  );
}
