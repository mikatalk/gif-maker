export default {
  frame: {
    // gif: new GIF({
    //   workers: 1,
    //   quality: 10
    // }),
    renderer: null,
    repeat: 1,
    delay: 100,
    quality: 10,
    width: 120,
    height: 120,
    // width: 500,
    // height: 500,
    blob: null,
    shaderCode: `

  float circle(vec2 uv, float scale) {
    return length(uv - .5) * 1.0 / scale;
  }

  float rect (vec2 uv, vec2 s) {
    uv = uv * 2.0 - 1.0;
    return max( abs(uv.x / s.x), abs(uv.y / s.y));
  }
  
  float sdHexPrism( vec3 p, vec2 h ) {
    vec3 q = abs(p);
    return max(q.z-h.y,max((q.x*0.866025+q.y*0.5),q.y)-h.x);
  }

  vec2 repeat(vec2 uv, vec2 tiles) {
    return fract(uv * tiles);
  }
  
  vec2 rotate (vec2 uv, float a) {
    uv = mat2(cos(a), -sin(a), sin(a), cos(a)) * (uv - 0.5);
    return uv + 0.5;
  }

    `

  }
}
