export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <p>Reach out for a quote or more information.</p>
      <form>
        <label>Name:</label><br />
        <input type="text" name="name" /><br /><br />
        <label>Email:</label><br />
        <input type="email" name="email" /><br /><br />
        <label>Message:</label><br />
        <textarea name="message" /><br /><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}