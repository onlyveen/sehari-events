import React from 'react';

const ModalPlayer = ({url, setOpen}) => {
  return (
    <div className='modal'>
      <div className='modalWala'>
        <span className='btn' onClick = {() => setOpen(false)}>Close</span>
      <iframe width="560" height="315" src={url.replace("watch?v=", "embed/")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default ModalPlayer;