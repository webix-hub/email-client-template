import {dataMail} from "../data/dataMail";

export const replyToBlock = {
	view: "template",
	borderless: true,
	height: 34,
	template(obj) {
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
			<div class="tableRow paddedRow flex">
				<div class="tableLeft">
					<span class="smTextLight">to:</span>
				</div>
				<div class="tableRight smText">
					${mailTo.join(",&nbsp;")}
				</div>
			</div>
		`;
		return html;
	},
	data: dataMail
};
