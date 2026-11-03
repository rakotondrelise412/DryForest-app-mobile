import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/css/login";
import type { LoginButtonProps } from "../../models/login.model";


export default function LoginButton({
  loading,
  loadingText,
  onPress,
}: LoginButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, loading && styles.buttonDisabled]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel="Se connecter"
      accessibilityState={{ disabled: loading, busy: loading }}
    >
      <View style={styles.buttonContent}>
        {loading && (
          <View style={styles.loadingDots}>
            <View style={[styles.dot, styles.dot1]} />
            <View style={[styles.dot, styles.dot2]} />
            <View style={[styles.dot, styles.dot3]} />
          </View>
        )}

        <Text style={styles.buttonText}>
          {loading ? loadingText : "Se connecter"}
        </Text>

        {!loading && <Text style={styles.buttonArrow}>→</Text>}
      </View>
    </TouchableOpacity>
  );
}