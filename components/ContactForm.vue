<template>
  <form
    action="https://formsubmit.co/nizar.saidi.coder@gmail.com"
    method="POST"
    class="contact--form">
    <div class="flex gap-12">
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        required />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name" />
    </div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      required />
    <textarea
      placeholder="Message"
      name="message"
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
</style>
