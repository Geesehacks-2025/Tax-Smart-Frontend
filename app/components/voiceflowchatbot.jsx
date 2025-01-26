'use client';

import { useEffect } from 'react';

const VoiceflowChatbot = () => {
  useEffect(() => {
    // This will only run on the client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '6795647670f1b9c43e437051' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
        });
      };

      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, []); // The empty dependency array ensures this only runs once when the component mounts

  return null; // No need to render anything
};

export default VoiceflowChatbot;
