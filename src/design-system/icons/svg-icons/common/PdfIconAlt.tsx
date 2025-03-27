import { Svg, Path } from 'react-native-svg';

import { IIconProps } from '../types';

/**
 * -----------------------------------------------------------------------------
 * Renders an alternative document icon with a PDF icon in the center
 * TODO: Optimize these and remove the colors.
 */
export function PdfIconAlt({ size = 32, ...rest }: IIconProps) {
  return (
    <Svg height={size} viewBox="0 0 56 56" width={size} {...rest}>
      <Path
        d="M36.985 0H7.963C7.155 0 6.5.655 6.5 1.926V55c0 .345.655 1 1.463 1h40.074c.808 0 1.463-.655 1.463-1V12.978c0-.696-.093-.92-.257-1.085L37.607.257A.884.884 0 0 0 36.985 0z"
        fill="#e9e9e0"
      />
      <Path d="M37.5.151V12h11.849z" fill="#d9d7ca" />
      <Path
        d="M19.514 33.324c-.348 0-.682-.113-.967-.326-1.041-.781-1.181-1.65-1.115-2.242.182-1.628 2.195-3.332 5.985-5.068 1.504-3.296 2.935-7.357 3.788-10.75-.998-2.172-1.968-4.99-1.261-6.643.248-.579.557-1.023 1.134-1.215a4.91 4.91 0 0 1 1.016-.172c.504 0 .947.649 1.261 1.049.295.376.964 1.173-.373 6.802 1.348 2.784 3.258 5.62 5.088 7.562 1.311-.237 2.439-.358 3.358-.358 1.566 0 2.515.365 2.902 1.117.32.622.189 1.349-.39 2.16-.557.779-1.325 1.191-2.22 1.191-1.216 0-2.632-.768-4.211-2.285-2.837.593-6.15 1.651-8.828 2.822-.836 1.774-1.637 3.203-2.383 4.251-1.025 1.435-1.909 2.105-2.784 2.105zm2.662-5.126c-2.137 1.201-3.008 2.188-3.071 2.744-.01.092-.037.334.431.692.149-.047 1.019-.444 2.64-3.436zm13.637-4.442c.815.627 1.014.944 1.547.944.234 0 .901-.01 1.21-.441.149-.209.207-.343.23-.415-.123-.065-.286-.197-1.175-.197-.505.001-1.14.023-1.812.109zm-7.47-6.582a71.291 71.291 0 0 1-2.674 7.564 49.966 49.966 0 0 1 6.496-2.02c-1.35-1.568-2.699-3.526-3.822-5.544zm-.607-8.462c-.098.033-1.33 1.757.096 3.216.949-2.115-.053-3.23-.096-3.216zM48.037 56H7.963A1.463 1.463 0 0 1 6.5 54.537V39h43v15.537c0 .808-.655 1.463-1.463 1.463z"
        fill="#cc4b4c"
      />
      <Path
        d="M17.385 53h-1.641V42.924h2.898c.428 0 .852.068 1.271.205.419.137.795.342 1.128.615.333.273.602.604.807.991s.308.822.308 1.306c0 .511-.087.973-.26 1.388a2.9 2.9 0 0 1-.725 1.046c-.31.282-.684.501-1.121.656s-.921.232-1.449.232h-1.217V53zm0-8.832v3.992h1.504c.2 0 .398-.034.595-.103.196-.068.376-.18.54-.335.164-.155.296-.371.396-.649.1-.278.15-.622.15-1.032 0-.164-.023-.354-.068-.567a1.637 1.637 0 0 0-.28-.615 1.657 1.657 0 0 0-.595-.492c-.255-.132-.593-.198-1.012-.198h-1.23zM32.219 47.682c0 .829-.089 1.538-.267 2.126s-.403 1.08-.677 1.477-.581.709-.923.937-.672.398-.991.513a4.094 4.094 0 0 1-.875.219c-.264.03-.46.046-.588.046h-3.814V42.924h3.035c.848 0 1.593.135 2.235.403s1.176.627 1.6 1.073.74.955.95 1.524c.21.57.315 1.156.315 1.758zm-4.867 4.115c1.112 0 1.914-.355 2.406-1.066s.738-1.741.738-3.09c0-.419-.05-.834-.15-1.244-.101-.41-.294-.781-.581-1.114s-.677-.602-1.169-.807-1.13-.308-1.914-.308h-.957v7.629h1.627zM36.266 44.168v3.172h4.211v1.121h-4.211V53h-1.668V42.924H40.9v1.244h-4.634z"
        fill="#fff"
      />
    </Svg>
  );
}
