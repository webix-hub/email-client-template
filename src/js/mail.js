import {mailHead} from "./mailHead";
import {mailHeadControls} from "./mailHeadControls";
import {mailContent} from "./mailContent";
import {replyControls} from "./replyControls";
import {replyToBlock} from "./replyToBlock";
import {formControls} from "./formControls";
import {formInput} from "./formInput";

export const mail = {
	type: "line",
	rows: [
		{
			height: 208,
			type: "clean",
			cols: [
				mailHead,
				mailHeadControls
			]
		},
		mailContent,
		{
			view: "form",
			padding: {left: 10, right: 18},
			height: 250,
			elements: [
				{
					margin: 10,
					rows: [
						replyControls,
						replyToBlock,
						formInput,
						formControls
					]
				}
			]
		}
	]
};
