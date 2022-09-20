const responseGithub = httpGet(
  "https://api.github.com/users/josexs/repos?per_page=100"
);
const githubProjects = JSON.parse(responseGithub);
const excludeProjects = "josexs.github.io josexs josexs-card";
const projectData = [
  {
    name: "CarsTournaments",
    image: `assets/img/carsTournaments.png`,
    detail: "Torneos ficticios para coches",
    github: "https://github.com/carsTournaments",
    tags: ["typescript", "Ionic"],
  },
];
githubProjects.forEach((project) => {
  const exclude = excludeProjects.includes(project.name);
  if (!exclude) {
    return projectData.push({
      name: project.name,
      image: `assets/img/${project.name}.png`,
      detail: project.description ?? "",
      github: project.html_url,
      tags: project.topics,
    });
  }
});

const createTagsForProjects = () => {
  const tags = [];
  projectData.map((item) => {
    item.tags.forEach((item) => {
      if (!tags.includes(item)) {
        tags.push(item);
      }
    });
  });

  const filterContainer = document.getElementById("filterProjects");
  filterContainer.innerHTML += `<button class="btn filter-btn filter-project active">Todos</button>`;

  tags.forEach((tag) => {
    filterContainer.innerHTML += `<button class="btn filter-btn filter-project capitalize">${tag}</button>`;
  });
};

const createProjectCards = (data) => {
  let projectContainer = document.getElementById("project-container");

  projectContainer.innerHTML += `
            <div class="project-card" project-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="assets/img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-image" alt="${data.name}">
                        <span class="tags capitalize">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" target="_blank" class="btn">Ver en Github</a>
                    </div>
                </div>
            </div>
    `;
};

createTagsForProjects();
projectData.forEach((data) => createProjectCards(data));

// project cards open and close functions
const projects = document.querySelectorAll(".project-card");

projects.forEach((card, index) => {
  let closeBtn = card.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    projects.forEach((item, i) => {
      item.classList.remove("blur");
    });
    card.classList.remove("active");
  });

  card.addEventListener("click", (e) => {
    if (e.path[0] != closeBtn) {
      projects.forEach((item, i) => {
        if (i != index) {
          item.classList.add("blur");
        }
      });
      card.classList.add("active");
    }
  });
});

// project filter function
const tagsProjects = document.querySelectorAll(".filter-project");
tagsProjects.forEach((btn) => {
  btn.addEventListener("click", () => {
    projects.forEach((card) => {
      if (btn.innerHTML.toLowerCase() == "todos") {
        card.style.display = "block";
      } else {
        if (
          card
            .getAttribute("project-tags")
            .includes(btn.innerHTML.toLowerCase())
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

    tagsProjects.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});
