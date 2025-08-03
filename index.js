const newsContainer = document.getElementById('news-container');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Loading indicator
function showLoading() {
    newsContainer.innerHTML = '<div class="loading">Loading latest news...</div>';
}

// Error handling
function showError(message) {
    newsContainer.innerHTML = `<div class="error">Error loading news: ${message}</div>`;
}

// Fetch and display news
showLoading();

fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        newsContainer.innerHTML = ''; // Clear loading message
        
        data.forEach(element => {
            const div = document.createElement('div');
            const image = document.createElement('img');
            const a = document.createElement('a');
            const p = document.createElement('p');
            const dateSpan = document.createElement('span');
            
            // Set content
            image.src = element.jetpack_featured_media_url || 'logo.webp';
            image.alt = element.title?.rendered || 'News article image';
            
            a.innerText = element.title?.rendered || element.slug;
            a.href = element.link;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            
            p.innerText = element.yoast_head_json?.description || element.excerpt?.rendered?.replace(/<[^>]*>/g, '') || 'No description available';
            
            // Format date
            const date = new Date(element.date);
            dateSpan.innerText = date.toLocaleDateString();
            dateSpan.classList.add('date');
            
            // Build article structure
            div.append(image, a, dateSpan, p);
            div.classList.add("element");
            newsContainer.append(div);
        });
    })
    .catch((error) => {
        console.error('Error fetching news:', error);
        showError(error.message);
    });

