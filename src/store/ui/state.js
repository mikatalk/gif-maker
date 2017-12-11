import * as modes from './run-modes'

export default {
  runMode: modes.RUN_MODE_DEFAULT,
  window: {
    width: 1,
    height: 1
  },
  frame: {
    renderer: null,
    repeat: 1,
    delay: 100,
    quality: 10,
    width: 320,
    height: 320,
    blob: null,
    shaderCode: `
void main() {
  float elapsedTime = uElapsedTime;
  float loopRatio = uLoopRatio;
  vec2 uv = vUv;
  vec3 color = uColor;
  float alpha = 1.0;

  color.g *= mod(uv.x + loopRatio, 1.0);
  color.b *= mod(uv.y + loopRatio, 1.0);

  gl_FragColor = clamp(vec4( color, alpha), 0.0, 1.0);
}
`
//     shaderCode: `
// vec2 uv = vUv;
// float num = 5.;

// // repeat
// uv = repeat(uv, vec2(num));

// float ratio = (1.0 + sin(elapsedTime*.5))/ 2.0;

// // uv = rotate(uv, PI * elapsedTime);

// float angle = mod( -(elapsedTime+1.0) * .010 / num, PI) * num;
// // angle *= mod( 15.0 * PI -elapsedTime * .010 / num, PI);
// angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.03) / num, PI) * num;
// angle *= 2.0;
// angle += mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 1.20) / num, PI) * num;
// angle *= 2.5;
// angle += mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 1.20) / num, PI) * num;
// // angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.10) / num, PI) * num;

// uv = rotate(uv, angle);

// c.r = abs(sin(angle + .0));
// c.g = abs(sin(angle + .33 ));
// c.b = abs(sin(angle + .66 ));

// alpha = rect(vUv, vec2(1.1, 1.9));

// if(alpha > 0.999) {
//   c = vec3(0.0);
//   alpha = 1.0;
//   // discard;
// } else {
//   alpha = 1.0;
// }
// `
  }
}
