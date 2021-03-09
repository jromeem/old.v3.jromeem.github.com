import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MinusBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import IconButton from '@material-ui/core/IconButton';
import { css } from '@emotion/css'

function App() {
  const [trackerValue, setTrackerValue] = useState(0);
  const fontStyles = css`
    font-size: 180px !important;
  `;
  const textStyles = css`
    font-size: 80px;
  `;
  const greenColor = css`
    color: green !important;
  `;
  const redColor = css`
    color: red !important;
  `;
  function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
  }
  const pointRange = range(4, 1);
  const pointRange2 = range(4, 1).reverse();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className={textStyles}>
         Score: {trackerValue}
        </div>
        <div>
          {
            pointRange2.map((value) => {
              const thisVal = value * 0.25;
              console.log('what');
              return (
                <IconButton
                  className={greenColor}
                  onClick={() => setTrackerValue(trackerValue + thisVal)} 
                >
                  + {thisVal}
                </IconButton>
              );
            })
          }
          {
            pointRange.map((value) => {
              const thisVal = value * 0.25;
              console.log('what');
              return (
                <IconButton
                  className={redColor}

                  onClick={() => setTrackerValue(trackerValue - thisVal)} 
                >
                - {thisVal}
                </IconButton>
              );
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
