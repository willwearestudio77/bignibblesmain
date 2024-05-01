import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="w-full">
        <Suspense>{children}</Suspense>
      </div>
      <Footer />
    </Suspense>
  );
}
