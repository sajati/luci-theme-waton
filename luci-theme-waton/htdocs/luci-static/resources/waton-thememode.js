var themeModeSwitcher = document.querySelector("#topbar > #topbar-right #themeModeSwitcher"),
dynamicStyle = document.querySelector("#dynamicstylesheet");

function init() {
	if ((typeof(Storage) !== "undefined")) {
		themeModeSwitcher.addEventListener('click',changeThemeMode);
		if (localStorage.currentTheme) {
			if ((localStorage.getItem("currentTheme") === "light")) {
				themeModeSwitcher.classList.remove('themeModeSwitchNight');
				themeModeSwitcher.classList.add('themeModeSwitchDay');
				dynamicStyle.href = "/luci-static/waton/stylesheets/night.css";
			} else {
				themeModeSwitcher.classList.remove('themeModeSwitchDay');
				themeModeSwitcher.classList.add('themeModeSwitchNight');
				dynamicStyle.href = "/luci-static/waton/stylesheets/day.css";
			}
		} else {
			localStorage.currentTheme = "light";
			dynamicStyle.href = "/luci-static/waton/stylesheets/day.css";
			themeModeSwitcher.classList.remove('themeModeSwitchNight');
			themeModeSwitcher.classList.add('themeModeSwitchDay');
		}
	} else {
		themeModeSwitcher.addClass("hidden");
	}
}
function changeThemeMode() {
	if ((localStorage.getItem("currentTheme") === "light")) {
		localStorage.setItem("currentTheme","dark");
		themeModeSwitcher.classList.remove('themeModeSwitchNight');
		themeModeSwitcher.classList.add('themeModeSwitchDay');
		dynamicStyle.href = "/luci-static/waton/stylesheets/night.css";
	} else {
		localStorage.setItem("currentTheme","light");
		themeModeSwitcher.classList.remove('themeModeSwitchDay');
		themeModeSwitcher.classList.add('themeModeSwitchNight');
		dynamicStyle.href = "/luci-static/waton/stylesheets/day.css";
	}
}

init();