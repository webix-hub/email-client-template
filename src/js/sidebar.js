import {sidebarUser} from "./sidebarUser";
import {sidebarMenu} from "./sidebarMenu";
import {sidebarTags} from "./sidebarTags";

export const sidebar = {
	view: "scrollview",
	scroll: "auto",
	css: "leftSidebar",
	width: 270,
	body: {
		margin: 10,
		rows: [
			sidebarUser,
			{
				view: "button",
				css: "webix_primary",
				type: "icon",
				icon: "wxi-plus",
				label: "Compose",
				inputWidth: 240,
				align: "center"
			},
			sidebarMenu,
			sidebarTags
		]
	}
};
