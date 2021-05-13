# JSON

JSON significa Javascript Object Notation

Empieza siempre o por `{` (que correspondería a un objecto) o por `[` (que correspondería a un array)

Notación estándar de un objeto de json

```javascript
{
    property: value,
    property: value,
}

```

por ejemplo, un objeto persona:

```javascript
{
    name: "Juan",
    lastName: "López",
    age: 34
}

```

Cómo acceder a las propiedades:

```javascript
juan.name
juan["name"]

Object.keys(juan)
(3) ["name", "lastName", "age"]0: "name"1: "lastName"2: "age"length: 3__proto__: Array(0)
const namekey = "name"
undefined
juan[namekey]
"Juan"
juan.namekey
undefined

```

## Arrays en JSON

son entre corchetes: `[]`
```javascript

[1,2,3]
(3) [1, 2, 3]0: 11: 22: 3length: 3__proto__: Array(0)
[{name: "pepe"}, {name:"juan"}]

```

# Funciones de array

const numeros = [1,2,3,4,5]

```javascript
numeros.forEach(
    elemento => {
        console.log("elemento", elemento)
    })

numeros.map(
    elemento => elemento*2)
(5) [2, 4, 6, 8, 10]

numeros.map ( e => "el numero es "+e)
(5) ["el numero es 1", "el numero es 2", "el numero es 3", "el numero es 4", "el numero es 5"]


listaAmigos.map(i => i.name + " tiene " + i.age + "años")

```