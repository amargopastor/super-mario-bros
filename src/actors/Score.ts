import { Point } from '../types/Point';
import { Actor } from './Actor';

export class Score extends Actor {
	score: number;
	constructor(initialPos: Point = { x: 100, y: 15 }) {
		super(initialPos);
		this.score = 0;
	}
	update() {}
	keyboard_event() {}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		this.score += 1;
		ctx.font = '15px Arial';
		ctx.fillStyle = 'black';
		ctx.fillText(
			`SCORE:${(this.score / 30).toFixed(0)}`,
			this.position.x,
			this.position.y
		);
	}
}
