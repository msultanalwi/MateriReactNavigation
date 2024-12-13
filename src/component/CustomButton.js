import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, loading }) => {
  return (
    <TouchableOpacity
      style={{ padding: 15, backgroundColor: 'darkblue', marginVertical: 15, borderRadius: 5 }}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color='white' />
      ) : (
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;