import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // إذا كانت المنصة هي الويب، استخدم iframe بدلاً من WebView
  if (Platform.OS === 'web') {
    return (
      <iframe 
        src="https://minamagdy2.github.io/working/" // ضع الرابط الذي ترغب في عرضه هنا
        style={{ width: '100%', height: '100vh' }} 
        frameBorder="0"
        title="Google"
      />
    );
  }

  // إذا كنت على جهاز محمول، استخدم WebView
  return (
    <WebView
      originWhitelist={['*']}
      source={{ uri: 'https://minamagdy2.github.io/working/' }} // ضع الرابط الذي ترغب في عرضه هنا
    />
  );
}
