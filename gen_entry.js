const { PNG } = require('pngjs');
const fs = require('fs');
const W = 1024, H = 1024;
const png = new PNG({ width: W, height: H, colorType: 2 });
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    png.data[idx] = 135 + (y / H) * 40;
    png.data[idx + 1] = 206 + (y / H) * 30;
    png.data[idx + 2] = 235 - (y / H) * 40;
    png.data[idx + 3] = 255;
    if (y > H * 0.6) { png.data[idx] = 51; png.data[idx + 1] = 51; png.data[idx + 2] = 51; }
    if (y > H * 0.25 && y < H * 0.6 && (x * 7 + y * 3) % 15 < 7) {
      png.data[idx] = 200; png.data[idx + 1] = 200; png.data[idx + 2] = 200;
    }
    if (y > H * 0.35 && y < H * 0.55 && x > W * 0.2 && x < W * 0.8 && (x * 2 + y) % 6 === 0) {
      png.data[idx] = 229; png.data[idx + 1] = 83; png.data[idx + 2] = 75;
    }
    if (y > H * 0.65 && y < H * 0.75 && x > W * 0.3 && x < W * 0.7 && (x + y * 2) % 5 === 0) {
      png.data[idx] = 255; png.data[idx + 1] = 255; png.data[idx + 2] = 255;
    }
  }
}
const pack = png.pack(); const chunks = [];
pack.on('data', c => chunks.push(c));
pack.on('end', () => fs.writeFileSync('entry.png', Buffer.concat(chunks)));
