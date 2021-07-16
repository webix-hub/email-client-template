import {dataInbox} from "../data/dataInbox";

export const inbox = {
	width: 360,
	rows: [
		{
			view: "toolbar",
			css: "inboxBg",
			padding: {left: 10},
			height: 56,
			cols: [
				{
					view: "richselect",
					css: "inboxMenu",
					value: 1,
					width: 100,
					options: [
						{id: 1, value: "Recent"},
						{id: 2, value: "Work"},
						{id: 3, value: "Friends"}
					]
				},
				{},
				{
					view: "icon",
					icon: "mdi mdi-refresh"
				}
			]
		},
		{
			view: "list",
			css: "inboxBg",
			select: true,
			type: {
				height: 112,
				css: "inboxItem",
				template(obj) {
					const html = `
						<div class="inboxWrapp flex ${obj.status || ""}">
							<div class="inboxLeft">
								<div class="inboxImg">
									<img src="${obj.avatar}" />
									<div class="inboxState ${obj.online ? "online" : "offline"}"></div>
								</div>
							</div>
							<div class="flex flexColumn wide">
								<div class="flex spaceBetween wide">
									<span class="inboxUser">${obj.user}</span>
									<span class="smTextLight">${obj.time}</span>
								</div>
								<div class="inboxSubject">${obj.subject}</div>
								<div class="flex spaceBetween alignCenter wide">
									<span class="inboxMessage">${obj.prevMessage}</span>
									<span class="inboxTag mdi mdi-tag ${obj.tag}"></span>
								</div>
							</div>
							
						</div>
					`;
					return html;
				}
			},
			ready() {
				this.select(1);
			},
			data: dataInbox
		}
	]
};
