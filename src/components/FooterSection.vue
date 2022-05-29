<template>
  <footer>
    <section class="footer-info">
      <div>
        <p>Information</p>
        <a href="#" v-for="item in information" :key="item">{{ item }}</a>
      </div>
      <div>
        <p>Experiences</p>
        <a href="#" v-for="item in experiences" :key="item">{{ item }}</a>
      </div>
      <div>
        <p>Themes</p>
        <a href="#" v-for="item in information" :key="item">{{ item }}</a>
      </div>
      <div>
        <p>Popular destinations</p>
        <div class="popular-destinations-container">
          <a href="#" v-for="item in popularDestinations" :key="item">{{
            item
          }}</a>
        </div>
      </div>
    </section>
    <section class="footer-contact">
      <div>
        <a href="tel:+91-80-41127931" class="phone-contact"
          >Phone: +91-80-41127931</a
        >
        <a href="mailto: info@aztechdesign.co" class="email-contact"
          >Email: info@aztechdesign.co</a
        >
      </div>
      <div class="footer-contact-address">
        <h5>Address</h5>
        <p>1st Main, Bucharest</p>
        <p>2nd Stage Raiffisen Tower,</p>
        <p>Bucharest - 400400,</p>
        <p>Romania</p>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      information: [
        "About us",
        "Online enquiry",
        "Call us",
        "General enquiries",
        "Booking conditions",
        "Privacy policy",
        "Refund policy",
      ],
      experiences: [
        "Beach",
        "Adventure",
        "Wildlife",
        "Honeymoon",
        "Culture & heritage",
        "Nature",
        "Spiritual",
        "Hill station",
      ],
      themes: ["Party", "Wedding", "Group tours"],
      popularDestinations: [
        "Leh-Ladakh",
        "Manali",
        "Ooty",
        "Allepey",
        "Darjeeling",
        "Goa",
        "Mahabaleshwar",
        "Agra",
        "Coorg",
        "Mysore",
        "Gir",
        "Kabini",
        "Jaipur",
        "Kodaikanal",
        "Andaman",
        "Shimla",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #171d1c;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 40px 40px 10px;
  height: fit-content;
  bottom: 0;
  width: 100vw;
  .footer-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      p {
        color: #fff;
        font-weight: bold;
        font-size: 15px;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
      }
    }
    .popular-destinations-container {
      display: flex;
      max-height: 200px;
      a {
        margin-right: 20px;
      }
    }
  }
  .footer-contact {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 0 40px 0 0;
      p {
        color: #fff;
        font-size: 13px;
      }
      .phone-contact,
      .email-contact {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
      }
    }
  }
  .footer-contact-address {
    margin-top: 40px;
    h5 {
      color: #fff;
      font-size: 15px;
    }
    p {
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 900px) {
  footer {
    .footer-info {
      flex-direction: column;
      div {
        margin-bottom: 10px;
      }
    }
    .footer-contact {
      text-align: right;
    }
  }
}
@media screen and (max-width: 450px) {
  footer {
    grid-template-columns: 1fr;
  }
}
</style>
