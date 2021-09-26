class Item {
    constructor(submittedAt, submitter, image, priority){
        this.submittedAt = submittedAt;
        this.updatedAt = submittedAt;
        this.submitter = submitter;

        this.image = image
        this.priority = priority;
        this.reason = null;
        this.status = false;
        this.processed = false;
    }
}

export default Item;