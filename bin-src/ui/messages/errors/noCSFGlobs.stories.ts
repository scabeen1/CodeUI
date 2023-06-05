import noCSFGlobs from './noCSFGlobs';

export default {
  title: 'CLI/Messages/Errors',
};

export const NoCSFGlobs = () =>
  noCSFGlobs({
    statsPath: '/tmp/storybook-static/preview-stats.json',
    storybookDir: '.storybook',
    storybookBuildDir: undefined,
    entryFile: undefined,
    viewLayer: 'angular',
  });

export const NoCSFGlobsFoundEntry = () =>
  noCSFGlobs({
    statsPath: '/tmp/storybook-static/preview-stats.json',
    storybookDir: '.storybook',
    storybookBuildDir: undefined,
    entryFile: 'path/to/.storybook/generated-stories-entry.js',
  });

export const NoCSFGlobsFoundEntryPrebuilt = () =>
  noCSFGlobs({
    statsPath: '/tmp/storybook-static/preview-stats.json',
    storybookDir: '.storybook',
    storybookBuildDir: 'storybook-static',
    entryFile: 'path/to/.storybook/generated-stories-entry.js',
  });
