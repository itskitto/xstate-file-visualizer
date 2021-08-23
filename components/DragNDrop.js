import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const DragNDrop = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  return (
    <DropArea {...getRootProps({ refKey: 'innerRef' })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Release to drop the files here</p>
      ) : (
        <p>
          Drag and drop or or <FileSelectorText>click to select files</FileSelectorText>
        </p>
      )}
    </DropArea>
  )
}

const DropArea = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 4px dashed lightgray;

  color: gray;
  text-align: center;
`

const FileSelectorText = styled.span`
  font-size: inherit;
  color: #0c090d;
`

export default DragNDrop;