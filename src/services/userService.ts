import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

export async function getUserById() {
  const id = await AsyncStorage.getItem("userId");

  if (!id) throw new Error("Usuário não encontrado no cache.");

  const response = await api.get(`/api/v1/User/${id}`);
  return response.data;
}

export async function updateUser(data: { nome: string; email: string; password: string }) {
  const id = await AsyncStorage.getItem("userId");

  if (!id) throw new Error("Usuário não encontrado no cache.");

  return await api.patch(`/api/v1/User/${id}`, data);
}
