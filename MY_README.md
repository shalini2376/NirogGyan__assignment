# NirogGyan - Doctor Appointment Booking

This project is a simple and clean **doctor appointment booking** app built using React. It allows users to search for doctors by name, view their profiles, and book appointments if the doctor is available.

---

## 🔧 Tools / Libraries Used

- **React JS** – Core library for building UI components.
- **React Router DOM** – To manage client-side routing between pages.
- **React Icons** – For elegant, customizable icon support (e.g., confirmation icon).
- **Reactjs-popup** – Lightweight modal popup component used for appointment forms.
- **Bootstrap** – For layout utilities and responsive design classes.
- **CSS** – For custom styling of elements and layout control.
- **JSON Data** – Used as a mock backend to simulate doctors list.

## 🚀 Improvements with More Time

If I had more time, I would consider implementing the following enhancements:

- **Form validation** with better error messaging (e.g., regex checks for email).
- **Doctor availability calendar integration**, allowing dynamic time slot selection.
- **Persistent state** using local storage or a backend API to save booked appointments.
- **Responsive design refinements** for ultra-small screens and accessibility improvements.
- **Search debouncing** to improve performance when typing rapidly.

## 🧠 Challenges Faced and Solutions

### 1. **Maintaining UI State During Modal Interactions**
- **Challenge:** After closing the popup, the form was still displayed due to incorrect state handling.
- **Solution:** Introduced `isSubmitted` and used conditional rendering to show either the form or confirmation message. Reset state properly on popup close to show the doctor profile again.

### 2. **Parsing Date and Time Inputs**
- **Challenge:** Extracting readable date and time from `datetime-local` input (which outputs in `YYYY-MM-DDTHH:MM` format).
- **Solution:** Used string splitting to separate date and time.

### 3. **Making the App Responsive Horizontally**
- **Challenge:** The layout was vertically centered but not horizontally balanced on smaller screen widths.
- **Solution:** Used Bootstrap’s `flex-wrap` and utility classes like `mw-100` and `w-100` to adapt layout on smaller widths.

### 4. **Search Logic**
- **Challenge:** The search was case-sensitive and returned incorrect matches when "Dr." was included.
- **Solution:** Normalized both the input and the doctor names by removing "Dr.", converting to lowercase, and trimming spaces.




