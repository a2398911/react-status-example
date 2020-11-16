import React from 'react'
import CountStore from './store'

const Component = () => {
  const count = CountStore.useState((state) => state.count)

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Count</div>
        <div className="meta">{count}</div>
      </div>
      <div className="extra content central">
        <div className="ui buttons fluid">
          <button
            type="button"
            className="ui button"
            onClick={() =>
              CountStore.update((state) => {
                state.count -= 1
              })
            }
          >
            -
          </button>
          <button
            type="button"
            className="ui button"
            onClick={() =>
              CountStore.update((state) => {
                state.count = 0
              })
            }
          >
            Reset
          </button>
          <button
            type="button"
            className="ui button"
            onClick={() =>
              CountStore.update((state) => {
                state.count += 1
              })
            }
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Component
