module.exports = {
    create: (req,res) => {
        let {name, description, price, image_url} = req.body;

        req.app.db.create_product(name, description, price, image_url)
        .then((dbResponse) => {
           res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('failed');
        });
    },
    getOne: (req,res) => {
        let{id} = req.params;

        req.app.db.read_product(id)
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
        let{id} = req.params;
        let{desc} = req.body;

        req.app.db.update_product([desc. id])
        .then(() => {
            res.status(200).send('Udated');
        }).catch(() =>{
            res.status(500).send('Failed');
        });
    },
    delete: (req,res) => {
        let{id} = req.params;

        req.app.db.delete_product(id)
        .then(() => {
            res.status(200).send('Deleted');
        }).catch(() =>{
            res.status(500).send('Failed');
        });
    },

}