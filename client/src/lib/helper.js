module.exports = {
    findDiddit: (query, callback) => {
        //query mongo and find the specific subdiddit they want otherwise return it is not found through callback.
        callback({name: "This is the diddit info you want"});
    },
}