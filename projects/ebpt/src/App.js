import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { css } from '@emotion/css'
import { withStyles } from '@material-ui/core/styles';
import confetti from 'canvas-confetti';

function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

function mapRange(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

const PlusSide = ({trackerValue, setTrackerValue}) => {
  const pointRange = range(4, 1).reverse();
  const flexStyles = css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 50px;
  `;
  const buttonContainer = (v) => css`
    margin-bottom: 10px;
    padding-right: ${v * 28}px;
  `;
  const textStyles = (v) => css`
    width: ${v * 7 + 40}px;
    height: ${v * 2 + 30}px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: white;
    font-weight: ${v < 4 ? 400 : 700};
    font-size: ${v * 4 + 10}px;
    font-family: 'Source Serif Pro', serif;
  `;

  return (
    <div className={flexStyles}>
    {
      pointRange.map((value) => {
        const thisVal = value * 0.25;
        const reverseVal = (5 - value)
        const ColorButton = withStyles((theme) => ({
          root: {
            backgroundColor: `hsl(${135 + reverseVal * 10}, ${reverseVal * 90}%, ${45 - reverseVal * 2}%)`,
          },
        }))(Button);
        return (
          <div className={buttonContainer(value)}>
            <ColorButton
              variant="contained"
              onClick={() => {
                setTrackerValue(trackerValue + thisVal)
              }} 
            >
              <div className={textStyles(value)}>+ {value < 4 ? thisVal.toFixed(2) : thisVal}</div>
            </ColorButton>
          </div>
        );
      })
    }
    </div>
  );
}

const MinusSide = ({trackerValue, setTrackerValue}) => {
  const pointRange = range(4, 1).reverse();
  const flexStyles = css`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 50px;
  `;
  const buttonContainer = (v) => css`
    margin-bottom: 10px;
    padding-left: ${v * 28}px;
  `;
  const textStyles = (v) => css`
    width: ${v * 7 + 40}px;
    height: ${v * 2 + 30}px;
    align-items: center;
    justify-content: center;
    display: flex;
    color: white;
    font-weight: ${v < 4 ? 400 : 700};
    font-size: ${v * 4 + 10}px;
    font-family: 'Source Serif Pro', serif;
  `;
  return (
    <div className={flexStyles}>
    {
      pointRange.map((value) => {
        const thisVal = value * 0.25;
        const reverseVal = (5 - value)
        const ColorButton = withStyles((theme) => ({
          root: {
            backgroundColor: `hsl(${355 + reverseVal * 10}, ${reverseVal * 90}%, ${45 - reverseVal * 2}%)`,
          },
        }))(Button);
        return (
          <div className={buttonContainer(value)}>
            <ColorButton
              variant="contained"
              onClick={() => setTrackerValue(trackerValue - thisVal)} 
            >
              <div className={textStyles(value)}>- {value < 4 ? thisVal.toFixed(2) : thisVal}</div>
            </ColorButton>
          </div>
        );
      })
    }
    </div>
  );
}

const Content = () => {
  const [trackerValue, setTrackerValue] = useState(0);
  
  useEffect(() => {
    if (trackerValue >= 12) {
      confetti();
    }
  }, [trackerValue]);

  const styles = css`
    display: flex;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    position: relative;
    background-color: white;
    border: 10px solid green;
    flex-direction: column;
  `;

  const ControlPanel = () => {
    const flexStyles = css`
      display: flex;
      flex-grow: 1;
      position: relative;
      height: 100px;
      width: calc(100% - 20px);
      background-color: white;
      align-items: center;
      justify-content: center;
      border: 10px solid rgb(237, 162, 110);
    `;
    return (
      <div className={flexStyles}>
        <PlusSide trackerValue={trackerValue} setTrackerValue={setTrackerValue}/>
        <MinusSide trackerValue={trackerValue} setTrackerValue={setTrackerValue}/>
      </div>
    );
  }

  const Score = () => {
    const scoreStyles = (v) => css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8em;
      flex-grow: 1;
      font-weight: 700;
      color: hsl(${mapRange(v, 0, 12, 240, 360)}, ${mapRange(v, 0, 12, 20, 100)}%, ${mapRange(v, 0, 12, 30, 60)}%);
    `;
    return (
      <div className={scoreStyles(trackerValue)}>
        {trackerValue.toFixed(2)}
      </div>
    );
  }

  return (
    <div className={styles}>
      <Score/>
      <ControlPanel/>
    </div>
  );
}

function App() {
  const contentStyles = css`
    width: 100vw;
    height: 100vh;
    font-family: 'Source Serif Pro', serif;
  `;
  return (
    <div className={contentStyles}>
      <Content/>
    </div>
  );
}

export default App;
