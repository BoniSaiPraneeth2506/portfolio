# 📋 Portfolio Customization Guide

## 🎯 How to Customize Your Portfolio

This guide will help you personalize the portfolio with your own information.

---

## 1️⃣ Personal Information

### Update Name and Title

**File:** `src/pages/Home.jsx`
```javascript
// Line 15-17: Change your name and roles
Hi, i am <span className="purple">Your Name</span>
<div>i am a passionate</div>
// Line 22: Update the typing animation roles
strings: ['Your Role 1', 'Your Role 2', 'Your Role 3'],
```

**File:** `src/components/Navbar.jsx`
```javascript
// Line 29: Update portfolio title
Praneeth's Portfolio → Your Name's Portfolio
```

---

## 2️⃣ Education Data

**File:** `src/data/educationData.js`

Update the `educationData` array with your academic information:

```javascript
{
  degree: 'Your Degree',
  institution: 'Your Institution',
  location: 'City, State',
  duration: 'YYYY - YYYY',
  year: 'Current Status',
  cgpa: 'Your CGPA/Percentage',
  description: 'Brief description',
  highlights: [
    'Key point 1',
    'Key point 2',
    'Key point 3',
    'Key point 4'
  ],
  icon: '🎓', // Choose an emoji
  status: 'ongoing' or 'completed'
}
```

---

## 3️⃣ Skills Data

**File:** `src/data/skillsData.js`

Update skills in each category:

```javascript
programmingLanguages: [
  { name: 'Language Name', level: 80, icon: '💻' },
],
frontend: [
  { name: 'Technology', level: 75, icon: '⚛️' },
],
// Add or remove skills in each category
```

**Skill Level Guidelines:**
- 90-100: Expert
- 70-89: Advanced
- 50-69: Intermediate
- 30-49: Beginner
- 0-29: Learning

---

## 4️⃣ Projects Data

**File:** `src/data/projectsData.js`

Add your projects:

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Project description...',
  techStack: ['Tech1', 'Tech2', 'Tech3'],
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  github: 'https://github.com/username/repo',
  liveDemo: 'https://your-demo-link.com', // Optional
  status: 'Completed' or 'Ongoing',
  image: '🌐', // Emoji icon
  category: 'Web Development' // For filtering
}
```

**Available Categories:**
- Web Development
- Full Stack
- Desktop Application
- Mobile App
- Machine Learning
- Data Science
(You can add more in `Projects.jsx`)

---

## 5️⃣ Experience Data

**File:** `src/data/experienceData.js`

Add internships and work experience:

```javascript
{
  id: 1,
  company: 'Company Name',
  role: 'Your Role',
  duration: 'Month YYYY - Month YYYY',
  location: 'Location',
  type: 'Internship' or 'Full-time' or 'Leadership',
  description: 'Brief description...',
  responsibilities: [
    'Responsibility 1',
    'Responsibility 2',
    'Responsibility 3'
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  icon: '💼', // Choose emoji
  status: 'Completed' or 'Ongoing'
}
```

---

## 6️⃣ Certifications Data

**File:** `src/data/certificationsData.js`

Add your certificates:

```javascript
{
  id: 1,
  title: 'Certificate Name',
  platform: 'Platform Name',
  issuer: 'Issuer Organization',
  year: 'YYYY',
  description: 'Certificate description...',
  link: 'https://certificate-link.com',
  icon: '📜', // Choose emoji
  skills: ['Skill1', 'Skill2', 'Skill3']
}
```

---

## 7️⃣ Contact Information

### Update Contact Details

**File:** `src/pages/Contact.jsx`

```javascript
// Lines 100-110: Update contact information
<p>your.email@example.com</p>
<p>+91 YOUR NUMBER</p>
<p>Your City, State</p>
```

### Update Social Media Links

**File:** `src/components/Footer.jsx` (Lines 24-38)

```javascript
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
<a href="https://twitter.com/YOUR_HANDLE">
<a href="mailto:YOUR_EMAIL">
```

**File:** `src/pages/Contact.jsx` (Lines 114-126)

Update the same social links here as well.

---

## 8️⃣ Images and Assets

### Replace Developer Image

1. Replace `public/developer.webp` with your own image
2. Supported formats: .webp, .png, .jpg, .svg
3. Recommended size: 800x800px
4. Name it: `developer.webp` (or update the path in `Home.jsx`)

### Add Project Images (Optional)

You can replace emoji icons with actual images:

**File:** `src/data/projectsData.js`
```javascript
// Instead of emoji
image: '/project-images/project1.png'
```

Then add images to `public/project-images/` folder.

---

## 9️⃣ Color Theme

### Change Primary Colors

Update these colors in component CSS files:

**Primary Purple:** `rgb(149, 71, 222)`
**Secondary Purple:** `rgb(100, 50, 180)`
**Background:** `rgb(0, 0, 33)`
**Navbar:** `rgb(8, 8, 62)`

**Files to update:**
- `src/pages/*.css`
- `src/components/*.css`

**Search and replace:**
1. Find: `rgb(149, 71, 222)`
2. Replace with: Your primary color

---

## 🔟 SEO & Meta Tags

**File:** `public/index.html`

Update meta tags:

```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
<title>Your Name's Portfolio</title>
```

---

## 1️⃣1️⃣ Additional Customization

### Add New Sections

1. Create component in `src/pages/YourSection.jsx`
2. Create CSS file `src/pages/YourSection.css`
3. Import in `App.js`:
```javascript
import YourSection from './pages/YourSection';
```
4. Add to App return:
```javascript
<YourSection />
<hr />
```

### Add to Navigation

**File:** `src/components/Navbar.jsx`

Add menu item:
```javascript
<li>
  <a href="#your-section" onClick={() => scrollToSection('your-section')}>
    Section Name
  </a>
</li>
```

---

## 📱 Testing

After customization, test on:

1. **Different Browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Different Devices:**
   - Mobile (375px)
   - Tablet (768px)
   - Laptop (1024px)
   - Desktop (1440px)

Use Chrome DevTools (F12) → Toggle Device Toolbar (Ctrl+Shift+M)

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Test all links (GitHub, LinkedIn, etc.)
- [ ] Verify contact form validation
- [ ] Test on mobile devices
- [ ] Check all sections scroll correctly
- [ ] Verify all animations work
- [ ] Update README with your info
- [ ] Add your resume/CV link
- [ ] Test in production build (`npm run build`)

---

## ⚡ Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npx serve -s build
```

---

## 📝 Data Update Frequency

Recommended update schedule:

- **Projects:** Add immediately after completion
- **Skills:** Update quarterly
- **Experience:** Update immediately
- **Certifications:** Add as obtained
- **Education:** Update per semester/year

---

## 🆘 Need Help?

If you encounter issues:

1. Check console for errors (F12 in browser)
2. Verify all imports are correct
3. Make sure data files export correctly
4. Check file paths and names
5. Restart dev server (`npm start`)

---

## 📚 Resources

- [React Documentation](https://reactjs.org/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Happy Customizing! 🎉**
