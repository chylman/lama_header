import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

import _config from './_config.js';

const HOST = _config.server.host;
const PORT = _config.server.port;

export default {
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [
    legacy(),
    VitePluginSvgSpritemap('./src/assets/icons/*.svg'),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ],
  base: '/lama_header/'
};
