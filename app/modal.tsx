import { Product } from '@/interfaces';
import useCartStore from '@/store/cartStore';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, ListRenderItem, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function ModalScreen() {
  const { reduceProduct, addProduct, products, clearCart, total } = useCartStore();

  const renderItem: ListRenderItem<Product & { quantity: number }> = ({ item }) => {
    return (
      <>
        <StatusBar style="dark" />
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
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => addProduct(item)}>
              <Ionicons name="add" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </>

    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} ListFooterComponent={
          <Text style={styles.totalPrice}>Total: ${total()}</Text>
        } />
        <Button title="Clear Cart" onPress={clearCart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,

  },
  cardItemContainer: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
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
  },
  totalPrice: {
    textAlign: 'right',
    marginRight: 5,
    fontWeight: 'bold'
  }
});

