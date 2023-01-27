import React from 'react';
import styled from 'styled-components';
import {FileInput, Label, Preview} from '../index';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg';

const Wrapper = styled.div<{isSquare: boolean}>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: ${(props) => props.isSquare ? '10px' : '50%'};
  background-color: #dcdcdc;
  cursor: pointer;
  border: 1px dashed #21247d;

  input {
    display: none;
    margin: 0;
  }
  
  label,
  label div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    cursor: pointer;
    border-radius: ${(props) => (props.isSquare ? '10px' : '50%')};
  }
`;

const Avatar = (props: {
  isSquare: boolean;
  onClick: Function;
}) => {
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState('');

  React.useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);

    if (objectUrl) setPreview(objectUrl);

    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl) };
  }, [selectedFile]);

  return (
      <Wrapper isSquare={props.isSquare} onClick={() => props.onClick()}>
        <FileInput id={'Avatar'} onChange={setSelectedFile}/>
        <Label id={'Avatar'}>
          {preview ? <Preview image={preview}/> : <CameraIcon />}
        </Label>
      </Wrapper>
  );
}

export default React.memo(Avatar);
