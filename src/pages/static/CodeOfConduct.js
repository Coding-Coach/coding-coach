import React from 'react';
import MarkdownReader from 'components/markdownReader/MarkdownReader';
import codeOfConduct from './CodeOfConduct.md';

function CodeOfConduct() {
  return <MarkdownReader content={codeOfConduct} />;
}

export default CodeOfConduct;
