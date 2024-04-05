import { getHome } from 'lib/shopify';

function page() {
  getHome()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  return <div>page</div>;
}

export default page;
