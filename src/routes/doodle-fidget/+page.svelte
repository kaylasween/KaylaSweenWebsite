<h2>DoodleFidget</h2>
<h3>Privacy Policy</h3>
<p>
  DoodleFidget respects your privacy and is committed to protecting your
  personal information. We want you to feel confident while using our app. We do
  not store <em>any</em> personal information from the app on our servers. All information
  is stored locally on your device and will be deleted if the app is deleted.
</p>
<h3>Support</h3>
<p>
  If you have any questions or need support, please fill out the form below.
</p>
<form
  action="/doodle-fidget/success"
  method="POST"
  name="appsupport"
  netlify-honeypot="bot-field"
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="appsupport" />
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit">Submit</button>
</form>
