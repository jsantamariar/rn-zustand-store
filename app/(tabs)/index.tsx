import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from '@/assets/data.json';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Product } from '@/interfaces';
import useCartStore from '@/store/cartStore';

export default function TabOneScreen() {
  const { reduceProduct, addProduct } = useCartStore();

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.wrapper}>
          <View style={styles.cardItemContainer}>
            <Image style={styles.cardItemImage} source={{ uri: item.image }} />
            <View style={styles.itemContainer}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => reduceProduct(item)}>
                <Ionicons name="remove" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => addProduct(item)}>
                <Ionicons name="add" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </>

    )
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>


  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  cardItemContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardItemImage: {
    width: 50,
    height: 50,
    objectFit: 'contain'
  },
  itemContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  product: {
    color: '#000'
  }
});
