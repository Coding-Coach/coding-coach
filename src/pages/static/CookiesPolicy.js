import React from 'react';
import { MarkdownReader } from './MarkdownReader';
import cookiesPolicy from './CookiesPolicy.md';

function CookiesPolicy() {
  return <MarkdownReader content={cookiesPolicy} />;
}

export { CookiesPolicy };
