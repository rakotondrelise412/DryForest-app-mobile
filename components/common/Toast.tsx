
import { styles } from "@/assets/css/toast.style";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Text,
  View,
} from "react-native";

type ToastType = "success" | "error";

interface ToastProps {
  visible: boolean;
  message: string;
  type: ToastType;
  onHide: () => void;
}

export default function Toast({
  visible,
  message,
  type,
  onHide,
}: ToastProps) {
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -100,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => onHide());
    }, 3000);

    return () => clearTimeout(timer);
  }, [visible, translateY, opacity, onHide]);

  if (!visible) return null;

  const isSuccess = type === "success";

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: isSuccess ? "#2E7D32" : "#C62828",
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>
          {isSuccess ? "✓" : "✕"}
        </Text>

        <Text style={styles.message}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
}


