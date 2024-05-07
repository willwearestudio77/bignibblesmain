export default async function getInstagramData() {
  if (!process.env.INSTAGRAMKEY) {
    throw new Error('INSTAGRAMKEY is not defined');
  }

  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,permalink&access_token=${process.env.INSTAGRAMKEY}`;
  const instagramData = await fetch(url);
  const instagram = await instagramData.json();
  const instagramArray = await instagram.data.slice(0, 10);
  return instagramArray;
}
