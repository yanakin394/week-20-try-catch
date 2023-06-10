# week-20-try-catch
На этой неделе вы будете работать с ещё одним открытым API — Swapi. Вот его [документация](https://swapi.dev/documentation), ознакомьтесь с ней.

Swapi — это доступный источник данных для всех данных из канонической вселенной «Звездных войн». Можно запросить данные о персонажах, кораблях и не только!

Нам нужно создать приложение, которое будет делать запрос к API и полученную информацию показывать на экране. Пример запроса:

```jsx
https://swapi.nomoreparties.co/planets/1 — // планета с идентификатором 1
```

То есть в запросе нам нужно передать, какую сущность хотим получить (фильмы, людей, планет starships) и её числовой идентификатор. В API есть по 10 сущностей каждого вида, поэтому идентификатор должен быть от 1 до 10:

```jsx
// Attributes:
films string -- The URL root for Film resources
people string -- The URL root for People resources
planets string -- The URL root for Planet resources
species string -- The URL root for Species resources
starships string -- The URL root for Starships resources
vehicles string -- The URL root for Vehicles resources
```

И указать числовой идентификатор, он должен быть от 1 до 10 (так как для каждого списка в API всего по 10 сущностей):
