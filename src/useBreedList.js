import { useState, useEffect } from "react";
const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
    return [breedList, status];
}


/* Даний код використовує React Hooks для створення кастомного хука useBreedList.

Спочтаку Імпортуються необхідні функції з бібліотеки React:

import { useState, useEffect } from "react";
Цей рядок дозволяє використовувати хуки useState і useEffect у нашому компоненті.

Створюється об'єкт localCache, який використовується для кешування списку порід тварин.

Оголошується функціональний компонент useBreedList, який буде експортовано як основна функція модуля.

В компоненті використовуються два стану за допомогою useState:

const [breedList, setBreedList] = useState([]);
const [status, setStatus] = useState("unloaded");

Змінні breedList та status є становими змінними, початкові значення яких відповідно є порожній масив та рядок "unloaded".

Застосовується хук useEffect, який виконує певні дії при зміні значення змінної animal:

useEffect(() => {
  // ...
}, [animal]);

Це означає, що коли значення змінної animal змінюється, буде виконана функція, передана як перший аргумент.

У тілі useEffect реалізована асинхронна функція requestBreedList, яка виконує запит на сервер для отримання списку порід тварин:

async function requestBreedList() {
  setBreedList([]);
  setStatus("loading");

  const res = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  const json = await res.json();
  localCache[animal] = json.breeds || [];
  setBreedList(localCache[animal]);
  setStatus("loaded");
}
Спочатку стан breedList очищується, а стан status встановлюється на "loading". Потім виконується запит на вказаний URL за допомогою fetch, і дані отримуються в форматі JSON. Отриманий список порід тварин зберігається у кеші localCache, а потім встановлюється у стан breedList. На останок, стан status встановлюється на "loaded".

У блоках if і else if перевіряється наявність кешованого списку порід для обраної тварини:

if (!animal) {
  setBreedList([]);
} else if (localCache[animal]) {
  setBreedList(localCache[animal]);
}
Якщо значення animal є null або undefined, то список порід очищується. У випадку, якщо в кеші вже є список порід для обраної тварини, він встановлюється у стан breedList.

В кінці функції useBreedList повертається масив [breedList, status], який містить поточний список порід та статус.

return [breedList, status];
Цей кастомний хук useBreedList можна використовувати в компонентах React для отримання списку порід тварин з відповідного сервера за обраним значенням animal. */