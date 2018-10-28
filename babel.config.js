module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          ie: '11'
        }
      }
    ]
  ],
  plugins: [
    [
      'transform-react-jsx',
      {
        pragma: 'h'
      }
    ]
  ]
}
