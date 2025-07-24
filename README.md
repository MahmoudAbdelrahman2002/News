# News Web Application

A responsive web application that fetches and displays the latest news articles from TechCrunch using their WordPress API.

## Features

- **Real-time News Fetching**: Automatically retrieves the latest 21 news articles from TechCrunch
- **Responsive Design**: Optimized for different screen sizes (mobile, tablet, desktop)
- **Clean Interface**: Simple and intuitive user interface with news cards
- **Article Preview**: Displays article image, title, and description
- **Direct Links**: Click on any article title to read the full article on TechCrunch
- **Navigation**: Easy navigation with Home, About, and Contact sections

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: TechCrunch WordPress REST API
- **Styling**: Responsive CSS with Flexbox and Media Queries
- **Font**: Work Sans font family

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection (to fetch news data)

### Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/MahmoudAbdelrahman2002/News.git
   ```

2. Navigate to the project directory:
   ```bash
   cd News
   ```

3. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Use a local server (recommended):
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000`

## Project Structure

```
News/
├── index.html              # Main HTML file
├── index.js               # JavaScript for API fetching and DOM manipulation
├── style.css              # CSS styles and responsive design
├── logo.webp              # Application logo
├── tc-logo.svg            # TechCrunch logo
├── cropped-cropped-favicon-gradient.png  # Favicon
├── Project Description.js  # Development notes and requirements
└── README.md              # Project documentation
```

## API Information

- **Endpoint**: `https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed`
- **Method**: GET
- **Data Retrieved**:
  - Article image (`jetpack_featured_media_url`)
  - Article title/slug (`slug`)
  - Article URL (`link`)
  - Article description (`yoast_head_json.description`)

## Responsive Breakpoints

- **Mobile**: 360px and up
- **Tablet**: 768px and up
- **Desktop**: 992px and up
- **Large Desktop**: 1300px and up

## Contact

For questions or suggestions, please contact: [mahmoud.abdelrahman782002@gmail.com](mailto:mahmoud.abdelrahman782002@gmail.com)

## License

This project is open source and available under the [MIT License](LICENSE).
