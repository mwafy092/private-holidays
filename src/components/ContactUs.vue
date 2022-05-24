<template>
  <section>
    <img src="../assets/contactUs.png" alt="contact-us" />
    <form @submit="submitForm" v-if="showForm">
      <p>Send us a message</p>
      <input type="text" placeholder="Your name" v-model="name" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Message" v-model="message" />
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
export default {
  name: "contactUs",

  data() {
    return {
      name: "",
      email: "",
      message: "",
      showForm: true,
    };
  },

  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log({
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.showForm = !this.showForm;
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
</style>
