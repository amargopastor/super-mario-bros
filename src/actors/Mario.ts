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
	jumSpeed: number;
	jump: boolean;

	constructor(
		size: Size = { w: 30, h: 30 },
		initialPos: Point = { x: 10, y: 350 }
	) {
		super(initialPos);
		this.marioSize = size;
		this.marioColor = 'red';
		this.marioSpeed = 0;
		this.marioAceleration = 0;
		this.keyboardMap = KEYMAP;
		this.jumSpeed = 0;
		this.jump = false;
	}
	update(delta: number) {
		// Establecemos una velocidad en relación a la aceleración
		this.marioSpeed = this.marioSpeed * 0.9 + this.marioAceleration;
		let jumpHeight = 0;
		if (this.jump) {
			// NOTE: I am not happy with this jump section. The sine is a good idea but the control of the zero limit can be improved.
			this.jumSpeed += 0.8;
			jumpHeight = 40 * Math.sin(10 * this.jumSpeed * delta) + 40;
			const checkCero = Number(jumpHeight.toFixed(2));
			if (checkCero < 0.1) {
				jumpHeight = 0.1;
				this.jump = false;
			}
		}
		let newPos: Point = {
			x: this.position.x + this.marioSpeed * delta,
			y: 350 - jumpHeight,
		};
		if (checkLimits(newPos, this.marioSize, this.marioColor)) {
			this.position = newPos;
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.marioColor;
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
			this.marioAceleration = -10;
		} else if (tecla == MarioKey.RIGHT) {
			this.marioAceleration = 10;
		} else if (tecla == MarioKey.UP) {
			console.log('JUMP!');
			this.jump = true;
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
