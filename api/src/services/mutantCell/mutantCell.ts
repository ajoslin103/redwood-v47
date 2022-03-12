const path = require('path')
const __file = path.basename(__filename)
import { logger } from 'src/lib/logger'

import type { ResolverArgs } from '@redwoodjs/graphql-server'

// ------------------------------------------------------------------------------------------------------------
export const MutantCell = { }

// ------------------------------------------------------------------------------------------------------------
export const runQuery = async () => {
  logger.debug(`runQuery()`)
  return {
    result: `finished runQuery() @ ${Date.now()}`
  }
}

// ------------------------------------------------------------------------------------------------------------
export const runMutation = async () => {
  logger.debug(`runMutation()`)
  return {
    result: `finished runMutation() @ ${Date.now()}`
  }
}