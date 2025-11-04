const toggle = document.getElementById("menu-toggle");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}

const words = ["Developer", "Freelancer", "Gamer", "Bounty Hunter", "Coder"];

const typing = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nexWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nexWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

type();

const navlinks = document.querySelectorAll(".navlink");

const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    navlinks.forEach((l) => {
      if (l == link) {
        l.classList.add("active");
      } else {
        l.classList.remove("active");
      }
    });

    const tabName = link.dataset.tab;
    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (tabName === "services") {
      const serviceList = [
        {
          id: 1,
          icon: "ph-code",
          text: "Web Development",
          para : "I build responsive and modern website using the latest technologies HTML, CSS, JavaScript, React and MERN Stack "
        },
        {
          id: 2,
          icon: "ph ph-paint-brush",
          text: "UI/UX Design",
          para : "I build responsive and modern website using the latest technologies HTML, CSS, JavaScript, React and MERN Stack "
        },
        {
          id: 3,
          icon: "ph ph-trend-up",
          text: "SEO Optimization",
          para : "I have expertise in SEO optimization, including on-page, off-page, and technical SEO practices. Skilled at conducting keyword research, optimizing content, improving site structure, and implementing strategies that drive higher search engine rankings and organic traffic."
        },
        {
          id: 4,
          icon: "ph ph-files",
          text: "Linux Shell Scripting",
          para : "I have hands-on experience in Linux shell scripting, where I create automation scripts for repetitive tasks, manage system operations, and streamline workflows. Skilled in writing efficient Bash scripts to handle backups, log monitoring, and system management."
        },
        {
          id: 5,
          icon: "ph ph-bug",
          text: "Bug Bounty Hunting",
          para : "I build responsive and modern website using the latest technologies HTML, CSS, JavaScript, React and MERN Stack"
        },
        {
          id: 6,
          icon: "ph ph-aperture",
          text: "Photography",
          para : "I build responsive and modern website using the latest technologies HTML, CSS, JavaScript, React and MERN Stack"
        },
    
      ];

      const services=document.getElementsByClassName("service-list");

      const innerContent=serviceList.map((l)=>{
        return `
        <div class="box" key=${l?.id}>
                <div class="head-icons">
                   <i class="ph ${l?.icon}"></i>
                   <span><i class="ph ph-arrow-down"></i></span>
                </div>
                <h3>${l?.text}</h3>
                <span class="spacer"></span>

                <p>
                ${l?.para}</p>
            </div>
        `;

      }).join("");
      Array.from(services).forEach((ele)=>{
        ele.innerHTML=innerContent;
      });
    
    }
    
    toggle.checked=false;
  });
});
