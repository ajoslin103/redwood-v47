import { useCallback, useEffect, useState } from 'react'
import { useMutation } from '@redwoodjs/web'

import type { FindRunMutationQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const MUTATION = gql`
  mutation FindRunMutationQuery {
    runMutation {
      result
    }
  }
`

export const beforeQuery = (props) => {
  const variables = { ...props }
  return { variables, fetchPolicy: 'no-cache' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  runMutation,
}: CellSuccessProps<FindRunMutationQuery>) => {
  return <div>{JSON.stringify(runMutation.result)}</div>
}

// ---------------------------------------------------------
const enum StageEnum { loading, failure, success }
const RunMutationCell = ({ onComplete, onError }) => {
  const [stage, setStage] = useState<StageEnum>(StageEnum.loading)

  const [error, setError] = useState()
  const [result, setResult] = useState()

  const _onComplete = useCallback(
    (data) => {
      typeof onComplete === 'function' && onComplete(data)
      setResult(data)
      setStage(StageEnum.success)
    },
    [onComplete, setResult, setStage]
  )

  const _onError = useCallback(
    (err) => {
      typeof onError === 'function' && onError(err)
      setError(err)
      setStage(StageEnum.failure)
    },
    [onError, setError, setStage]
  )

  const [mutate, { called }] = useMutation(MUTATION, {
    onCompleted: _onComplete,
    onError: _onError,
  })

  useEffect(() => {
    if (!called) {
      mutate()
    }
  }, [called, mutate])

  return (
    <>
      {stage === StageEnum.loading && <Loading />}
      {stage === StageEnum.failure && <Failure {...error} />}
      {stage === StageEnum.success && <Success {...result} />}
    </>
  )
}

export default RunMutationCell
