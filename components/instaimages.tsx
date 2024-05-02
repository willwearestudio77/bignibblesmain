'use client';
import Image from 'next/image';
import { useState } from 'react';

function InstagramImage({ item }: any) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="h-full ">
          <span className="loading loading-ball loading-lg m-auto"></span>
        </div>
      )}
      <Image
        className="cover h-auto w-auto rounded-box"
        alt={item.caption}
        width={200}
        height={200}
        src={item.media_url}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}

export default InstagramImage;
