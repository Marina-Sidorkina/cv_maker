import React from 'react';

const FileInput = (props: {id: string; onChange: Function; value?: string}) => {
  return (
    <input id='Avatar'
           type='file'
           value={props.value ? props.value : ''}
           onChange={(evt) => {
             if (evt.target.files) props.onChange(evt.target.files[0])
           }}/>
  );
}

export default React.memo(FileInput);
