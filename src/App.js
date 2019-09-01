import React , {useState} from 'react';
import './styles/app.scss';
import './styles/typo.scss';
import './styles/button.scss';
import './styles/next-page.scss';
import Nav from './components/layout/Nav';
import NextPage from './components/layout/NextPage';
import Body from './components/layout/Body.js';

const App = () => {  
  const [open, setOpen] = useState(false)
  console.log(open);
  return (
    <div className="App">
      <Nav open={open} />
      <Body open={open} />
      <NextPage open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
