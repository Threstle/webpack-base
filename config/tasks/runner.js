const { CLICommands } = require("@solid-js/cli")
const { Files } = require("@zouloux/files")
Files.setVerbose(false)

/**
 * Run tasks
 */
;(async function tasks() {
  CLICommands.add("scaffold", (options, args) => {
    require("./scaffold").scaffold()
  })
  await CLICommands.start()
})()
