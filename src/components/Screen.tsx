import { ReactNode, useRef, useState } from 'react';
import {
  Alert,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  // TextStyle,
  ViewStyle,
} from 'react-native';
import {
  // TODO: These components are unused. Delete them later when ready.
  // DrawerActions, useNavigation,
  useScrollToTop,
} from '@react-navigation/native';
import { StatusBar, StatusBarProps } from 'expo-status-bar';
import { router, usePathname } from 'expo-router';

// TODO: Remove this once the svg icons are ready

// TODO: These components are unused. Delete them later when ready.
// import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo

import { Box, BoxPropsType, colors, DevThemeToggle, Text, TThemeColor, useThemeColorKey } from '~/theme';
import {
  ExtendedEdge,
  isIos,
  pascalCaseToTitle,
  useSafeAreaInsetsStyle,
  widthPercentageToDP,
} from '~/utils';
import {
  Header,
  // TODO: These components are unused. Delete them later when ready.
  // Icon,
} from '~/components';
import { translate, TxKeyPath } from '~/i18n';
import {
  ArrowIcon,
  // TODO: These components are unused. Delete them later when ready.
  // ArrowRightIcon,
} from '~/design-system';

const $containerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
};

const $keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
};

const $outerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
};

const $innerStyle: ViewStyle = {
  alignItems: 'stretch',
  justifyContent: 'flex-start',
};

const $leftBackHeaderIconContainer: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
};

// TODO: These components are unused. Delete them later when ready.
// const $leftHeaderContainer: ViewStyle = {
//   alignItems: 'center',
//   flexDirection: 'row',
// };

const $backHeaderContainer: ViewStyle = {
  backgroundColor: colors.palette.primary,
  borderBottomWidth: 0,
  borderBottomColor: colors.palette.neutral400,
  overflow: 'hidden',
};

const $mainHeaderContainer: ViewStyle = {
  backgroundColor: colors.palette.primary,
  borderBottomWidth: 0.2,
  borderBottomColor: colors.palette.neutral400,
  overflow: 'hidden',
};

// TODO: These components are unused. Delete them later when ready.
// const $rightHeaderIconContainer: ViewStyle = {
//   alignItems: 'center',
//   flexDirection: 'row',
//   gap: 12,
//   marginRight: widthPercentageToDP('4%'),
// };

// const $headerTitle: TextStyle = {
//   marginLeft: widthPercentageToDP('1%'),
//   textAlign: 'center',
//   width: '75%',
//   color: colors.palette.neutral900,
// };

const $imageBackgroundStyle: ImageStyle = {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
  paddingHorizontal: widthPercentageToDP('4%'),
};

const $secondaryVariantStyle: ViewStyle = {
  width: 40,
  height: 40,
  backgroundColor: colors.palette.neutral100,
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: widthPercentageToDP('4%'),
};

interface INavBackPromptOptions {
  modalTitle: TxKeyPath;
  message: TxKeyPath;
  okayCTA: {
    label: TxKeyPath;
    onPressCallback?: () => void;
  };
  cancelCTA: {
    label: TxKeyPath;
  };
}

interface IBaseScreenProps {
  bg?: TThemeColor;
  backgroundColor?: string;
  children?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  keyboardOffset?: number;
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  navigation?: unknown;
  leftActionVariant?: 'primary' | 'secondary';
  navBackPrompt?: INavBackPromptOptions;
  statusBarProps?: StatusBarProps;
  style?: StyleProp<ViewStyle>;
  safeAreaEdges?: ExtendedEdge[];
  statusBarStyle?: 'light' | 'dark';
  showHeader?: boolean;
  showBackNav?: boolean;
  title?: TxKeyPath;
  titlePostFix?: TxKeyPath;
  boxProps?: BoxPropsType;
}

interface IFixedScreenProps extends IBaseScreenProps {
  preset?: 'fixed';
  isImageBackground?: boolean;
  imageSource?: ImageSourcePropType;
}

interface IScrollScreenProps extends IBaseScreenProps {
  preset?: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  scrollViewProps?: ScrollViewProps;
  isImageBackground?: boolean;
  imageSource?: ImageSourcePropType;
}

interface IAutoScreenProps extends Omit<IScrollScreenProps, 'preset'> {
  preset?: 'auto';
  isImageBackground?: boolean;
  imageSource?: ImageSourcePropType;
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type TScreenProps = IScrollScreenProps | IFixedScreenProps | IAutoScreenProps;

function isNonScrolling(preset?: TScreenProps['preset']) {
  return !preset || preset === 'fixed';
}

function useAutoPreset(props: IAutoScreenProps) {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef<number | null>(null);
  const scrollViewContentHeight = useRef<number | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (scrollViewHeight.current === null || scrollViewContentHeight.current === null) return;

    const contentFitsScreen = (function getScreenFit() {
      if (point) {
        return scrollViewContentHeight.current < scrollViewHeight.current - point;
      }

      return scrollViewContentHeight.current < scrollViewHeight.current * percent;
    }());

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }

  function onContentSizeChange(_: number, h: number) {
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout;
    scrollViewHeight.current = height;
    updateScrollState();
  }

  if (preset === 'auto') updateScrollState();

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

/**
 * -----------------------------------------------------------------------------
 * This renders a none scrollable screen component
 */
function ScreenWithoutScrolling(props: TScreenProps) {
  const { style, contentContainerStyle, children } = props;
  return (
    <Box style={[$outerStyle, style]}>
      <Box style={[$innerStyle, contentContainerStyle]}>{children}</Box>
    </Box>
  );
}
/**
 * -----------------------------------------------------------------------------
 * This renders a scrollable screen component
 */
function ScreenWithScrolling(props: TScreenProps) {
  const {
    children,
    contentContainerStyle,
    keyboardShouldPersistTaps = 'handled',
    scrollViewProps,
    style,
  } = props as IScrollScreenProps;

  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props as IAutoScreenProps);

  useScrollToTop(ref);

  return (
    <ScrollView
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...scrollViewProps}
      contentContainerStyle={[
        $innerStyle,
        scrollViewProps?.contentContainerStyle,
        contentContainerStyle,
        // eslint-disable-next-line react-native/no-inline-styles
        { paddingBottom: 50 },
      ]}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        scrollViewProps?.onContentSizeChange?.(w, h);
      }}
      onLayout={(e) => {
        onLayout(e);
        scrollViewProps?.onLayout?.(e);
      }}
      style={[$outerStyle, scrollViewProps?.style, style]}
    >
      {children}
    </ScrollView>
  );
}

// TODO: These components are unused. Delete them later when ready.
// /**
//  * -----------------------------------------------------------------------------
//  * The icon action to be shown on the left side of the screen header
//  */
// function LeftHeaderIcon() {
//   const navigation = useNavigation();

//   const handleMenuPress = () => {
//     navigation.dispatch(DrawerActions.openDrawer());
//   };

//   return (
//     <Box style={$leftHeaderContainer}>
//       <Icon
//         color={colors.palette.neutral200}
//         icon="menu"
//         onPress={handleMenuPress}
//         size={widthPercentageToDP('7%')}
//         style={{ marginHorizontal: widthPercentageToDP('4%') }}
//       />
//       <Text fontSize={14} style={{ color: colors.palette.neutral200 }} text="Bloom" />
//     </Box>
//   );
// }

interface INavBackPromptOptions {
  modalTitle: TxKeyPath;
  message: TxKeyPath;
  okayCTA: {
    label: TxKeyPath;
    onPressCallback?: () => void;
  };
  cancelCTA: {
    label: TxKeyPath;
  };
}

interface ILeftBackHeaderIcon {
  title?: TxKeyPath;
  titlePostFix?: TxKeyPath;
  variant?: 'primary' | 'secondary';
  navBackPrompt?: INavBackPromptOptions;
}

/**
 * -----------------------------------------------------------------------------
 * The back action icon to be shown on the left side of the screen header.
 */
function LeftBackHeaderIcon({
  title,
  titlePostFix,
  variant = 'primary',
  navBackPrompt,
}: ILeftBackHeaderIcon) {
  const headerTitle = pascalCaseToTitle(usePathname());

  /**
   * This hijacks the back navigation by prompting the user to confirm the action
   * and also highlights why.
   *
   * TODO: Replace this later with a proper prompt component.
   */
  const handleNavBackPrompt = () => {
    if (navBackPrompt) {
      const { modalTitle, message, okayCTA, cancelCTA } = navBackPrompt;

      Alert.alert(
        translate(modalTitle),
        translate(message),
        [
          {
            text: translate(cancelCTA.label),
            style: 'destructive',
          },
          {
            text: translate(okayCTA.label),
            onPress: () => {
              router.back();
              okayCTA.onPressCallback?.();
            },
            style: 'default',
          },
        ],
        {
          cancelable: true,
          // onDismiss: () => doCommonDismiss(),
        },
      );
    }
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      if (navBackPrompt) {
        handleNavBackPrompt();
      } else {
        router.back();
      }
    }
  };

  return (
    <Box style={$leftBackHeaderIconContainer}>
      <Pressable onPress={handleBack} style={variant === 'primary' ? null : $secondaryVariantStyle}>
        <ArrowIcon
          boxProps={
            {
              // ms: 's',
            }
          }
          size={20}
          // style={{ transform: [{ rotate: '180deg' }] }}
        />
      </Pressable>

      <Box
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
        maxWidth="80%"
        ms="m"
        width="auto"
      >
        <Text
          color="mainForeground"
          fontFamily="fontPrimaryLight"
          fontSize={20}
          me="xs"
          opacity={0.8}
          text={!title ? headerTitle : undefined}
          textAlign="center"
          tx={title}
        />

        {titlePostFix ? (
          <Text
            color="mainForeground"
            fontFamily="fontSecondaryMedium"
            fontSize={20}
            lineHeight={36}
            textAlign="center"
            tx={titlePostFix}
          />
        ) : null}
      </Box>
    </Box>
  );
}

// TODO: These components are unused. Delete them later when ready.
// interface IRightHeaderIconProps {
//   // TODO: Fix this later when this screen component is revisited
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   readonly navigation: any;
// }

// /**
//  * -----------------------------------------------------------------------------
//  * The icon action to be shown on the right side of the screen header
//  * TODO: Delete this if its not being used.
//  *
//  * @deprecated
//  */
// function RightHeaderIcon({ navigation }: IRightHeaderIconProps) {
//   const handleNotifications = () => {
//     navigation.navigate('Notification');
//   };

//   return (
//     <Box style={$rightHeaderIconContainer}>
//       <MaterialIcons color={colors.palette.neutral100} name="bluetooth-disabled" size={25} />
//       <Icon color={colors.palette.neutral100} icon="bell" onPress={handleNotifications} />
//     </Box>
//   );
// }

/**
 * -----------------------------------------------------------------------------
 * This is the base screen component that all other screen components should
 * extend from.
 *
 * NOTE: This needs extra work to be build upon to inject styles like theming.
 */
export function Screen(props: TScreenProps) {
  const {
    bg,
    backgroundColor: bgInit,
    boxProps,
    contentContainerStyle,
    imageSource,
    isImageBackground,
    keyboardAvoidingViewProps,
    keyboardOffset = 0,
    leftActionVariant = 'primary',
    navBackPrompt,
    preset,
    safeAreaEdges,
    statusBarProps,
    statusBarStyle = 'dark',
    showHeader = true,
    showBackNav = false,
    // navigation,
    title,
    titlePostFix,
  } = props;

  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);
  const bgColor = useThemeColorKey(bg ?? 'transparent');

  const backgroundColor = bg ? bgColor : (bgInit ?? colors.background);

  if (isImageBackground) {
    return (
      <ImageBackground source={imageSource} style={$imageBackgroundStyle}>
        <StatusBar style={statusBarStyle} {...statusBarProps} />
        {showHeader ? (
          <Header
            // LeftActionComponent={<LeftHeaderIcon />}
            // RightActionComponent={<RightHeaderIcon navigation={navigation} />}
            style={$mainHeaderContainer}
          />
        ) : null}

        {showBackNav ? (
          <Header
            LeftActionComponent={
              <LeftBackHeaderIcon
                navBackPrompt={navBackPrompt}
                title={title}
                titlePostFix={titlePostFix}
              />
            }
            style={$backHeaderContainer}
          />
        ) : null}

        <KeyboardAvoidingView
          behavior={isIos ? 'padding' : undefined}
          keyboardVerticalOffset={keyboardOffset}
          {...keyboardAvoidingViewProps}
          style={[$keyboardAvoidingViewStyle, keyboardAvoidingViewProps?.style]}
        >
          {isNonScrolling(preset) ? (
            <ScreenWithoutScrolling {...props} />
          ) : (
            <ScreenWithScrolling {...props} />
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

  return (
    <Box style={[$containerStyle, { backgroundColor }, $containerInsets]} {...boxProps}>
      <StatusBar style={statusBarStyle} {...statusBarProps} />
      <DevThemeToggle />
      {showHeader ? (
        <Header
          // LeftActionComponent={<LeftHeaderIcon />}
          // RightActionComponent={<RightHeaderIcon navigation={navigation} />}
          style={$mainHeaderContainer}
          titleTx={title}
        />
      ) : null}

      {showBackNav ? (
        <Header
          LeftActionComponent={
            <LeftBackHeaderIcon
              navBackPrompt={navBackPrompt}
              title={title}
              titlePostFix={titlePostFix}
              variant={leftActionVariant}
            />
          }
          style={[$backHeaderContainer, { backgroundColor }, contentContainerStyle]}
        />
      ) : null}

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardOffset}
        {...keyboardAvoidingViewProps}
        style={[$keyboardAvoidingViewStyle, keyboardAvoidingViewProps?.style]}
      >
        {isNonScrolling(preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
    </Box>
  );
}
