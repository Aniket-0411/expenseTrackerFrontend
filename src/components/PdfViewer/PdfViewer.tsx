import { StyleSheet, Dimensions, StyleProp, ViewStyle } from 'react-native';
import Pdf from 'react-native-pdf';
import { Box } from '~/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },

  pdf: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

interface IPdfViewerProps {
  uri: string;
  customStyles?: StyleProp<ViewStyle>;
}

/**
 * -----------------------------------------------------------------------------
 * A component for viewing PDFs.
 */
export function PdfViewer({ uri, customStyles }: IPdfViewerProps) {
  const source = { uri, caches: true };
  return (
    <Box style={styles.container}>
      <Pdf source={source} style={[styles.pdf, customStyles]} trustAllCerts={false} />
    </Box>
  );
}
