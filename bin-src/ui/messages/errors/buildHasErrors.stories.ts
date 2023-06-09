import buildHasErrors from './buildHasErrors';

export default {
  title: 'CLI/Messages/Errors',
};

export const BuildHasErrors = () =>
  buildHasErrors({
    build: {
      errorCount: 2,
      webUrl: 'https://www.chromatic.com/build?appId=59c59bd0183bd100364e1d57&number=42',
    },
    exitCode: 1,
  });
export const BuildHasErrorsAndInteractionTestFailure = () =>
  buildHasErrors({
    build: {
      errorCount: 2,
      interactionTestFailuresCount: 1,
      webUrl: 'https://www.chromatic.com/build?appId=59c59bd0183bd100364e1d57&number=42',
    },
    exitCode: 1,
  });

export const BuildHasOnlyInteractionTestFailure = () =>
  buildHasErrors({
    build: {
      errorCount: 2,
      interactionTestFailuresCount: 2,
      webUrl: 'https://www.chromatic.com/build?appId=59c59bd0183bd100364e1d57&number=42',
    },
    exitCode: 1,
  });
