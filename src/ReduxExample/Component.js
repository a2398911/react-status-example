import React from 'react'
// import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// const AnnoyingCat = ({ onClick }) => {
//   console.log('AnnoyingCat 喵')
//   return (
//     <button type="button" className="ui orange button margin-top-10" onClick={onClick}>
//       <i className="github alternate icon" />
//       AnnoyingCat
//     </button>
//   )
// }

// const MemoCat = React.memo(({ onClick }) => {
//   console.log('MemoCat 喵')
//   return (
//     <button type="button" className="ui yellow button margin-top-10" onClick={onClick}>
//       <i className="github alternate icon" />
//       MemoCat
//     </button>
//   )
// })

const Component = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)

  // const handleAnnoyingCatClick = () => dispatch({ type: 'CAT' })
  // const handleMemoCatClick = useCallback(() => dispatch({ type: 'CAT' }), [dispatch])

  return (
    <div className="ui card">
      <div className="content content-wrap">
        <a href="/" className="ui orange right ribbon label">
          Redux
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
        {/* <AnnoyingCat onClick={handleAnnoyingCatClick} />
        <MemoCat onClick={handleMemoCatClick} /> */}
      </div>
    </div>
  )
}

export default Component
