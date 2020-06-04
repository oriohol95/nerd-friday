import { enableMocks } from 'jest-fetch-mock'

enableMocks()

process.env.API_BASE_URL = 'http://fake-api.football-data.org/v2'
process.env.API_KEY = 'fake-api-key'
