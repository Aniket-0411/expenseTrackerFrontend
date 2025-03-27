import { createTheme } from '@shopify/restyle';

import { isTablet } from './constants';
import { fontFamily } from './fonts/fontFamily';

/**
 * The Color pallet used throughout the entire app.
 * Any color outside this will not work on the Box and Text elements
 * unless if attached to the style prop directly.
 *
 * This constraint helps in limiting the use of random colors within the app.
 *
 * NOTE
 * - primary === purple 600 - Shades of Purple from tailwindcss
 */
const palette = {
  // Primary shade of the color (PURPLE/VIOLET)
  // primaryDark: '#121119', // purpleDarkest
  primaryDarker: '#020011', // purpleDarkest
  primaryDark: '#0e0b11', // purpleDarkest
  primaryDarkHighlight: '#272529', // purpleDarkest // dark
  // primaryDarkHighlight2: '#1E1B21', // purpleDarkest
  // primaryDarkHighlight2: '#181818', // purpleDarkest
  primaryDarkHighlight2: '#1A181D', // purpleDarkest light
  primary950: '#3b0764', // purpleDarkest
  primary900: '#581c87', // purpleDarker
  primary800: '#6b21a8', // purpleDark
  primary700: '#7e22ce',
  primary600: '#9333ea', // purple 600
  primary: '#9333ea', // purple 600 // primary
  primary500: '#a855f7', // purpleLight - purple 500
  primary400: '#c084fc', // purpleLighter
  primary300: '#d8b4fe',
  primary200: '#e9d5ff',
  primary100: '#f3e8ff',
  primary50: '#faf5ff',

  // for stepper first-install
  black60: '#CECECE',

  // The dark version of the app (Neutral/GRAY)
  black: '#0B0B0B',
  blackBody: '#1d1c1c',
  darkSmoke: 'rgba(20,20,20,0.75)',
  gray950: '#0a0a0a',
  gray900: '#151416',
  gray800: '#262626',
  gray750: '#272627',
  gunMetal: '#2B303E',
  gray700: '#404040',
  gray600: '#525252',
  gray500: '#737373',
  gray450: '#8e8e8e',
  gray400: '#a3a3a3',
  gray300: '#d4d4d4',
  gray: '#eee',
  gray200: '#e5e5e5',
  gray100: '#f5f5f5',
  gray50: '#fafafa',

  white: '#fff',
  paleWhite: 'rgba(250,250,250,1)',
  lightSmoke: 'rgba(250,250,250,0.96)',
  lighterSmoke: 'rgba(255,255,255,0.4)',
  lightGray: 'rgba(235,235,235,0.8)',

  link: 'blue',
  transparent: 'transparent',

  green950: '#052e16',
  green900: '#14532d',
  green800: '#166534',
  green700: '#15803d',
  green600: '#16a34a',
  green500: '#22c55e',
  green400: '#4ade80',
  green300: '#86efac',
  green200: '#bbf7d0',
  green100: '#dcfce7',
  green50: '#f0fdf4',

  orange950: '#431407',
  orange800: '#92400e',
  orange700: '#c2410c',
  orange600: '#ea580c',
  orange: '#f97316',
  orange400: '#fb923c',
  orange300: '#fdba74',
  orange200: '#fed7aa',
  orange100: '#ffedd5',
  orange50: '#fff7ed',

  // red800: 'rgba(255, 0, 0, 0.65)', // red
  // red900: '#A00', // redDark
  // red300: 'rgba(255, 150, 150, 0.98)', // redLight
  // red200: 'rgba(255, 150, 150, 0.48)', // redLighter

  red950: '#450a0a',
  red900: '#7f1d1d',
  red800: '#991b1b',
  red700: '#b91c1c',
  red600: '#dc2626',
  red500: '#ef4444',
  red400: '#f87171',
  red300: '#fca5a5',
  red200: '#fecaca',
  red100: '#fee2e2',
  red50: '#fef2f2',
};

/**
 * The Light Mode theme of the App
 */
export const theme = createTheme({
  colors: {
    mainBackground: palette.white,

    primaryBackground: palette.white,
    primaryBackgroundAlt: palette.white,
    primaryForeground: palette.primary900,
    primaryForegroundHighlight: palette.primary300,

    logoForeground: palette.primary900,

    secondaryBackground: palette.primary,
    secondaryBackgroundLight: palette.primary500,
    secondaryBackgroundLighter: palette.primary400,
    secondaryBackgroundDark: palette.primary800,
    secondaryBackgroundDarker: palette.primary900,
    secondaryBackgroundDarkest: palette.primary950,

    mainForeground: palette.black,
    secondaryForeground: palette.paleWhite,

    errorBoundariesGradient: palette.primary400,
    errorBoundariesContentBG: palette.lighterSmoke,

    warningText: palette.orange,
    link: palette.link,
    starBackground: palette.orange200,

    textCaption: palette.gray450,
    textTitle: palette.gray750,
    subTitle: palette.primary,
    subTitleAlt: palette.gray900,
    tabLabel: palette.gray600,
    subText: palette.primaryDarkHighlight,

    actionLabel: palette.primary900,
    actionLabelBright: palette.primary700,
    actionIcon: palette.primary950,
    actionIconError: palette.red600,
    actionIconFocused: palette.primary600,
    actionIconDisabled: palette.gray400,
    actionIconForeground: palette.primaryDark,
    actionIconBackground: palette.primary50,

    loaderBackground: palette.lightGray,
    loaderForeground: palette.gray750,
    loaderBorder: palette.gray450,
    screenUnderlay: palette.gray700,
    modalBorder: palette.gray,
    modalBackground: palette.white,
    shadowColor: palette.gray400,
    illustrationShadowColor: palette.gray200,
    tableBackground: palette.lightSmoke,
    tableBorder: palette.white,
    subTableBorder: palette.gray,
    subTableBackground: palette.lightSmoke,

    rankBg: palette.lightSmoke,
    rankBorder: palette.gray200,
    rankNormalBg: palette.lightSmoke,
    rankNormalBorder: palette.lightSmoke,
    rankHotBg: palette.red50,
    rankHotBorder: palette.red200,
    rankHotText: palette.red900,
    rankWinningBg: palette.green50,
    rankWinningBorder: palette.green200,
    rankWinningText: palette.green800,

    cardPrimaryBackground: palette.white,
    cardSecondaryBackground: palette.white,
    cardBorder: palette.lighterSmoke,
    cardShadow: palette.primary50,
    cardErrorBackground: palette.red50,
    cardErrorBorder: palette.red100,
    cardItemBackground: palette.lightSmoke,
    cardItemBackgroundFaded: palette.lighterSmoke,
    cardImageBackground: palette.gray100,

    buttonPrimaryBackground: palette.primary,
    buttonPrimaryLabel: palette.white,
    buttonPrimaryShadowColor: palette.primary,
    buttonSecondaryBackground: palette.white,
    buttonSecondaryLabel: palette.primary,

    inputBackground: palette.paleWhite,
    inputBackgroundFocused: palette.primary50,
    inputBackgroundDisabled: palette.gray100,
    inputBackgroundError: palette.red50,
    inputBorder: palette.gray300,
    inputBorderFocused: palette.primary200,
    inputBorderDisabled: palette.gray200,
    inputLabel: palette.primary950,
    inputText: palette.primary950,
    inputTextFocused: palette.primary900,
    inputDisabled: palette.gray400,
    inputPlaceholder: palette.gray400,
    inputError: palette.red700,
    inputShadow: palette.gray750,
    inputShadowFocused: palette.primary200,

    filterBackground: palette.white,
    filterLabel: palette.primary,
    filterBorder: palette.primary50,
    filterBorderSelected: palette.primary,
    filterScrollBackground: palette.white,

    switchThumb: palette.white,
    switchThumbInactive: palette.gray450,
    switchTrack: palette.primary,
    switchTrackInactive: palette.primary50,

    statusBar: palette.white,
    bodyText: palette.blackBody,
    descriptionText: palette.gray500,
    helperText: palette.primary400,
    navLinkText: palette.primary900,
    foreground: palette.black,
    success: palette.green800,
    successBright: palette.green500,
    successDark: palette.green900,
    successBorder: palette.green50,
    danger: palette.red900,
    failure: palette.red800,
    failureLight: palette.red200,

    transparent: palette.transparent,

    primarySnippetBg: palette.primary100,

    stepperFill: palette.black60,

    // TODO: Rename/Replace/Remove
  },
  spacing: {
    none: 0,
    xxs: isTablet ? 4 : 2,
    xs: isTablet ? 6 : 4,
    s: isTablet ? 12 : 8,
    sm: isTablet ? 16 : 12,
    m: isTablet ? 20 : 16,
    l: isTablet ? 28 : 24,
    xl: isTablet ? 38 : 32,
    xxl: isTablet ? 70 : 64,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    none: 0,
    xxs: isTablet ? 8 : 4,
    xs: isTablet ? 12 : 8,
    xs2: isTablet ? 16 : 12,
    s: isTablet ? 18 : 16,
    m: isTablet ? 28 : 24,
    l: isTablet ? 40 : 32,
    xl: isTablet ? 52 : 48,
    xxl: isTablet ? 70 : 64,
  },
  textVariants: {
    link: {
      color: 'link',
      textDecorationLine: 'underline',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 16 : 14,
      marginVertical: 's',
      lineHeight: isTablet ? 22 : 18,
    },
    eyebrow: {
      color: 'textCaption',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 15 : 13,
      lineHeight: isTablet ? 20 : 16,
      letterSpacing: 2.2,
      textTransform: 'uppercase',
    },
    eyebrowAlt: {
      color: 'textCaption',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 14 : 10,
      lineHeight: isTablet ? 15 : 11,
      letterSpacing: 1.38,
      textTransform: 'uppercase',
    },
    eyebrowSecondaryAlt: {
      color: 'textCaption',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 12 : 10,
      lineHeight: isTablet ? 15 : 11,
      letterSpacing: 1.11,
      textTransform: 'uppercase',
    },
    title: {
      color: 'textTitle',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 32 : 28,
      lineHeight: isTablet ? 48 : 50,
    },
    subtitle: {
      color: 'textTitle',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 14 : 12,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
    subtitleAlt: {
      color: 'subTitleAlt',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 15 : 13,
      letterSpacing: 1,
    },
    header: {
      // paddingVertical: 's',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 40 : 34,
      lineHeight: isTablet ? 48 : 42,
      letterSpacing: -1.5,
      color: 'mainForeground',
    },
    subheader: {
      fontFamily: fontFamily.primaryMedium,
      fontSize: isTablet ? 20 : 14,
      lineHeight: isTablet ? 28 : 20,
      color: 'textCaption',
    },
    cardHeader: {
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 22 : 18,
      lineHeight: isTablet ? 26 : 22,
      color: 'subTitle',
    },
    cardSubHeader: {
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 14 : 12,
      lineHeight: isTablet ? 20 : 16,
      color: 'textCaption',
    },
    defaults: {
      color: 'bodyText',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 17 : 14,
      lineHeight: isTablet ? 28 : 20,
    },
    body: {
      color: 'bodyText',
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 17 : 14,
      lineHeight: isTablet ? 32 : 24,
    },
    bodyAlt: {
      color: 'bodyText',
      fontFamily: fontFamily.primaryLight,
      fontSize: isTablet ? 15 : 13,
      lineHeight: isTablet ? 24 : 18,
    },
    actionLabel: {
      color: 'actionLabel',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 20 : 16,
      letterSpacing: 1,
      textAlign: 'right',
      textTransform: 'uppercase',
    },
    actionButtonPrimaryLabel: {
      color: 'buttonPrimaryLabel',
      fontFamily: fontFamily.primaryBlack,
      fontSize: isTablet ? 15 : 13,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    actionButtonSecondaryLabel: {
      color: 'buttonSecondaryLabel',
      fontFamily: fontFamily.primaryMedium,
      fontSize: isTablet ? 15 : 13,
      letterSpacing: 2,
      textTransform: 'uppercase',
    },
    tabLabels: {
      color: 'tabLabel',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 14 : 10,
      lineHeight: isTablet ? 18 : 16,
      textTransform: 'uppercase',
    },
    tabLabelSecondary: {
      color: 'actionLabel',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 14 : 10,
      lineHeight: isTablet ? 19 : 17,
      letterSpacing: 1,
    },
    modalHeader: {
      color: 'textTitle',
      fontFamily: fontFamily.primaryBold,
      fontSize: isTablet ? 32 : 26,
      lineHeight: isTablet ? 32 : 36,
    },
    listItemTitle: {
      fontFamily: fontFamily.primaryBold,
      color: 'textTitle',
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 20 : 18,
      paddingVertical: 's',
    },
    listItemAttributeText: {
      fontSize: isTablet ? 14 : 12,
      color: 'textCaption',
      textTransform: 'uppercase',
      fontFamily: fontFamily.primary,
    },
    inputLabel: {
      color: 'inputLabel',
      fontSize: 14,
      fontFamily: fontFamily.primary,
      paddingHorizontal: 'm',
      opacity: 0.8,
    },
    filterItem: {
      color: 'filterLabel',
      fontFamily: fontFamily.primaryLight,
      fontSize: isTablet ? 16 : 14,
    },
    sectionItemTitle: {
      color: 'textTitle',
      fontFamily: fontFamily.primaryLight,
      fontSize: isTablet ? 20 : 16,
      lineHeight: isTablet ? 28 : 24,
      paddingTop: 'm',
      paddingBottom: 's',
    },
    tableHeaderLabel: {
      textTransform: 'uppercase',
      fontFamily: fontFamily.primaryBlack,
      fontSize: isTablet ? 14 : 12,
      letterSpacing: 2,
      paddingVertical: 'm',
      alignSelf: 'stretch',
      color: 'bodyText',
    },
    tableHeaderLabelAlt: {
      fontFamily: fontFamily.primaryMedium,
      fontSize: isTablet ? 13 : 11,
      letterSpacing: 0.4,
      lineHeight: 12,
      paddingVertical: 'xs',
      alignSelf: 'stretch',
      textAlign: 'center',
      color: 'textTitle',
    },
    tableRowLabel: {
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 15 : 13,
      lineHeight: isTablet ? 18 : 14,
      letterSpacing: 0.5,
      paddingVertical: 'm',
      alignSelf: 'stretch',
      color: 'loaderForeground',
    },
    profileListItem: {
      flex: 1,
      alignSelf: 'center',
      fontFamily: fontFamily.primaryLight,
      letterSpacing: 0.99,
      fontSize: isTablet ? 22 : 18,
      lineHeight: isTablet ? 22 : 18,
      color: 'bodyText',
    },
    animationLoaderTitle: {
      color: 'textTitle',
      fontFamily: fontFamily.primaryLight,
      fontSize: isTablet ? 20 : 16,
      lineHeight: isTablet ? 40 : 32,
      textAlign: 'center',
    },
    animationLoaderSubtitle: {
      color: 'textTitle',
      fontFamily: fontFamily.primaryLight,
      fontSize: isTablet ? 16 : 14,
      lineHeight: isTablet ? 32 : 28,
      textAlign: 'center',
    },
    formLabel: {
      fontFamily: fontFamily.primaryLight,
      fontSize: 15,
      lineHeight: 22,
    },
    formHelper: {
      fontFamily: fontFamily.primaryLight,
      color: 'helperText',
      fontSize: 13,
      lineHeight: 22,
    },
    formInput: {
      fontFamily: fontFamily.primary,
      fontSize: 16,
    },
    navLinkLabel: {
      fontFamily: fontFamily.primaryLight,
      color: 'navLinkText',
      fontSize: 14,
      lineHeight: 22,
    },
    infoText: {
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 16 : 13,
      lineHeight: isTablet ? 20 : 16,
      color: 'actionLabel',
      opacity: 0.95,
    },
    disclaimerText: {
      fontFamily: fontFamily.primary,
      fontSize: isTablet ? 12 : 10,
      lineHeight: isTablet ? 16 : 12,
      color: 'startDustText',
    },
  },
  cardVariants: {
    primary: {
      // bg: 'cardPrimaryBackground',
      // borderColor: 'cardBorder',
      // borderRadius: 'xs',
      // shadowColor: 'danger',
      // shadowOffset: { width: 2, height: 5 },
      // shadowOpacity: 0.05,
      // shadowRadius: 20,
    },
  },
  buttonVariants: {
    primary: {
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'buttonPrimaryBackground',
      borderColor: 'buttonSecondaryBackground',
      borderRadius: 'xs',
      flexDirection: 'row',
      justifyContent: 'center',
      shadowColor: 'buttonPrimaryShadowColor',
      shadowOffset: { width: 2, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    secondary: {
      alignItems: 'center',
      backgroundColor: 'mainBackground',
      borderColor: 'buttonPrimaryBackground',
      borderRadius: 'xs',
      borderWidth: 1.5,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    borderless: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  fonts: {
    primary: {
      fontFamily: fontFamily.primary,
    },
  },
});

/**
 * The Dark Mode of the App.
 */
export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.primaryDark,

    primaryBackground: palette.gray950,
    primaryBackgroundAlt: palette.gray750,
    primaryForeground: palette.primary500,
    primaryForegroundHighlight: palette.primary600,

    logoForeground: palette.primary200,

    secondaryBackground: palette.gray700,
    secondaryBackgroundLight: palette.primary500,
    secondaryBackgroundLighter: palette.primary400,
    secondaryBackgroundDark: palette.primary800,
    secondaryBackgroundDarker: palette.primary900,
    secondaryBackgroundDarkest: palette.primary950,

    mainForeground: palette.white,
    secondaryForeground: palette.gray950,

    errorBoundariesGradient: palette.primary400,
    errorBoundariesContentBG: palette.lighterSmoke,

    warningText: palette.orange,
    link: palette.link,
    starBackground: palette.orange200,

    textCaption: palette.gray450,
    textTitle: palette.white,
    subTitle: palette.primary,
    subTitleAlt: palette.gray900,
    tabLabel: palette.gray600,
    subText: palette.primaryDarkHighlight,

    actionLabel: palette.primary300,
    actionLabelBright: palette.primary700,
    actionIcon: palette.primary50,
    actionIconError: palette.red600,
    actionIconFocused: palette.primary500,
    actionIconDisabled: palette.gray400,
    actionIconForeground: palette.primary,
    actionIconBackground: palette.primaryDark,

    loaderBackground: palette.primaryDarkHighlight2,
    loaderForeground: palette.lightGray,
    loaderBorder: palette.gray450,
    screenUnderlay: palette.black,
    modalBorder: palette.blackBody,
    modalBackground: palette.gray900,
    shadowColor: palette.gray950,
    illustrationShadowColor: palette.primaryDark,
    tableBackground: palette.darkSmoke,
    tableBorder: palette.gray950,
    subTableBorder: palette.orange100,
    subTableBackground: palette.gray900,

    rankBg: palette.gray750,
    rankBorder: palette.gray700,
    rankNormalBg: palette.lightSmoke,
    rankNormalBorder: palette.lightSmoke,
    rankHotBg: palette.red950,
    rankHotBorder: palette.gray700,
    rankHotText: palette.red50,
    rankWinningBg: palette.green950,
    rankWinningBorder: palette.gray700,
    rankWinningText: palette.green50,

    cardPrimaryBackground: palette.primaryDarkHighlight,
    cardSecondaryBackground: palette.gray700,
    cardBorder: palette.gunMetal,
    cardShadow: palette.gray950,
    cardErrorBackground: palette.red950,
    cardErrorBorder: palette.red900,
    cardItemBackground: palette.lightSmoke,
    cardItemBackgroundFaded: palette.gray900,
    cardImageBackground: palette.gray800,

    buttonPrimaryLabel: palette.white,
    buttonPrimaryBackground: palette.primary,
    buttonPrimaryShadowColor: palette.primary950,
    buttonSecondaryLabel: palette.white,
    buttonSecondaryBackground: palette.primary,

    inputBackground: palette.gray900,
    inputBackgroundFocused: palette.gray800,
    inputBackgroundDisabled: palette.gray900,
    inputBackgroundError: palette.red50,
    inputBorder: palette.gray700,
    inputBorderFocused: palette.gray500,
    inputBorderDisabled: palette.gray800,
    inputLabel: palette.primary50,
    inputText: palette.gray50,
    inputTextFocused: palette.white,
    inputDisabled: palette.gray700,
    inputPlaceholder: palette.gray400,
    inputError: palette.red500,
    inputShadow: palette.gray750,
    inputShadowFocused: palette.primary200,

    filterBackground: palette.gray750,
    filterLabel: palette.white,
    filterBorder: palette.gray450,
    filterBorderSelected: palette.orange300,
    filterScrollBackground: palette.gray900,

    switchThumb: palette.white,
    switchThumbInactive: palette.gray450,
    switchTrack: palette.primary600,
    switchTrackInactive: palette.gray800,

    statusBar: palette.blackBody,
    bodyText: palette.gray200,
    descriptionText: palette.gray300,
    helperText: palette.primary50,
    navLinkText: palette.primary200,
    success: palette.green600,
    successBright: palette.green300,
    successDark: palette.green700,
    successBorder: palette.green950,
    danger: palette.red900,
    failure: palette.red300,
    failureLight: palette.red200,
    primarySnippetBg: palette.primary100,

    stepperFill: palette.black60,
  },
  buttonVariants: {
    ...theme.buttonVariants,
    primary: {
      ...theme.buttonVariants.primary,
      backgroundColor: 'buttonPrimaryBackground',
      borderColor: 'secondaryBackground',
    },
  },
});

/**
 * The Type definition of the global app theme.
 */
export type ThemeType = typeof theme;

/**
 * The type definition of the color keys of the global app theme.
 */
export type ThemeColorType = keyof typeof theme.colors;