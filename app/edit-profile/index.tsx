import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { getUserById, updateUser } from "../../src/services/userService";
import { SafeAreaView } from "react-native-safe-area-context";


export default function EditProfile() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const user = await getUserById();

        setNome(user.nome);
        setEmail(user.email);
      } catch (err) {
        console.log("Erro ao carregar user:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function voltar() {
    router.back();
  }

  async function salvar() {
    await updateUser({ nome, email, password: senha });

    router.back();
  }

  if (loading) return <Text>Carregando...</Text>;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={voltar} style={styles.backButton}>
          <Ionicons name="chevron-back" size={26} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Editar Perfil</Text>

        <TouchableOpacity onPress={salvar} style={styles.saveButton}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      {/* FORM */}
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
          placeholder="Nova senha"
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
  backgroundColor: "#EFF3FF",
  borderBottomWidth: 1,
  borderBottomColor: "#D9D9D9",
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
