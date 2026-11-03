import { useRef, useState } from "react";
import { Animated, View } from "react-native";

import {
    DrawerContentScrollView,
    DrawerItemList,
    type DrawerContentComponentProps,
} from "@react-navigation/drawer";

import { styles } from "@/assets/css/drawerStyle.styles";

interface DrawerNavigationItemsProps {
  props: DrawerContentComponentProps;
}

export default function DrawerNavigationItems({
  props,
}: DrawerNavigationItemsProps) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [viewportHeight, setViewportHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const hasOverflow = contentHeight > viewportHeight + 2;

  const thumbHeight =
    viewportHeight > 0 && contentHeight > 0
      ? Math.min(
          viewportHeight,
          Math.max(28, (viewportHeight * viewportHeight) / contentHeight),
        )
      : 28;

  const maxScroll = Math.max(contentHeight - viewportHeight, 1);

  const maxThumbTravel = Math.max(viewportHeight - thumbHeight, 0);

  const thumbTranslateY = scrollY.interpolate({
    inputRange: [0, maxScroll],
    outputRange: [0, maxThumbTravel],
    extrapolate: "clamp",
  });

  return (
    <View
      style={styles.drawerNavigationContainer}
      onLayout={(event) => {
        setViewportHeight(event.nativeEvent.layout.height);
      }}
    >
      <DrawerContentScrollView
        {...props}
        style={styles.drawerScrollView}
        contentContainerStyle={styles.drawerContent}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onContentSizeChange={(_, height) => {
          setContentHeight(height);
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        )}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {hasOverflow && (
        <View pointerEvents="none" style={styles.drawerScrollTrack}>
          <Animated.View
            style={[
              styles.drawerScrollThumb,
              {
                height: thumbHeight,
                transform: [
                  {
                    translateY: thumbTranslateY,
                  },
                ],
              },
            ]}
          />
        </View>
      )}
    </View>
  );
}
