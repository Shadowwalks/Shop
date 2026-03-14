
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e91481f768dcda60c9b72b3fe0ba181cb from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Base.js';
import eea4d91b13fad64301d0a10b4f6e961d2 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Breadcrumb.js';
import e1262af85fe51a4767a28dfc96e01dd23 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/GlobalCss.js';
import e52340393d2d19c7ce07cc8f30e72c146 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/HeadTags.js';
import ef753542cbafdd80a232ba11b15a566ad from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Logo.js';
import e9d201d0fc9c06f7f3ea3b421e33dcaa1 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/base/pages/frontStore/all/Notification.js';
import e1e3d8947c1e7f31770cf453eb08377ac from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import eb44fc3388762fe61f96055353c681b73 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCartIcon.js';
import e5a49132724396008978d5fcee4222591 from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/CustomerIcon.js';
import collection_products from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/catalog/components/CollectionProducts.js';
import text_block from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/TextBlock.js';
import basic_menu from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/BasicMenu.js';
import banner from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/Banner.js';
import simple_slider from 'file:///D:/project/node_modules/@evershop/evershop/dist/modules/cms/components/Slideshow.js';
Area.defaultProps.components = {
  body: {
    e91481f768dcda60c9b72b3fe0ba181cb: {
      id: 'e91481f768dcda60c9b72b3fe0ba181cb',
      sortOrder: 1,
      component: { default: e91481f768dcda60c9b72b3fe0ba181cb }
    },
    e9d201d0fc9c06f7f3ea3b421e33dcaa1: {
      id: 'e9d201d0fc9c06f7f3ea3b421e33dcaa1',
      sortOrder: 10,
      component: { default: e9d201d0fc9c06f7f3ea3b421e33dcaa1 }
    }
  },
  content: {
    eea4d91b13fad64301d0a10b4f6e961d2: {
      id: 'eea4d91b13fad64301d0a10b4f6e961d2',
      sortOrder: 0,
      component: { default: eea4d91b13fad64301d0a10b4f6e961d2 }
    }
  },
  head: {
    e1262af85fe51a4767a28dfc96e01dd23: {
      id: 'e1262af85fe51a4767a28dfc96e01dd23',
      sortOrder: 5,
      component: { default: e1262af85fe51a4767a28dfc96e01dd23 }
    },
    e52340393d2d19c7ce07cc8f30e72c146: {
      id: 'e52340393d2d19c7ce07cc8f30e72c146',
      sortOrder: 5,
      component: { default: e52340393d2d19c7ce07cc8f30e72c146 }
    }
  },
  headerMiddleCenter: {
    ef753542cbafdd80a232ba11b15a566ad: {
      id: 'ef753542cbafdd80a232ba11b15a566ad',
      sortOrder: 10,
      component: { default: ef753542cbafdd80a232ba11b15a566ad }
    }
  },
  headerMiddleRight: {
    e1e3d8947c1e7f31770cf453eb08377ac: {
      id: 'e1e3d8947c1e7f31770cf453eb08377ac',
      sortOrder: 5,
      component: { default: e1e3d8947c1e7f31770cf453eb08377ac }
    },
    eb44fc3388762fe61f96055353c681b73: {
      id: 'eb44fc3388762fe61f96055353c681b73',
      sortOrder: 20,
      component: { default: eb44fc3388762fe61f96055353c681b73 }
    },
    e5a49132724396008978d5fcee4222591: {
      id: 'e5a49132724396008978d5fcee4222591',
      sortOrder: 10,
      component: { default: e5a49132724396008978d5fcee4222591 }
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
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );