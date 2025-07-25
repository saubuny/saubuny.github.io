let projects = [
	{
		link: "https://github.com/saubuny/saubuny.github.io",
		title: "my website",
		desc: "this boring thing",
	},
	{
		link: "https://github.com/saubuny/goldshi",
		title: "(wip) goldshi",
		desc: "simple cli ppm image manipulation named after silly horse girl",
	},
];

const cards = document.querySelector(".cards");
for (let project of projects) {
	cards.innerHTML += `
        <div class="card">
            <a href="${project.link}" target="_blank">
                ${project.title}
            </a>
            <p>${project.desc}</p>
        </div>`;
}
