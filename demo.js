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

// Demo data to showcase the design
const demoNews = [
    {
        title: "Latest AI Breakthrough: OpenAI Announces New Model",
        image: "logo.webp",
        link: "https://techcrunch.com/ai-breakthrough",
        description: "OpenAI has announced a groundbreaking new AI model that promises to revolutionize how we interact with artificial intelligence.",
        date: "2024-08-03"
    },
    {
        title: "Startup Funding Reaches Record High in Q3 2024",
        image: "logo.webp", 
        link: "https://techcrunch.com/startup-funding",
        description: "Venture capital funding has reached unprecedented levels this quarter, with tech startups leading the charge.",
        date: "2024-08-02"
    },
    {
        title: "Meta Unveils Next-Generation VR Headset",
        image: "logo.webp",
        link: "https://techcrunch.com/meta-vr",
        description: "Meta's latest VR headset promises improved resolution and comfort for immersive virtual experiences.",
        date: "2024-08-01"
    },
    {
        title: "Tesla's New Battery Technology Could Change Everything",
        image: "logo.webp",
        link: "https://techcrunch.com/tesla-battery",
        description: "Tesla announces breakthrough in battery technology that could significantly extend electric vehicle range.",
        date: "2024-07-31"
    },
    {
        title: "Google Cloud Expands AI Services Portfolio",
        image: "logo.webp",
        link: "https://techcrunch.com/google-cloud-ai",
        description: "Google Cloud introduces new AI-powered services to help businesses automate complex workflows.",
        date: "2024-07-30"
    },
    {
        title: "Cybersecurity Threats Rise as Remote Work Continues",
        image: "logo.webp",
        link: "https://techcrunch.com/cybersecurity",
        description: "Security experts warn of increasing cyber threats targeting remote workers and distributed teams.",
        date: "2024-07-29"
    }
];

// Loading indicator
function showLoading() {
    newsContainer.innerHTML = '<div class="loading">Loading latest news...</div>';
}

// Display demo news
function displayDemoNews() {
    newsContainer.innerHTML = '';
    
    demoNews.forEach(article => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const a = document.createElement('a');
        const p = document.createElement('p');
        const dateSpan = document.createElement('span');
        
        // Set content
        image.src = article.image;
        image.alt = 'News article image';
        
        a.innerText = article.title;
        a.href = article.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        
        p.innerText = article.description;
        
        // Format date
        const date = new Date(article.date);
        dateSpan.innerText = date.toLocaleDateString();
        dateSpan.classList.add('date');
        
        // Build article structure
        div.append(image, a, dateSpan, p);
        div.classList.add("element");
        newsContainer.append(div);
    });
}

// Try to fetch real news, fallback to demo
showLoading();

fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        newsContainer.innerHTML = '';
        
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
        console.log('Real API not available, showing demo content');
        displayDemoNews();
    });