export default {
  window: {
    width: 1,
    height: 1
  },
  frame: {
    // gif: new GIF({
    //   workers: 1,
    //   quality: 10
    // }),
    renderer: null,
    repeat: 1,
    delay: 100,
    quality: 10,
    width: 320,
    height: 320,
    // width: 500,
    // height: 500,
    blob: null,
    // shaderCode: 'alpha=1.0; c = vec3(1.0, vUv.xy);'
    shaderCode: `
vec2 uv = vUv;
float num = 5.;

// repeat
uv = repeat(uv, vec2(num));

float ratio = (1.0 + sin(elapsedTime*.5))/ 2.0;

// uv = rotate(uv, PI * elapsedTime);

float angle = mod( -(elapsedTime+1.0) * .010 / num, PI) * num;
// angle *= mod( 15.0 * PI -elapsedTime * .010 / num, PI);
angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.03) / num, PI) * num;
angle *= 2.0;
angle += mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 1.20) / num, PI) * num;
angle *= 2.5;
angle += mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 1.20) / num, PI) * num;
// angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.10) / num, PI) * num;

uv = rotate(uv, angle);

c.r = abs(sin(angle + .0));
c.g = abs(sin(angle + .33 ));
c.b = abs(sin(angle + .66 ));


alpha = rect(vUv, vec2(1.1, 1.9));

if(alpha > 0.999) {
  c = vec3(0.0);
  alpha = 1.0;
  // discard;
} else {
  alpha = 1.0;
}
`
/*
    shaderCode: `
vec2 uv = vUv;
float num = 5.;

// repeat
uv = repeat(uv, vec2(num));

float ratio = (1.0 + sin(elapsedTime*.1))/ 2.0;

// uv = rotate(uv, PI * elapsedTime);

float angle = mod( -(elapsedTime+1.0) * .010 / num, PI) * num;
// angle *= mod( 15.0 * PI -elapsedTime * .010 / num, PI);
angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.05) / num, PI) * num;
angle *= 7.0;
// angle += mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.10) / num, PI) * num;
// angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.10) / num, PI) * num;

uv = rotate(uv, angle);

c.r = abs(sin(angle + .0));
c.g = abs(sin(angle + .33 ));
c.b = abs(sin(angle + .66 ));

alpha = rect(vUv, vec2(1.1, 1.9));

if(alpha > 0.999) {
  c = vec3(0.0);
  alpha = 1.0;
  // discard;
} else {
  alpha = 1.0;
}
`
*/

/*

    shaderCode: `

vec2 uv = vUv;

// float num = 1. + 1. * ( 1.0 + sin(mix(uv.x, uv.y, .5))) / 2.0;
// float num = 10. + 4. * ( 1.0 + sin(length(vUv + vec2(.5)))) / 2.0;
float num = 5.;

// repeat
uv = repeat(uv, vec2(num));

float ratio = (1.0 + sin(elapsedTime))/ 2.0;

// uv = rotate(uv, -length(vec2(.5) - vUv) * 5.0 * PI - elapsedTime * 3.0);

float angle = mod( -(elapsedTime+1.0) * .010 / num, PI) * num;
angle *= mod( 15.0 * PI -elapsedTime * .010 / num, PI);
angle *= mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 0.10) / num, PI) * num;

uv = rotate(uv, angle);

c.r = abs(sin(angle + .0));
c.g = abs(sin(angle + .33 ));
c.b = abs(sin(angle + .66 ));

alpha = rect(vUv, vec2(1.1, 1.9));

// alpha = rect(uv, vec2(0.1, 1.9));
// alpha = (sdHexPrism(vec3(1.0, .0, 1.0), uv));
// alpha *= sdHexPrism(uv.xyx, vec2(1.0, 1.0));
// alpha = rect(vUv, vec2(1.1, 1.9));

if(alpha > 0.999) {
  c = vec3(0.0);
  alpha = 1.0;
  // discard;
} else {
  alpha = 1.0;
}

`

*/

//     shaderCode: `
// vec2 uv = vUv;

// // float num = 1. + 1. * ( 1.0 + sin(mix(uv.x, uv.y, .5))) / 2.0;
// // float num = 10. + 4. * ( 1.0 + sin(length(vUv + vec2(.5)))) / 2.0;
// float num = 2.;

// // repeat
// uv = repeat(uv, vec2(num));

// float ratio = (1.0 + sin(elapsedTime))/ 2.0;

// // uv = rotate(uv, -length(vec2(.5) - vUv) * 5.0 * PI - elapsedTime * 3.0);

// // float angle = mod( -elapsedTime * 3.0 / num, PI) * num;
// // float angle = mod( 15.0 * PI -elapsedTime * 3.0 / num, PI);
// float angle = mod(-length(vec2(.5) - uv) * 1.0 * PI - (elapsedTime * 10.0) / num, PI) * num;

// uv = rotate(uv, angle);

// c.r = abs(sin(angle + .0));
// c.g = abs(sin(angle + .33 ));
// c.b = abs(sin(angle + .66 ));

// // alpha = rect(uv, vec2(0.1, 1.9));

// // alpha = (sdHexPrism(vec3(1.0, .0, 1.0), uv));
// // alpha = sdHexPrism(uv.xyx, vec2(1.0, 1.0));
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
