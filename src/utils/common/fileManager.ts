interface IOptions {
  /**
   * The blob file to be appended to the dome and later downloaded.
   */
  fileData: BlobPart;
  /**
   * The file extension without the dot. Eg. `xlsx`.
   */
  fileExt?: string;
  /**
   * The leading name of the file. Note that this is added up with the date
   * at the end of the name.
   */
  fileNamePrefix: string;
}

/**
 * This creates a temporary file to link to the body doc to force auto download.
 * - Gets `file` blob, adds it to the dom node as a link and triggers a click on
 * it to force download of the linked file.
 */
export function createDomElementWithFileInBody({
  fileData,
  fileExt = 'xlsx',
  fileNamePrefix,
}: IOptions) {
  /**
   *  create file link in browser's memory
   */
  const href = URL.createObjectURL(new Blob([fileData]));

  /**
   * create "a" HTML element with href to file & click
   */
  const link = document.createElement('a');
  link.href = href;

  const filename = `${fileNamePrefix}_${new Date().toJSON().slice(0, 10)}.${fileExt}`;

  link.setAttribute('download', filename);
  document.body.appendChild(link);

  link.click();

  /**
   * Remove the file link element after download is complete.
   */
  document.body.removeChild(link);
  URL.revokeObjectURL(href);
}
