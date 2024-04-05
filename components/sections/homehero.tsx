function HomeHero({ content }: { content: any }) {
  if (!content) {
    return <div>Loading...</div>;
  }

  return <div>{content.first_line}</div>;
}

export default HomeHero;
