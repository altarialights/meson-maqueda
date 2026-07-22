import sharp from '../node_modules/.pnpm/sharp@0.35.3/node_modules/sharp/dist/index.mjs';

const source = 'public/images/logo/meson-castellano-chroma.png';
const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const greenDistance = Math.hypot(r, 255 - g, b);
  const alpha = Math.max(0, Math.min(255, Math.round((greenDistance - 82) * 2.4)));
  data[i] = 248;
  data[i + 1] = 244;
  data[i + 2] = 237;
  data[i + 3] = alpha;
}

const logo = sharp(data, { raw: info }).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } });
await logo.png({ compressionLevel: 9 }).toFile('public/images/logo/meson-castellano-logo.png');

const logoBuffer = await sharp('public/images/logo/meson-castellano-logo.png')
  .resize({ width: 430, withoutEnlargement: true })
  .png()
  .toBuffer();

await sharp({ create: { width: 512, height: 512, channels: 4, background: '#090909' } })
  .composite([{ input: logoBuffer, gravity: 'centre' }])
  .png({ compressionLevel: 9 })
  .toFile('public/favicon-512.png');

await sharp('public/favicon-512.png').resize(180, 180).png().toFile('public/apple-touch-icon.png');
await sharp('public/favicon-512.png').resize(48, 48).png().toFile('public/favicon-48.png');

await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#090909' } })
  .composite([{ input: await sharp('public/images/logo/meson-castellano-logo.png').resize({ width: 860 }).png().toBuffer(), gravity: 'centre' }])
  .png({ compressionLevel: 9 })
  .toFile('public/og-meson-castellano.png');
