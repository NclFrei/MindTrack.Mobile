import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

export interface TarefaRequest {
  titulo: string;
  descricao: string;
  dificuldade: number;
  prioridade: number;
  metaId?: number | null;
}

export interface TarefaResponse {
  id: number;
  titulo: string;
  descricao: string;
  dificuldade: number;
  prioridade: number;
  metaId: number | null;
}

export async function getTarefasByUser() {
  const userId = await AsyncStorage.getItem("userId");

  if (!userId) {
    throw new Error("Usuário não encontrado no cache.");
  }

  const response = await api.get(`/api/v1/Tarefa/userid/${userId}`);
  return response.data as TarefaResponse[];
}

export async function createTarefa(data: Omit<TarefaRequest, "userId">) {
  const userId = await AsyncStorage.getItem("userId");

  if (!userId) {
    throw new Error("Usuário não encontrado no cache.");
  }

  const response = await api.post("/api/v1/Tarefa", {
    ...data,
    userId: Number(userId),
  });

  return response.data;
}

export async function deleteTarefa(id: number) {
  return await api.delete(`/api/v1/Tarefa/${id}`);
}

export async function updateTarefa(id: number, data: Partial<TarefaRequest>) {
  return await api.patch(`/api/v1/Tarefa/${id}`, data);
}

export async function getTarefaById(id: number) {
  const res = await api.get(`/api/v1/Tarefa/${id}`);
  return res.data as TarefaResponse;
}
