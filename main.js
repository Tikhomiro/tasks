// Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины. 
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются 
// общими делителями для всех указанных числе. В примере это будет [2, 3, 6].

const arr = [84, 90];
console.log(mass(arr));



// считается делители определенного числа
function dividers(n) { 
    let array = []; 
    for (let i = 1; i < n; i++) { 
      if (n % i === 0) { 
        array.push(i); 
      } 
    } 
    return array; 
  } 

// основная функция
function mass(arra){
    const res = [];
    const result = [];
    // все полученные результаты объединяем в один массив
    for(let i = 0; i < arra.length; i++){
        res.push(dividers(arra[i]));
    }
    // сравниваем числа из массивов со сдедующим массивом
    // после первого прохода можно выходить так уже получаем результат
    for(let j = 0; j < res.length; j++){
        for(let g = 0; g < res.length; g++){
            result.push(res[j].filter(item => res[g].includes(item)));
        }
        break;
    }
    // во втором массиве храниться общие делители чисел
    console.log(result)
    return result[1]
}