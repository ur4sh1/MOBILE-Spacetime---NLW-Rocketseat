import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import blurBg from "./src/assets/bg-blur.png";
import Stripes from "./src/assets/stripes.svg";
import LogoNlw from "./src/assets/nlw-logo.svg";
import { styled } from "nativewind";
import { useEffect } from "react";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { api } from "./src/lib/api";
import * as SecureStore from "expo-secure-store";
import { err } from "react-native-svg/lib/typescript/xml";

const StyleStripes = styled(Stripes);

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/01b210f89de9bb362c4d",
};

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: "01b210f89de9bb362c4d",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "nlwspacetime",
      }),
    },
    discovery
  );

  useEffect(() => {
    // console.log(
    //   makeRedirectUri({
    //     scheme: "nlwspacetime",
    //   })
    // );

    if (response?.type === "success") {
      const { code } = response.params;

      api
        .post("/register", {
          code,
        })
        .then((response) => {
          const { token } = response.data;

          SecureStore.setItemAsync("token", token);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [response]);

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyleStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <LogoNlw />

        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-3"
          onPress={() => signInWithGithub}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
