<template>
  <div>
    <nav class="sign-nav">
      <button class="sign-btn" v-on:click="popupToggle">sign up</button>
    </nav>
    <div
      class="modal-background"
      v-bind:class="{ modalActive: popupActive }"
      v-if="popupActive"
    >
      <form
        class="modal-form"
        v-on:submit="formSubmit"
        v-click-outside="onClickOutside"
      >
        <input
          class="modal-input"
          type="text"
          placeholder="username"
          v-model="login"
        />
        <input
          class="modal-input"
          type="password"
          placeholder="password"
          v-model="password"
        />
        <button class="modal-btn">send</button>
      </form>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  data() {
    return {
      popupActive: false,
      login: "",
      password: "",
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    onClickOutside() {
      this.popupActive = !this.popupActive;
    },
    popupToggle(e) {
      e.preventDefault();
      this.popupActive = !this.popupActive;
    },
    formSubmit(e) {
      e.preventDefault();
      console.log(
        `Отправляю...\nlogin: ${this.login}\npassword: ${this.password}`
      );
      this.popupActive = !this.popupActive;
      this.axios
        .post("http://", {
          login: this.login,
          password: this.password,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          alert("Ошибка! см. консоль");
          console.log(
            "URL в тесте не существующий, ответа нет. log ошибки:\n",
            error
          );
        });
      this.login = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
.sign-nav {
  display: flex;
  background: #393e48;
  padding-top: 5px;
  padding-bottom: 5px;
}
.sign-btn {
  margin-left: auto;
  margin-right: 20px;
  background: #969696;
  border: none;
  padding: 10px 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
}
.modal-background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #00000080;
  display: none;
  justify-content: center;
  align-items: center;
}
.modalActive {
  display: flex;
}
.modal-form {
  background: #1b1d23;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
}
.modal-input {
  background: #393e48;
  border: none;
  color: #cccccc;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  font-weight: 600;
}
.modal-input::placeholder {
  color: #cccccc;
  text-transform: uppercase;
}
.modal-btn {
  background: #f4cb3d;
  border: none;
  width: 50%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>