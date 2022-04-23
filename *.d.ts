// https://open.dingtalk.com/document/orgapp-client/jsapi-overview
declare var dd: {
  /**
   * 获取容器版本号
   * - 鉴权: No
   * - iOS: Yes, Android: Yes, PC: No
   */
  version: unknown;
  device: {
    notification: {
      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: Yes
       */
      alert: Function;

      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: Yes
       */
      confirm: Function;

      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: Yes
       */
      prompt: Function;

      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: No
       */
      vibrate: Function;

      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: Yes
       */
      toast: Function;

      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: Yes
       */
      actionSheet: Function;
    };
  };
  biz: {
    util: {
      /**
       * - 鉴权: No
       * - iOS: Yes, Android: Yes, PC: No
       */
      scan: Function;
    };
  };
};
