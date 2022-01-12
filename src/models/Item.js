
import { v4 as uuidv4 } from 'uuid';

class Item {
    title;
    constructor(
        title
    ){
        this.id = uuidv4();
        this.title = title;
        this.timestamp = Date.now();
        this.solved = false;
        this.solvedTimestamp = null;
    }
}

export default Item;
