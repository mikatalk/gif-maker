import * as types from './mutations-types'
// import GIF from 'gif.js'

// const gif = new GIF({
//   workers: 6,
//   quality: 10
// })

export default {
  [types.UPDATE_FRAME_SIZE] (state, { size }) {
    state.frame.width = size.width || state.frame.width
    state.frame.height = size.height || state.frame.height
  },

  [types.UPDATE_SHADER_CODE] (state, { code }) {
    state.frame.shaderCode = code.code || state.frame.shaderCode
  }

  // [types.ADD_FRAME] (state, { image }) {
  //   // console.log('NEW IMAGE', state.frame.gif)
  //   // gif.addFrame(image)
  // },

  // [types.RENDER_GIF] (state) {
  //   // gif.on('finished', (blob) => {
  //   //   // window.open(URL.createObjectURL(blob))
  //   //   let img = new Image()
  //   //   img.src = URL.createObjectURL(blob)
  //   //   img.onload = () => {
  //   //     console.log('done')
  //   //     document.body.appendChild(img)
  //   //   }
  //   // })
  //   // gif.render()
  // }
}
