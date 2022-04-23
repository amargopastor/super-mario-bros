export enum MarioKey {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}

export interface KeyboardMap {
	[key: string]: MarioKey;
}

export let KEYMAP = {
	ArrowUp: MarioKey.UP,
	ArrowDown: MarioKey.DOWN,
	ArrowLeft: MarioKey.LEFT,
	ArrowRight: MarioKey.RIGHT,
};
