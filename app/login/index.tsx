import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { api } from "../../src/services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    // 🔒 por enquanto é apenas estático
    // depois você troca por api.post("/auth/login", { email, senha })
    console.log("Tentando login:", email, senha);

    // Quando integrar API:
    // const response = await api.post("/auth/login", { email, senha });

    router.push("/home"); // trocar para a tela principal depois
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Ícone */}
        <View style={styles.iconCircle}>
          <Text style={styles.iconHeart}>💙</Text>
        </View>

        <Text style={styles.title}>Bem-vindo de volta</Text>
        <Text style={styles.subtitle}>
          Entre para gerenciar seu estresse e tarefas
        </Text>

        {/* E-mail */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seu@email.com"
          value={email}
          onChangeText={setEmail}
        />

        {/* Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="•••••••"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Cadastro */}
        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Link href="/register">
            <Text style={styles.registerLink}>Cadastre-se</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFF3FF",
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 4,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#E7F0FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  iconHeart: {
    fontSize: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5,
  },
  subtitle: {
    color: "#777",
    fontSize: 13,
    marginBottom: 30,
    textAlign: "center",
  },

  label: {
    alignSelf: "flex-start",
    marginLeft: 5,
    fontWeight: "600",
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    backgroundColor: "#F7F7F7",
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 15,
  },

  forgotBtn: {
    alignSelf: "flex-end",
  },
  forgotText: {
    color: "#3169E9",
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#0A63C2",
    width: "100%",
    padding: 13,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  registerText: {
    marginTop: 18,
    color: "#555",
  },
  registerLink: {
    color: "#3169E9",
    fontWeight: "600",
  },
});
