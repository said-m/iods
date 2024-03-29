# IO-DS

Паттерн, на основе RORO, суть которого в том, что методы (и функции) принимают и возвращают объект следующего вида:

```ts
type InputInterface<
  Data = unknown,
  Settings = undefined
> = {
  /** Входные данные */
  data: Data;
  /** Опции */
  settings?: Settings;
};
```

> [Полное описание типа](index.d.ts)

Обязательность `settings` определяется передачей дженерику интерфейса `Settings`.

`IO-DS` - это типа: "Инпут-Аутпут Дата-Сеттингс"... вот такая это вот дичь. Креатива - нуль, как и смысла ~~во всём этом~~.

## Установка

```bash
yarn add iods -T -D
```
или
```bash
npm i iods -E -D
```

### Версионирование

Данный проект не придерживается `SemVer`. Отсутствие `breaking changes` гарантируется только в `patch`-версиях.

Если вы предпочитаете строго не фиксировать версию, то рекомендуемый `semver range operator` - `~`.
* `Yarn` позволяет это сделать при помощи флага `-T` при вызове команды установки пакета.
* `NPM` же не имеет подобного аналога, но есть `-E` который фиксирует устанавливаемую версию, т.е. у версии будет отсутствовать какой-либо `semver range operator`. В таком случае, необходимо самостоятельно добавить `~` перед номером версии.

## Состав

* `InputInterface`;
* `OutputInterface`.

`OutputInterface` копирует `InputInterface`, а существует лишь затем, чтобы иметь псевдоним, соответствующий предназначению. Крч, алиас и этим всё сказано. 

## Исключения

1. Правило не распространяется на статичные методы;
2. Методы могут возвращать `undefined`, вместо описанного объекта.

## Критика

- Зачем объект с фиксированным интерфейсом первого уровня, если можно его же трансформировать в первый и второй аргументы тех же методов?
- Зачем оно вообще, ТайпСкрипт ж в окне?!


## Преимущества

+ Те же, что и в RORO pattern;
+ Фиксируя первый уровень, не упраздняя до первого и второго аргументов, открыто демонстрируем, что даже не стоит думать о расширении метода очередным входным аргументом;
+ Принимая во внимание Исключения #2, `undefined` в ответе и `undefined` в `.data` ответа - не одно и тоже, т.е. есть пространство для манёвров *(типа просто `undefined` - негативный результат, а `undefined` в `.data` - позитив из ничего)*;
+ У автора теперь имеется возможность выёживаться тем, что он является автором чего-то там (точнее, тут).

## Замечание

Данный проект не придерживается `SemVer` и `GitFlow`.
Причина подобного решения - это мелкий проект, изменения в котором происходят не часто. Как следствие, тикать `major` всякий раз, когда методология меняется и не совместима с предыдущей - выглядит глупо (а если учитывать суть проекта - то это вообще абсурд). Всё по тому же, отпадает необходимость в `develop`- и `release`-ветках, так как любая редкая правка - это полноценная версия, тут нечего "разрабатывать".

## Лицензия

А на это вообще нужна лицензия? Если да, то эта... любимая, ну эта: `MIT License`. Текст с её сутью скопипастил в файл [LICENSE](LICENSE).

---

## EN

TypeScript pattern of method declarations.

### Installing

```bash
yarn add iods -T -D
```
or
```bash
npm i iods -E -D
```

### Composition

* `InputInterface` - main interface;
* `OutputInterface` - alias of `InputInterface`, used to determine method's `return` interface.

### Exceptions

1. `static` methods;
2. Methods can return an `undefined`.

### Criticism

- U: Hm-m, so, idea of 2 arguments in methods - is not for u?... instead of object with 2 properties, yeah? 
- U: You mean like... cretinism?!
- I: Sorry for my English.

### Advantages

+ Everything from RORO, even if it only has one;
+ Fixed first level with 2 properties, instead of 2 arguments, openly demonstrates people that they should not even think about expanding the method with (an)other input argument(s);
+ Given the Exception #2, it becomes clear that `undefined` result and result`.data`'s `undefined` that it is not the same thing; *(I mean, `undefined` result - is kinda negative result, while `undefined` at result's `.data` - is kinda positive nothing :)*
+ Now, the author is who he is.

### Note

This project doesn't follow to `SemVer` or `GitFlow` rules.

### License

Li... what?! Ehm-m, I-i-hm, so ok... just a second, ple-a-ase. Oh, found it:
> This project is licensed under the [MIT License](LICENSE).
