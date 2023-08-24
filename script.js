// script.js
document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedTag = tag.textContent;

            // Toggle 'selected' class on clicked tag
            tag.classList.toggle('selected');

            // Get all articles and their tags
            const articles = document.querySelectorAll('.article');

            articles.forEach(article => {
                const articleTags = Array.from(article.querySelectorAll('.tag'));

                if (tag.classList.contains('selected')) {
                    // Show articles with selected tag
                    article.style.display = articleTags.some(tag => tag.textContent === selectedTag) ? 'block' : 'none';
                } else {
                    // Show all articles if no tag selected
                    article.style.display = 'block';
                }
            });
        });
    });
});

