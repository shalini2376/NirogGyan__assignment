## NirogGyan – Doctor Appointment Interface

NirogGyan is a **React-based frontend application** that simulates a real-world doctor discovery and appointment booking workflow. 
Users can browse doctor profiles, search by name, and check availability before booking an appointment.
This project focuses on **UI logic, conditional rendering, and state management**, making it suitable as a frontend portfolio case study.

---

## ✨ Features
- Doctor profile listing with specialization details
- Search doctors by name with input normalization
- Availability status check before booking
- Appointment booking flow using modal popup
- Confirmation message after successful booking
- Responsive layout using Bootstrap utilities

---

## 🛠 Tech Stack
- **React JS** – Component-based UI development
- **React Router DOM** – Client-side routing
- **React Icons** – UI icons
- **Reactjs-popup** – Popup modal for appointment flow
- **Bootstrap** – Layout and responsive utilities
- **CSS** – Custom styling
- **JSON Data** – Mock data to simulate backend responses

---

## 📂 Project Structure
```
public/
├── data/    # Mock JSON data for doctors
├── index.html   # HTML template
├── manifest.json   # PWA configuration
├── robots.txt   # SEO and crawler rules
src/
├── components/
│ ├── App.js
│ ├── App.css
│ └── App.test.js
├── index.js # Application entry point
├── index.css # Global styles
├── reportWebVitals.js
└── setupTests.js
.gitignore
package.json
package-lock.json
My_README.md
README.md
```

---

## 🧠 Challenges Faced & Solutions

### 1. Managing UI State During Modal Interactions
**Problem:**  
After closing the appointment popup, the form state was not resetting correctly.

**Solution:**  
Introduced an `isSubmitted` flag and used conditional rendering to switch between form and confirmation views. State was reset properly on modal close.

---

### 2. Parsing Date and Time Inputs
**Problem:**  
The `datetime-local` input returns values in `YYYY-MM-DDTHH:MM` format, which is not user-friendly.

**Solution:**  
Used string splitting to extract readable date and time values.

---

### 3. Responsive Layout on Smaller Screens
**Problem:**  
Doctor cards were not horizontally aligned properly on small screen sizes.

**Solution:**  
Used Bootstrap flex utilities like `flex-wrap`, `w-100`, and `mw-100` to maintain layout balance across devices.

---

### 4. Search Logic Accuracy
**Problem:**  
Search results were inconsistent due to case sensitivity and usage of the prefix “Dr.”.

**Solution:**  
Normalized both user input and doctor names by removing prefixes, trimming spaces, and converting text to lowercase.

---

## 🚀 Improvements With More Time
- Form validation with stronger error handling
- Calendar-based doctor availability slots
- Persistent booking data using localStorage or backend API
- Accessibility improvements
- Debounced search for better performance

---

## ▶️ How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/shalini2376/NirogGyan__assignment.git
   ```
2. Navigate to the project folder:
   ```cd NirogGyan__assignment```

3. Install dependencies:
   ```npm install```

4. Start the application:
   ```npm start```













