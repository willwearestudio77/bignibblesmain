const mailchimp = require('@mailchimp/mailchimp_marketing');
const KEY = process.env.NEXT_PUBLIC_MAILCHIMP_KEY;
const SERVER = process.env.NEXT_PUBLIC_SERVER_PREFIX;
const AudienceID = process.env.NEXT_PUBLIC_AUDIENCE_ID;

mailchimp.setConfig({
  apiKey: KEY,
  server: SERVER
});

export async function POST(req: Request) {
  try {
    const subscribingUser = await req.json();
    console.log(subscribingUser);
    const response = await mailchimp.lists.addListMember(AudienceID, {
      email_address: subscribingUser.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });
    console.log(response);

    return new Response(JSON.stringify({ status: 200 }));
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
}
