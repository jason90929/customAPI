export const toggleCameraAutoPlay = (res) => {
  return (dispatch, getState) => {
    if (res) {
      // start auto play
      const camera = document.querySelector('[camera]')
      if (camera) {
        const { points, currentWaypoint } = getState().waypoints
        let autoPlayIndex = points.findIndex(point => point.uuid === currentWaypoint.uuid)
        let nextIndex = autoPlayIndex + 1
        if (nextIndex >= points.length) {
          nextIndex = 0
        }
        // console.log('autoPlayIndex nextIndex', autoPlayIndex, nextIndex)
        startAnimate.call(this, points, nextIndex)
        dispatch(toggleSwipeMoveEnabled(false))
        dispatch(toggleCameraRotatable(false))

        function animateFinish (points, autoPlayIndex) {
          dispatch(toggleAutoPlayAnimating(false))
          dispatch(actionCreators.setCurrentWaypoint(points[autoPlayIndex]))
          dispatch(actionCreators.generateNotification(points[autoPlayIndex].name))
          let nextIndex = autoPlayIndex + 1
          if (nextIndex >= points.length) {
            nextIndex = 0
          }
          // console.log('autoPlayIndex nextIndex', autoPlayIndex, nextIndex)
          delayExecuteFunction(() => {
            const { isCameraAutoPlay } = getState().camera
            if (isCameraAutoPlay) {
              startAnimate.call(this, points, nextIndex)
            }
          }, 1000)
        }
        function startAnimate (points, index) {
          dispatch(toggleAutoPlayAnimating(true))
          const { time } = getAnimationData(points[index])
          dispatch(setCurrentAnimationDuration(time))
          animate(points[index], animateFinish.bind(this, points, index))
        }
      } else {
        console.error('start auto play error: camera not found')
      }
    } else {
      // stop auto play
      stopAnimation()
      dispatch(actionCreators.undoCameraViewMode())
      dispatch(toggleSwipeMoveEnabled(true))
      dispatch(toggleCameraRotatable(true))
    }
    dispatch({
      type: actionTypes.TOGGLE_CAMERA_AUTO_PLAY,
      payload: res
    })
  }
}