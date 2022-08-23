import Image, { ImageProps } from 'next/image';

type BackgroundProps = Omit<ImageProps, 'layout' | 'objectFit'>;

export function Background(props: BackgroundProps) {
  return <Image alt="" layout="fill" objectFit="cover" {...props} />;
}
