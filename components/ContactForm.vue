<template>
  <form
    action="https://formsubmit.co/nizar.saidi.coder@gmail.com"
    method="POST"
    class="contact--form">
    <div class="name--input">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        aria-label="First Name"
        required />
      <input
        type="text"
        name="lastName"
        aria-label="Last Name"
        placeholder="Last Name" />
    </div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      aria-label="Email"
      required />
    <textarea
      placeholder="Message"
      name="message"
      aria-label="Message"
      class="h-[15rem]"></textarea>
    <Button type="primary"
      >Send <Icon name="heroicons:arrow-long-right"
    /></Button>
  </form>
</template>

<script setup>
  // const mail = useMail();
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   mail.send({
  //     from: event.target.email.value,
  //     subject: `New message from ${event.target.firstName.value} ${event.target.lastName.value} : PORTFOLIO CONTACT FORM`,
  //     text: event.target.message.value,
  //   });
  // };
</script>

<style lang="scss">
  .name--input {
    display: flex;
    gap: 1.6rem;
  }
  .contact--form {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    max-width: 60%;
  }
  .contact--form input,
  .contact--form textarea {
    padding: 1.6rem;
    border: 0.2rem solid $accent-color;
    border-radius: 0.8rem;
    font-size: 1.6rem;
  }
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    .contact--form {
      min-width: 45%;
    }
    .name--input {
      flex-direction: column;
      gap: 1.2rem;
    }
    .contact--form input,
    .contact--form textarea {
      padding: 1.2rem;
      font-size: 1.4rem;
    }
  }
  @media (max-width: 1024px) {
    .contact--form {
      min-width: 40%;
    }
    .contact--form input,
    .contact--form textarea {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    .contact--form {
      min-width: 40%;
    }
    .contact--form input,
    .contact--form textarea {
      padding: 0.8rem;
      font-size: 1rem;
    }
  }
  @media (max-width: 600px) {
    .contact--form {
      min-width: 60%;
    }
    .name--input {
      flex-direction: column;
      gap: 1.2rem;
    }
    .contact--form input,
    .contact--form textarea {
      padding: 1.2rem;
      font-size: 1.4rem;
    }
  }
</style>
