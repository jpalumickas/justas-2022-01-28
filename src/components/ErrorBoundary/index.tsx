import React, { Component, ErrorInfo } from 'react';
import { StatusBar } from 'react-native';
import RNRestart from 'react-native-restart';
import { SafeAreaView, Box, Text, Button } from '~/components';

type State = {
  hasError: boolean;
  errorMessage?: string;
};

export class ErrorBoundary extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: ErrorInfo) {
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(_error: any, _errorInfo: any) {
    // log to Sentry or other service
  }

  onRestart() {
    RNRestart.Restart();
  }

  render() {
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return (
        <SafeAreaView>
          <StatusBar barStyle="light-content" />
          <Box flex={1} justifyContent="center" alignItems="center">
            <Text fontSize="lg" mb={4}>
              {errorMessage || 'There was an error loading this screen'}
            </Text>
            <Button onPress={this.onRestart}>Restart</Button>
          </Box>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
