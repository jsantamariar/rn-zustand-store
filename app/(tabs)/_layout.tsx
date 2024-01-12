import useCartStore from '@/store/cartStore';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const CartButton = () => {
  const { items } = useCartStore();

  return (
    <Link href="/modal" asChild>
      <Pressable style={styles.cartContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{items()}</Text>
        </View>
        <Ionicons name="cart" size={28} color="#000" />
      </Pressable>
    </Link>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerTintColor: '#000',
        headerStyle: {
          backgroundColor: '#fff'
        },
        tabBarStyle: {
          backgroundColor: '#fff'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
          headerRight: () => (
            <CartButton />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-cart" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    marginRight: 15
  },
  countContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: -5,
    right: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  countText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkorange'
  },
})
