'use client';

type CopyURLButtonProps = {
  url: string;
};

export const CopyURLButton = ({ url }: CopyURLButtonProps): JSX.Element => {
  return <div>{url}</div>;
};
