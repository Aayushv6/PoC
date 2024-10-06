const youtubeApiKey = 'AIzaSyBOTKDdXh8k4fiRCQUFZGEXfqnYIjdGQ-U';
const googleCseId = 'c338b76229bcc4694';
const googleCseApiKey = 'AIzaSyDOcn5bnT30-EAxcbyBYOo54q4g6zTFf8E';

const searchTermInput = document.getElementById('searchTerm');
const searchButton = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('results');

let suggestions = [
    "JavaScript tutorial",
    "Python programming",
    "Web development",
    "Machine learning",
    "Artificial intelligence",
    "Data science",
    "Node.js",
    "React.js",
    "CSS tricks",
    "HTML basics"
];

searchTermInput.addEventListener('input', () => {
    const value = searchTermInput.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(value));
    showSuggestions(filteredSuggestions);
});

searchTermInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchResults();
    }
});

searchButton.addEventListener('click', fetchResults);

function showSuggestions(suggestions) {
    const existingSuggestions = document.querySelector('.suggestions');
    if (existingSuggestions) {
        existingSuggestions.remove();
    }

    if (suggestions.length === 0) return;

    let suggestionsContainer = document.createElement('div');
    suggestionsContainer.classList.add('suggestions');
    
    suggestions.forEach(suggestion => {
        let suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.innerText = suggestion;
        suggestionItem.addEventListener('click', () => {
            searchTermInput.value = suggestion;
            fetchResults();
        });
        suggestionsContainer.appendChild(suggestionItem);
    });

    searchTermInput.parentNode.appendChild(suggestionsContainer);
}

async function fetchResults() {
    const searchTerm = searchTermInput.value;
    resultsContainer.innerHTML = ''; // Clear previous results

    // Fetch YouTube videos
    const youtubeResults = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchTerm)}&key=${youtubeApiKey}&maxResults=5`)
        .then(response => response.json())
        .then(data => data.items.map(item => ({
            type: 'YouTube',
            title: item.snippet.title,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            views: 0, // Placeholder for views
            likes: 0 // Placeholder for likes
        })));

    // Fetch Google Custom Search results (articles and blogs)
    const cseResults = await fetch(`https://www.googleapis.com/customsearch/v1?key=${googleCseApiKey}&cx=${googleCseId}&q=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => data.items.map(item => ({
            type: 'Article',
            title: item.title,
            url: item.link,
            snippet: item.snippet
        })));

    // Combine all results
    const allResults = [...youtubeResults, ...cseResults];
    displayResults(allResults);
}

function displayResults(results) {
    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
    }

    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result-item');
        resultElement.innerHTML = `
            <h2>${result.type}: <a href="${result.url}" target="_blank">${result.title}</a></h2>
            ${result.snippet ? `<p>${result.snippet}</p>` : ''}
            <p>Views: ${result.views || 'N/A'}</p>
            <p>Likes: ${result.likes || 'N/A'}</p>
        `;
        resultsContainer.appendChild(resultElement);
    });
}
