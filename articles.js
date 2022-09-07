const responseDev = httpGet('https://dev.to/api/articles?username=josexs')
const devArticles = JSON.parse(responseDev);

const articlesData = [];
devArticles.forEach((article) => {
    const data = {
        title: article.title,
        tags: article.tag_list,
        url: article.url,
        description: article.description,
        image: article.social_image,
        created: article.published_at,
        readTimeMinutes: article.readable_publish_date,
        reactions: article.public_reactions_count
    }
    return articlesData.push(data)
})

console.group(devArticles);

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
  filterContainer.innerHTML += `<button class="btn filter-btn filter-article active">Todos</button>`;

  tags.forEach((tag) => {
    filterContainer.innerHTML += `<button class="btn filter-btn filter-article capitalize">${tag}</button>`;
  });
};

const createArticlesCards = (data) => {
  let articleContainer = document.getElementById("article-container");
  articleContainer.innerHTML += `
    <div class="article-card" data-tags="${data.tags}" data-url="${data.url}">
      <div class="article-wrapper">
        <div class="article-thumbnail">
            <img src="assets/img/close.png" class="close-btn" alt="">
            <img src="${data.image}" class="article-image" alt="${data.name}">
        </div>
        <div class="article-body">
          <p class="article-title">${data.title}</p>
          <p class="article-detail">${data.description}</p>
          <p class="article-tags">${data.tags}</p>
        </div>
      </div>
    </div>
  `;
};

createTagsForArticles();
articlesData.forEach((data) => createArticlesCards(data));

// article cards open link
const articles = document.querySelectorAll(".article-card");
console.log({articles})

articles.forEach((card) => {
  card.addEventListener("click", (e) => {
    const url = card.getAttribute("data-url");
    window.open(url, '_blank');
  });
});


// article filter function
const tagsArticles = document.querySelectorAll(".filter-article");
tagsArticles.forEach((btn) => {
  btn.addEventListener("click", () => {
    articles.forEach((card) => {
      if (btn.innerHTML.toLowerCase() == "todos") {
        card.style.display = "block";
      } else {
        console.log(card.getAttribute("data-tags"));
        if (card.getAttribute("data-tags").includes(btn.innerHTML.toLowerCase())) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

    tagsArticles.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});