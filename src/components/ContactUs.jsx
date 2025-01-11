import { CONTACT } from "../constants";

const ContactUs = () => {
  return (
    <section
      className="container mx-auto text-center py-16 px-10 "
      id="contact"
    >
      <h1 className="text-3xl lg:text-4xl tracking-tight">Contact Us</h1>
      <div>
        {CONTACT.map((contact, index) => (
          <h1
            key={contact.key}
            className="text-2xl tracking-wide font-light text-neutral-400 border-b border-neutral-600 border-dotted py-14"
          >
            {contact.value}
          </h1>
        ))}
      </div>
    </section>
  );
};

export default ContactUs;
