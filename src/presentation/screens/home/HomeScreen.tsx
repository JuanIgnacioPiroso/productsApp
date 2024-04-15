import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import {useAuthStore} from '../../store/auth/useAuthStorage';
import {getProductsByPage} from '../../../actions/products/get=products-by-page';
import {useQuery} from '@tanstack/react-query';
import {MainLayout} from '../../layouts/MainLayout';

export const HomeScreen = () => {
  const {logout} = useAuthStore();

  const {isLoading, data: products = []} = useQuery({
    queryKey: ['products', 'infinite'],
    staleTime: 1000 * 60 * 60, // 1 hour
    queryFn: () => getProductsByPage(0),
  });
  return (
    <MainLayout
      title="TesloShop - Products"
      subTitle="Aplicacion administrativa"
      >
        <Text>
          Holaa
        </Text>
      </MainLayout>
  );
};
