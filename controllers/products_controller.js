module.exports = {
    create: (req,res) => {
        req.app.db.create_product()
        .then((dbResponse) => {
           res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('failed');
        });
    },
    getOne: (req,res) => {
        req.app.db.read_product()
        .then((product) => {
            res.status(200).send(product);
        }).catch((error) =>{
            res.status(500).send('Could not get products!');
            console.log(error)
        });
    },
    getAll: (req,res) => {
        req.app.db.read_product()
        .then((products) => {
            res.status(200).send(products);
        }).catch((error) =>{
            res.status(500).send('Could not get product!');
            console.log(error)
        });
    },
    update: (req,res) => {
        req.app.db.update_product()
        .then(() => {
            res.status(200).send('Udated');
        }).catch(() =>{
            res.status(500).send('Failed');
        });
    },
    delete: (req,res) => {
        req.app.db.delete_product()
        .then(() => {
            res.status(200).send('Deleted');
        }).catch(() =>{
            res.status(500).send('Failed');
        });
    },

}