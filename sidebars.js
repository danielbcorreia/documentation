module.exports = {
  usage: {
    Basic: [
      'basic/getting_started',
      'basic/updates',
      'basic/existing_elements',
      'basic/sensor',
      'basic/theming',
      'basic/logs',
    ],
    Navigation: ['navigation/overview', 'navigation/stores'],
    Categories: [
      'categories/integrations',
      'categories/plugins',
      'categories/appdaemon_apps',
      'categories/netdaemon_apps',
      'categories/python_scripts',
      'categories/themes',
    ],
  },
  setup: {
    Setup: ['setup/prerequisites', 'setup/download'],
    Configuration: ['configuration/start', 'configuration/basic', 'configuration/options'],
    'Legacy Configuration (YAML)': ['configuration/legacy'],
    Remove: ['setup/remove'],
  },
  'developer documentation': {
    'HACS Development': [
      'developer/start',
      'developer/devcontainer',
      'developer/translation',
      'developer/documentation',
      'developer/backend',
      'developer/frontend',
      'developer/maintainer',
    ],
    'Publish to HACS': [
      'publish/start',
      'publish/appdaemon',
      'publish/integration',
      'publish/netdaemon',
      'publish/plugin',
      'publish/python_script',
      'publish/theme',
      'publish/include',
      'publish/action',
      'publish/remove',
    ],
  },
  FAQ: {
    FAQ: [
      'faq/what',
      'faq/highlights',
      'faq/hassio_only',
      'faq/addons',
      'faq/download',
      'faq/upgrade',
      'faq/initial_startup',
      'faq/status_not_loaded',
      'faq/custom_repositories',
      'faq/limitations',
    ],
  },
}
