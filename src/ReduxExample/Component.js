import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Cube = React.memo(({ onPress }) => {
  console.log('Cube')
  return (
    <button type="button" className="ui button" onClick={onPress}>
      To 999
    </button>
  )
})

const Component = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  const handleCubeClick = useCallback(() => dispatch({ type: 'TO999' }), [dispatch])
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Count</div>
        <div className="meta">{count}</div>
      </div>
      <div className="extra content central">
        <div className="ui buttons fluid">
          <button type="button" className="ui button" onClick={() => dispatch({ type: 'DECREMENT' })}>
            -
          </button>
          <button type="button" className="ui button" onClick={() => dispatch({ type: 'RESET' })}>
            Reset
          </button>
          <button type="button" className="ui button" onClick={() => dispatch({ type: 'INCREMENT' })}>
            +
          </button>
        </div>
        <Cube onPress={handleCubeClick} />
      </div>
    </div>
  )
}

export default Component
