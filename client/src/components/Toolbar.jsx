import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss';
import Brush from '../tools/Brush';
import Eraser from '../tools/Eraser';
import Rect from '../tools/Rect';

const Toolbar = () => {
  const changeColor = e => {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  }

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = canvasState.sessionid + ".jpg";
    a.click();
    a.remove();
  }
  return (
    <div className='toolbar'>
        <button className='toolbar__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
        <button className='toolbar__btn rect' onClick={() => toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
        <button className='toolbar__btn circle'/>
        <button className='toolbar__btn eraser' onClick={() => toolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.sessionid))}/>
        <button className='toolbar__btn line'/>
        <input onChange={e => changeColor(e)} style={{marginLeft: '10px'}} type="color"/>
        <button className='toolbar__btn undo' onClick={() => canvasState.undo()}/>
        <button className='toolbar__btn redo' onClick={() => canvasState.redo()}/>
        <button className='toolbar__btn save' onClick={() => download()}/>
    </div>
  )
}

export default Toolbar