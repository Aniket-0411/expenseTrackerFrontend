import { BoxPropsType, TBaseTextProps } from '~/theme';

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: BoxPropsType = {
  borderRadius: 'xl',
  justifyContent: 'center',
  alignItems: 'center',
  p: 's',
};

const BASE_TEXT: TBaseTextProps = {
  fontFamily: 'primary',
  fontSize: 14,
  px: 's',
  py: 'xs',
};

/**
 * A list of preset names.
 */
export type TButtonPresetNames = 'primary' | 'secondary' | 'disabled' | 'link';
/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const boxPresets: Record<string, BoxPropsType> = {
  /**
   * A smaller piece of secondary information.
   */
  primary: {
    ...BASE_VIEW,
    bg: 'buttonPrimaryBackground',
  } as BoxPropsType,
  disabled: {
    ...BASE_VIEW,
    bg: 'buttonPrimaryBackground',
    opacity: 0.5,
  } as BoxPropsType,

  secondary: {
    ...BASE_VIEW,
    bg: 'buttonSecondaryBackground',
    borderColor: 'loaderBorder',
    borderWidth: 1,
  } as BoxPropsType,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    px: 'none',
    py: 'none',
  } as BoxPropsType,
};

export const textPresets: Record<TButtonPresetNames, TBaseTextProps> = {
  primary: {
    ...BASE_TEXT,
    color: 'buttonPrimaryLabel',
  } as TBaseTextProps,
  disabled: {
    ...BASE_TEXT,
    color: 'buttonPrimaryLabel',
  } as TBaseTextProps,
  secondary: {
    ...BASE_TEXT,
    color: 'buttonSecondaryLabel',
  } as TBaseTextProps,
  link: {
    ...BASE_TEXT,
    fontFamily: 'fontPrimaryMedium',
    px: 'none',
    py: 'none',
  } as TBaseTextProps,
};
