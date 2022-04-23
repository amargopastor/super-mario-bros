import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { Actor } from './Actor';
import { checkLimits } from '../utils/checkLimits';
import { MarioKey, KeyboardMap, KEYMAP } from '../utils/keyboardMap';

export class Mario extends Actor {
	marioSize: Size;
	marioColor: string;
	marioSpeed: number;
	marioAceleration: number;
	keyboardMap: KeyboardMap;

	constructor(
		initialPos: Point = { x: 10, y: 100 },
		size: Size = { w: 30, h: 15 }
	) {
		super(initialPos);
		this.marioSize = size;
		this.marioColor = 'red';
		this.marioSpeed = 0;
		this.marioAceleration = 0;
		this.keyboardMap = KEYMAP;
	}
	update(delta: number) {
		// Establecemos una velocidad en relación a la aceleración
		this.marioSpeed = this.marioSpeed * 0.9 + this.marioAceleration;
		let newPos: Point = {
			x: this.position.x + this.marioSpeed * delta,
			y: this.position.y,
		};
		if (checkLimits(newPos)) {
			this.position = newPos;
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = 'red';
		ctx.fillRect(
			this.position.x,
			this.position.y,
			this.marioSize.w,
			this.marioSize.h
		);
	}
	keyboard_event_down(key: string) {
		let tecla = this.keyboardMap[key];
		if (tecla == MarioKey.LEFT) {
			this.marioAceleration = -5;
		} else if (tecla == MarioKey.RIGHT) {
			this.marioAceleration = 5;
		}
	}
	keyboard_event_up(key: string) {
		let tecla = this.keyboardMap[key];
		if (tecla == MarioKey.RIGHT) {
			this.marioAceleration = 0;
		} else if (tecla == MarioKey.LEFT) {
			this.marioAceleration = 0;
		}
	}
}
