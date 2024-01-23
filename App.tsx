import React, {useState} from 'react';
import {Button, Modal, SafeAreaView, Text} from 'react-native';

import {CardField, StripeProvider} from '@stripe/stripe-react-native';

const publishableKey = '';
const merchantId = '';

function App(): JSX.Element {
  const [showCardField, setShowCardField] = useState(false);

  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView>
      <StripeProvider
        publishableKey={publishableKey}
        merchantIdentifier={merchantId}>
        <>
          <Text>Click Button to Show Card Field</Text>
          <Button title="Show" onPress={() => setShowCardField(true)} />

          {showCardField && <CardField style={{height: 50}} />}

          <Text>Click Button to Open Card Field in Modal</Text>
          <Button title="Show Modal" onPress={() => setVisible(true)} />

          <Modal visible={visible} animationType={'none'}>
            {showCardField && <CardField style={{height: 50}} />}
          </Modal>
        </>
      </StripeProvider>
    </SafeAreaView>
  );
}

export default App;
