/* globals fetch */

import 'cross-fetch'
import queryString from 'query-string'

import logger from './logger'

const defaultOptions = {
  params: {},
  headers: {}
}

const fetchJson = async (endpointUrl, options) => {
  const safeOptions = { ...defaultOptions, ...options }

  const { params, headers } = safeOptions

  const paramsString = queryString.stringify(params)

  let url = endpointUrl

  if (paramsString) {
    url += `?${paramsString}`
  }

  try {
    /**
     * We are about to make a http request, and we want to have profiling information for
     * performance analysis: Start the logger profiler to get the request time once
     * it finishes.
     */
    const requestProfiler = logger.startTimer()

    const res = await fetch(
      url,
      { headers }
    )

    const responseData = await res.json()

    /**
     * The request has been processed correctly at this point: Stop the profiler to
     * calculate the elapsed time.
     */
    requestProfiler.done({
      message: `Request ${url}`
    })

    return responseData
  } catch (e) {
    logger.error(e)
  }

  return null
}

export default fetchJson
