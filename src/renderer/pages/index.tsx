import { getGlobal } from '../utils/electron';
import { Button } from 'antd'
function Index() {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h1>{ getGlobal('title') }</h1> */}
      <br />
      <br />
      <Button>dd22</Button>
      <img src={require('../assets/yay.jpg')} width='400' />
    </div>
  );
}

export default Index;
