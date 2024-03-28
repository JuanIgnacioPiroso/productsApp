import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p1">Por favor, ingrese para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electronico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 20}} />

        {/* Button */}
        <Layout>
          <Button onPress={() => {}}>Ingresar</Button>
        </Layout>

        {/* Informacion crear cuenta */}
        <Layout style={{height: 50}} />
        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text> No tienes cuenta? </Text>
          <Text status="primary" category="s1" onPress={() => {}}>
            {' '}
            Crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
