/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
// eslint-disable-next-line no-promise-executor-return
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
