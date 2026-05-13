# 📋 Admissions CRM

A modern, user-friendly Customer Relationship Management (CRM) system for managing student admissions pipelines. Track leads through multiple stages from initial inquiry to enrollment.

## ✨ Features

- **Kanban Board Interface**: Visualize your admissions pipeline with drag-and-drop stages
- **Lead Management**: Add, edit, and delete student inquiries
- **Pipeline Stages**: Track leads through 5 stages:
  - New Inquiry
  - Contacted
  - Tour Booked
  - Application Submitted
  - Enrolled
- **Contact Information**: Store student names, grades, emails, and phone numbers
- **Data Persistence**: All data is automatically saved to your browser's local storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient design with smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/admissions-hash/ADMISSIONS-CRM.git
cd ADMISSIONS-CRM
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Adding a New Inquiry
1. Fill in the "Add New Inquiry" form with:
   - Student Name (required)
   - Grade (required)
   - Email (optional)
   - Phone (optional)
2. Click "Add New Inquiry" button

### Managing Leads
Each lead card displays:
- Student name
- Grade badge
- Contact details (expandable)

**Actions available**:
- **← Back**: Move to previous stage
- **✎ Edit**: Modify lead information
- **🗑 Delete**: Remove lead from pipeline
- **Next →**: Move to next stage

### Viewing Details
Click on a lead card to expand and see full contact information.

## 🏗️ Project Structure

```
src/
├── App.js                 # Main application component
├── App.css               # Application styles
├── index.js              # React entry point
├── index.css             # Global styles
└── components/
    ├── AddLeadForm.js    # Form for adding new leads
    ├── AddLeadForm.css   # Form styles
    ├── KanbanBoard.js    # Main Kanban board container
    ├── KanbanBoard.css   # Board styles
    ├── StageColumn.js    # Individual stage column
    ├── StageColumn.css   # Column styles
    ├── LeadCard.js       # Individual lead card
    └── LeadCard.css      # Card styles
```

## 🛠️ Technologies Used

- **React 18.2**: UI framework
- **CSS3**: Styling with modern features (Grid, Flexbox, Gradients)
- **LocalStorage API**: Client-side data persistence
- **React Hooks**: State management

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` directory with optimized files ready for deployment.

## 💾 Data Storage

The application uses browser's LocalStorage to persist data. This means:
- All data is stored locally on your device
- Data persists between browser sessions
- Clearing browser cache will delete the data
- No data is sent to external servers

## 🎨 Customization

### Changing Colors
Edit the gradient in `src/App.css` and color values in component CSS files.

### Adding New Stages
Modify the `STAGES` array in `src/App.js`:
```javascript
const STAGES = ['Stage 1', 'Stage 2', 'Stage 3', ...];
```

### Adding New Fields
Update the form in `AddLeadForm.js` and the lead card display in `LeadCard.js`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues, feature requests, or questions, please open an issue on GitHub.

---

Made with ❤️ for educational institutions
