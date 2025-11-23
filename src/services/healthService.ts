import { api } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface StressScoreResponse {
  id: number;
  userId: number;
  score: number;
  dataRegistro: string;
}

export async function getStressScoreByUserId() {
  try {
    const userId = await AsyncStorage.getItem("userId");

    if (!userId) return Math.floor(Math.random() * 100) + 1;

    const res = await api.get(`/api/v1/Health/scores/${userId}`);

    const data = res.data as StressScoreResponse | null;

    if (!data || !data.score || data.score < 1 || data.score > 100) {
      return Math.floor(Math.random() * 100) + 1;
    }

    return data.score;
  } catch (error) {
    console.log("Erro ao buscar stress score:", error);
    return Math.floor(Math.random() * 100) + 1;
  }
}
