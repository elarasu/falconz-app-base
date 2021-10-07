export const isBrowser = (): boolean => typeof window !== 'undefined';

export const isGlobalPresent = (name: string): boolean => {
  // Calling eval by another name causes eval'ed code to run in a
  // subscope of the global scope, rather than the local scope.
  const globalEval = eval;
  try {
    globalEval(name);
    return true;
  } catch (e) {
    return false;
  }
};
