export default {
  windowWidth: state => state.window.width,
  windowHeight: state => state.window.height,
  isPortrait: state => state.window.width < state.window.height,
  isLandscape: state => state.window.width >= state.window.height,
  frameWidth: state => state.frame.width,
  frameHeight: state => state.frame.height,
  frameBlob: state => state.frame.blob,
  shaderCode: state => state.frame.shaderCode
}
