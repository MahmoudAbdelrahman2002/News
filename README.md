# 📰 TechCrunch News Reader

A modern, responsive web application that fetches and displays the latest technology news from TechCrunch's API. Stay updated with the latest tech trends, startup news, and industry insights in a clean, user-friendly interface.

![News App Screenshot](https://github.com/user-attachments/assets/5d0724f9-6cd2-4bd2-88ee-e669959219a5)

## ✨ Features

- **Real-time News Fetching**: Automatically retrieves the latest 21 news articles from TechCrunch
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Clean Interface**: Modern, minimalist design focused on readability
- **Direct Article Access**: Click on any article title to read the full story on TechCrunch
- **Rich Content Display**: Shows article images, titles, and descriptions
- **Easy Navigation**: Simple navigation bar with Home, About, and Contact sections

## 🚀 Technologies Used

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with flexbox layout
- **Vanilla JavaScript**: ES6+ features for API interaction
- **TechCrunch API**: WordPress REST API for fetching news content
- **Responsive Design**: Mobile-first approach

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for fetching news articles)
- Local web server (for avoiding CORS issues)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MahmoudAbdelrahman2002/News.git
   cd News
   ```

2. **Start a local web server**
   
   **Option 1: Using Python (recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option 2: Using Node.js**
   ```bash
   npx http-server
   ```
   
   **Option 3: Using Live Server (VS Code)**
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open your browser**
   ```
   http://localhost:8000
   ```

## 📁 Project Structure

```
News/
├── index.html              # Main HTML file
├── index.js                # JavaScript for API calls and DOM manipulation
├── style.css               # Styles and responsive design
├── Project Description.js  # Project requirements and API details
├── logo.webp              # TechCrunch logo
├── tc-logo.svg            # Alternative logo format
├── cropped-cropped-favicon-gradient.png  # Favicon
└── README.md              # Project documentation
```

## 🔧 How It Works

1. **API Integration**: The app fetches news data from TechCrunch's WordPress REST API
2. **Dynamic Content**: JavaScript dynamically creates HTML elements for each article
3. **Data Display**: Each news item shows:
   - Featured image
   - Article title (clickable link)
   - Meta description
4. **Responsive Layout**: CSS ensures the layout works on all screen sizes

## 🌐 API Details

- **Endpoint**: `https://techcrunch.com/wp-json/wp/v2/posts`
- **Parameters**: `per_page=21&context=embed`
- **Data Used**:
  - `jetpack_featured_media_url` - Article image
  - `slug` - Article title
  - `link` - Article URL
  - `yoast_head_json.description` - Article description

## 🎨 Customization

You can easily customize the app by:

- **Changing the news source**: Modify the API endpoint in `index.js`
- **Adjusting the layout**: Edit CSS styles in `style.css`
- **Adding more features**: Extend the JavaScript functionality
- **Modifying the number of articles**: Change the `per_page` parameter

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

**Mahmoud Abdelrahman**
- Email: [mahmoud.abdelrahman782002@gmail.com](mailto:mahmoud.abdelrahman782002@gmail.com)
- GitHub: [@MahmoudAbdelrahman2002](https://github.com/MahmoudAbdelrahman2002)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [TechCrunch](https://techcrunch.com) for providing the news API
- The open-source community for inspiration and resources

---

**⭐ If you found this project helpful, please give it a star!**
