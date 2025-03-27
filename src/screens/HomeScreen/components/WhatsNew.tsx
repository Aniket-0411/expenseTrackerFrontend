/* eslint-disable react-native/no-color-literals */
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
} from 'react-native';
import { Box, Text } from '~/theme';

interface ICardItem {
  imageUrl: string;
  text: string;
}

const data: ICardItem[] = [
  {
    imageUrl: 'https://picsum.photos/300/200',
    text: 'Invest in Bloom Living, Abu Dhabi',
  },
  {
    imageUrl: 'https://picsum.photos/500/400',
    text: 'Second Image',
  },
  {
    imageUrl: 'https://picsum.photos/400/300',
    text: 'Third Image',
  },
];

const styles = StyleSheet.create({
  imageBackground: {
    height: 180,
    justifyContent: 'flex-end',
    width: 300, // Align text to the bottom
    // eslint-disable-next-line react-native/sort-styles
    marginRight: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    backgroundColor: 'black',
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    width: 8,
  },
});

const { width: screenWidth } = Dimensions.get('window');

export function WhatsNew() {
  const flatListRef = useRef<FlatList>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(index);
  };

  const renderItem = ({ item }: { item: ICardItem }) => (
    <Box>
      <ImageBackground
        // eslint-disable-next-line react-native/no-inline-styles
        imageStyle={{ borderRadius: 16 }}
        source={{ uri: item.imageUrl }}
        style={styles.imageBackground}
      >
        <Box borderRadius="m" marginEnd="l" padding="s" shadowColor="danger">
          <Text color="mainBackground" fontFamily="secondary" fontSize={22}>
            {item.text}
          </Text>
        </Box>
      </ImageBackground>
    </Box>
  );

  return (
    <Box gap="m" justifyContent="center" px="m" py="l">
      <Box flexDirection="column" gap="s">
        <Text color="actionIcon" fontFamily="fontSecondaryMedium" fontSize={20} lineHeight={30}>
          What&apos;s New
        </Text>
        <Box>
          <FlatList
            ref={flatListRef}
            data={data}
            horizontal
            keyExtractor={(item) => item?.text}
            onScroll={handleScroll}
            pagingEnabled
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
          />
          <Box style={styles.pagination}>
            {data?.map((value, index) => (
              <Box
                key={value.text}
                // eslint-disable-next-line react-native/no-inline-styles
                style={[styles.paginationDot, { opacity: index === activeIndex ? 1 : 0.3 }]}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
