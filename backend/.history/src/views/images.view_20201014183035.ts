import Image from '../models/Image';

export default {
    render (image:Image) {
        return {
            id: image.id,
      
        };
    },
    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
}