const project = document.querySelector(".project");
const projectList = [
  {
    id: 1,
    number: "01",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "assets/project4.bmp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    number: "02",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "assets/project5.bmp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "assets/project12.webp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    number: "04",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "project12.webp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    number: "05",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "project12.webp",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    number: "06",
    title: "Spotify - UI Clone",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciun Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus provident reiciendis nesciunt ipsa facilis perferendis placeat, porro voluptate dignissimos? Voluptatibus eos libero null omnis saepe atque quia assumenda accusamus laudantium. Deserunt sed nulla, omnis id temporibus hic voluptates magnam repellat illo consequatur quibusdam ex dolorem harum quo. Sequi possimus facere itaque dolorem optio culpa. Quaera numquam ad sed dolores ut!",
    techStack: ["HTML", "CSS", "JAVASCRIPT", "REACT JS"],
    image: "project12.webp",
    liveLink: "#",
    githubLink: "#",
  },
];

let currentIndex = 0;
const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  project.innerHTML = `<div class="project-info">
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>
                    <div class="tech-stack">
                       ${projectContent?.techStack?.map((tech ,index)=>{
                        return`
                        <span key=${index}>${tech}</span>`;
                       }).join(",")}
                    </div>
                    <hr>
                    <div class="links">
                        <a href=${projectContent?.liveLink}
                        }><i class="ph ph-arrow-right"></i></a>
                        <a href=${projectContent?.githubLink}><i class="ph ph-github-logo"></i></a>
                    </div>
                      <div class="carousel"><img src="${projectContent?.image}" alt="${projectContent?.title}"/>

                    <div class="arrows">
                        <a href="#" id="previous" class="${previousDisabled?"disabled-btn":""}"><i class="ph ph-arrow-left"></i>
                        </a>
                        <a href="#" id="next" class="${nextDisabled?"disabled-btn":""}"><i class="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>`;
 document.getElementById("previous").addEventListener("click",(e)=>{
    e.preventDefault();
    if(currentIndex>0){
        currentIndex--;
        renderProject(currentIndex);
    }

 });

  document.getElementById("next").addEventListener("click",(e)=>{
    e.preventDefault();
    if(currentIndex<projectList.length-1){
        currentIndex++;
        renderProject(currentIndex);
    }

 });
};

renderProject(currentIndex);


