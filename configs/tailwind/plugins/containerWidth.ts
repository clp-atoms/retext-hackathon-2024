import plugin from 'tailwindcss/plugin'

export default plugin(({ addComponents }) => {
  addComponents({
    '.container': {
      maxWidth: '1920px',
    },
  })
})
