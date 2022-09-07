const responseGithub = httpGet('https://api.github.com/users/josexs/repos?per_page=100')
const githubProjects = JSON.parse(responseGithub);
const excludeProjects = 'josexs.github.io josexs josexs-card';
const projectData = [];
githubProjects.forEach((project) => {
  const exclude = excludeProjects.includes(project.name)
  if (!exclude) {
    return projectData.push({
      name: project.name,
      image: `assets/img/${project.name}.png`,
      detail: project.description ?? '',
      github: project.html_url,
      live: project.homepage ?? '',
      tags: project.topics
    })
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
  console.log(filterContainer)
  filterContainer.innerHTML += `<button class="btn filter-btn active">Todos</button>`;

  tags.forEach((tag) => {
    filterContainer.innerHTML += `<button class="btn filter-btn capitalize">${tag}</button>`;
  });
};

const createProjectCards = (data) => {
  let projectContainer = document.getElementById("project-container");

  projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
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
