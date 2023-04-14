```jsx
async function getData() {
  const response = await fetch(API)
  return await response.json()
}

const intialState = (await rest()).slip
//intialState присваивает данные, а не промис

<button onClick={async () => setState((await rest()).slip)}></button>
//в setState отправляются данные, а не промис
```

`initialState` не является промисом, потому что мы дожидаемся завершения промиса `await` и получаем конкретные данные из ответа на запрос.