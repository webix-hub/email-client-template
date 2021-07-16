export const header = {
	view: "toolbar",
	css: "webix_dark",
	padding: {left: 20, right: 20, top: 8, bottom: 8},
	height: 76,
	margin: 12,
	cols: [
		{
			view: "label",
			label: "EMAIL CLIENT",
			width: 236
		},
		{
			rows: [
				{},
				{
					view: "search",
					placeholder: "Search",
					width: 282
				},
				{}
			]
		},
		{},
		{
			view: "icon",
			icon: "mdi mdi-information"
		},
		{
			view: "icon",
			icon: "mdi mdi-bell",
			badge: 5
		},
		{
			view: "icon",
			icon: "mdi mdi-settings"
		}
	]
};
