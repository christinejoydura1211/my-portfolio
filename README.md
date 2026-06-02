# Dura Online Portfolio

A modern, responsive online portfolio with a sleek side navigation panel.

## Features
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Side Navigation Panel** - Fixed navigation with Home, Work, Contact, and About Me sections
- **Profile Picture** - Beautiful profile image display on the home section
- **Smooth Scrolling** - Auto-updating active links as you scroll
- **Contact Form** - Simple form for visitors to get in touch
- **Modern UI** - Gradient backgrounds, hover effects, and clean typography

## Project Structure
```
Dura_Online_Portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality
├── profile.svg     # Placeholder profile image
└── README.md       # This file
```

## How to Use

### 1. Replace the Profile Image
The portfolio currently displays a placeholder profile image. To add your own:

**Option A: Replace with JPG/PNG**
1. Prepare your profile photo (recommended size: 300x300px)
2. Save it as `profile.jpg` or `profile.png` in the project folder
3. Open `index.html` and change the image source:
   ```html
   <img src="profile.jpg" alt="Dura Profile Picture" class="profile-image">
   ```

**Option B: Use the SVG Placeholder**
- Keep using `profile.svg` as it is, or edit it with your own custom SVG

### 2. Customize Content
Edit `index.html` to add your:
- Name and introduction in the Home section
- Your projects in the Work section
- Contact information and social links
- Your bio and skills in the About Me section

### 3. Customize Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --accent-color: #3498db;       /* Blue accent */
    --text-color: #333;            /* Text color */
    --light-bg: #ecf0f1;           /* Light background */
    --white: #ffffff;              /* White color */
}
```

## Sections

### Home
- Display your profile picture
- Welcome message
- Call-to-action button

### Work
- Grid layout for your projects
- Each project card shows:
  - Project image placeholder
  - Project title
  - Project description

### Contact
- Contact form with name, email, and message fields
- Professional form styling
- Form submission handling

### About Me
- Personal bio
- Skills list
- Experience section

## Responsive Breakpoints
- **1200px+** - Large desktop (full-width side panel)
- **768px - 1199px** - Tablet (adjusted side panel)
- **600px - 767px** - Mobile landscape
- **up to 599px** - Mobile portrait
- **up to 375px** - Extra small phones

## Browser Compatibility
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Tips
- Profile image will have a hover effect with scale and shadow
- All text sizes are responsive using CSS `clamp()` function
- Navigation highlights the current section as you scroll
- Contact form includes basic validation feedback

## File Sizes
For best performance:
- Profile image: Keep under 200KB
- Use JPG format for photos
- Use PNG for graphics with transparency

Enjoy your portfolio! 🎉
