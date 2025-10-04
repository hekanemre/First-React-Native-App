// app/cars.tsx
import { useLocalSearchParams } from 'expo-router'; // ✅ correct hook
import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

type Car = {
  id: string;
  name: string;
  model: string;
  price: string;
  image: string;
};

const cars: Car[] = [
  {
    id: '1',
    name: 'Ford Focus',
    model: '2001 1.6 Benzinli',
    price: '$3,500',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ford_Focus_LX_2005_%281%29.jpg',
  },
  {
    id: '2',
    name: 'Toyota Corolla',
    model: '2010 1.8 Benzinli',
    price: '$7,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Toyota_Corolla_E140_IMG_0303.jpg',
  },
  {
    id: '3',
    name: 'Honda Civic',
    model: '2012 1.6 Dizel',
    price: '$6,500',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Honda_Civic_Facelift.jpg',
  },
];

export default function CarsPage() {
  const { username } = useLocalSearchParams<{ username: string }>(); // ✅ correct usage

  const renderItem = ({ item }: { item: Car }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.model}>{item.model}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome {username || 'Guest'}</Text>
      <FlatList
        data={cars}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 16, paddingTop: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    flexDirection: 'row',
    elevation: 3,
  },
  image: { width: 120, height: 80 },
  info: { flex: 1, padding: 8, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold' },
  model: { fontSize: 14, color: '#555' },
  price: { fontSize: 14, fontWeight: 'bold', color: '#2196F3' },
});
