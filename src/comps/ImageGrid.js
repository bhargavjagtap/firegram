import React from 'react'
import useFireStore from '../hooks/useFireStore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFireStore('images');
    console.log(docs);
    return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <motion.div className='img-wrap'
                layout
                whileHover={{opacity: 1}}
                key={doc.id}
                onClick={() => setSelectedImg(doc.url)}>
                <img key={doc.id} src={doc.url} alt={doc.caption}/>
            </motion.div>
        ))}
    </div>
  )
}

export default ImageGrid