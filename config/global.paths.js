const root = require("app-root-path")

module.exports = {

  /**
   * dist
   */
  dist: root.resolve("dist"),
  static: root.resolve("dist/static"),

  /**
   * config
   */
  config: root.resolve("config"),
  tasks: root.resolve("config/tasks"),
  componentsTemplatesPath: root.resolve("config/tasks/scaffold/component/templates"),
}
