// 本文件仅列出不需要鉴权的 API
// 总览: https://open.dingtalk.com/document/orgapp-client/jsapi-overview
import ddscan from "dingtalk-jsapi/api/biz/util/scan";
import ddvibrate from "dingtalk-jsapi/api/device/notification/vibrate";

/**
 * 扫条形码、二维码
 * https://open.dingtalk.com/document/orgapp-client/scan-barcodes-and-qr-codes
 * - 鉴权: No
 * - iOS: Yes, Android: Yes, PC: No
 */
export async function scan({
  type = "all",
}: {
  type: "all" | "qrCode" | "barCode";
}) {
  const res = await ddscan({ type });
  const { text } = res;
  return { text };
}

/**
 * 手机震动 dd.device.notification.vibrate
 * https://open.dingtalk.com/document/orgapp-client/mobile-phone-vibration
 * - 鉴权: No
 * - iOS: Yes, Android: Yes, PC: No
 * @param duration 震动时间, 仅 Android 下有效, iOS 下无效
 */
export async function vibrate(duration = 300) {
  await ddvibrate({duration});
}
