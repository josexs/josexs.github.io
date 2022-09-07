const responseDev = httpGet('https://dev.to/api/articles?username=josexs')
const devArticles = JSON.parse(responseDev);

const articlesData = [];
console.log(devArticles.length)
devArticles.forEach((article) => {
    const data = {
        title: article.title,
        tags: article.tag_list,
        url: article.url,
        description: article.description,
        image: article.cover_image,
        created: article.published_at,
        readTimeMinutes: article.readable_publish_date,
        reactions: article.public_reactions_count
    }
    return articlesData.push(data)
})

const createTagsForArticles = () => {
  const tags = [];
  articlesData.map((item) => {
    item.tags.forEach((item) => {
      if (!tags.includes(item)) {
        tags.push(item);
      }
    });
  });

  const filterContainer = document.getElementById("filterArticles");
  filterContainer.innerHTML += `<button class="btn filter-btn active">Todos</button>`;

  tags.forEach((tag) => {
    filterContainer.innerHTML += `<button class="btn filter-btn capitalize">${tag}</button>`;
  });
};

const createArticlesCards = (data) => {
  let articleContainer = document.getElementById("article-container");
  articleContainer.innerHTML += `
            <div class="article-card" data-tags="${data.tags}">
                <div class="article-wrapper">

                    <p class="article-title">⭐️ ${data.title}</p>

                    <div class="project-body">
                        <h1 class="project-name">${data.title}</h1>
                        <p class="project-detail">${data.description}</p>
                        <a href="${data.url}" target="_blank" class="btn">Ver en Dev.to</a>
                    </div>
                </div>
            </div>
    `;
};

createTagsForArticles();
articlesData.forEach((data) => createArticlesCards(data));