import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { api } from "../../src/services/api";

export default function EditProfile() {
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("seu@email.com");
  const [senha, setSenha] = useState("");

  function handleBack() {
    router.back();
  }

  async function handleSave() {
    // FUTURO 🔒 integração com API
    // await api.put("/user/update", { nome, email, senha })

    console.log("Salvando alterações:", { nome, email, senha });
    router.back();
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Editar Perfil</Text>

        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo */}
      <View style={styles.body}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          placeholder="Digite uma nova senha"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF3FF",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  backButton: {
    padding: 5,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  saveButton: {
    padding: 5,
  },

  saveText: {
    color: "#3A7AFE",
    fontSize: 16,
    fontWeight: "600",
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  label: {
    marginTop: 20,
    marginBottom: 6,
    fontWeight: "600",
    color: "#444",
  },

  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    elevation: 2,
  },
});
