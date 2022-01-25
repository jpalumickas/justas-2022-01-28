import React from 'react';
import { StyleSheet } from 'react-native';
import {
  NativeSafeAreaViewProps,
  SafeAreaView as NativeSafeAreaView,
} from 'react-native-safe-area-context';
import { theme } from '~/theme';

export const SafeAreaView = (props: NativeSafeAreaViewProps) => {
  return <NativeSafeAreaView style={styles.view} {...props} />;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: theme.colors['gray-900'],
  },
});
