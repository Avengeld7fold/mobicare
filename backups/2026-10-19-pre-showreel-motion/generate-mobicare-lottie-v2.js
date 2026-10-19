const fs = require('fs');
const path = require('path');
const opentype = require('opentype.js');

// Load authentic Montserrat brand fonts
const fontExtraBoldPath = path.join(__dirname, '..', 'public', 'fonts', 'mobicare', 'Montserrat-ExtraBold.ttf');
const fontBoldPath = path.join(__dirname, '..', 'public', 'fonts', 'mobicare', 'Montserrat-Bold.ttf');
const fontSemiBoldPath = path.join(__dirname, '..', 'public', 'fonts', 'mobicare', 'Montserrat-SemiBold.ttf');

const fontExtraBold = opentype.parse(fs.readFileSync(fontExtraBoldPath).buffer);
const fontBold = opentype.parse(fs.readFileSync(fontBoldPath).buffer);
const fontSemiBold = opentype.parse(fs.readFileSync(fontSemiBoldPath).buffer);

// Helper for Lottie keyframe
function kf(t, s, o, i) {
  const item = { t, s };
  const dim = Array.isArray(s) ? s.length : 1;
  if (o && i) {
    item.o = o;
    item.i = i;
  } else {
    item.o = { x: Array(dim).fill(0.16), y: Array(dim).fill(1) };
    item.i = { x: Array(dim).fill(0.3), y: Array(dim).fill(1) };
  }
  return item;
}

function lastKf(t, s) {
  return { t, s };
}

// Cubic bezier easings
function snappyEase(dim = 3) {
  return {
    o: { x: Array(dim).fill(0.08), y: Array(dim).fill(0.85) },
    i: { x: Array(dim).fill(0.15), y: Array(dim).fill(1) }
  };
}

function smoothEase(dim = 3) {
  return {
    o: { x: Array(dim).fill(0.25), y: Array(dim).fill(1) },
    i: { x: Array(dim).fill(0.25), y: Array(dim).fill(1) }
  };
}

// Converts opentype Path to Bodymovin shape path array { v, i, o, c }
function opentypePathToLottieShapes(otPath, offsetX = 0, offsetY = 0) {
  const shapes = [];
  let currentShape = null;

  function closeCurrent() {
    if (!currentShape || currentShape.v.length < 3) return;
    const len = currentShape.v.length;
    const first = currentShape.v[0];
    const last = currentShape.v[len - 1];
    if (Math.abs(first[0] - last[0]) < 0.05 && Math.abs(first[1] - last[1]) < 0.05) {
      currentShape.i[0] = currentShape.i[len - 1];
      currentShape.v.pop();
      currentShape.i.pop();
      currentShape.o.pop();
    }
    currentShape.c = true;
    shapes.push(currentShape);
    currentShape = null;
  }

  for (let i = 0; i < otPath.commands.length; i++) {
    const cmd = otPath.commands[i];
    if (cmd.type === 'M') {
      closeCurrent();
      currentShape = {
        v: [[cmd.x + offsetX, cmd.y + offsetY]],
        i: [[0, 0]],
        o: [[0, 0]],
        c: true
      };
    } else if (cmd.type === 'L') {
      if (!currentShape) continue;
      currentShape.v.push([cmd.x + offsetX, cmd.y + offsetY]);
      currentShape.i.push([0, 0]);
      currentShape.o.push([0, 0]);
    } else if (cmd.type === 'C') {
      if (!currentShape) continue;
      const lastIdx = currentShape.v.length - 1;
      const lastV = currentShape.v[lastIdx];
      currentShape.o[lastIdx] = [cmd.x1 + offsetX - lastV[0], cmd.y1 + offsetY - lastV[1]];
      const newV = [cmd.x + offsetX, cmd.y + offsetY];
      currentShape.v.push(newV);
      currentShape.i.push([cmd.x2 + offsetX - newV[0], cmd.y2 + offsetY - newV[1]]);
      currentShape.o.push([0, 0]);
    } else if (cmd.type === 'Q') {
      if (!currentShape) continue;
      const lastIdx = currentShape.v.length - 1;
      const lastV = currentShape.v[lastIdx];
      const cx1 = lastV[0] + (2 / 3) * (cmd.x1 + offsetX - lastV[0]);
      const cy1 = lastV[1] + (2 / 3) * (cmd.y1 + offsetY - lastV[1]);
      const newV = [cmd.x + offsetX, cmd.y + offsetY];
      const cx2 = newV[0] + (2 / 3) * (cmd.x1 + offsetX - newV[0]);
      const cy2 = newV[1] + (2 / 3) * (cmd.y1 + offsetY - newV[1]);
      currentShape.o[lastIdx] = [cx1 - lastV[0], cy1 - lastV[1]];
      currentShape.v.push(newV);
      currentShape.i.push([cx2 - newV[0], cy2 - newV[1]]);
      currentShape.o.push([0, 0]);
    } else if (cmd.type === 'Z') {
      closeCurrent();
    }
  }
  closeCurrent();
  return shapes;
}

// Converts a string to an array of Lottie shape elements
function montserratToLottieShapes(font, text, fontSize = 92, startX = 0, startY = 0, tracking = 0) {
  const glyphShapes = [];
  let curX = startX;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === ' ') {
      curX += fontSize * 0.35 + tracking;
      continue;
    }
    const glyph = font.charToGlyph(char);
    const otPath = glyph.getPath(curX, startY, fontSize);

    const contours = opentypePathToLottieShapes(otPath);
    contours.forEach((c, cIdx) => {
      glyphShapes.push({
        ty: 'sh',
        nm: `${char}_contour_${cIdx}`,
        ks: { a: 0, k: c }
      });
    });

    const adv = (glyph.advanceWidth || 600) * (fontSize / font.unitsPerEm);
    curX += adv + tracking;
  }

  return { shapes: glyphShapes, totalWidth: curX - startX };
}

// Converts CARE string to Lottie shapes using Montserrat-SemiBold and authentic geometric shapes matching MobiCare logo
function montserratCareToLottieShapes(fontSemiBold, fontSize = 112, startX = 0, startY = 0, tracking = 6) {
  const glyphShapes = [];
  let curX = startX;
  const scale = fontSize / fontSemiBold.unitsPerEm;

  const text = 'CARE';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === 'A') {
      // Inverted V chevron polygon without crossbar (matching authentic MobiCare logo thickness 128 font units)
      const pA = [
        [0, 0], [296, -700], [424, -700], [720, 0],
        [592, 0], [360, -520], [128, 0]
      ];
      const vertices = pA.map(([x, y]) => [curX + x * scale, startY + y * scale]);
      glyphShapes.push({
        ty: 'sh',
        nm: 'A_no_crossbar',
        ks: {
          a: 0,
          k: {
            v: vertices,
            i: vertices.map(() => [0, 0]),
            o: vertices.map(() => [0, 0]),
            c: true
          }
        }
      });
      const advA = 720 * scale;
      curX += advA + tracking;
    } else if (char === 'R') {
      // Authentic R with straight diagonal leg matching original MobiCare logo
      const rPath = new opentype.Path();
      rPath.moveTo(curX + 94 * scale, startY);
      rPath.lineTo(curX + 94 * scale, startY - 700 * scale);
      rPath.lineTo(curX + 381 * scale, startY - 700 * scale);
      rPath.bezierCurveTo(
        curX + 521 * scale, startY - 700 * scale,
        curX + 680 * scale, startY - 567 * scale,
        curX + 680 * scale, startY - 451 * scale
      );
      rPath.bezierCurveTo(
        curX + 680 * scale, startY - 371 * scale,
        curX + 602 * scale, startY - 258 * scale,
        curX + 531 * scale, startY - 229 * scale
      );
      rPath.lineTo(curX + 710 * scale, startY);
      rPath.lineTo(curX + 560 * scale, startY);
      rPath.lineTo(curX + 409 * scale, startY - 204 * scale);
      rPath.lineTo(curX + 224 * scale, startY - 204 * scale);
      rPath.lineTo(curX + 224 * scale, startY);
      rPath.close();

      // Inner bowl counter hole:
      rPath.moveTo(curX + 224 * scale, startY - 590 * scale);
      rPath.lineTo(curX + 224 * scale, startY - 311 * scale);
      rPath.lineTo(curX + 376 * scale, startY - 311 * scale);
      rPath.bezierCurveTo(
        curX + 462 * scale, startY - 311 * scale,
        curX + 549 * scale, startY - 385 * scale,
        curX + 549 * scale, startY - 451 * scale
      );
      rPath.bezierCurveTo(
        curX + 549 * scale, startY - 517 * scale,
        curX + 462 * scale, startY - 590 * scale,
        curX + 376 * scale, startY - 590 * scale
      );
      rPath.close();

      const contours = opentypePathToLottieShapes(rPath);
      contours.forEach((c, cIdx) => {
        glyphShapes.push({
          ty: 'sh',
          nm: `R_contour_${cIdx}`,
          ks: { a: 0, k: c }
        });
      });
      curX += 730 * scale + tracking;
    } else {
      const glyph = fontSemiBold.charToGlyph(char);
      const otPath = glyph.getPath(curX, startY, fontSize);
      const contours = opentypePathToLottieShapes(otPath);
      contours.forEach((c, cIdx) => {
        glyphShapes.push({
          ty: 'sh',
          nm: `${char}_contour_${cIdx}`,
          ks: { a: 0, k: c }
        });
      });
      const adv = (glyph.advanceWidth || 600) * scale;
      curX += adv + tracking;
    }
  }

  return { shapes: glyphShapes, totalWidth: curX - startX };
}

// Generates authentic 8-cogs gear path with parallel flat teeth and circular valley arc
function generate8CogGearPath(cx = 0, cy = 0, innerR = 29.2, outerR = 35.5, cogWidth = 15.2) {
  const vertices = [];
  const inTangents = [];
  const outTangents = [];
  const cogs = 8;
  const period = (2 * Math.PI) / cogs;
  const hw = cogWidth / 2;

  for (let i = 0; i < cogs; i++) {
    const theta = i * period - Math.PI / 2; // 12:00 top cog
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    const u = [cos, sin];
    const v = [-sin, cos];

    // Tooth 4 corners:
    // 1. Root start
    const p1 = [cx + u[0] * innerR - v[0] * hw, cy + u[1] * innerR - v[1] * hw];
    // 2. Tip start (parallel side)
    const p2 = [cx + u[0] * outerR - v[0] * hw, cy + u[1] * outerR - v[1] * hw];
    // 3. Tip end (flat top)
    const p3 = [cx + u[0] * outerR + v[0] * hw, cy + u[1] * outerR + v[1] * hw];
    // 4. Root end (parallel side)
    const p4 = [cx + u[0] * innerR + v[0] * hw, cy + u[1] * innerR + v[1] * hw];

    vertices.push(p1, p2, p3, p4);
    inTangents.push([0, 0], [0, 0], [0, 0], [0, 0]);
    outTangents.push([0, 0], [0, 0], [0, 0], [0, 0]);

    // 5. Circular arc midpoint in the valley
    const nextTheta = (i + 1) * period - Math.PI / 2;
    const midTheta = (theta + nextTheta) / 2;
    const pMid = [cx + Math.cos(midTheta) * innerR, cy + Math.sin(midTheta) * innerR];
    vertices.push(pMid);
    inTangents.push([0, 0]);
    outTangents.push([0, 0]);
  }

  return {
    i: inTangents,
    o: outTangents,
    v: vertices,
    c: true
  };
}

// Rounded rectangle path for Smartphone body (scaled to authentic proportions matching logo mark)
function generateRoundedRectPath(w = 54, h = 98, r = 14) {
  const hw = w / 2;
  const hh = h / 2;
  const k = 0.5522847498 * r;

  return {
    v: [
      [-hw, -hh + r],
      [-hw + r, -hh],
      [hw - r, -hh],
      [hw, -hh + r],
      [hw, hh - r],
      [hw - r, hh],
      [-hw + r, hh],
      [-hw, hh - r]
    ],
    i: [
      [0, 0], [-k, 0],
      [0, 0], [0, -k],
      [0, 0], [k, 0],
      [0, 0], [0, k]
    ],
    o: [
      [0, -k], [0, 0],
      [k, 0], [0, 0],
      [0, k], [0, 0],
      [-k, 0], [0, 0]
    ],
    c: true
  };
}

// Smartphone earpiece notch
function generateEarpiecePath(w = 14, h = 3.0) {
  const hw = w / 2;
  const hh = h / 2;
  return {
    v: [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]],
    i: [[0, 0], [0, 0], [0, 0], [0, 0]],
    o: [[0, 0], [0, 0], [0, 0], [0, 0]],
    c: true
  };
}

// Plus Cross path with authentic proportions
function generatePlusCrossPath(armLenH = 34.5, armLenV = 33.5, armThick = 9.2) {
  const hW = armLenH / 2;
  const hH = armLenV / 2;
  const hT = armThick / 2;
  return {
    v: [
      [-hT, -hH], [hT, -hH],
      [hT, -hT],
      [hW, -hT], [hW, hT],
      [hT, hT],
      [hT, hH], [-hT, hH],
      [-hT, hT],
      [-hW, hT], [-hW, -hT],
      [-hT, -hT]
    ],
    i: Array(12).fill([0, 0]),
    o: Array(12).fill([0, 0]),
    c: true
  };
}

// Mathematical damped spring function for natural, lively bounce
function dampedSpring(t, t0, duration, startVal, endVal, freq = 14, damping = 0.38) {
  if (t <= t0) return startVal;
  const elapsed = (t - t0) / 60;
  const totalSec = duration / 60;
  if (elapsed >= totalSec) return endVal;
  const decay = Math.exp(-damping * freq * elapsed);
  const oscillation = Math.cos(freq * elapsed);
  return endVal - (endVal - startVal) * decay * oscillation;
}

// Build production-grade Lottie animation JSON
function buildMobicareLottieV2() {
  const fps = 60;
  const totalFrames = 360; // 6 seconds loop
  const width = 900;
  const height = 480;
  const centerX = width / 2;
  const centerY = height / 2;

  // Exact Brand Color Tokens
  const MOBI_GREEN = [0, 0.651, 0.318, 1];     // #00A651
  const MOBI_INK = [0.031, 0.047, 0.035, 1];    // #080C09
  const MOBI_WHITE = [1, 1, 1, 1];              // #FFFFFF
  const MOBI_MUTED = [0.45, 0.48, 0.46, 1];

  // Geometric coordinates for pixel-perfect balance
  // Centered logo layout matching authentic public/mobicare-logo.png:
  // [M] (x: 135) -> [Phone Mark] (center x: 282) -> [BI] (x: 346) -> [CARE] (x: 478)
  // Baseline for M, BI, CARE: Y = 250
  // Mark center: x = 282, y = 208
  // Tagline SERVICE CENTER: x: 478, y = 292 (exact width alignment from C to E)
  const baselineY = 250;
  const markX = 282;
  const markY = 208;

  const fontSize = 112;

  // Render authentic Montserrat glyphs (relative to layer anchor [0, 0])
  const mGlyphs = montserratToLottieShapes(fontExtraBold, 'M', fontSize, 0, 0);
  const biGlyphs = montserratToLottieShapes(fontExtraBold, 'BI', fontSize, 0, 0, 4);
  // CARE uses Montserrat-SemiBold (matching authentic MobiCare logo thickness 0.184) and inverted V chevron without crossbar (tracking 6px)
  const careGlyphs = montserratCareToLottieShapes(fontSemiBold, fontSize, 0, 0, 6);
  // Tagline SERVICE CENTER tracked to span from start of C to end of E (330px)
  const taglineGlyphs = montserratToLottieShapes(fontBold, 'SERVICE CENTER', 22, 0, 0, 9.3);

  // Opening Kinetic Typography words (Montserrat ExtraBold, fontSize = 72)
  const wordHp = montserratToLottieShapes(fontExtraBold, 'HP', 76, 0, 0, 2);
  const wordKamu = montserratToLottieShapes(fontExtraBold, 'KAMU', 76, 0, 0, 2);
  const wordRusak = montserratToLottieShapes(fontExtraBold, 'RUSAK?', 76, 0, 0, 2);
  const wordSolusi = montserratToLottieShapes(fontBold, 'SOLUSINYA:', 48, 0, 0, 5);

  // Generate Spring Keyframes for Hero Impact & Squash (from frame 140 to 210)
  const springPKeyframes = [];
  const springSKeyframes = [];
  const springCrossKeyframes = [];

  // Before impact (frame 0 -> 138)
  springPKeyframes.push(kf(0, [markX, -220, 0], snappyEase(3).o, snappyEase(3).i));
  springPKeyframes.push(kf(110, [markX, -220, 0], snappyEase(3).o, snappyEase(3).i));
  springPKeyframes.push(kf(140, [markX, markY, 0], snappyEase(3).o, snappyEase(3).i));

  springSKeyframes.push(kf(0, [80, 140, 100], snappyEase(3).o, snappyEase(3).i));
  springSKeyframes.push(kf(110, [80, 140, 100], snappyEase(3).o, snappyEase(3).i));
  springSKeyframes.push(kf(140, [135, 74, 100], snappyEase(3).o, snappyEase(3).i)); // Impact squash!

  // Mathematical damped oscillation keyframes every 4 frames (frame 140 -> 210)
  for (let f = 144; f <= 210; f += 4) {
    const curP = dampedSpring(f, 140, 70, markY - 30, markY, 15, 0.38);
    const curSx = dampedSpring(f, 140, 70, 135, 100, 15, 0.38);
    const curSy = 10000 / curSx; // volume-conserving
    springPKeyframes.push(kf(f, [markX, curP, 0], smoothEase(3).o, smoothEase(3).i));
    springSKeyframes.push(kf(f, [curSx, curSy, 100], smoothEase(3).o, smoothEase(3).i));
  }
  springPKeyframes.push(lastKf(360, [markX, markY, 0]));
  springSKeyframes.push(lastKf(360, [100, 100, 100]));

  // Plus cross scale pulse during idle (210 -> 360)
  springCrossKeyframes.push(kf(0, [0, 0, 100], snappyEase(3).o, snappyEase(3).i));
  springCrossKeyframes.push(kf(138, [0, 0, 100], snappyEase(3).o, snappyEase(3).i));
  springCrossKeyframes.push(kf(144, [140, 140, 100], snappyEase(3).o, snappyEase(3).i));
  springCrossKeyframes.push(kf(160, [90, 90, 100], snappyEase(3).o, snappyEase(3).i));
  springCrossKeyframes.push(kf(180, [106, 106, 100], snappyEase(3).o, snappyEase(3).i));
  springCrossKeyframes.push(kf(210, [100, 100, 100], smoothEase(3).o, smoothEase(3).i));
  // Breathing heartbeat pulse during idle
  springCrossKeyframes.push(kf(270, [114, 114, 100], smoothEase(3).o, smoothEase(3).i));
  springCrossKeyframes.push(kf(295, [98, 98, 100], smoothEase(3).o, smoothEase(3).i));
  springCrossKeyframes.push(kf(320, [108, 108, 100], smoothEase(3).o, smoothEase(3).i));
  springCrossKeyframes.push(kf(345, [100, 100, 100], smoothEase(3).o, smoothEase(3).i));
  springCrossKeyframes.push(lastKf(360, [100, 100, 100]));

  // =========================================================================
  // LAYER 1: Plus Cross (+) [Top-most in Bodymovin]
  // =========================================================================
  const plusCrossLayer = {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Service Plus Cross (+)",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(138, [0], snappyEase(1).o, snappyEase(1).i),
          kf(144, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: springPKeyframes.map(item => ({
          ...item,
          s: [item.s[0] + 13.0, item.s[1] + 4.0, item.s[2]]
        }))
      },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 1, k: springCrossKeyframes }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "Plus Cross",
        it: [
          { ty: "sh", nm: "Cross Path", ks: { a: 0, k: generatePlusCrossPath(34.5, 33.5, 9.2) } },
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_WHITE }, o: { a: 0, k: 100 }, r: 1 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 138,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 2: Precision Gear (8 Cogs, Dark Ink, Rotates Continuously)
  // Exactly matching authentic MobiCare logo with 8 cogs
  // =========================================================================
  const gearLayer = {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Precision Gear (8 Cogs)",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(120, [0], snappyEase(1).o, snappyEase(1).i),
          kf(138, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(130, [0], snappyEase(1).o, snappyEase(1).i),
          kf(140, [45], snappyEase(1).o, snappyEase(1).i),
          kf(160, [0], smoothEase(1).o, smoothEase(1).i),
          kf(210, [0], smoothEase(1).o, smoothEase(1).i),
          // Idle smooth rotation 360 degrees
          kf(360, [360], { x: [0.33], y: [0] }, { x: [0.67], y: [1] }),
          lastKf(360, [360])
        ]
      },
      p: {
        a: 1,
        k: springPKeyframes.map(item => ({
          ...item,
          s: [item.s[0] + 13.0, item.s[1] + 4.0, item.s[2]]
        }))
      },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 1, k: springSKeyframes }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "Gear 8 Cogs",
        it: [
          { ty: "sh", nm: "Gear Path", ks: { a: 0, k: generate8CogGearPath(0, 0, 29.2, 35.5, 15.2) } },
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 1 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 120,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 3: Smartphone Body (+21 deg, Thick Rounded Frame, Notch)
  // Exactly matching authentic orientation from public/mobicare-logo.png
  // =========================================================================
  const phoneBodyLayer = {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Smartphone Body (+21 deg)",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(115, [0], snappyEase(1).o, snappyEase(1).i),
          kf(135, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: {
        a: 1,
        k: [
          kf(0, [-10], snappyEase(1).o, snappyEase(1).i),
          kf(115, [-10], snappyEase(1).o, snappyEase(1).i),
          kf(140, [28], snappyEase(1).o, snappyEase(1).i),
          kf(160, [15], smoothEase(1).o, smoothEase(1).i),
          kf(180, [23], smoothEase(1).o, smoothEase(1).i),
          kf(210, [21], smoothEase(1).o, smoothEase(1).i),
          lastKf(360, [21])
        ]
      },
      p: { a: 1, k: springPKeyframes },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 1, k: springSKeyframes }
    },
    ao: 0,
    shapes: [
      // Screen background
      {
        ty: "gr",
        nm: "Screen Surface",
        it: [
          { ty: "sh", nm: "Inner Rect", ks: { a: 0, k: generateRoundedRectPath(46, 90, 10) } },
          { ty: "fl", nm: "Screen Fill", c: { a: 0, k: MOBI_WHITE }, o: { a: 0, k: 100 }, r: 1 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      },
      // Outer Frame
      {
        ty: "gr",
        nm: "Outer Frame",
        it: [
          { ty: "sh", nm: "Frame Path", ks: { a: 0, k: generateRoundedRectPath(54, 98, 14) } },
          {
            ty: "st",
            nm: "Frame Stroke",
            c: { a: 0, k: MOBI_INK },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 7.5 },
            lc: 2,
            lj: 2
          },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      },
      // Top Notch
      {
        ty: "gr",
        nm: "Top Notch",
        it: [
          { ty: "sh", nm: "Notch Path", ks: { a: 0, k: generateEarpiecePath(14, 3.0) } },
          { ty: "fl", nm: "Notch Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 1 },
          { ty: "tr", p: { a: 0, k: [0, -39] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 110,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 4: Letter "M" (Montserrat ExtraBold, MobiCare Green)
  // Position settles at [135, baselineY, 0]
  // =========================================================================
  const letterMLayer = {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Letter M (Green)",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(138, [0], snappyEase(1).o, snappyEase(1).i),
          kf(150, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [0, baselineY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(138, [0, baselineY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(160, [147, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(185, [132, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(210, [135, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [135, baselineY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [70, 120, 100], snappyEase(3).o, snappyEase(3).i),
          kf(138, [70, 120, 100], snappyEase(3).o, snappyEase(3).i),
          kf(160, [112, 94, 100], smoothEase(3).o, smoothEase(3).i),
          kf(185, [98, 102, 100], smoothEase(3).o, smoothEase(3).i),
          kf(210, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [100, 100, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "M Group",
        it: [
          ...mGlyphs.shapes,
          { ty: "fl", nm: "M Fill", c: { a: 0, k: MOBI_GREEN }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 135,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 5: Wordmark "BICARE" (BI in Green, CARE in Dark Ink)
  // Position settles at [346, baselineY, 0]
  // =========================================================================
  const bicareLayer = {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "Wordmark BICARE",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(140, [0], snappyEase(1).o, snappyEase(1).i),
          kf(152, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [560, baselineY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(140, [560, baselineY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(162, [334, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(186, [350, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(210, [346, baselineY, 0], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [346, baselineY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [70, 120, 100], snappyEase(3).o, snappyEase(3).i),
          kf(140, [70, 120, 100], snappyEase(3).o, snappyEase(3).i),
          kf(162, [112, 94, 100], smoothEase(3).o, smoothEase(3).i),
          kf(186, [98, 102, 100], smoothEase(3).o, smoothEase(3).i),
          kf(210, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [100, 100, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      // BI in Green
      {
        ty: "gr",
        nm: "BI (Green)",
        it: [
          ...biGlyphs.shapes,
          { ty: "fl", nm: "BI Fill", c: { a: 0, k: MOBI_GREEN }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      },
      // CARE in Dark Ink (placed at x = 132, perfectly spaced relative to I matching authentic logo ratio 1:1)
      {
        ty: "gr",
        nm: "CARE (Dark Ink)",
        it: [
          ...careGlyphs.shapes,
          { ty: "fl", nm: "CARE Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [132, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 138,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 6: Tagline "SERVICE CENTER" (Montserrat Bold, tracking 10px)
  // Settles at [478, 292, 0] directly spanning under CARE (346 + 132 = 478)
  // =========================================================================
  const taglineLayer = {
    ddd: 0,
    ind: 6,
    ty: 4,
    nm: "Tagline - SERVICE CENTER",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(170, [0], snappyEase(1).o, snappyEase(1).i),
          kf(198, [100], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [100])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [478, 306, 0], smoothEase(3).o, smoothEase(3).i),
          kf(170, [478, 306, 0], smoothEase(3).o, smoothEase(3).i),
          kf(205, [478, 292, 0], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [478, 292, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [92, 92, 100], smoothEase(3).o, smoothEase(3).i),
          kf(170, [92, 92, 100], smoothEase(3).o, smoothEase(3).i),
          kf(205, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          lastKf(360, [100, 100, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "SERVICE CENTER Text",
        it: [
          ...taglineGlyphs.shapes,
          { ty: "fl", nm: "Text Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 168,
    op: 360,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // LAYER 7: Shockwave Ring Layer (frame 140 -> 175)
  // =========================================================================
  const shockwaveLayer = {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: "Impact Shockwave",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(138, [0], snappyEase(1).o, snappyEase(1).i),
          kf(142, [90], snappyEase(1).o, snappyEase(1).i),
          kf(170, [0], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [0])
        ]
      },
      r: { a: 0, k: 0 },
      p: { a: 0, k: [markX + 13.0, markY + 4.0, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [20, 20, 100], snappyEase(3).o, snappyEase(3).i),
          kf(138, [20, 20, 100], snappyEase(3).o, snappyEase(3).i),
          kf(170, [230, 230, 100], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [230, 230, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "Ring",
        it: [
          { ty: "el", nm: "Circle", d: 1, p: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] } },
          {
            ty: "st",
            nm: "Stroke",
            c: { a: 0, k: MOBI_GREEN },
            o: { a: 0, k: 90 },
            w: {
              a: 1,
              k: [
                kf(0, [8], snappyEase(1).o, snappyEase(1).i),
                kf(138, [8], snappyEase(1).o, snappyEase(1).i),
                kf(170, [1], snappyEase(1).o, snappyEase(1).i),
                lastKf(360, [1])
              ]
            },
            lc: 2,
            lj: 2
          },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 135,
    op: 175,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // SCENE 1 LAYERS: OPENING WORD-BY-WORD KINETIC TYPOGRAPHY (0.0s – 1.6s)
  // Sentence: "HP" + "KAMU" + "RUSAK?"
  // =========================================================================
  // Word 1: "HP"
  const word1Layer = {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: "Word: HP",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(10, [100], snappyEase(1).o, snappyEase(1).i),
          kf(66, [100], snappyEase(1).o, snappyEase(1).i),
          kf(78, [0], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [0])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [170, centerY + 30, 0], snappyEase(3).o, snappyEase(3).i),
          kf(18, [170, centerY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(66, [170, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(78, [110, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [110, centerY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [80, 80, 100], snappyEase(3).o, snappyEase(3).i),
          kf(18, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          kf(66, [100, 100, 100], snappyEase(3).o, snappyEase(3).i),
          kf(78, [106, 106, 100], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [106, 106, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "HP",
        it: [
          ...wordHp.shapes,
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 0,
    op: 85,
    st: 0,
    bm: 0
  };

  // Word 2: "KAMU"
  const word2Layer = {
    ddd: 0,
    ind: 9,
    ty: 4,
    nm: "Word: KAMU",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(16, [0], snappyEase(1).o, snappyEase(1).i),
          kf(28, [100], snappyEase(1).o, snappyEase(1).i),
          kf(66, [100], snappyEase(1).o, snappyEase(1).i),
          kf(78, [0], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [0])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [320, centerY + 30, 0], snappyEase(3).o, snappyEase(3).i),
          kf(16, [320, centerY + 30, 0], snappyEase(3).o, snappyEase(3).i),
          kf(32, [320, centerY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(66, [320, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(78, [260, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [260, centerY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [80, 80, 100], snappyEase(3).o, snappyEase(3).i),
          kf(16, [80, 80, 100], snappyEase(3).o, snappyEase(3).i),
          kf(32, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          kf(66, [100, 100, 100], snappyEase(3).o, snappyEase(3).i),
          kf(78, [106, 106, 100], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [106, 106, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "KAMU",
        it: [
          ...wordKamu.shapes,
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 14,
    op: 85,
    st: 0,
    bm: 0
  };

  // Word 3: "RUSAK?" (Green)
  const word3Layer = {
    ddd: 0,
    ind: 10,
    ty: 4,
    nm: "Word: RUSAK? (Green)",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(32, [0], snappyEase(1).o, snappyEase(1).i),
          kf(44, [100], snappyEase(1).o, snappyEase(1).i),
          kf(66, [100], snappyEase(1).o, snappyEase(1).i),
          kf(78, [0], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [0])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [600, centerY + 30, 0], snappyEase(3).o, snappyEase(3).i),
          kf(32, [600, centerY + 30, 0], snappyEase(3).o, snappyEase(3).i),
          kf(48, [600, centerY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(66, [600, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(78, [540, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [540, centerY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [80, 80, 100], snappyEase(3).o, snappyEase(3).i),
          kf(32, [80, 80, 100], snappyEase(3).o, snappyEase(3).i),
          kf(48, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          kf(66, [100, 100, 100], snappyEase(3).o, snappyEase(3).i),
          kf(78, [106, 106, 100], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [106, 106, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "RUSAK?",
        it: [
          ...wordRusak.shapes,
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_GREEN }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 30,
    op: 85,
    st: 0,
    bm: 0
  };

  // =========================================================================
  // SCENE 2 LAYER: "SOLUSINYA:" (Frame 80 -> 125)
  // =========================================================================
  const wordSolusiLayer = {
    ddd: 0,
    ind: 11,
    ty: 4,
    nm: "Word: SOLUSINYA:",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          kf(0, [0], snappyEase(1).o, snappyEase(1).i),
          kf(80, [0], snappyEase(1).o, snappyEase(1).i),
          kf(92, [100], snappyEase(1).o, snappyEase(1).i),
          kf(116, [100], snappyEase(1).o, snappyEase(1).i),
          kf(128, [0], snappyEase(1).o, snappyEase(1).i),
          lastKf(360, [0])
        ]
      },
      r: { a: 0, k: 0 },
      p: {
        a: 1,
        k: [
          kf(0, [centerX - 140, centerY + 20, 0], snappyEase(3).o, snappyEase(3).i),
          kf(80, [centerX - 140, centerY + 20, 0], snappyEase(3).o, snappyEase(3).i),
          kf(95, [centerX - 140, centerY, 0], smoothEase(3).o, smoothEase(3).i),
          kf(116, [centerX - 140, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          kf(128, [centerX - 240, centerY, 0], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [centerX - 240, centerY, 0])
        ]
      },
      a: { a: 0, k: [0, 0, 0] },
      s: {
        a: 1,
        k: [
          kf(0, [88, 88, 100], snappyEase(3).o, snappyEase(3).i),
          kf(80, [88, 88, 100], snappyEase(3).o, snappyEase(3).i),
          kf(95, [100, 100, 100], smoothEase(3).o, smoothEase(3).i),
          kf(116, [100, 100, 100], snappyEase(3).o, snappyEase(3).i),
          kf(128, [108, 108, 100], snappyEase(3).o, snappyEase(3).i),
          lastKf(360, [108, 108, 100])
        ]
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        nm: "SOLUSINYA:",
        it: [
          ...wordSolusi.shapes,
          { ty: "fl", nm: "Fill", c: { a: 0, k: MOBI_INK }, o: { a: 0, k: 100 }, r: 2 },
          { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } }
        ]
      }
    ],
    ip: 78,
    op: 132,
    st: 0,
    bm: 0
  };

  return {
    v: "5.7.4",
    fr: fps,
    ip: 0,
    op: totalFrames,
    w: width,
    h: height,
    nm: "MobiCare Kinetic Motion Logo V2",
    ddd: 0,
    assets: [],
    layers: [
      plusCrossLayer,     // Layer 1 (Front)
      gearLayer,          // Layer 2
      phoneBodyLayer,     // Layer 3
      letterMLayer,       // Layer 4
      bicareLayer,        // Layer 5
      taglineLayer,       // Layer 6
      shockwaveLayer,     // Layer 7
      wordSolusiLayer,    // Layer 8 (Transition)
      word3Layer,         // Layer 9 (Scene 1: RUSAK?)
      word2Layer,         // Layer 10 (Scene 1: KAMU)
      word1Layer          // Layer 11 (Scene 1: HP)
    ]
  };
}

const lottieData = buildMobicareLottieV2();
const outputPath = path.join(__dirname, '..', 'public', 'lottie', 'mobicare-motion.json');
fs.writeFileSync(outputPath, JSON.stringify(lottieData, null, 2), 'utf-8');
console.log(`\n=== MOBICARE LOTTIE V2 SUCCESSFULLY GENERATED ===`);
console.log(`Output: ${outputPath}`);
console.log(`File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
