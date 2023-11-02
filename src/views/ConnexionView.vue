<template>
  <img src="image/17.jpg" alt="" style="max-width: 100%; height: auto" />
  <div class="cont">
    <div class="container2">
      <img src="image/Personal.svg" class="iimgCote" alt="" />
    </div>
    <div class="container1">
      <div class="contenu-im">
        <img src="image/Bienvenue sur AiderVoice.png" alt="" />
      </div>

      <div class="hero" style="line-height: 19px; margin-left: 50px">
        <br />
        <p>
          Accéder à votre compte, <br />
          en remplissant les informations ci-dessous:
        </p>
      </div>
      <div style="margin-left: 45px">
        <InputComponent
          label="Identifiant : "
          type="email"
          placeholder="IDENTIFIANT"
          v-model="email"
        ></InputComponent>
        <br />

        <InputComponent
          label="Mot de passe : "
          type="password"
          placeholder="MOT DE PASSE"
          v-model="password"
        ></InputComponent>
        &nbsp;&nbsp;<a class="forgot">Mot de passe oublié?</a>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<input
            type="submit"
            @click="handleSubmit"
            value="SE CONNECTER"
            class="connect"
          />
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;<input
            type="submit"
            value="CREER UN COMPTE"
            class="connect2"
          />
        </p>
        <p style="text-align: center; color: red">{{ erreur }}</p>
      </div>
    </div>
  </div>

  <Loader v-if="loading"></Loader>
</template>

<script>
import InputComponent from "@/components/Input/InputComponent.vue";
import Loader from "@/components/Loader/Loader.vue";
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { Store, useStore } from "vuex";
import Cookies from "js-cookie";
import { onMounted } from "vue";

export default {
  components: {
    InputComponent,
    Loader
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const submittedValue = ref("");
    const router = useRouter();
    const store = useStore();
    const erreur = ref("");
    const loading = ref(false);

    const handleSubmit = async () => {
      try {
        loading.value = true;
        submittedValue.value = { email: email.value, mdp: password.value };
        const response = await axios.post(
          "http://127.0.0.1:8000/api/user/connect",
          {
            email: email.value,
            password: password.value,
          }
        );

        if (response.data.token) {
          await store.dispatch("loginActions", {
            email: email.value,
            mdp: password.value,
            token: response.data.token,
            user: response.data.user,
          });

          console.log(store.state.user);
          const isAuthenticated = store.state.user;
          if (isAuthenticated) {
            router.push({ name: "home" });
          }
        } else {
          erreur.value = "Ts met";
          console.log("ereirer ");
        }
      } catch (error) {
        console.log(error);
        erreur.value = "Utilisateur Inconnu";
      } finally {
        loading.value = false; 
      }
    };

    return {
      email,
      password,
      handleSubmit,
      submittedValue,
      erreur,
      loading,
    };
  },
};
</script>

<style scoped>
.cont {
  padding-top: 30px;
  padding-bottom: 30px;
  border: solid 1px rgb(228, 228, 228);
  width: 900px;
  /* height: 374px; */
  background-color: white;
  position: absolute;
  margin-top: -100vh;
  margin-left: 30vh;
  display: flex;
  padding-left: 10px;
}

.container1 {
  width: 100%;
}

.contenu-im {
  margin-left: 100px;
}

.soratra {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.welcome {
  margin-left: 20%;
  margin-top: 20%;
}
.hero p:nth-child(1) {
  font-size: 15px;
  margin-left: 25%;
  font-family: Arial, Helvetica, sans-serif;
}

.hero p:nth-child(2) {
  font-size: 15px;
  margin-left: 10%;
}

#id {
  border-width: 0.5px;
  margin-left: 20%;
  padding-top: 2%;
  padding-left: 2%;
  padding-bottom: 1.5%;
  padding-right: 10%;
  border-color: rgb(0, 89, 255);
  border-radius: 0;
  /* border-left: 0px; */
}

#password {
  border-width: 0.5px;
  margin-left: 20%;
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 10%;
  padding-bottom: 1.5%;
  border-color: rgb(0, 89, 255);
}

.forgot {
  text-decoration: none;
  font-size: 13px;
  margin-left: 30%;
  color: rgb(0, 89, 255);
  font-family: Arial, Helvetica, sans-serif;
}

.connect {
  margin-left: 20%;
  border-width: 0.5px;
  margin-left: 20%;
  padding-top: 2%;
  padding-left: 12%;
  padding-right: 15%;
  border-radius: 5px;
  padding-bottom: 1.5%;
  border-color: rgb(66, 166, 233);
  color: white;
  background-color: rgb(66, 166, 233);
  width: 53%;
  cursor: pointer;
}

.connect2 {
  margin-left: 20%;
  border-width: 0.5px;
  margin-left: 20%;
  padding-top: 2%;
  padding-left: 12%;
  padding-right: 15%;
  border-radius: 5px;
  padding-bottom: 1.5%;
  border-color: rgb(0, 0, 0);
  color: white;
  background-color: rgb(0, 0, 0);
  width: 53%;
  cursor: pointer;
}

.iimgCote {
  width: 440px;
}

@media (max-width: 2000px) {
  .cont {
    width: 900px;
  }
}

@media (max-width: 1500px) {
  .cont {
    width: 900px;
  }
}

@media (max-width: 1200px) {
  .cont {
    width: 800px;
  }
}

@media (max-width: 1000px) {
  .cont {
    width: 600px;
    margin-top: -30vh;
    margin-left: 30vh;
  }

  .container2 .iimgCote {
    width: 30px;
  }
}

@media (max-width: 900px) {
  .cont {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .cont {
    width: 100%;
    margin-left: 0;
  }
}

 
</style>
