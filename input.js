export class InputHandler {
	constructor(game) {
		this.game = game;
		this.keys = [];
		window.addEventListener("keydown", (e) => {
			if ((e.key === "ArrowDown" || e.key === "s" || e.key === "ArrowUp" || e.key === "z" || e.key === "ArrowLeft" || e.key === "q" || e.key === "ArrowRight" || e.key === "d" || e.key === "Enter") && this.keys.indexOf(e.key) === -1) {
				this.keys.push(e.key);
			} else if (e.key === "t") this.game.debug = !this.game.debug;
			// console.log(e.key, this.keys);
		});
		window.addEventListener("keyup", (e) => {
			if (e.key === "ArrowDown" || e.key === "s" || e.key === "ArrowUp" || e.key === "z" || e.key === "ArrowLeft" || e.key === "q" || e.key === "ArrowRight" || e.key === "d" || e.key === "Enter") {
				this.keys.splice(this.keys.indexOf(e.key), 1);
			}
			// console.log(e.key, this.keys);
		});
	}
}
