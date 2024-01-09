import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

import {CardField, StripeProvider} from '@stripe/stripe-react-native';

const publishableKey = '';
const merchantId = '';

function App(): JSX.Element {
  const [showCardField, setShowCardField] = useState(false);
  return (
    <SafeAreaView>
      <StripeProvider
        publishableKey={publishableKey}
        merchantIdentifier={merchantId}>
        <>
          <Text>Click Button to Show Card Field</Text>
          <Button title="Show" onPress={() => setShowCardField(true)} />

          {showCardField && <CardField style={{height: 50}} />}
        </>
      </StripeProvider>
    </SafeAreaView>
  );
}

export default App;
