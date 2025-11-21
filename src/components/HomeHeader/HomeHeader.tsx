import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeHeader() {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function handleLogout() {
    setMenuVisible(false);
    // Futuro: limpar token do AsyncStorage
    router.replace("/login");
  }

  function handleEditProfile() {
    setMenuVisible(false);
    router.push("/edit-profile");
  }

  return (
    <View style={styles.container}>
      {/* Ícone da esquerda */}
      <View style={styles.leftIcon}>
        <Ionicons name="pulse" size={22} color="#3A7AFE" />
      </View>

      {/* Centro */}
      <View style={styles.centerBox}>
        {/* BPM */}
        <View style={styles.item}>
          <Ionicons name="heart-outline" size={20} color="#FF6B6B" />
          <Text style={styles.value}>72</Text>
          <Text style={styles.label}>BPM</Text>
        </View>

        <View style={styles.divider} />

        {/* HRV */}
        <View style={styles.item}>
          <Ionicons name="pulse-outline" size={20} color="#A56BFF" />
          <Text style={styles.value}>65</Text>
          <Text style={styles.label}>HRV</Text>
        </View>
      </View>

      {/* Ícone usuário */}
      <TouchableOpacity style={styles.userIcon} onPress={toggleMenu}>
        <Ionicons name="person-circle-outline" size={36} color="#C9D6E8" />
      </TouchableOpacity>

      {/* Menu Pop-up */}
      {menuVisible && (
        <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
              <Ionicons name="create-outline" size={18} color="#444" />
              <Text style={styles.menuText}>Editar perfil</Text>
            </TouchableOpacity>

            <View style={styles.menuDivider} />

            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={18} color="#444" />
              <Text style={styles.menuText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },

  leftIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#E6F0FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  centerBox: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 3,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },

  label: {
    fontSize: 12,
    color: "#7A7A7A",
    marginLeft: 3,
  },

  divider: {
    width: 1,
    height: 18,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 10,
  },

  userIcon: {
    marginLeft: 10,
  },

  /** MENU POPUP **/
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  menu: {
    position: "absolute",
    top: 55,
    right: 15,
    backgroundColor: "#fff",
    width: 180,
    borderRadius: 12,
    paddingVertical: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  menuText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#444",
  },

  menuDivider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 4,
  },
});
