export const replyControls = {
	view: "template",
	borderless: true,
	height: 28,
	template() {
		return `
		<span class="flex alignCenter replyTo">
			<span class="mdi mdi-share-all mdi-flip-h"></span>
			<span class="mdi mdi-menu-down"></span>
		</span>`;
	}
};
