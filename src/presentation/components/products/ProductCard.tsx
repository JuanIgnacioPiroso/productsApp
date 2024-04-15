import {View} from 'react-native';
import {Product} from '../../../domain/entities/products';
import {Text} from '@ui-kitten/components';

interface Props {
  product: Product;
}

export const ProductCard = ({product}: Props) => {
  return <Text>{product.id}</Text>;
};
