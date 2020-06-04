import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({
      stack: true
    }),
    winston.format.json()
  ),
  defaultMeta: {
    service: 'gql-api-football-data'
  },
  transports: [
    new winston.transports.Console({
      stderrLevels: ['error']
    })
  ]
})

export default logger
