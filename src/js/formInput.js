import {dataMail} from "../data/dataMail";

export const formInput = {
	cols: [
		{
			view: "template",
			borderless: true,
			width: 58,
			template(obj) {
				const html = `
						<div class="inboxImg">
							<img src="${obj.ownerAvatar}" />
						</div>
					`;
				return html;
			},
			data: dataMail
		},
		{
			view: "textarea",
			css: "mailTextArea",
			placeholder: "Type here"
		}
	]
};
