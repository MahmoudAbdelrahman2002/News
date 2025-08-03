# TechCrunch News Reader

A modern, responsive web application that fetches and displays the latest news articles from TechCrunch using their WordPress API.

## 🚀 Features

- **Real-time News Fetching**: Automatically retrieves the latest 21 articles from TechCrunch
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Clean Interface**: Modern, user-friendly design with intuitive navigation
- **Direct Links**: Click on any article to read the full story on TechCrunch
- **Fast Loading**: Efficient API integration for quick content delivery

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **API**: TechCrunch WordPress REST API
- **Styling**: Custom CSS with responsive design
- **Icons**: TechCrunch branding assets

## 📱 Responsive Breakpoints

- Mobile: 360px+
- Tablet: 768px+
- Desktop: 992px+
- Large Desktop: 1300px+

## 🔧 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MahmoudAbdelrahman2002/News.git
   cd News
   ```

2. Open the project:
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Local server (recommended)
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📊 API Information

- **Endpoint**: `https://techcrunch.com/wp-json/wp/v2/posts`
- **Parameters**: `per_page=21&context=embed`
- **Data Retrieved**:
  - Article images
  - Article titles
  - Article URLs
  - Article descriptions
  - Publication metadata

## 🎨 Features Overview

### Navigation
- Home section
- About section
- Contact via email (mahmoud.abdelrahman782002@gmail.com)

### Article Display
- Featured image for each article
- Clickable article titles
- Article descriptions
- Grid layout with responsive cards

## 📞 Contact

**Developer**: Mahmoud Abdelrahman  
**Email**: mahmoud.abdelrahman782002@gmail.com  
**Project**: TechCrunch News Reader

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔄 Future Enhancements

- [ ] Search functionality
- [ ] Category filtering
- [ ] Dark mode toggle
- [ ] Bookmark articles
- [ ] Social sharing
- [ ] Pagination for older articles

---

*Built with ❤️ by Mahmoud Abdelrahman*
