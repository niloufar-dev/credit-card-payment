# 💳 Payment Card UI

A modern and interactive payment card interface built with **HTML, CSS, and JavaScript**.

This project focuses on creating a realistic payment experience with live card previews, input validation, interactive feedback, theme switching, and a smooth success state.

## 🔗 Live Demo

[**View Live Demo →**](https://niloufar-dev.github.io/credit-card-payment/src/index.html)

---
## 🖼️ Project Preview
<img width="1882" height="889" alt="Screenshot 2026-08-14 142119" src="https://github.com/user-attachments/assets/3389ca79-5fba-4c68-ab3b-d83642728e19" />


---
## ✨ Features

* 💳 Real-time credit card preview
* 🔢 Automatic card number formatting
* 👤 Live cardholder name preview
* 📅 Automatic expiry date formatting
* 🔐 CVV input and card preview
* ✅ Real-time form validation
* ⚠️ Invalid and incomplete field states
* 🎨 Dark / Light theme toggle
* 💫 Interactive payment success state
* 📅 Displays the current payment date
* 🔢 Shows the last 4 digits of the card after payment
* 📱 Responsive design
* ⌨️ Keyboard-friendly form navigation

---

## 🛠️ Built With

* **HTML5** — Page structure
* **CSS3** — Styling, animations and UI effects
* **JavaScript (ES6+)** — Interactions, validation and dynamic card preview

---

## ⚙️ How It Works

The payment card updates in real time as the user enters their information.

### Card Number

The card number is automatically formatted into groups of four digits:

```text
1234  5678  9012  3456
```

The interface also displays validation feedback when the card number is incomplete or invalid.

### Cardholder

The cardholder name is displayed instantly on the payment card while typing.

### Expiry Date

The expiry date automatically adds `/` after the month:

```text
12/28
```

The formatting also supports deleting the `/` naturally with Backspace.

### CVV

The CVV is displayed on the card and becomes valid when the required number of digits is entered.

---

## 🎨 Theme

The interface includes a theme toggle that switches between dark and light modes.

```javascript
themetoggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
})
```

---

## ✅ Payment Validation

Before submitting the payment, the form checks whether all fields are valid.

If a field is incomplete or invalid, the user receives an error message:

```text
Please review the highlighted fields.
```

When all fields are valid, the payment button changes to a success state and a payment confirmation overlay is displayed.

---

## 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile


## 👩‍💻 Author

**Niloufar**

Front-End Developer

* GitHub: [@niloufar-dev](https://github.com/niloufar-dev)
* Instagram: [@niloufar_dev](https://instagram.com/niloufar_dev)

---

## 📄 License

This project is open-source and available under the **MIT License**.
