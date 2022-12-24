import React, { memo } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';

const DropzoneFile = ({
  multiline = false,
  handleDropFile,
  renderDropFile,
  minSize=1024,
  maxSize=3072000
}) => {

  return (
    <Dropzone
      onDrop={handleDropFile}
      multiline={multiline}
      minSize={minSize}
      maxSize={maxSize}
    >
     {({getRootProps, getInputProps}) => {
      return renderDropFile?.(getRootProps, getInputProps)
     }} 
    </Dropzone>
  )
}

export default memo(DropzoneFile)