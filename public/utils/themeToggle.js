const getTheme = (() => {
	const localStorageTheme = localStorage?.getItem("Astrofolio-Theme") ?? "";
	if (["dark", "light"].includes(localStorageTheme)) {
		return localStorageTheme;
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return "light";
})();

if (getTheme === "light") {
	document.documentElement.classList.remove("dark");
} else {
	document.documentElement.classList.add("dark");
}

window.localStorage.setItem("Astrofolio-Theme", getTheme);

const toggleTheme = () => {
	const element = document.documentElement;
	element.classList.toggle("dark");

	const isDark = element.classList.contains("dark");
	localStorage.setItem("Astrofolio-Theme", isDark ? "dark" : "light");
};

document.querySelector("#theme__toggle")?.addEventListener("click", toggleTheme);
