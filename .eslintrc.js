module.exports = {
  env: {
    'es6': true,
    'node': true,
  },
  'extends': [
    'canonical',
    'canonical/lodash',
    'canonical/mocha',
  ],
  'plugins': [
    'private-props',
    'sort-keys-fix',
  ],
  'rules': {
    'eqeqeq': [2, 'smart'],
    'no-eq-null': 0,
    'require-jsdoc': 1,
    'no-trailing-spaces': 1,
    'no-undef': 0,
    'promise/always-return': 0,
    'promise/catch-or-return': 0,
    'id-length': 0,
    'no-unused-vars': 1,
    'new-cap': 0,
    'class-methods-use-this': 0,
    'arrow-body-style': 0,
    'no-console': 1,
    'no-process-env': 0,
    'no-unused-expressions': 0,
    'arrow-parens': [2, 'as-needed', {
      requireForBlockBody: true,
    }],
    'max-len': ["error", { "code": 120 }],
    'max-nested-callbacks': 0,
    'object-property-newline': 0,
    'lines-around-comment': 1,
    'sort-keys': 0, //Disabled in favor of sort-keys-fix
    'import/no-namespace': 0,
    'import/no-unresolved': 0,
    'no-empty': 0,
    'import/no-unassigned-import': 0,
    'id-match': [2, "(^[_|A-Za-z0-9]+(?:[A-Z0-9][a-z]*)*\\d*$)|(^[A-Z0-9]+(_[A-Z0-9]+)*(_\\d$)*$)|(^(_|\\$)$)",],
    'filenames/match-regex': [2, "^[A-Z](([_|A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|([A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$))",],
    'fp/no-this': 0,
    'fp/no-class': 0,
    'import/max-dependencies': 0,
    'unicorn/no-abusive-eslint-disable': 1,
    'mocha/no-hooks-for-single-case': 0,
    'mocha/no-setup-in-describe': 0,
    'private-props/no-unused-or-undeclared': 1,
    'private-props/no-use-outside': 2,
    'sort-keys-fix/sort-keys-fix': 2,
  },
  'parserOptions': {},
};
