const Imagekit = require('@imagekit/nodejs');

const imagekit = new Imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(file) {   
    try {
        const result = await imagekit.files.upload({
            file: file,
            fileName: `spotify_clone_${Date.now()}.jpg`
        });
        return result;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error;
    }   
}

module.exports = { uploadFile  };