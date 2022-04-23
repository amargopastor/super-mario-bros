import { Point } from '../types/Point';
import { Size } from '../types/Size';
export const checkLimits = (
	position: Point,
	actorSize: Size,
	actorColor: string
) => {
	const limitX: { right: number; left: number } = {
		right: 500 - actorSize.w,
		left: 0,
	};
	if (actorColor !== 'red') {
		limitX.right = 500 + actorSize.w;
		limitX.left = 0 - actorSize.w;
	}
	if (
		position.x < limitX.right &&
		position.x > limitX.left &&
		position.y < 500 - actorSize.h &&
		position.y > 0
	) {
		// console.log(actorSize);
		return true;
	}
	return false;
};
