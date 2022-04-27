type Left<L> = {
  left: L;
  right?: never;
};

type Right<R> = {
  left?: never;
  right: R;
};

export type Either<L, R> = NonNullable<Left<L> | Right<R>>;

export const isLeft = <L, R>(e: Either<L, R>): e is Left<L> =>
  e.left !== undefined;

export const isRight = <L, R>(e: Either<L, R>): e is Right<R> =>
  e.right !== undefined;

export const createLeftSide = <L>(value: L): Left<L> => ({ left: value });
export const createRightSide = <R>(value: R): Right<R> => ({ right: value });
