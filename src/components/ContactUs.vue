<template>
  <section>
    <img src="../assets/contactUs.png" alt="contact-us" />
    <form @submit="submitForm" v-if="showForm">
      <p>Send us a message</p>
      <div>
        <input type="text" placeholder="Your name" v-model="name" />
        <p class="error-message" v-if="v$.name.min.$invalid">
          {{ v$.name.min.$message }}
        </p>
        <p class="error-message" v-if="v$.name.max.$invalid">
          {{ v$.name.max.$message }}
        </p>
        <p
          v-if="v$.name.required.$invalid && showRequired"
          class="error-message"
        >
          {{ v$.name.required.$message }}
        </p>
      </div>
      <div>
        <input type="email" placeholder="Email" v-model="email" />
        <p class="error-message" v-if="v$.email.email.$invalid">
          {{ v$.email.email.$message }}
        </p>
        <p
          v-if="v$.email.required.$invalid && showRequired"
          class="error-message"
        >
          {{ v$.email.required.$message }}
        </p>
      </div>
      <div>
        <input type="text" placeholder="Message" v-model="message" />
        <p
          v-if="v$.message.required.$invalid && showRequired"
          class="error-message"
        >
          {{ v$.message.required.$message }}
        </p>
        <p class="error-message" v-if="v$.message.min.$invalid">
          {{ v$.message.min.$message }}
        </p>
        <p class="error-message" v-if="v$.message.max.$invalid">
          {{ v$.message.max.$message }}
        </p>
      </div>
      <input type="submit" value="SEND" />
    </form>
    <form class="thanks-message-container" v-else>
      <p>Thanks for sending your information.</p>
      <img src="../assets/smile.svg" alt="smile face" />
      <button @click="sendAnotherMessage">send another message</button>
    </form>
  </section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  name: "contactUs",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      showForm: true,
      showRequired: false,
    };
  },
  validations() {
    return {
      email: {
        required,
        email,
      },
      name: {
        required,
        min: minLength(5),
        max: maxLength(10),
      },
      message: {
        required,
        min: minLength(10),
        max: maxLength(200),
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      this.showRequired = true;
      if (!(!this.name || !this.email || !this.message)) {
        console.log({
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.showForm = !this.showForm;
        this.name = "";
        this.email = "";
        this.message = "";
        this.showRequired = false;
      }
    },
    sendAnotherMessage(e) {
      e.preventDefault();
      this.showForm = true;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  width: 100vw;
  img {
    width: 100%;
  }
  form {
    background-color: #fff;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    position: absolute;
    right: 100px;
    bottom: 0;
    padding: 20px 50px;

    p {
      font-size: 20px;
      font-weight: bold;
    }
    input {
      border: none;
      border-bottom: 1px solid #ddd;
      font-size: 14px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    input[type="submit"] {
      width: 120px;
      border-radius: 40px;
      border: none;
      background-color: red;
      color: #fff;
      font-size: 14px;
      height: 40px;
    }
  }
}
.thanks-message-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  img {
    width: 150px;
    margin: 10px 0;
  }
  p {
    color: orange;
    margin-top: 60px;
  }
  button {
    background-color: orange;
    color: #fff;
    border: none;
    border-radius: 40px;
    padding: 5px 10px;
    margin-top: 10px;
  }
}
.error-message {
  font-size: 12px;
  color: red;
  margin: 0;
  padding: 0;
}
</style>
