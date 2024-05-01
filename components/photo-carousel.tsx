'use client';
import Image from 'next/image';

export async function PhotoCarousel() {
  if (!process.env.NEXT_PUBLIC_INSTAGRAMKEY) {
    throw new Error('INSTAGRAMKEY is not defined');
  }
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAMKEY}`;
  const instagramData = await fetch(url);
  const instagram = await instagramData.json();
  const instagramArray = await instagram.data.slice(0, 10);
  return (
    <div className="carousel carousel-center w-full space-x-4  rounded-box p-4">
      {instagramArray.map((item: any, index: number) => (
        <div className="cover carousel-item" key={index}>
          <Image
            className="cover rounded-box"
            alt={item.caption}
            width={200}
            height={200}
            src={item.media_url}
          />
        </div>
      ))}
    </div>
  );
}
