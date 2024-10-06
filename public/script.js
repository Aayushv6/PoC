document.getElementById('searchBtn').addEventListener('click', async () => {
    const searchTerm = document.getElementById('searchTerm').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    try {
        const response = await fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ term: searchTerm }),
        });

        const data = await response.json();

        // Display YouTube results
        if (data.videos.length > 0) {
            resultsDiv.innerHTML += '<h2>YouTube Videos:</h2>';
            data.videos.forEach(video => {
                resultsDiv.innerHTML += `<p><a href="${video.link}" target="_blank">${video.title}</a><br>${video.description}</p>`;
            });
        }

        // Display article results
        if (data.articles.length > 0) {
            resultsDiv.innerHTML += '<h2>Articles:</h2>';
            data.articles.forEach(article => {
                resultsDiv.innerHTML += `<p><a href="${article.link}" target="_blank">${article.title}</a><br>${article.snippet}</p>`;
            });
        }

    } catch (error) {
        console.error('Error fetching results:', error);
        resultsDiv.innerHTML = '<p>Failed to fetch results.</p>';
    }
});
