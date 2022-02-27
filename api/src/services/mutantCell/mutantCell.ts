const path = require('path')
const __file = path.basename(__filename)

import type { ResolverArgs } from '@redwoodjs/graphql-server'

// ------------------------------------------------------------------------------------------------------------
export const MutantCell = { }

// ------------------------------------------------------------------------------------------------------------
export const runQuery = async () => {
  return {
    result: `finished runQuery() @ ${Date.now()}`
  }
}

// ------------------------------------------------------------------------------------------------------------
export const runMutation = async () => {
  return {
    result: `finished runMutation() @ ${Date.now()}`
  }
}