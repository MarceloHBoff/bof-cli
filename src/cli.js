const { build } = require('gluegun')

async function run(argv) {
  const cli = build()
    .brand('bof')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'bof-*', hidden: true })
    .help()
    .version()
    .create()

  const toolbox = await cli.run(argv)

  return toolbox
}

module.exports = { run }
