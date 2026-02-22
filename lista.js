function nocabeca(data){
    this.next = null;
    this.data = data;
};

function listaligada (){
    this.root = null;
    this.tail = null;

    this.adicionar = (data) => {
        const Datanovo = new nocabeca(data);
        if(!this.root){
            this.root = Datanovo;
            this.tail = Datanovo;
        } else {
            this.tail.next = Datanovo;
            this.tail = this.tail.next;
        };
    };

    this.print = (separator = '->') => {
        const result = [];
        let temp = this.root;
        while(temp){
            result.push(temp.data);
            temp = temp.next;
        }

        return result.join(separator);
    };
}

const Lista = new listaligada();


Lista.adicionar(2);
Lista.adicionar(3);
Lista.adicionar(6);

console.log(Lista.print());