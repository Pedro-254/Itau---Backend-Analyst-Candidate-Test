class Category {
    constructor({id, title, description, ownerID}){
        const {titleValidated, descriptionValidated, ownerIDValidated} = validate(title, description, ownerID)
        this._id = id;
        this._title = titleValidated;
        this._description = descriptionValidated;
        this._ownerID = ownerIDValidated;
    }

    get id() { return this._id; }

    get title() { return this._title; }

    get description() { return this._description; }

    get ownerID() { return this._ownerID; }


}




function validate(title, description, ownerID) {
    const titleValidated = typeof title === 'string' ? title.trim() : '';
    const descriptionValidated = typeof description === 'string' ? description.trim() : '';
    const ownerIDValidated = typeof ownerID === 'string' ? title.trim() : '';

    if (!titleValidated) {
      throw new Error('title é obrigatório');
    }
    if (!ownerIDValidated) {
      throw new Error('ownerID é obrigatório');
    }

    return {titleValidated,descriptionValidated,ownerIDValidated}
}

module.exports = {Category}