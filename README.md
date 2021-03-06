<div align="center">
  <a href="https://github.com/jameswlane/status-board">
    <img src="https://github.com/jameswlane/status-board-logo/raw/master/status-board-logo.png">
  </a>
</div>

# status-board
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![CircleCI](https://circleci.com/gh/jameswlane/status-board.svg?style=svg)](https://circleci.com/gh/jameswlane/status-board)
[![dependencies Status](https://david-dm.org/jameswlane/status-board/status.svg)](https://david-dm.org/jameswlane/status-board)
[![devDependencies Status](https://david-dm.org/jameswlane/status-board/dev-status.svg)](https://david-dm.org/jameswlane/status-board?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/jameswlane/status-board.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswlane%2Fstatus-board.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswlane%2Fstatus-board?ref=badge_shield)
[![Maintainability](https://api.codeclimate.com/v1/badges/361a35856d52f3e4bf72/maintainability)](https://codeclimate.com/github/jameswlane/status-board/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/361a35856d52f3e4bf72/test_coverage)](https://codeclimate.com/github/jameswlane/status-board/test_coverage)
[![codecov](https://codecov.io/gh/jameswlane/status-board/branch/master/graph/badge.svg)](https://codecov.io/gh/jameswlane/status-board)
[![Code Style](https://img.shields.io/badge/code%20style-Airbnb-red.svg)](https://github.com/airbnb/javascript)
[![Slack Channel](https://slackin-xmjstmxrio.now.sh/badge.svg)](https://slackin-xmjstmxrio.now.sh/)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/jameswlane/status-board.svg?columns=all)](https://waffle.io/jameswlane/status-board)

<a href="https://www.patreon.com/jameswlane">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

Status Board is a fork of [Atlasboard](https://atlasboard.bitbucket.io) dashboard framework written in nodejs.

The last real update was over a year ago it seems development has went stale for the project.

I decided to fork it and release it under another name, and continue to improve it.

# Installation

```
npm install status-board
```

This is specially useful during development so you only bring up the components you need.

## Running your wallboard using Atlasboard as a module

From your wallboard directory, assuming that you have ``start.js`` run:

```
npm start
```

``start.js`` looks like this and it is included in > 1.0:

```
const statusBoard = require('status-board').default;

statusBoard(
  {
    port: process.env.ATLASBOARD_PORT || 3000,
    install: false
  },
  function (err) {
    if (err) {
      throw err;
    }
  }
);
```

You'll need to add the Status Board dependency to your ``package.json``.

## Packages and resources

# Documentation

## Migrating from Atlasboard

Nothing is supposed to break once you upgrade but you may want to update a few things:

# Roadmap

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/794161?v=4" width="100px;"/><br /><sub><b>James W. Lane III</b></sub>](http://fueledbydreams.com)<br />[💻](https://github.com/jameswlane/status-board/commits?author=jameswlane "Code") [⚠️](https://github.com/jameswlane/status-board/commits?author=jameswlane "Tests") [🚇](#infra-jameswlane "Infrastructure (Hosting, Build-Tools, etc)") [🔧](#tool-jameswlane "Tools") | [<img src="https://avatars2.githubusercontent.com/u/6710107?v=4" width="100px;"/><br /><sub><b>Swami Kalagiri</b></sub>](https://www.linkedin.com/in/swami-kalagiri)<br />[💻](https://github.com/jameswlane/status-board/commits?author=SwamiKalagiri "Code") [⚠️](https://github.com/jameswlane/status-board/commits?author=SwamiKalagiri "Tests") | [<img src="https://avatars1.githubusercontent.com/u/14790466?v=4" width="100px;"/><br /><sub><b>Greenkeeper</b></sub>](https://greenkeeper.io/)<br />[🔌](#plugin-greenkeeperio-bot "Plugin/utility libraries") | [<img src="https://avatars0.githubusercontent.com/u/29791463?v=4" width="100px;"/><br /><sub><b>fossabot</b></sub>](http://fossa.io)<br />[📖](https://github.com/jameswlane/status-board/commits?author=fossabot "Documentation") |
| :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjameswlane%2Fstatus-board.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjameswlane%2Fstatus-board?ref=badge_large)
