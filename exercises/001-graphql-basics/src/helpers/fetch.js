import isTest from './isTest'

/**
 * This is a quick solution to be able to mock API calls without a lot of effort
 * take into account that in a real situiation we would use a safer way.
 *
 * The bad of this code is that it is loading a dependency conditionally, so the
 * code that runs in production is not exactly the same as in the test, and we
 * should strive for that.
*/
const importFetch = () => {
  if (isTest()) {
    return require('jest-fetch-mock')
  }

  return require('cross-fetch')
}

export default importFetch()
