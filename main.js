let projects = [
	{
		link: "https://github.com/saubuny/saubuny.github.io",
		title: "portfolio",
		desc: "the website you are on right now",
	},
	{
		link: "https://github.com/saubuny/tuisic",
		title: "tuisic",
		desc: "a tui music player for linux",
	},
	{
		link: "https://github.com/saubuny/chip8",
		title: "chip8 emulator",
		desc: "a semi-functional chip8 emulator/interpreter",
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

let darkMode = document.cookie
	.split(";")
	.some((item) => item.trim().includes("dark_mode=true"));

const button = document.querySelector("button");
const root = document.querySelector(":root");

const changeTheme = () => {
	if (darkMode) {
		root.style.color = "#fbf1c7";
		root.style.backgroundColor = "black";
		button.innerHTML = "light";
	} else {
		root.style.color = "#282828";
		root.style.backgroundColor = "white";
		button.innerHTML = "dark";
	}
};

const buttonHandler = () => {
	darkMode = !darkMode;
	changeTheme();
	document.cookie = `dark_mode=${darkMode}`;
};

changeTheme();
