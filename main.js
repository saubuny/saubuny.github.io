let projects = [
	{
		link: "https://github.com/saubuny/goldshi",
		title: "(wip) goldshi",
		desc: "simple cli image manipulation named after silly horse girl",
	},
	{
		link: "https://github.com/saubuny/saubuny.github.io",
		title: "my website",
		desc: "this boring thing",
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
