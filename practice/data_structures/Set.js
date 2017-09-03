function Set() {
    let items = {};

    this.add = (value) => {
    	if(!this.has(value)){
    		items[value] = value;
    		return true;
    	}
    	return false;
    }

    this.delete = (value) => {
    	// verify value exists
    	if(this.has(value)){
    		delete items[value];
    		return true;
    	}
    	return false;
    }

    this.has = (value) => {
    	// returns boolean if property exists
    	return items.hasOwnProperty(value); 
    }

    this.clear = () => {
    	items = {};
    }

    this.size = () => {
    	return Object.keys(items).length;
    }

    this.values = () => {

    }
}


// union

// intersection

// difference

// subset