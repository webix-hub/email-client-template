import {header} from "./js/header";
import {sidebar} from "./js/sidebar";
import {inbox} from "./js/inbox";
import {mail} from "./js/mail";

// SCSS
import "./styles/main.scss";

webix.ready(() => {
	if (!webix.env.touch && webix.env.scrollSize) {
		webix.CustomScroll.init();
	}

	webix.ui({
		rows: [
			header,
			{
				type: "clean",
				cols: [
					sidebar,
					{
						cols: [
							inbox,
							mail
						]
					}
				]
			}
		]
	});
});
