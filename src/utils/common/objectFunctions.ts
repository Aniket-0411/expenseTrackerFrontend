/* eslint-disable @typescript-eslint/comma-dangle */

/**
 * Function that removes all the null or undefined keys in an object returning
 * the cleaned up object.
 *
 * @param obj Object to test for emptiness
 */
export function removeEmptyKeys(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // NOTE:  != unlike !== matches for both undefined and null
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value != null
    )
  );
}

type TObject<T> = Record<string, T>;

/**
 * Boolean function checking whether... iterator, object/array is not empty
 *
 * @param obj, object to test for emptiness
 */
export function isEmpty<T>(obj: TObject<T> | string[] | number[] | null | undefined) {
  if (obj !== undefined && obj !== null) {
    return Object.keys(obj).length === 0;
  }

  return true;
}
