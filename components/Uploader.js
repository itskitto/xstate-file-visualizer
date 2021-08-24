import { useCallback, useState } from 'react';
import DragNDrop from './DragNDrop'
import UploadList from './UploadList'
import { uploadToFirebase } from '../utils/uploadToFirebase'

function Uploader() {
  const [files, setFiles] = useState([]);

  const resetFiles = useCallback(() => {
    setFiles([]);
  }, []);

  const selectFiles = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      setFiles(prevState => [...prevState,{name: file.name, id: file.path, file: file}])
    });
  }, []);

  const uploadFiles = useCallback(() => {
    files.map(file => {
      console.log(`Uploaded ${file.name}`);
      console.log(file.file);

      uploadToFirebase(file);
    })

    setFiles([]);
  }, [files])

  return (
    <>
      {files.length > 0 ? 
        <UploadList files={files} resetFiles={resetFiles} uploadFiles={uploadFiles}/> 
        : <DragNDrop onDrop={selectFiles}/>}
    </>
  )
}

export default Uploader;
