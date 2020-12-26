const { createJestConfig: create } = require('tsdx/dist/createJestConfig')

module.exports = function createJestConfig(root, options) {
  return Object.assign(
    {},
    create(undefined, root),
    {
      rootDir: root,
      globals: {
        'ts-jest': {
          isolatedModules: true,
          tsConfig: '<rootDir>/tsconfig.json',
        },
      },
    },
    options
  )
}
