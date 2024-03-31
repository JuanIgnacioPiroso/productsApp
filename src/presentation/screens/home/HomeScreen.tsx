import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {useAuthStore} from '../../store/auth/useAuthStorage';

export const HomeScreen = () => {
  const {logout} = useAuthStore();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>

      {/* <Icon name="facebook" /> */}

      <Button accessoryLeft={<Icon name="log-out-outline" />} onPress={logout}>
        Cerrar sesion
      </Button>
    </Layout>
  );
};
