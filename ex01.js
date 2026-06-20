class Product{
    constructor(name, category, price, storage) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.storage = storage;
    }

    storageLevel() {
        let storageLevel;

        if (this.storage < 5) {
            storageLevel = 'baixo';
        } else {
            storageLevel = 'alto';
        }
        return storageLevel
    }

    output(){
        const storageLevel = this.storageLevel();

        const products = [this.name, this.category, Number(this.price), this.storage];

        console.log(`Produto: ${this.name}\n`);
        console.log(`Categoria: ${this.category}\n`);
        console.log(`Preço: ${Number(this.price)}\n`);
        console.log(`Estoque: ${storageLevel}\n`);

        console.log(products);
        
    }

    showType(){
        const storageLevel = this.storageLevel();

        const products = [this.name, this.category, Number(this.price), this.storage];

        console.log(`Produto: ${this.name} --- ${typeof(this.name)}\n`);
        console.log(`Categoria: ${this.category} --- ${typeof(this.category)}\n`);
        console.log(`Preço: ${Number(this.price)} --- ${typeof(Number(this.price))}\n`);
        console.log(`Estoque: ${storageLevel} --- ${typeof(storageLevel)}\n`);

        console.log(products);

    }
}

const monitor = new Product('monitor', 'Informática', '899.90', 5);
monitor.output()
monitor.showType()