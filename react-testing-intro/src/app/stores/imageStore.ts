import { createContext } from 'react';
import { action, configure, observable, runInAction } from 'mobx';
import agent from '../api/agent'

configure({enforceActions: 'always'});

class ImageStore {
    @observable imageOfTheDay: string = '';
    @observable loadingImage: boolean = false;

    @action loadJpgImage = async () => {
        this.loadingImage = true
        try {
            let image = await agent.Photos.jpeg();
            runInAction('getting image', () => {

                this.imageOfTheDay = 'data:image/jpg;charset=utf-8;base64,' + image;
                this.loadingImage = false;
            }); 
        }
        catch (ex) {
            console.log(ex);
            runInAction('load JPG image error', () => {
                this.loadingImage = false;
            });
        }
    }
}

export default createContext(new ImageStore());