import React, { useContext, useEffect } from 'react'
import {observer} from 'mobx-react-lite'
import ImageStore from '../../app/stores/imageStore'

const Image: React.FC = () => {
    const imageStore = useContext(ImageStore);
    const {imageOfTheDay, loadingImage} = imageStore;

    useEffect(() => {
        imageStore.loadJpgImage();
      }, [imageStore])

    if (loadingImage)
        return <div>Loading...</div>

    return (
        <div>
            <h2>Image of the Day</h2>
            <img src={imageOfTheDay} alt='daily' />
        </div>
    )
}

export default observer(Image);