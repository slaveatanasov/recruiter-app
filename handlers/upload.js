var bucket = '../bucket/';
var bucketProfileImg = '../bucket/profile_images';
var bucketDocuments = '../bucket/documents';
var allowedImageTypes = ['image/jpg', 'image/jpeg', 'image/pjpeg', 'image/gif', 'image/png'];
var allowedDocumentTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf', 'text/plain'];

var uploadProfileImage = (req, res) => {
    if (req.files.doc.mimetype.split('/')[0] == 'image'){
        var fileChunks = req.files.doc.name.split('.');
        var imgName = req.user.id + '.' + fileChunks[fileChunks.length - 1];
        req.files.doc.mv(bucketProfileImg + imgName, (err) => {
            if(err) {
                return res.status(500).send('Could not upload your profile image. ' + err);
            } else {
                return res.status(200).send('Profile image uploaded.');
            }
        });
    } else {
        return res.status(400).send('File type not allowed.');
    }
};

var uploadDocument = (req, res) => {
    if (allowedDocumentTypes.indexOf(req.files.doc.mimetype) > -1) {
        var docName = req.user.id + '_' + req.files.doc.name;
        req.files.doc.mv(bucketDocuments + docName, (err) => {
            if(err) {
                return res.status(500).send('Could not upload your document. ' + err);
            } else {
                return res.status(200).send('Document uploaded.');
            }
        });
    } else {
        return res.status(400).send('File type not allowed.');
    }
};

module.exports = {
    uploadProfileImage,
    uploadDocument
}