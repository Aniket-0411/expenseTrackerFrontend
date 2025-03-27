import { Box, BoxPropsType, Text } from '~/theme';

import { Button } from '../../button';
import { IAppModalContent } from '../types';

type TAppModalFooterProps = BoxPropsType &
  // eslint-disable-next-line @typescript-eslint/indent
  Pick<IAppModalContent, 'cancelAction' | 'okayAction'>;

/**
 * -----------------------------------------------------------------------------
 * This component renders the content of the  app modal/popup.
 * Currently is just shows only two action buttons, the cancel and okay button
 * whose labels and callbacks are exposed as props for customization.
 */
export function AppModalFooter({ cancelAction, okayAction, ...rest }: TAppModalFooterProps) {
  const handOnPressOkay = () => {
    okayAction?.callback?.();
  };

  const handOnPressCancel = () => {
    cancelAction?.callback?.();
  };

  return cancelAction || okayAction ? (
    <Box flexDirection="row" gap="m" justifyContent="space-between" pt="s" {...rest}>
      {cancelAction ? (
        <Button
          bg="transparent"
          borderColor="buttonPrimaryBackground"
          onPress={handOnPressCancel}
          px="l"
          py="s"
        >
          <Text color="buttonPrimaryBackground" tx={cancelAction.label || 'common.cancel'} />
        </Button>
      ) : null}

      {okayAction ? (
        <Button onPress={handOnPressOkay} px="l" py="s">
          <Text color="buttonPrimaryLabel" tx={okayAction.label || 'common.okay'} />
        </Button>
      ) : null}
    </Box>
  ) : null;
}
