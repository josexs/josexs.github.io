// project cards open and close functions
let projects = document.querySelectorAll(".project-card");

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
const tags = document.querySelectorAll(".filter-btn");

tags.forEach((btn) => {
  btn.addEventListener("click", () => {
    projects.forEach((card) => {
      if (btn.innerHTML.toLowerCase() == "todos") {
        card.style.display = "block";
      } else {
        if (
          card.getAttribute("data-tags").includes(btn.innerHTML.toLowerCase())
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

    tags.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
  });
});

// nav toggle
let links = document.querySelectorAll(".links");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// toggle navbar in mobile view
const toggleBtn = document.querySelector(".toggle-btn");
const ul = document.querySelector(".nav-links-container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  ul.classList.toggle("active");
});


const aboutMe = () => {
  const github = document.getElementById('github');
  const linkedin = document.getElementById('linkedin');
  const info = document.getElementById('info');
  github.href = 'https://github.com/josexs';
  linkedin.href = 'https://www.linkedin.com/in/jose-xs-gomez/';
  info.innerHTML = `Madrileño de 35 años, autodidacta desde los 10 años en el mundo de la informática. <br><br>

  Aprendiendo a desarrollar con 15 años, he ido creando webs, aplicaciones frontend y backend, en diferentes lenguajes.<br><br>
  
  En mis ratos libres, me dedico a desarrollar un nuevo proyecto hibrido llamado CarsTournaments, con Ionic 6, Angular 12, y NodeJS<br>`;
}

const skills = () => {
  const skills = ['HTML', 'CSS3', 'SASS', 'Javascript', 'Typescript', 'Python', 'Markdown', 'Dart', 'Shell', 'Ionic', 'Angular', 'AngularJS', 'Capacitor', 'Bootstrap', 'ExpressJS', 'Flutter'];
  const skillsDiv = document.getElementById('skills');
  skills.forEach((skill)=> skillsDiv.innerHTML += `<p class="skill-name">${skill}</p>`)
}

aboutMe()
skills()