import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e05ddceb6fa01da384ce0fc290977ead8 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import ed01903d96c080d49c717f85271c9074b from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/GlobalCss.js';
import e5ce67c34ea8377efa27f1822104f4641 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Layout.js';
import e0b06101ee735ae25a2803c121f0cbca5 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/Meta.js';
import e816cbffcbab2a8ad3028025751546bdb from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e6ffa455dbff812fc0633b6a8145fd3c0 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import e6dfe60782f169c90fbf3ffda031ecad8 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e0672d4ca85a4119dd8332bd469cef7d8 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ef315c50150d8e15303415495686c0a0b from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e5efcd3d495a05ed54ed205c0e9fa1c0b from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e165ffc75596b8575d28f0fed0443597d from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e8bbdae2a1c636d389143f1e0220222df from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e5dd44e14187f17864337cf8fabe0cd2c from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e8e2d72ab5cd8d54e4dac4f210934a0f3 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import e91252c642e23d95fb29ce5bc63e0ee18 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e0cf9a8c39cbb9d096e45941834317f7d from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cod/pages/admin/orderEdit/CaptureButton.js';
import e91cd3f131f87317ddb7bdf82298ab9f3 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e8721add603c444c0332338d3e23e4763 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import e9709a1611054c78d0d55961a5b369876 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Activities.js';
import ebd7ce5b37addec172228275e0e4a7edd from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/AddTrackingButton.js';
import ef9fb06a8ed1b908e3b58da02724f2e42 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CancelButton.js';
import e0ca909f4e77494c36002708be6ad0d91 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Customer.js';
import e91f58db3f5664806ce1292995b9d98b0 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/CustomerNotes.js';
import e4089b28d5a11a4f9e342d54ea7814762 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Items.js';
import ebc24ba7adb1ea85efda16a5b7a461ccf from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Layout.js';
import e717d4fdd4d9bf1f0ee2b309c6d7c53da from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/MarkDeliveredButton.js';
import edf0a6dd024655395c5f6e5d04dae02cb from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/PageHeading.js';
import e6e4ef63c1b066eabbdb869e43f12404a from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Payment.js';
import e58f90b78a3ba764f65ab248c04a496b7 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/ShipButton.js';
import e9ec131fb7335b5314dc3b8b08353a003 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/Status.js';
import eafdd8919f80c4c9accad26f6c8d6f981 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/orderEdit/TrackingButton.js';
import e76c12ae056a1aacaaf92ca4809964900 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/paypal/pages/admin/orderEdit/PaypalCaptureButton.js';
import e286a538f66c22af86ae33c0bbe6308f1 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import ea12660a001d3fe95492774450271dc42 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee93bc402d7afe139ddf1b08e16adc8a3 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e97d4ddba54b28b80948a94a4c9959a06 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ec46fcbfa2441e8aa77e2283ba4065585 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import ee5ce06979cd24850aff43f4e612e091f from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeCaptureButton.js';
import ebb20059d20073fa8d57fd47f9c018e15 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/stripe/pages/admin/orderEdit/StripeRefundButton.js';
import efad4446bb1a8c85be4888fa08c8589c4 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProductsSetting.js';
import text_block from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlockSetting.js';
import basic_menu from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenuSetting.js';
import banner from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/BannerSetting.js';
import simple_slider from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/SlideshowSetting.js';
export default renderHtml;
Area.defaultProps.components = {
  header: {
    e05ddceb6fa01da384ce0fc290977ead8: {
      id: 'e05ddceb6fa01da384ce0fc290977ead8',
      sortOrder: 50,
      component: { default: e05ddceb6fa01da384ce0fc290977ead8 }
    },
    e5efcd3d495a05ed54ed205c0e9fa1c0b: {
      id: 'e5efcd3d495a05ed54ed205c0e9fa1c0b',
      sortOrder: 10,
      component: { default: e5efcd3d495a05ed54ed205c0e9fa1c0b }
    },
    e8e2d72ab5cd8d54e4dac4f210934a0f3: {
      id: 'e8e2d72ab5cd8d54e4dac4f210934a0f3',
      sortOrder: 20,
      component: { default: e8e2d72ab5cd8d54e4dac4f210934a0f3 }
    }
  },
  head: {
    ed01903d96c080d49c717f85271c9074b: {
      id: 'ed01903d96c080d49c717f85271c9074b',
      sortOrder: 5,
      component: { default: ed01903d96c080d49c717f85271c9074b }
    },
    e0b06101ee735ae25a2803c121f0cbca5: {
      id: 'e0b06101ee735ae25a2803c121f0cbca5',
      sortOrder: 5,
      component: { default: e0b06101ee735ae25a2803c121f0cbca5 }
    }
  },
  body: {
    e5ce67c34ea8377efa27f1822104f4641: {
      id: 'e5ce67c34ea8377efa27f1822104f4641',
      sortOrder: 10,
      component: { default: e5ce67c34ea8377efa27f1822104f4641 }
    },
    e8bbdae2a1c636d389143f1e0220222df: {
      id: 'e8bbdae2a1c636d389143f1e0220222df',
      sortOrder: 10,
      component: { default: e8bbdae2a1c636d389143f1e0220222df }
    }
  },
  adminMenu: {
    e816cbffcbab2a8ad3028025751546bdb: {
      id: 'e816cbffcbab2a8ad3028025751546bdb',
      sortOrder: 20,
      component: { default: e816cbffcbab2a8ad3028025751546bdb }
    },
    e0672d4ca85a4119dd8332bd469cef7d8: {
      id: 'e0672d4ca85a4119dd8332bd469cef7d8',
      sortOrder: 60,
      component: { default: e0672d4ca85a4119dd8332bd469cef7d8 }
    },
    e5dd44e14187f17864337cf8fabe0cd2c: {
      id: 'e5dd44e14187f17864337cf8fabe0cd2c',
      sortOrder: 10,
      component: { default: e5dd44e14187f17864337cf8fabe0cd2c }
    },
    e91cd3f131f87317ddb7bdf82298ab9f3: {
      id: 'e91cd3f131f87317ddb7bdf82298ab9f3',
      sortOrder: 40,
      component: { default: e91cd3f131f87317ddb7bdf82298ab9f3 }
    },
    e8721add603c444c0332338d3e23e4763: {
      id: 'e8721add603c444c0332338d3e23e4763',
      sortOrder: 30,
      component: { default: e8721add603c444c0332338d3e23e4763 }
    },
    e286a538f66c22af86ae33c0bbe6308f1: {
      id: 'e286a538f66c22af86ae33c0bbe6308f1',
      sortOrder: 50,
      component: { default: e286a538f66c22af86ae33c0bbe6308f1 }
    },
    e97d4ddba54b28b80948a94a4c9959a06: {
      id: 'e97d4ddba54b28b80948a94a4c9959a06',
      sortOrder: 500,
      component: { default: e97d4ddba54b28b80948a94a4c9959a06 }
    }
  },
  quickLinks: {
    e6ffa455dbff812fc0633b6a8145fd3c0: {
      id: 'e6ffa455dbff812fc0633b6a8145fd3c0',
      sortOrder: 20,
      component: { default: e6ffa455dbff812fc0633b6a8145fd3c0 }
    },
    ea12660a001d3fe95492774450271dc42: {
      id: 'ea12660a001d3fe95492774450271dc42',
      sortOrder: 30,
      component: { default: ea12660a001d3fe95492774450271dc42 }
    }
  },
  settingPageMenu: {
    e6dfe60782f169c90fbf3ffda031ecad8: {
      id: 'e6dfe60782f169c90fbf3ffda031ecad8',
      sortOrder: 15,
      component: { default: e6dfe60782f169c90fbf3ffda031ecad8 }
    },
    ee93bc402d7afe139ddf1b08e16adc8a3: {
      id: 'ee93bc402d7afe139ddf1b08e16adc8a3',
      sortOrder: 10,
      component: { default: ee93bc402d7afe139ddf1b08e16adc8a3 }
    },
    ec46fcbfa2441e8aa77e2283ba4065585: {
      id: 'ec46fcbfa2441e8aa77e2283ba4065585',
      sortOrder: 5,
      component: { default: ec46fcbfa2441e8aa77e2283ba4065585 }
    },
    efad4446bb1a8c85be4888fa08c8589c4: {
      id: 'efad4446bb1a8c85be4888fa08c8589c4',
      sortOrder: 20,
      component: { default: efad4446bb1a8c85be4888fa08c8589c4 }
    }
  },
  footerLeft: {
    ef315c50150d8e15303415495686c0a0b: {
      id: 'ef315c50150d8e15303415495686c0a0b',
      sortOrder: 10,
      component: { default: ef315c50150d8e15303415495686c0a0b }
    },
    e91252c642e23d95fb29ce5bc63e0ee18: {
      id: 'e91252c642e23d95fb29ce5bc63e0ee18',
      sortOrder: 20,
      component: { default: e91252c642e23d95fb29ce5bc63e0ee18 }
    }
  },
  adminNavigation: {
    e165ffc75596b8575d28f0fed0443597d: {
      id: 'e165ffc75596b8575d28f0fed0443597d',
      sortOrder: 10,
      component: { default: e165ffc75596b8575d28f0fed0443597d }
    }
  },
  orderPaymentActions: {
    e0cf9a8c39cbb9d096e45941834317f7d: {
      id: 'e0cf9a8c39cbb9d096e45941834317f7d',
      sortOrder: 10,
      component: { default: e0cf9a8c39cbb9d096e45941834317f7d }
    },
    e76c12ae056a1aacaaf92ca4809964900: {
      id: 'e76c12ae056a1aacaaf92ca4809964900',
      sortOrder: 10,
      component: { default: e76c12ae056a1aacaaf92ca4809964900 }
    },
    ee5ce06979cd24850aff43f4e612e091f: {
      id: 'ee5ce06979cd24850aff43f4e612e091f',
      sortOrder: 10,
      component: { default: ee5ce06979cd24850aff43f4e612e091f }
    },
    ebb20059d20073fa8d57fd47f9c018e15: {
      id: 'ebb20059d20073fa8d57fd47f9c018e15',
      sortOrder: 10,
      component: { default: ebb20059d20073fa8d57fd47f9c018e15 }
    }
  },
  leftSide: {
    e9709a1611054c78d0d55961a5b369876: {
      id: 'e9709a1611054c78d0d55961a5b369876',
      sortOrder: 30,
      component: { default: e9709a1611054c78d0d55961a5b369876 }
    },
    e4089b28d5a11a4f9e342d54ea7814762: {
      id: 'e4089b28d5a11a4f9e342d54ea7814762',
      sortOrder: 10,
      component: { default: e4089b28d5a11a4f9e342d54ea7814762 }
    },
    e6e4ef63c1b066eabbdb869e43f12404a: {
      id: 'e6e4ef63c1b066eabbdb869e43f12404a',
      sortOrder: 20,
      component: { default: e6e4ef63c1b066eabbdb869e43f12404a }
    }
  },
  order_actions: {
    ebd7ce5b37addec172228275e0e4a7edd: {
      id: 'ebd7ce5b37addec172228275e0e4a7edd',
      sortOrder: 5,
      component: { default: ebd7ce5b37addec172228275e0e4a7edd }
    },
    e717d4fdd4d9bf1f0ee2b309c6d7c53da: {
      id: 'e717d4fdd4d9bf1f0ee2b309c6d7c53da',
      sortOrder: 10,
      component: { default: e717d4fdd4d9bf1f0ee2b309c6d7c53da }
    },
    e58f90b78a3ba764f65ab248c04a496b7: {
      id: 'e58f90b78a3ba764f65ab248c04a496b7',
      sortOrder: 10,
      component: { default: e58f90b78a3ba764f65ab248c04a496b7 }
    },
    eafdd8919f80c4c9accad26f6c8d6f981: {
      id: 'eafdd8919f80c4c9accad26f6c8d6f981',
      sortOrder: 15,
      component: { default: eafdd8919f80c4c9accad26f6c8d6f981 }
    }
  },
  pageHeadingRight: {
    ef9fb06a8ed1b908e3b58da02724f2e42: {
      id: 'ef9fb06a8ed1b908e3b58da02724f2e42',
      sortOrder: 35,
      component: { default: ef9fb06a8ed1b908e3b58da02724f2e42 }
    }
  },
  rightSide: {
    e0ca909f4e77494c36002708be6ad0d91: {
      id: 'e0ca909f4e77494c36002708be6ad0d91',
      sortOrder: 15,
      component: { default: e0ca909f4e77494c36002708be6ad0d91 }
    },
    e91f58db3f5664806ce1292995b9d98b0: {
      id: 'e91f58db3f5664806ce1292995b9d98b0',
      sortOrder: 10,
      component: { default: e91f58db3f5664806ce1292995b9d98b0 }
    }
  },
  content: {
    ebc24ba7adb1ea85efda16a5b7a461ccf: {
      id: 'ebc24ba7adb1ea85efda16a5b7a461ccf',
      sortOrder: 10,
      component: { default: ebc24ba7adb1ea85efda16a5b7a461ccf }
    },
    edf0a6dd024655395c5f6e5d04dae02cb: {
      id: 'edf0a6dd024655395c5f6e5d04dae02cb',
      sortOrder: 5,
      component: { default: edf0a6dd024655395c5f6e5d04dae02cb }
    }
  },
  pageHeadingLeft: {
    e9ec131fb7335b5314dc3b8b08353a003: {
      id: 'e9ec131fb7335b5314dc3b8b08353a003',
      sortOrder: 200,
      component: { default: e9ec131fb7335b5314dc3b8b08353a003 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    },
    banner: {
      id: 'banner',
      sortOrder: 0,
      component: { default: banner }
    },
    simple_slider: {
      id: 'simple_slider',
      sortOrder: 0,
      component: { default: simple_slider }
    }
  }
} 