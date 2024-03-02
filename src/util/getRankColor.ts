export default (rank?: string) => {
	let color = undefined;

	switch (rank) {
		case "[ADMIN]":
		case "[YOUTUBE]":
			color = 0xff5555;
			break;
		case "[MVP++]":
			color = 0xffaa00;
			break;
		case "[MVP+]":
		case "[MVP]":
			color = 0x55ffff;
			break;
		case "[VIP+]":
		case "[VIP]":
			color = 0x55ff55;
	}

	return color;
};
