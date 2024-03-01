import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export const revalidate = 43200; // 12 hours in seconds

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      {page.heroImage && (
        <Image
          src={page.heroImage?.reference.image.originalSrc}
          width={page.heroImage?.reference.image.width}
          height={page.heroImage?.reference.image.height}
          alt={page.title}
        />
      )}
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic"></p>
    </>
  );
}
