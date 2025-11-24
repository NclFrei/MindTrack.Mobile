
# MindTrack — Aplicativo Mobile Inteligente com IA e Biomonitoramento

O **MindTrack Mobile** é o aplicativo oficial da plataforma MindTrack, focado em bem-estar, produtividade e gestão inteligente de tarefas com base no nível de estresse do usuário.

Esta versão mobile foi desenvolvida utilizando **React Native (Expo)** e integra-se com a **API MindTrack (.NET 8)** para realização de login, cadastro, leitura e criação de tarefas.

---

## 🚀 Tecnologias Utilizadas

### **Frontend / Mobile**
- React Native (Expo 54)
- Expo Router
- Axios
- AsyncStorage
- TypeScript
- Vector Icons
- react-native-safe-area-context

### **Backend (API)**
- .NET 8
- Entity Framework Core
- SQL Server
- JWT Authentication

---

## 📂 Arquitetura do Projeto

```
/app
  /home
  /login
  /cadastro
  /new-task
  /editTask
  /edit-profile
/src
  /components
  /services
```

---

## 🔐 Autenticação

O app utiliza JWT para autenticação:

- Ao logar, o app salva o **token** e o **userId** (extraído via jwtDecode).
- O token é usado automaticamente pelo Axios em todas as requisições.

---

## 🧠 Funcionalidades

### ✔ Login e Cadastro  
### ✔ Tela Home com:
- Score de Estresse
- Recomendações da IA
- Lista de tarefas dinâmica
- Botão para reorganização (futuro)

### ✔ Tarefas:
- Criar
- Listar por usuário
- Atualização automática ao salvar nova tarefa

---

## 📦 Instalação

```sh
npm install --legacy-peer-deps
npx expo start
```

### Android Emulator:
```
http://10.0.2.2:5262
```

### Celular físico:
Use o IP da máquina:
```
http://192.168.x.x:5262
```
