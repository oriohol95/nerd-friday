const {
  NODE_ENV
} = process.env

const isTest = () =>
  NODE_ENV === 'test'

export default isTest
