"use client"

import {useDropzone} from 'react-dropzone';

import styles from './Dropzone.module.scss';
import { useEffect, useState } from 'react';  
import Image from 'next/image';
import PictureIcon from '@/assets/icons/picture';
  
interface ImagePreview {
  preview: string;
  name: string;
}

export default function Dropzone() {
    const [files, setFiles] = useState<Array<ImagePreview>>([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: {
        'image/*': []
      },
      onDrop: (acceptedFiles: Array<File>) => {
        console.log(acceptedFiles)
        setFiles((oldState) => {
            return [
                ...oldState,
                ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))
            ]
        });
      },
      maxFiles: 6
    });
    
    const thumbs = files.map(file => (
      <div className={styles.thumb} key={file.name}>
        <div className={styles.thumbInner}>
          <Image
            src={file.preview}
            className={styles.image}
            alt={file.name}
            width={100}
            height={100}
            // Revoke data uri after image is loaded
            onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
        </div>
      </div>
    ));
  
    useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
    <>
        <section className={styles.container}>
            <div {...getRootProps({className: styles.dropzone})}>
                <input {...getInputProps()} />
                <PictureIcon />
                <p>Drop here  images for your instagram</p>
            </div>
        </section>
        {thumbs.length > 0 && (
          <div className={styles.thumbsContainer}>
              {thumbs}
          </div>
        )}
    </>
    );
  }