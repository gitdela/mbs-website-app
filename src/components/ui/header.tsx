import Image from 'next/image';

interface HeadingProps {
  title: string | undefined;
  description?: string;
  src: string;
  alt: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  src,
  alt,
  imageWidth = 100,
  imageHeight = 100,
}) => {
  return (
    <section className=''>
      <div className='bg-night-50 flex justify-between py-4 px-4 items-center rounded'>
        <div>
          <h1 className='text-2xl text-white mb-0'>{title}</h1>
          <span className='text-muted-foreground'>{description}</span>
        </div>
        <Image src={src} width={imageWidth} height={imageHeight} alt={alt} />
      </div>
    </section>
  );
};
