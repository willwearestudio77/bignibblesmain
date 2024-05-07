import { Suspense } from 'react';
import InstagramImage from './instaimages';
export async function PhotoCarousel(instagramArray: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="carousel carousel-center w-full space-x-4  rounded-box p-4">
        {instagramArray.instagramArray.map((item: any, index: number) => (
          <div className="cover carousel-item" key={index}>
            <InstagramImage item={item} />
          </div>
        ))}
      </div>
    </Suspense>
  );
}
