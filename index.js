import { compose, setDisplayName, withState } from 'recompose'

export default compose(
  setDisplayName('/src/enhancers/recompose-snippets/index.js'),
  withState('$1', 'set${1:/capitalize}', $2),
  $0
)