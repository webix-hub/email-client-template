import {dataMail} from "../data/dataMail";

export const mailHead = {
	view: "template",
	css: "mailHead",
	template(obj) {
		let numOfRecipi = obj.to.length - 2;
		let formatDate = webix.Date.dateToStr("%d.%m.%Y");
		let formatTime = webix.i18n.timeFormatStr(obj.date);
		let mailTo = [];
		obj.to.forEach((item) => {
			mailTo.push(`
			<span class="mailItem">
				<span class="boldText">${item.name}</span>
				<span>&lt;${item.email}&gt;</span>
			</span>
			`);
		});
		const html = `
			<div class="inboxWrapp flex wide">
				<div class="inboxLeft">
					<div class="inboxImg">
						<img src="${obj.authorAvatar}" />
						<div class="inboxState ${obj.online ? "online" : "offline"}"></div>
					</div>
				</div>
				<div class="flex flexColumn wide">
					<div class="flex spaceBetween alignCenter wide">
						<span class="flex alignCenter">
							<span class="inboxUser boldText">${obj.author}</span>
							<span class="inboxTag mailTag mdi mdi-tag ${obj.tag}"></span>
						</span>
						<span class="smTextLight">${formatDate(obj.date)}, ${formatTime}</span>
					</div>
					<div class="smTextLight flex alignCenter pointer">
						<span>to: </span>
						<span>me, ${obj.to[1].email} and ${numOfRecipi} more</span>
						<span class="mailTo mdi mdi-menu-down"></span>
					</div>
					<span class="mailSubject boldText">${obj.subject}</span>
					<div class="mailInfoTable flex flexColumn">
						<div class="tableRow flex">
							<div class="tableLeft">
								<span class="smTextLight">from:</span>
							</div>
							<div class="tableRight smText ">
								<span class="mailItem">
									<span class="boldText">${obj.author}</span>
									<span>&lt;${obj.authorEmail}&gt;</span>
								</span>
							</div>
						</div>
						<div class="tableRow flex">
							<div class="tableLeft">
								<span class="smTextLight">to:</span>
							</div>
							<div class="tableRight smText">
								${mailTo.join(",&nbsp;")}
							</div>
						</div>
						<div class="tableRow flex">
							<div class="tableLeft">
								<span class="smTextLight">when:</span>
							</div>
							<div class="tableRight smText ">
								<span>${formatDate(obj.date)}, ${formatTime}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
		return html;
	},
	data: dataMail
};
