import React from 'react';
import { MarkdownReader } from './MarkdownReader';
import privacyPolicy from './PrivacyPolicy.md';

function PrivacyPolicy() {
  return <MarkdownReader content={privacyPolicy} />;
}

export { PrivacyPolicy };
