function Subscription() {
  const handleSubmit = () => '';

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Let`s keep in touch</h2>
      <p className="subscribe__copy">
        Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!
      </p>
      <div className="form">
        <input type="email" className="form__email" placeholder="Enter your email address" />
        <button type="button" className="form__button" onClick={handleSubmit}>Send</button>
      </div>
      <div className="notice">
        <label htmlFor="pro" className="notice__copy">
          <input type="checkbox" id="pro" />
          I agree to my email address being stored and uses to recieve monthly newsletter.
        </label>
      </div>
    </div>
  );
}

export default Subscription;
