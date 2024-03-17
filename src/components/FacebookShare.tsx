import React from 'react';
import { ShareButton } from 'react-facebook';

interface FacebookShareProps {
  url: string;
  quote: string;
}
const FacebookShare = ({ url, quote }: FacebookShareProps) => {
  return (
    <ShareButton url={url} quote={quote}>
      Share on Facebook
    </ShareButton>
  );
};

export default FacebookShare;
