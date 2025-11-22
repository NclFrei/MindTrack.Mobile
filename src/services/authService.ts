import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";
import { jwtDecode } from "jwt-decode";


interface TokenPayload {
    unique_name: string;
    nameid: string;
    nbf: number;
    exp: number;
    iat: number;
}

export async function login(email: string, password: string) {
    const response = await api.post("/api/v1/Auth/login", {
        email,
        password,
    });

    const token = response.data.token;

    // Salva o token
    await AsyncStorage.setItem("token", token);

    // Decodifica o token (pega corpo interno)
    const decoded: TokenPayload = jwtDecode(token);

    // Extrai o nameid → ID do usuário
    const userId = decoded.nameid;

    // Salva no cache também
    await AsyncStorage.setItem("userId", userId);

    return { token, userId };
}

export async function register(nome: string, email: string, password: string) {
    const response = await api.post("/api/v1/Auth/Cadastro", {
        nome,
        email,
        password,
    });

    return response.data;
}
