import { Suspense } from 'react';

export async function PhotoCarousel() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="carousel carousel-center w-full space-x-4  rounded-box p-4">
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          src="https://cdn.lightwidget.com/widgets/229d9ba59de2563b9f33bfad853cc505.html"
          scrolling="no"
          allowTransparency={true}
          className="lightwidget-widget"
        ></iframe>
      </div>
    </Suspense>
  );
}
