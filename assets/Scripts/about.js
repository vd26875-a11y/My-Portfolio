

const aboutTabs=document.querySelectorAll(".tab");
const aboutTabContent=document.querySelectorAll(".tab-content");


aboutTabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
     e.preventDefault();
     
     
     aboutTabs.forEach((t)=>{
     if(t===tab){
        t.classList.add("active");
     }
     else{
        t.classList.remove("active");
     }
     });

     aboutTabContent.forEach((t)=>{
        t.classList.remove("active");
     });
       
     const activeTab = tab.dataset.section;

     document.getElementById(activeTab).classList.add("active");

     if (activeTab === "experience"){
        
        const experiences=document.querySelector(".experience-list");

        const experienceList=[{
            id: 1,
            date: "2021 - 2022",
            position: "Freelance Web Developer",
            company: "Wipro",
            details: "Developed custom  website for local bussinesses using HTML, CSS, JavaScript and WordPress. Focused on performance, SEO and mobile-first design."  
        },
        {
            id: 2,
            date: "2021 - 2022",
            position: "MERN Stack Inter",
            company: "Accenture",
            details: "Developed custom  website for local bussinesses using HTML, CSS, JavaScript and WordPress. Focused on performance, SEO and mobile-first design."  
        }];

        const experienceContent=experienceList.map(
            (ele)=>{
             
                return `
                <div class="experience-box"
                key=${ele?.id}>
                 <h4>${ele?.date}</h4>
                 <h3>${ele?.position}</h3>
                 <div
                 class="company-name">
                 <span></span>
                 <p>${ele?.company}</p>
                 </div>
                 <p>${ele?.details}</p>
                 </div>
                `;
            }).join("");

            if(experiences){
                experiences.innerHTML=experienceContent;
            }

     }else if(activeTab==="education"){
        const education =document.querySelector(".education-list");
        const educationList=[{
            id: 1,
            date: "2023 - 2026",
            education: "BCA Specializatin in (Cyber Security & Forensics)",
            institution: "Babu Banarasi Das University, Faizabaad road, Lucknow",
            details: "Currently I'm pursuing my BCA degree in "

        },
        {
            id: 2,
            date: "2023",
            education: "XI with (PCB)",
            institution: "D.A.V Inter College Balrampur, Uttar Pradesh",
            details: ""

        },
        {
            id: 3,
            date: "2020",
            education: "X with Mathemathics",
            institution: "Balrampur Modern School Balrampur, Uttar Pradesh - 271201",
            details: ""

        }
    ];
        const educationContent=educationList.map((ele)=>{
            return `
            <div class="experience-box"
                key=${ele?.id}>
                 <h4>${ele?.date}</h4>
                 <h3>${ele?.education}</h3>
                 <div
                 class="company-name">
                 <span></span>
                 <p>${ele?.institution}</p>
                 </div>
                 <p>${ele?.details}</p>
                 </div>
            `
        }).join("");
        if(education){
            education.innerHTML=educationContent;
        }
     }else if(activeTab==="skills"){
        const skills=document.querySelector(".skills-list");

        const skillList=[{
            id: 1,
            name: "HTML - Hyper Text Markup Language",
            icon: "assets/html.png"
        },
        { 
            id: 2,
            name: "CSS - Cascading Style Sheet",
            icon: "assets/css.png"
        },
        {
            id: 3,
            name: "JavaScript",
            icon: "assets/JavaScript-logo.png"
        },
         {
            id: 4,
            name: "Java - Object Oriented Programming",
            icon: "assets/Java-logo.png"
        },
        {
            id: 5,
            name: "Linux Shell Scripting",
            icon: "assets/Kali-Linux.png"
        },
        {
            id: 6,
            name:"React JS",
            icon: "assets/React-JS.png"
        },
        //   {
        //     id: 7,
        //     name: "Java - Object Oriented Programming",
        //     icon: "Java-logo.webp"
        // },
        // {
        //     id: 8,
        //     name: "Linux Shell Scripting",
        //     icon: "Kali-Linux.jpg"
        // },
        // {
        //     id: 9,
        //     name:"React JS",
        //     icon: "React-JS.webp"
        // },
        //   {
        //     id: 10,
        //     name: "Java - Object Oriented Programming",
        //     icon: "Java-logo.webp"
        // },
        // {
        //     id: 11,
        //     name: "Linux Shell Scripting",
        //     icon: "Kali-Linux.jpg"
        // },
        // {
        //     id: 12,
        //     name:"React JS",
        //     icon: "React-JS.webp"
        // },
    ]
    
       const skillContent=skillList.map((ele)=>{
        return `
        <div class="skills-box" key=${ele?.id}>
           <img src=${ele?.icon} alt=${ele?.name} title=${ele?.name} loading="lazy"/>
         </div>
        `;
       }).join("");

       if(skills){
        skills.innerHTML=skillContent;
       }
     }else if(activeTab==="about-me"){
        const aboutMe=document.querySelector(".about-list");
        const aboutList=[
        {
            id: 1,
            key: "Name:",
            value: "Vikas Dubey"
        },
        {
            id: 2,
            key: "Country:",
            value: "India"
        },
        {
            id: 3,
            key: "Habits:",
            value: "Hitting GYM"
        },
        {
            id: 4,
            key: "Role:",
            value: "Frontend Developer"
        },
        {
            id: 5,
            key: "Address:",
            value: "Manaspuri, Balrampur, Uttar Pradesh - 271201"
        }
    ]
        const aboutMeContent=aboutList.map((ele)=>{
            return `<div class="about-box" key=${ele?.id}>
            <span>${ele?.key}</span>
            <span> ${ele.value}</span>
            </div>
            `;
        }).join("");
        if(aboutMe){
            aboutMe.innerHTML=aboutMeContent;
        }
     }

})

    }
);

if(aboutTabs){
    aboutTabs[0].click();
}
