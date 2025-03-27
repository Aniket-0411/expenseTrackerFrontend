import { useLayoutEffect, useState } from 'react';
import { Image, ImageProps, ImageURISource, Platform } from 'react-native';

export interface AutoImageProps extends ImageProps {
  /**
   * How wide should the image be?
   */
  readonly maxWidth?: number;
  /**
   * How tall should the image be?
   */
  readonly maxHeight?: number;
}

/**
 * A hook that will return the scaled dimensions of an image based on the
 * provided dimensions' aspect ratio. If no desired dimensions are provided,
 * it will return the original dimensions of the remote image.
 *
 * How is this different from `resizeMode: 'contain'`? Firstly, you can
 * specify only one side's size (not both). Secondly, the image will scale to fit
 * the desired dimensions instead of just being contained within its image-container.
 * @param {number} remoteUri - The URI of the remote image.
 * @param {number} dimensions - The desired dimensions of the image.
 *   If not provided, the original dimensions will be returned.
 * @returns {[number, number]} - The scaled dimensions of the image.
 */
export function useAutoImage(
  remoteUri: string,
  dimensions?: [maxWidth?: number, maxHeight?: number]
): [width: number, height: number] {
  // eslint-disable-next-line react/hook-use-state
  const [[remoteWidth, remoteHeight], setRemoteImageDimensions] = useState([0, 0]);
  const remoteAspectRatio = remoteWidth / remoteHeight;
  const [maxWidth, maxHeight] = dimensions ?? [];

  useLayoutEffect(() => {
    if (!remoteUri) return;

    Image.getSize(remoteUri, (w, h) => setRemoteImageDimensions([w, h]));
  }, [remoteUri]);

  if (Number.isNaN(remoteAspectRatio)) return [0, 0];

  if (maxWidth && maxHeight) {
    const aspectRatio = Math.min(maxWidth / remoteWidth, maxHeight / remoteHeight);
    return [remoteWidth * aspectRatio, remoteHeight * aspectRatio];
  }
  if (maxWidth) {
    return [maxWidth, maxWidth / remoteAspectRatio];
  }
  if (maxHeight) {
    return [maxHeight * remoteAspectRatio, maxHeight];
  }
  return [remoteWidth, remoteHeight];
}

/**
 * -----------------------------------------------------------------------------
 * An Image component that automatically sizes a remote or data-uri image.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/AutoImage/}
 */
export function AutoImage({ style, maxWidth, maxHeight, ...imageProps }: AutoImageProps) {
  const source = imageProps.source as ImageURISource;

  const [width, height] = useAutoImage(
    Platform.select({
      web: (source?.uri as string) ?? (source as string),
      default: source?.uri as string,
    }),
    [maxWidth, maxHeight]
  );

  return <Image {...imageProps} style={[{ width, height }, style]} />;
}
