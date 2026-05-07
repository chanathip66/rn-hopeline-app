import { Link } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo, { BRAND_COLOR } from "../components/Logo";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.logoWrap}>
            <Logo size={0.9} />
          </View>

          <Text style={styles.heading}>Login to your Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9a9a9a"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9a9a9a"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.forgot}>
            <Text style={styles.forgotText}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85}>
            <Text style={styles.primaryBtnText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
          </View>
          <Text style={styles.orText}>Or sign in with</Text>

          <View style={styles.socialRow}>
            <SocialButton>
              <Image
                source={require("../assets/icon/google.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </SocialButton>
            <SocialButton>
              <Image
                source={require("../assets/icon/facebook.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </SocialButton>
            <SocialButton>
              <Image
                source={require("../assets/icon/x.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
            </SocialButton>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>Don&apos;t have an account? </Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text style={styles.bottomLink}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <TouchableOpacity style={styles.socialBtn} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 32,
  },
  logoWrap: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 28,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 18,
  },
  input: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#1a1a1a",
    marginBottom: 14,
  },
  forgot: {
    alignSelf: "flex-end",
    marginBottom: 18,
  },
  forgotText: {
    color: BRAND_COLOR,
    fontWeight: "700",
    fontSize: 13,
  },
  primaryBtn: {
    backgroundColor: BRAND_COLOR,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 22,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  dividerRow: {
    alignItems: "center",
    marginTop: 4,
  },
  line: {
    height: 1,
    backgroundColor: "#D9D9D9",
    width: "100%",
  },
  orText: {
    textAlign: "center",
    color: "#444",
    marginTop: 10,
    marginBottom: 18,
    fontSize: 13,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 28,
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  socialIcon: {
    width: 28,
    height: 28,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
    paddingTop: 12,
  },
  bottomText: { color: "#444", fontSize: 13 },
  bottomLink: { color: BRAND_COLOR, fontWeight: "800", fontSize: 13 },
});
