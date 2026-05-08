# Express Backend Setup Guide

I have created a simple Express.js backend for your portfolio. It includes two APIs: one for counting views and another for handling contact form submissions and sending emails.

## Project Structure
- `server.js`: The main logic for the APIs.
- `.env`: Configuration for your email credentials.
- `data/views.json`: Stores the persistent view count.

## 1. APIs Documentation

### **View Count API**
- **Endpoint**: `GET /api/views`
- **Description**: Increments the view count by 1 and returns the total views.
- **Example Response**:
  ```json
  { "views": 42 }
  ```

### **Contact Form API**
- **Endpoint**: `POST /api/contact`
- **Description**: Receives user information and sends it to `info@monjurajad.com`.
- **Payload**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry",
    "message": "Hello, I would like to hire you."
  }
  ```
- **Example Response**:
  ```json
  { "success": true, "message": "Email sent successfully" }
  ```

## 2. Configuration (Crucial)
To make the email functionality work, you **must** update the `.env` file with your credentials:

1. Open `.env`.
2. Set `EMAIL_USER` to your Gmail address.
3. Set `EMAIL_PASS` to an **App Password** (not your regular password).
   - *Note: If using Gmail, you need to enable 2FA and generate an [App Password](https://myaccount.google.com/apppasswords).*

## 3. How to Run
In your terminal, navigate to this folder and run:
```bash
npm start
```
The server will run on `http://localhost:5000`.

## 4. Frontend Example (Next.js/React)
You can call these APIs from your portfolio like this:

```javascript
// To count views
fetch('http://localhost:5000/api/views')
  .then(res => res.json())
  .then(data => console.log('Total views:', data.views));

// To send contact info
const sendContact = async (formData) => {
  const res = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  if (data.success) alert('Message Sent!');
};
```
