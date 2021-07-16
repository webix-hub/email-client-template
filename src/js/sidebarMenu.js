import {dataSidebarMenu} from "../data/dataSidebarMenu";

export const sidebarMenu = {
	view: "sidebar",
	css: "webix_dark sidebarMenu",
	select: true,
	height: 230,
	data: dataSidebarMenu,
	template(obj) {
		if (obj.badge) {
			return `<div class="flex spaceBetween alignCenter"><span><span class="webix_icon webix_sidebar_icon ${obj.icon}"></span><span>${obj.value}</span></span><span class="sidebarBadge">${obj.badge}</span>`;
		}
		return `<span class="webix_icon webix_sidebar_icon ${obj.icon}"></span><span>${obj.value}</span>`;
	},
	ready() {
		this.select(1);
	}
};
