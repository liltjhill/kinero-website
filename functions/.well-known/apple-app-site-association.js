export async function onRequest() {
  const body = {
    applinks: {
      details: [
        {
          appID: "G887535M62.com.kidbank",
          paths: ["/kiosk-setup/*", "/kiosk-setup"],
        },
      ],
    },
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
