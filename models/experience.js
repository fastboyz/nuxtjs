class Experience {
    constructor(id, title, company, location, from, to, descriptions) {
        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.from = from;
        this.to = to;
        this.descriptions = descriptions;
    }
}

class Description {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}

export default { Experience, Description };