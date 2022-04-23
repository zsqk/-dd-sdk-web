/**
 * 扫条形码、二维码
 * https://open.dingtalk.com/document/orgapp-client/scan-barcodes-and-qr-codes
 */
async function scan({ type = "all" }: { type: "all" | "qrCode" | "barCode" }) {
  type Res = { text: string };
  return new Promise<Res>((resolve, reject) => {
    dd.biz.util.scan({
      type,
      onSuccess: function (data: Res) {
        resolve(data);
      },
      onFail: function (err) {
        reject(err);
      },
    });
  });
}
