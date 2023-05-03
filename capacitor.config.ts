import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  },
  appId: 'com.gourmetfein.storefinder',
  appName: 'Leberkäse Finder',
  webDir: 'www',
};

export default config;
