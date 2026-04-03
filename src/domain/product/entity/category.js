class Category {
    constructor(id, title, description, ownerID){
        validate(title, description, ownerID)
        this._id = id;
        this._title = title;
        this._description = description;
        this._ownerID = ownerID;
    }


}

function validate(title, description, ownerID) {
    const t = typeof title === 'string' ? title.trim() : '';
    const o = typeof ownerID === 'string' ? title.trim() : '';

    if (!t) {
      throw new Error('title é obrigatório');
    }
    if (!o) {
      throw new Error('ownerID é obrigatório');
    }
}

module.exports = Category