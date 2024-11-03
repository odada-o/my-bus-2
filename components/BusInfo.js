// components/BusInfo.tsx
import React from 'react';
import { View, Text } from 'react-native'; // react-native-web 대신 react-native 사용
import { BookmarkButton } from './BookmarkButton';

export default function BusInfo() {
  // 이름 추가
  return (
    <View className="p-4">
      <View className="flex-row items-center justify-between">
        <BookmarkButton />
        <View className="ml-3">
          <Text className="text-lg font-bold">401</Text>
          <Text className="text-gray-600">서울 방향</Text>
        </View>
      </View>
    </View>
  );
}
