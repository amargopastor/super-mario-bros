import { Point } from '../types/Point';

export interface IActor {
	position: Point;
	update: (delta: number) => void;
	draw: (delta: number, ctx: CanvasRenderingContext2D) => void;
	key_event_down: (key: string) => void;
	key_event_up: (key: string) => void;
}

export class Actor implements IActor {
	position: Point;
	constructor(position: Point) {
		this.position = position;
	}
	update(delta: number) {}
	draw(delta: number, ctx: CanvasRenderingContext2D) {}
	keyboard_event_down(key: string) {}
	keyboard_event_up(key: string) {}
}
