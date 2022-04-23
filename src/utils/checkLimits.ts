import { Point } from '../types/Point';
import { Size } from '../types/Size';
export const checkLimits = (
	position: Point,
	actorSize: Size,
	actorColor: string
) => {
	if (
		position.x <
			500 - (actorColor === 'red' ? actorSize.w : actorSize.w * -1) &&
		position.x > (actorColor === 'red' ? 0 : 0 - actorSize.w) &&
		position.y < 500 - actorSize.h &&
		position.y > 0
	) {
		return true;
	}
	return false;
};
