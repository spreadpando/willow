import Scene from '../src/scene'
// import Controls from '../src/controls'
import styled from 'styled-components'

const Cnvs = styled('div')`
  position: absolute;
  width: 100vw;
  height: 100vh;
`
const IndexPage = () => {
  return (
    <Cnvs>
      <Scene />
      {/* <Controls /> */}
    </Cnvs>

  )
}

export default IndexPage
