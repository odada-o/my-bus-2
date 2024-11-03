import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export const BookmarkButton = () => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('BookmarkButton Pressed');
      }}
    >
      <Ionicons
        name="star"
        size={4}
      />
    </TouchableOpacity>
  );
};
