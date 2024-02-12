import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import { CLOUDINARY_CLOUDNAME,CLOUDINARY_APIKEY,CLOUDINARY_APISECRET } from '../config.js';


cloudinary.config({
    cloud_name: CLOUDINARY_CLOUDNAME,
    api_key: CLOUDINARY_APIKEY,
    api_secret: CLOUDINARY_APISECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ShopSphere',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})

export default storage;