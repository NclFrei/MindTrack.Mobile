import HomeHeader from "../../src/components/HomeHeader/HomeHeader";
import { SafeAreaView } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EFF3FF" }}>
      <HomeHeader />

      {/* resto da sua tela aqui */}
    </SafeAreaView>
  );
}
