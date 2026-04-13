class Product {
    constructor({id, title, description, price, categoryID, ownerID}) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._description = description;
        this._categoryID = categoryID; //ID da categoria
        this._ownerID = ownerID;
    }

    get id() { return this._id; }

    get title() { return this._title; }

    get description() { return this._description; }

    get price() { return this._price; }

    get categoryID() { return this._categoryID; }

    get ownerID() { return this._ownerID; }

}

module.exports = {Product};