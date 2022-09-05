let projectData = [
  {
    image: "assets/img/project-1.png",
    name: "project one",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #fullstack, #css",
  },
  {
    image: "assets/img/project-2.png",
    name: "project two",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript, #css",
  },
  {
    image: "assets/img/project-3.png",
    name: "project three",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript",
  },
  {
    image: "assets/img/project-4.png",
    name: "project four",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#fullstack, #css",
  },
  {
    image: "assets/img/project-5.png",
    name: "project five",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#fullstack",
  },
  {
    image: "assets/img/project-6.png",
    name: "project six",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#css",
  },
  {
    image: "assets/img/project-7.png",
    name: "project seven",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#javascript",
  },
  {
    image: "assets/img/project-8.png",
    name: "project eight",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl",
    github: "#",
    live: "#",
    tags: "#css",
  },
];

const createTags = () => {
  const tags = [];
  projectData.map((item) => {
    const tagItems = item.tags.split(", ");
    tagItems.forEach((item) => {
      const itemA = item.split("#");
      const itemNotHash = itemA[1];
      if (!tags.includes(itemNotHash)) {
        tags.push(itemNotHash);
      }
    });
  });

  const filterContainer = document.querySelector(".filter");
  filterContainer.innerHTML += `<button class="btn filter-btn active">Todos</button>`;

  tags.forEach((tag) => {
    filterContainer.innerHTML += `<button class="btn filter-btn">${tag}</button>`;
  });
};

const createProjectCards = (data) => {
  let projectContainer = document.querySelector(".project-container");

  projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="assets/img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `;
};

createTags();
projectData.forEach((data) => createProjectCards(data));
