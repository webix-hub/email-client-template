import {dataMail} from "../data/dataMail";

export const mailContent = {
	view: "template",
	scroll: "auto",
	template(obj) {
		return `
			<div class="mailWrapper">
				<div class="mailInner">
					<img src="${obj.attach}" alt="attach image" />
					<h1>${obj.subject}</h1>
					<p>${obj.text}</p>
					<p>${obj.text}</p>
					<p>${obj.text}</p>
				</div>
			</div>
		`;
	},
	data: dataMail
};
