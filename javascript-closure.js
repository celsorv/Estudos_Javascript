

/*
    ------------------------------------------------------------------------------------------------------
    - a variável 'y' pertence ao escopo definido pela função sum().
    - a variável 'x' pertence ao escopo global, portanto, também acessível a partir da função sum().
    ------------------------------------------------------------------------------------------------------
*/

const x = 2;

function sum() {
    const y = 3;
    return x + y;
}

console.log(sum());    // 5



/*  
    ------------------------------------------------------------------------------------------------------
    - seguindo o mesmo conceito citado acima, a função child() tem acesso à variável x da função parent().
    - a função parent() retorna uma referência para sua função interna child().
    - count faz referência à função child(), então não pode ser coletada pelo garbage collector.
    - child() existe dentro de parent(), portanto, parent() e sua variável x permanecem alocadas.
    - chamar count() significa chamar child() que atualiza a variável x de parent().

    Closure: quando uma função é capaz de lembrar e acessar seu escopo léxico mesmo quando ela está
    sendo executada fora de seu escopo léxico.
    -------------------------------------------------------------------------------------------------------
*/

function parent(){
    
    let x = 1;
    
    function child() {       // const child = () => console.log(x++);
      console.log(x);
      x++;
    }
    
    return child;
}
 
const count = pai();
count();    // 1
count();    // 2
count();    // 3




/*
    ------------------------------------------------------------------------------------------------------
    Closures são aplicadas em estruturas de módulos.
    ------------------------------------------------------------------------------------------------------
*/

function counterModule() {

    let x = 0;
    
    function increment() {      // const increment = () => console.log(++x);
        x++;
        console.log(x);
    }
    
    function decrement() {      // const decrement = () => console.log(--x);
        x--;
        console.log(x);
    }

    return {
        increment: increment,
        decrement: decrement
    };

}

const counter = counterModule();
counter.increment();    // 1
counter.increment();    // 2
counter.increment();    // 3
counter.decrement();    // 2

