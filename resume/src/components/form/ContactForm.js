import "./ContactForm.css"


const ContactForm = () => {
  return (
    <form action="#" class="contact-form" netlify>
      <div class="form-field">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          inputmode="email"
        />
      </div>
      <div class="form-field">
        <label for="message">How can I help you?</label>
        <textarea name="message" id="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-cta">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
