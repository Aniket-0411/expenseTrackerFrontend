import { Base64 } from '../common';

/**
 * This helper functions generates a file from a base64 string.
 *
 * @param base64DataUri - The base64 string file to convert.
 * @param filename - The name of the new file.
 */
export function generateBase64DataToFileUri(base64DataUri: string, filename: string) {
  const arr = base64DataUri.split(',');
  const bstr = Base64.atob(arr[1]);
  let n = bstr.length;

  const mime = arr[0]?.match(/:(.*?);/)?.[1];
  const u8arr = new Uint8Array(n);

  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

/**
 * This util generates a blob file from a canvas preview
 *
 * @param canvas - The html canvas previewing the image.
 * @param previewUrl - The previously generated URL
 * @returns - Promise that resolves to the blob string.
 */
export function toBlob(canvas: HTMLCanvasElement, oldURL: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        let newUrl = '';

        if (!blob) {
          reject(new Error('Canvas is empty'));
        } else {
          window.URL.revokeObjectURL(oldURL);
          newUrl = window.URL.createObjectURL(blob);

          resolve(newUrl);
        }
      },
      'image/jpeg',
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      0.75
    );
  });
}

/**
 * This converts bytes to kb, mb..
 *
 * @param bytes
 * @param decimals
 * @returns bytes converted to required format.
 */
export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}

/**
 * This converts bytes to MB size number for examples as used in document
 * pickers
 */
export function convertBytesToMB(fileSize: number) {
  const num = (fileSize ?? 0) / (1024 * 1024);

  return Math.round((num + Number.EPSILON) * 100) / 100;
}
