const UploadList = ({ files, resetFiles, uploadFiles }) => {
  return (
    <>
      <h2>You've selected the following files: </h2>
      <ul>
        {files.map(file => <li key={file.id}>{file.name}</li>)}
      </ul>
      <button onClick={resetFiles}>Cancel</button><button onClick={uploadFiles}>Upload</button>
    </>
  )
}

export default UploadList;