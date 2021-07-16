export const sidebarUser = {
	view: "template",
	css: "sidebarUser",
	height: 126,
	template() {
		let html = `
            <div class="userWrapp">
                <div class="userImg">
                    <img src="./photos/avatar.png">
                </div>
                <div class="userInfo">
                    <span class="userName">Elena Rollins</span>
                    <span class="userPosition">Administrator</span>
                </div>
            </div>
        `;
		return html;
	}
};
