export async function onRequest() {
  const body = [
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.kidbank",
        sha256_cert_fingerprints: [
          "D0:BB:88:47:CB:0E:59:AC:31:6D:B4:51:6D:F0:F1:BD:D9:70:29:7D:40:AA:9E:C2:E2:46:A4:B9:1C:74:78:C8",
        ],
      },
    },
  ];

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
