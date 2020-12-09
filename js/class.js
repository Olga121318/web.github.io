// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.hello = function() {
//         alert(`Привет! меня зовут - ${this.name}`);
//     }
// }

// let user1 = new User('Иван', '12345');
// let user2 = new User('Алексей', '67898');

// console.log(user1);
// User.prototype.bye = function() {
//     alert(`${this.name} - Пока!`);
// }

// let user3 = new User('Олег', '124587');

// user3.bye();


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let width = 300;
let height = 100;
let color = "f0f00f";

let rect1 = new Rectangle(width, height);
console.log(`Площадь прямоугольника с шириной ${rect1.width} и высотой ${rect1.height} равна ${rect1.calcArea()}. А периметр - ${rect1.calcPerimeter()}`);

class ColoredRectangle extends Rectangle {
    constructor(width, height, bgColor, text) {
        super(width, height);
        this.bgColor = bgColor;
        this.text = text;
    }

    showProperties() {
        alert(`
               Ширина: ${this.width}\n
               Высота: ${this.height}\n
               Текст: ${this.text}`)
    }

    createDiv() {
        let div = document.createElement('div');

        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.textContent = this.text;
        div.style.backgroundColor = '#' + this.bgColor;

        div.style.filter = `hue-rotate(180deg)`;

        return div;
    }
}

let coloredRect1 = new ColoredRectangle(width, height, color, "Привет!")
document.body.prepend(coloredRect1.createDiv());

class Circle {

    static SMALL_SHADOW = 'small';
    static NORMAL_SHADOW = 'normal';
    static BIG_SHADOW = 'big';

    #nameValue;
    radius;
    bgColor;

    #masShadows = [Circle.SMALL_SHADOW, Circle.NORMAL_SHADOW, Circle.BIG_SHADOW];
    #shadow;

    constructor(name, radius, bgColor) {
        this.name = name;
        this.radius = radius;
        this.bgColor = bgColor;
        this.borderColor = this.bgColor;

        this.getDiameter = function () {
            return this.radius * 2;
        }
    }

    get name(){

        return this.#nameValue;
    }

    set name(newName) {

        if(newName !== '') {
            this.#nameValue = newName;
        }
        else {
            alert('Имя не может быть пустым');
        }

    }

    calcArea() {
        return Math.round(Math.PI * this.radius ** 2);
    }

    calcLength() {
        return Math.round(Math.PI * this.getDiameter());
    }

    

    getShadow(){
        return this.#shadow;

    }

    setShadow(index){

        this.#shadow = this.#masShadows[index];

    }   

    createDivCircle() {
        let div = document.createElement('div');

        div.style.width = this.getDiameter() + 'px';
        div.style.height = this.getDiameter() + 'px';
        div.style.backgroundColor = this.bgColor;
        div.style.borderWidth = '5px';
        div.style.borderStyle = 'solid';
        div.style.borderColor = colorHsl(this.borderColor, -10);

        div.style.borderRadius = '50%';

        return div;
    }
}

function colorHsl(color, changeLightness) {
    let hsl;
    let colorArray = [];
    color = color.substring(4, color.length - 1);

    colorArray = color.split(", ");

    colorArray[2] = parseInt(colorArray[2]) + changeLightness;

    hsl = `hsl(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}%)`;

    return hsl;
}

let countCircles = 3;
let circle;

let propCircle = {
    name: ['A', 'B', 'C'],
    radius: [100, 250, 150],
    bgColor: ['hsl(45, 100%, 50%)', 'hsl(200, 100%, 50%)', 'hsl(330, 100%, 50%)']
};

for (let i = countCircles - 1; i >= 0; i--) {

    circle = new Circle(propCircle.name[i],
        propCircle.radius[i],
        propCircle.bgColor[i]);

    document.body.prepend(circle.createDivCircle());
}

console.log(circle.name);

circle.name = "Окружность";

console.log(circle.name);

// console.log(`Новое имя: ${circle.name}`);

// circle.setShadow(0);
// console.log(circle.getShadow());

// console.log(Circle.SMALL_SHADOW);



