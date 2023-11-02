<template>
  <!-- <div> -->
  <div style="position: absolute">
    <img src="image/16.jpg" style="width: 100%" alt="" />
  </div>
  <NavbarVue></NavbarVue>

  <div class="container">
    <div class="contenu" id="interne">
      <div class="titre-contain" style="margin-top: 30%">
        <div>
          <h1 style="font-size: 40pt">Bienvenue <span></span></h1>
        </div>
        <h1>{{ user }}<span></span></h1>
        <br />
      </div>

      <div class="lettre-contain">
        <h6>Vous avez de multiple choix <span></span></h6>
        <h6>Pour avoir des réponses à vos questions: <span></span></h6>
        <br />
      </div>
      <div class="cont" style="position: absolute; line-height: 30px">
        <h5 class="lettre">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I. Enregistrement Vocal
          <span></span>
        </h5>
        <h5 class="lettre">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;II. Importations des fichiers
          audio <span></span>
          <!-- <button @click="handleLogout">Déconnexion</button> -->
        </h5>
      </div>
      <div class="logo" style="position: absolute">
        <img src="image/fb-icon.png" alt="" />&nbsp;
        <img src="image/in-icon.png" alt="" />&nbsp;
        <img src="image/instagram-icon.png" alt="" /><br /><br />
      </div>
      <div class="btn" style="position: absolute; top: 85vh">
        <a
          @click="toggleVisibility"
          class="button"
          style="cursor: pointer"
          id="button"
          >PARCOURIR</a
        >
      </div>
      <div style="position: absolute; left: -4%; top: 15%">
        <img src="image/imgs.jpg" style="width: 800px; height: 500px" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RecordRTC from "recordrtc";
import axios from "axios";
import NavbarVue from "@/components/Navbar/Navbar.vue";
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { Store, useStore, mapGetters, Vuex } from "vuex";

export default {
  components: {
    NavbarVue,
  },
  setup() {
    const user = ref(null);
    const store = useStore();
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/user/profile", {
          headers: { Authorization: "Bearer " + store.state.user.token },
        })
        .then((response) => {
          user.value = response.data[0].user.name;
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    });

    return { user };
  },
};
</script>
<style scoped>
.lettre-contain {
  position: absolute;
  color: rgb(216, 213, 213);
  top: 60vh;
  line-height: 20px;
}
.bg-modal {
  display: none; /* Contenu invisible par défaut */
}
.bg-modal.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.register {
  display: none; /* Contenu invisible par défaut */
}
.register.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.import {
  display: none; /* Contenu invisible par défaut */
}

.import.visible {
  display: block; /* Si isVisible est true, affiche le contenu */
}

.lettre {
  color: #aaa;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
}

header nav {
  margin-left: 20%;
  word-spacing: 40px;
  margin-top: 2%;
}

header nav a {
  text-decoration: none;
  color: grey;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}

header nav a:hover {
  border-bottom: solid 3px rgb(85, 148, 241);
  /* border-radius: 2px; */
  color: rgb(31, 30, 30);
}

header h1 {
  margin-top: 1%;
  margin-left: 5%;
  font-size: 50px;
  color: rgb(66, 166, 233);
  font-family: Arial, Helvetica, sans-serif;
}

.cont {
  top: 66vh;
}
.logo {
  top: 78vh;
}

.container {
  min-height: 80vh;
  max-width: 80%;
  margin-top: 1%;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
  display: flex;
  /* border: solid 1px black; */
}

.container .contenu {
  /* border: solid 1px black; */
  min-height: 80vh;
  font-size: 20px;
  margin-left: 50%;
  padding-left: 11%;
  padding-top: 10%;
  width: 50%;
}

.titre-contain h1:nth-child(2) {
  color: rgb(66, 166, 233);
}

#interne .titre-contain h1 {
  display: block;
  width: fit-content;
  position: relative;
  color: transparent;
  animation: text-box 0.5s ease forwards;
  animation-delay: 1.5s;
}

#interne .titre-contain h1:nth-child(1) {
  animation-delay: 1s;
}
#interne .titre-contain h1:nth-child(2) {
  animation: text-name 0.5s ease forwards;
  animation-delay: 2s;
}

#interne .titre-contain h1 span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: rgb(66, 166, 233);
  animation: text-move 1s ease;
  animation-delay: 0.3s;
}
#interne .titre-contain h1:nth-child(1) span {
  animation-delay: 0.5s;
}
#interne .titre-contain h1:nth-child(2) span {
  animation-delay: 1.5s;
}

.container .btn .button {
  text-decoration: none;
  margin-left: 10%;
  display: inline-block;
  padding: 10px 30px;
  color: rgb(66, 166, 233);
  background-color: transparent;
  border: 2px solid rgb(66, 166, 233);
  font-size: 2rem;
  letter-spacing: 0.1rem;
  transition: 0.3s ease;
  transition-property: background-color, color;
}
.container .btn .button:hover {
  color: white;
  background-color: rgb(66, 166, 233);
  border-radius: 20px;
}
.bg-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  /* margin-left: -%; */
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
}
.model-content {
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 4px;
  position: absolute;

  margin: 10%;
  margin-left: 30%;
  margin-top: 15%;
  /* display: none; */
}

.close {
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 42px;
  transform: rotate(45deg);
  cursor: pointer;
}

.close:hover {
  color: lightslategray;
}

.choice a img {
  max-width: 100px;
  align-items: center;
  padding-top: 50%;
  justify-content: center;
}
.choice a .number1 {
  border: solid 3px rgb(182, 175, 175);
  /* max-height: .5vh; */
  width: 75px;
  padding-top: 0;
  border-radius: 45px;
  margin-top: 5%;
  margin-left: 25%;
  /* box-shadow: 1px 3px 5px rgb(182, 175, 175); */
}

.choice a .number1:hover {
  border-color: rgb(66, 166, 233);
  box-shadow: 0px 0px 0px;
}
.choice a .number2:hover {
  border-color: rgb(182, 175, 175);
}

.choice a .number2 {
  border: solid 3px rgb(66, 166, 233);
  /* max-height: .5vh; */
  width: 70px;
  padding-top: 0;
  border-radius: 45px;
  margin-left: 22%;
}

.entete img {
  max-width: 150px;
  margin-left: 35%;
  margin-top: 5%;
}

.register {
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 4px;
  position: relative;
  display: none;
}

/* .phone{
  padding: 1px;
} */

.phone #magnetophone {
  width: 100px;
  margin-top: 100px;
  margin-left: 200px;
}

.phone .langue {
  margin-left: 170px;
  margin-top: 15%;
  font-size: 15px;
  width: 150px;
  padding-top: 2%;
  padding-left: 10%;
  padding-bottom: 2%;
  border-radius: 10px;
  /* padding-right: 4%; */
  border: solid black 1px;
  background-color: black;
  color: white;
}

.phone .slider {
  width: 100px;
  height: 2px;
  border: solid 1px black;
  margin-left: 195px;
}

.phone .btns {
  margin-top: 10%;
  /* margin-left: 20%; */
  display: flex;
  /* font-size: 25px; */
}

.fichier {
  justify-content: center;
  margin-left: 100%;
  margin-top: -10%;
}
#interieur {
  margin-top: 0%;
  border-color: blue;
}
.import-content {
  padding: 3Opx;
  overflow: auto;
  width: 450px;
  height: 200px;
  padding: 2px;
  z-index: 1;
  margin-left: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 3px 5px gray;
  position: relative;
}

.fichier {
  text-align: center;
  width: 600px;
  margin-left: 2%;
  background-color: white;
  margin-top: 5%;
  top: 10%;
  left: 28%;
  background-color: white;
  line-height: 1.5;
  position: absolute;
  width: 40%;
  height: 500px;
  text-align: justify;
  border: solid 1px rgb(224, 221, 221);
  border-radius: 20px 20px 20px 20px;
}

.fichier .langue {
  margin-left: 100px;
  margin-top: 0%;
  font-size: 20px;
  width: 150px;
  padding-top: 0%;
  padding-left: 4.5%;
  padding-bottom: 0%;
  border-radius: 10px;
  /* padding-right: 4%; */
  border: solid black 1px;
  background-color: black;
  color: white;
}

.fichier .slider {
  width: 100px;
  height: 2px;
  border: solid 1px black;
  margin-left: 130px;
}

.int {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Style pour le label personnalisé */
.custom-file-upload {
  margin-left: 10px;
  cursor: pointer;
  background-color: #227dc7;
  color: white;
  border: none;
  padding: 10px 5px 4px 6px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  height: 44px;
}

/* Style pour le label personnalisé au survol */
.custom-file-upload:hover {
  background-color: #0c74ca;
}

/* Cacher l'input de type fichier par défaut */
.custom-file-upload input[type="file"] {
  display: none;
}

.tele img {
  width: 80px;
  border: 2px solid white;
  background-color: rgb(66, 166, 233);
  padding-top: 1%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 1%;
  border-radius: 10px;
  margin-left: 17%;
}
.tele img:hover {
  border-color: rgb(66, 166, 233);
  background-color: white;
}

@keyframes text-move {
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes text-box {
  100% {
    color: black;
  }
}

@keyframes text-name {
  100% {
    color: rgb(66, 166, 233);
    font-weight: 500;
  }
}

.button-9 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 200px;
}

.button-9:disabled {
  cursor: default;
}

.button-9:focus {
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
    rgba(50, 151, 211, 0.3) 0 0 0 4px;
}

.button-37 {
  appearance: button;
  backface-visibility: hidden;
  background-color: #21923d;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  /* overflow: hidden; */
  padding: 0 25px;
  /* position: relative; */
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  max-width: 200px;
}

.button-37:hover {
  box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}

/* Textarea */
.textarea-container {
  width: 400px;
  height: 200px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.custom-textarea {
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  font-size: 16px;
  resize: none; /* empêche le redimensionnement du textarea par l'utilisateur */
  outline: none;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.custom-textarea::placeholder {
  color: #aaa;
}

/* Style pour le conteneur */
div[style="text-align:center"] {
  text-align: center;
  margin: 20px 0;
}

/* Style pour le select */
#langueSelect {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  outline: none;
  cursor: pointer;
  width: 200px;
}

/* Style pour les options */
#langueSelect option {
  font-size: 16px;
  background-color: #fff;
  color: #333;
}

/* Style pour le select lorsqu'il est survolé */
#langueSelect:hover {
  border-color: #555;
}

/* Style pour le select lorsqu'il est focus */
#langueSelect:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
