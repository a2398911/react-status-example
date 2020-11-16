import React from 'react'
import CountStore from './store'

const Component = () => {
  const count = CountStore.useState((state) => state.count)

  return (
    <div className="ui card">
      <div className="content content-wrap">
        <a href="/" className="ui olive right ribbon label">
          PullState
        </a>
        <div className="description">
          <div className="ui statistic">
            <div className="value">{count}</div>
            <div className="label">
              <i className="ui icon stopwatch" />
              Clicks
            </div>
          </div>
        </div>
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
