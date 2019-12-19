let colorArray = ["#051e3e","#251e3e","#451e3e","#651e3e",
                "#851e3e","#ffffff","#d0e1f9","#4d648d",
                "#283655","#1e1f26","#6e7f80","#536872",
                "#708090","#536878","#36454f","#4b3832",
                "#854442","#fff4e6","#3c2f2f","#be9b7b"],
    projects = [
        {
            id: "1",
            name: "QA Tool",
            tech: "GSuite, HTML5, CSS3, JS, Materialize Framework",
            description: "A web app that is used by Quality Auditors to audit cases.",
            contribution: "Revamped existing project for better UI/UX.",
            color: "#536878",
            image: "../images/qa.svg"
        },
        {
            id: "2",
            name: "Endgame Contingency Tool",
            tech: "GSuite, HTML5, CSS3, JS, Materialize Framework",
            description: "A backup for the main tool that was used for processing cases.",
            contribution: "Revamped existing project for better UI/UX.",
            color: "#4D648D",
            image: "../images/endgame.svg"
        },
        {
            id: "3",
            name: "Yey Chrome Extension",
            tech: "HTML5, CSS3, JS, Materialize Framework",
            description: "A chrome extension that optimizes reviewing cases.",
            contribution: "Created new tool",
            color: "#3C2F2F",
            image: "../images/yey.svg"
        },
        {
            id: "4",
            name: "Cases Tracker Extension",
            tech: "GSuite, HTML5, CSS3, JS, Materialize Framework",
            description: "A chrome extension that is used for tracking cases.",
            contribution: "Revamped existing project for better UI/UX.",
            color: "#1E1F26",
            image: "../images/casestracker.svg"
        },
        {
            id: "5",
            name: "BLS2 Tool",
            tech: "GSuite, HTML5, CSS3, JS, Materialize Framework",
            description: "A chrome extension that scrape and save data from PLX to Google Sheets",
            contribution: "Created new tool",
            color: "#4B3832",
            image: "../images/bls2tool.svg"
        },
        {
            id: "6",
            name: "Focus Analyst Tool",
            tech: "GSuite, HTML5, CSS3, JS, Vue, Vuetify",
            description: "A web app that serves as a processing tool for Focus Analysts",
            contribution: "Created new tool",
            color: "#051E3E",
            image: "../images/focusanalyst.svg"
        },
    ];

    console.table(projects);

const mobileBtn = document.querySelector('.mobile-menu-btn'),
    secPortfolio = document.querySelector('#sec-portfolio');



mobileBtn.addEventListener('click', () => {
    document.querySelector('#mobile-nav').classList.toggle('show');
});
          
// Portfolio Projects Templating

projects.forEach((project) => {

    let newProject = document.createElement('div');
    newProject.classList.add('project');
    newProject.innerHTML = `
        <img class="project-img" src="${project.image}">
        <div class="project-label">${project.name}</div>
    `;
    newProject.style.background = project.color;


    secPortfolio.append(newProject);
});


