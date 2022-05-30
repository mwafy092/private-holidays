<template>
  <footer>
    <section class="footer-info">
      <div>
        <p>Information</p>
        <a
          href="#"
          v-for="item in information"
          :key="item"
          rel="noopener noreferrer nofollow"
          target="_blank"
          >{{ item }}</a
        >
      </div>
      <div>
        <p>Experiences</p>
        <a
          href="#"
          v-for="item in experiences"
          :key="item"
          rel="noopener noreferrer nofollow"
          target="_blank"
          >{{ item }}</a
        >
      </div>
      <div>
        <p>Themes</p>
        <a
          href="#"
          v-for="item in information"
          :key="item"
          rel="noopener noreferrer nofollow"
          target="_blank"
          >{{ item }}</a
        >
      </div>
      <div>
        <p>Popular destinations</p>
        <div class="popular-destinations-container">
          <a
            href="#"
            v-for="item in popularDestinations"
            :key="item"
            rel="noopener noreferrer nofollow"
            target="_blank"
            >{{ item }}</a
          >
        </div>
      </div>
    </section>
    <section class="footer-contact">
      <div>
        <a
          href="tel:+91-80-41127931"
          class="phone-contact"
          rel="noopener noreferrer nofollow"
          target="_blank"
          >Phone: +91-80-41127931</a
        >
        <a
          href="mailto: info@aztechdesign.co"
          class="email-contact"
          rel="noopener noreferrer nofollow"
          target="_blank"
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
// footer js including state set data for footer
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
// scoped styles from footer
@import "../assets/styles/footer.scss";
</style>
