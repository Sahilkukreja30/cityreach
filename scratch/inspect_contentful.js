import { createClient } from 'contentful';

const client = createClient({
  space: 'ogzk8tbw9009',
  accessToken: '_ZBwhDg4gmT9wPa15J_LtvkWubxPO8vTF_QBe_I8gvA',
  environment: 'master-2026-06-15'
});

async function main() {
  try {
    const response = await client.getEntries();
    console.log("Found entries overall:", response.items.length);
    if (response.items.length > 0) {
      console.log("Entry Content Types:", [...new Set(response.items.map(item => item.sys.contentType.sys.id))]);
      console.log("First Entry Fields:", Object.keys(response.items[0].fields));
      console.log("Full first entry fields dump:", JSON.stringify(response.items[0].fields, null, 2));
    }
  } catch (error) {
    console.error("Error fetching:", error);
  }
}

main();
