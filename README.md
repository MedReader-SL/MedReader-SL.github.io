# MedReader-SL - Medical Prescription OCR Reader

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Privacy](https://img.shields.io/badge/privacy-100%25%20Local-brightgreen.svg)

**MedReader-SL** is a fully functional, client-side web application that converts medical prescription images to human-readable text using advanced OCR (Optical Character Recognition) technology. The application works entirely in your browser without any backend server, ensuring 100% privacy and security for your medical data.

## 🌟 Key Features

### Must-Have Features ✅
- ✅ **Image Upload** - Support for JPG, PNG, and PDF images
- ✅ **Live Image Preview** - See your prescription before processing
- ✅ **OCR Text Extraction** - Powered by Tesseract.js
- ✅ **Real-time Progress Bar** - Visual feedback during processing
- ✅ **Readable Text Display** - Clean, formatted output
- ✅ **Copy to Clipboard** - One-click text copying
- ✅ **Download as TXT** - Save extracted text as file
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Error Handling** - Graceful failure management
- ✅ **100% Client-Side** - No server uploads, complete privacy

### Nice-to-Have Features 🎁
- 🎁 **Drag & Drop Upload** - Easy file selection
- 🎁 **Camera Capture** - Mobile camera support
- 🎁 **Batch Processing** - Process multiple prescriptions at once
- 🎁 **Tab Navigation** - Easy switching between multiple results
- 🎁 **Text Formatting** - Remove spaces, change case
- 🎁 **Print Function** - Direct printing capability
- 🎁 **Share Function** - Web Share API integration
- 🎁 **Image Quality Tips** - Collapsible tips section
- 🎁 **Word Count** - Real-time word counting
- 🎁 **Statistics Counter** - Track processed prescriptions
- 🎁 **Beautiful Animations** - Smooth transitions and effects
- 🎁 **Medical Theme** - Professional color scheme
- 🎁 **Privacy Notice** - Clear privacy information
- 🎁 **Info & Privacy Modals** - Detailed information popups
- 🎁 **Toast Notifications** - User-friendly feedback
- 🎁 **Image Remove Option** - Delete individual previews
- 🎁 **Clear All** - Reset entire application
- 🎁 **Offline Capable** - Works without internet after initial load
- 🎁 **Custom Scrollbar** - Styled scrollbars
- 🎁 **Hover Effects** - Interactive UI elements
- 🎁 **Glass Morphism** - Modern UI design

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!
- No server setup needed!

### Usage Instructions

1. **Open the Application**
   - Simply double-click `medreader-sl.html` to open in your browser
   - Or host it on any web server

2. **Upload Prescription Image**
   - Click on the upload area or drag & drop your prescription image
   - On mobile, you can use camera to capture directly
   - Supports JPG, PNG, and PDF formats

3. **Preview Your Image**
   - Review the uploaded image(s) in the preview section
   - Remove individual images if needed
   - See file name and size information

4. **Process the Prescription**
   - Click the "Process Prescription(s)" button
   - Watch the real-time progress bar
   - Wait for OCR processing to complete

5. **Review Results**
   - Read the extracted text in the results section
   - Switch between tabs if multiple prescriptions processed
   - See word count and text statistics

6. **Take Actions**
   - **Copy** - Copy text to clipboard
   - **Download** - Save as .txt file
   - **Print** - Print the text
   - **Share** - Share via native share dialog
   - **Format** - Remove spaces, change case, or reset

## 📁 File Structure

```
MedReader-SL/
│
├── medreader-sl.html          # Single-page application (all-in-one)
├── README.md                  # This file
└── LICENSE                    # License information
```

## 🎨 Design Features

### Color Scheme
- **Primary (Medical Blue)**: `#0ea5e9` - `#0c4a6e`
- **Secondary (Health Green)**: `#22c55e` - `#15803d`
- **Accent (Purple)**: `#8b5cf6`
- **Background**: Animated gradient background

### Animations
- Fade-in effects on page load
- Slide-up animations for sections
- Bounce effects for icons
- Smooth transitions throughout
- Gradient background animation

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 Privacy & Security

### Local Processing
All image processing happens entirely in your browser using JavaScript. Your prescription images:
- ❌ Never uploaded to any server
- ❌ Never stored in cloud
- ❌ Never transmitted over network
- ✅ Processed locally on your device
- ✅ Deleted when you close/refresh browser

### Data Storage
- Uses browser localStorage only for statistics counter
- No personal or medical information stored
- No cookies or tracking

## 🛠 Technology Stack

- **HTML5** - Structure and semantics
- **Tailwind CSS** - Styling framework (CDN)
- **Vanilla JavaScript** - Functionality and logic
- **Tesseract.js v4** - OCR engine (CDN)

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |

## 💡 Tips for Best Results

### Image Quality
- ✅ Use good lighting - natural daylight works best
- ✅ Ensure text is in focus
- ✅ Capture from directly above (avoid angles)
- ✅ Use highest camera quality setting
- ✅ Avoid shadows and glare
- ✅ Make sure prescription is flat (not wrinkled)

### File Formats
- **JPG/JPEG** - Best for photos
- **PNG** - Best for scanned documents
- **PDF** - Supported for document scans

### OCR Accuracy
- Handwritten prescriptions may have lower accuracy
- Printed prescriptions work best
- Clear, high-contrast images yield better results
- Remove backgrounds when possible

## 🔧 Customization

### Changing Colors
Edit the Tailwind config in the `<script>` tag:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                medical: { /* Your colors */ },
                health: { /* Your colors */ }
            }
        }
    }
}
```

### Adding Languages
Modify the Tesseract.recognize() call:

```javascript
Tesseract.recognize(file, 'eng+spa', { /* options */ })
```

Supported languages: eng, spa, fra, deu, ita, por, rus, ara, hin, chi_sim, jpn, kor, and more.

## 📊 Features Comparison

| Feature | MedReader-SL | Traditional OCR Apps |
|---------|--------------|---------------------|
| Privacy | 100% Local | Server-based |
| Internet Required | Only initial load | Always |
| Installation | None | Required |
| Platform | Any browser | OS-specific |
| Cost | Free | Often paid |
| Updates | Refresh page | App store |
| Batch Processing | Yes | Varies |
| Mobile Support | Yes | Separate app |

## 🐛 Troubleshooting

### OCR Not Working
- Ensure JavaScript is enabled
- Check internet connection (for CDN resources)
- Try a different image format
- Verify image is not corrupted

### Low Accuracy
- Use higher resolution images
- Improve lighting conditions
- Ensure text is in focus
- Try preprocessing image (increase contrast)

### Slow Processing
- Large images take longer to process
- Multiple images process sequentially
- Close other browser tabs
- Use modern browser version

## 🤝 Contributing

This is an open-source project. Contributions are welcome!

### Ways to Contribute
- Report bugs
- Suggest new features
- Improve documentation
- Submit pull requests
- Share with others

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Tesseract.js** - OCR engine
- **Tailwind CSS** - Styling framework
- **Tesseract OCR** - Original OCR engine

## 📞 Support

### Getting Help
- Check the Tips section in the app
- Read this README thoroughly
- Check browser console for errors
- Ensure you're using supported browser

### Report Issues
If you encounter bugs or have suggestions:
1. Check if already reported
2. Provide detailed description
3. Include browser/OS information
4. Share steps to reproduce

## 🎯 Roadmap

### Future Enhancements
- [ ] Image preprocessing (brightness, contrast)
- [ ] Multiple language selection UI
- [ ] Export to PDF format
- [ ] Text highlighting and editing
- [ ] Medicine name recognition
- [ ] Dosage extraction
- [ ] Doctor information parsing
- [ ] Cloud backup option (optional)
- [ ] Dark mode theme
- [ ] Voice output of text

## 📈 Version History

### v1.0.0 (2026-01-31)
- Initial release
- Full OCR functionality
- Batch processing support
- Multiple export options
- Beautiful UI with animations
- Complete privacy protection

---

**Made with ❤️ for better healthcare accessibility**

**MedReader-SL** - Converting Prescriptions to Clarity

