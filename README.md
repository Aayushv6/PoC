Doogle
Doogle is a web application that aggregates search results from YouTube, articles, academic papers, and blogs based on a user-defined search term. The application provides a simple and intuitive interface for users to find relevant content across multiple platforms.

Table of Contents
1.Features
2.Technologies Used
3.Setup Instructions
4.Usage
5.Contributing
6.License
7.Acknowledgments

* Features
Search across YouTube videos, articles, academic papers, and blogs.
Autocomplete suggestions for search terms.
Display results with relevant information, including titles, links, and additional metrics (views, likes).
A clean and responsive user interface.

* Technologies Used
Frontend: HTML, CSS, JavaScript
APIs:
YouTube Data API
Google Custom Search API
Hosting: Can be deployed on GitHub Pages, Netlify, or similar services.


* Setup Instructions
Clone the Repository: Clone the repository to your local machine using:
git clone https://github.com/yourusername/doogle.git
Navigate to the Project Directory:

cd doogle
Create Required Files: If not already present, create the following files:

index.html
styles.css
script.js
Create an images folder and add header-image.jpg and search-icon.png.
API Keys: Obtain your API keys and update them in script.js:

const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';
const GOOGLE_CSE_ID = 'YOUR_GOOGLE_CSE_ID';
const GOOGLE_CSE_API_KEY = 'YOUR_GOOGLE_CSE_API_KEY';
Open in Browser: Open index.html in a web browser to view and test the application.

Usage
Enter a search term in the input field.
Press "Enter" or click the "Search" button to retrieve results.
View results categorized by type (YouTube videos or articles).
Click on the links to access the content.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thank you to Google for providing the APIs used in this project.
Special thanks to the open-source community for continuous support and resources.
