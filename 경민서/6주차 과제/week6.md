# #3.6-#4.3

# # 3.6 State Practice Part One (07:00)

---

- 분→시간으로 바꾸기
- reset 버튼 및 함수 만들기

```jsx
<script type="text/babel">
    function App() {
        const [minutes, setMinutes] = React.useState();
        const onChange = (event) => {
            setMinutes(event.target.value)
        };
        const reset = () => setMinutes(0);
        return (
            <div>
                <h1>Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={minutes} 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={Math.round(minutes/60)} 
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled
                    />
                </div>
                <button onClick={reset}>Reset</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

# # 3.7 State Practice Part Two (11:29)

---

- flip구현, 시, 분을 반대로 입력하도록 disabled 속성 수정
- 삼항 연산자  `value={flipped ? amount * 60 : amount}`

```jsx
<script type="text/babel">
    function App() {
        const [amount, setAmount] = React.useState();
        const [flipped, setFlipped] = React.useState(false)
        const onChange = (event) => {
            setAmount(event.target.value)
        };
        const reset = () => setAmount(0);
        const onFlip = () => {
            reset();
            setFlipped((current) => !current);
        }
        return (
            <div>
                <h1>Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={flipped ? amount * 60 : amount} 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                        disabled = {flipped}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={flipped ? amount : Math.round(amount/60)} 
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled = {!flipped}
                        onChange={onChange}
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>Filp</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

# # 3.8 Recap (06:57)

---

```jsx
<script type="text/babel">
    function App() {
        const [amount, setAmount] = React.useState();
        const [inverted, setInverted] = React.useState(false)
        const onChange = (event) => {
            setAmount(event.target.value)
        };
        const reset = () => setAmount(0);
        const onInvert = () => {
            reset();
            setInverted((current) => !current);
        }
        return (
            <div>
                <h1>Super Converter</h1>
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input 
                        value={inverted ? amount * 60 : amount} 
                        id="minutes" 
                        placeholder="Minutes" 
                        type="number" 
                        onChange={onChange}
                        disabled = {inverted}
                    />
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input 
                        value={inverted ? amount : Math.round(amount/60)} 
                        id="hours" 
                        placeholder="Hours" 
                        type="number" 
                        disabled = {!inverted}
                        onChange={onChange}
                    />
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
            </div>
        );
    }
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

# # 3.9 Final Practice and Recap (16:24)

---

- divide and conquer
- App 컴포넌트가 state를 가져 두가지를 선택하게 만들자

```jsx
function App() {
        const [index, setIndex] = React.useState()
        const onSelect = (event) => {
            setIndex(event.target.value);
        }
        return (
            <div>
                <h1>Super Converter</h1>
                <select value={index} onChange={onSelect}>
                    <option value="0">Minutes & Hours</option>
                    <option value="1">Km & Miles</option>
                </select>
                <hr />
                {index === "0" ? <MinutesToHours /> : null}
                {index === "1" ? <KmToMiles /> : null}
            </div> 
        );
    }
```

- 여기까지의 코드
    
    ```jsx
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        function MinutesToHours() {
            const [amount, setAmount] = React.useState();
            const [inverted, setInverted] = React.useState(false)
            const onChange = (event) => {
                setAmount(event.target.value)
            };
            const reset = () => setAmount(0);
            const onInvert = () => {
                reset();
                setInverted((current) => !current);
            }
            return (
                <div>
                    <div>
                        <label htmlFor="minutes">Minutes</label>
                        <input 
                            value={inverted ? amount * 60 : amount} 
                            id="minutes" 
                            placeholder="Minutes" 
                            type="number" 
                            onChange={onChange}
                            disabled = {inverted}
                        />
                    </div>
                    <div>
                        <label htmlFor="hours">Hours</label>
                        <input 
                            value={inverted ? amount : Math.round(amount/60)} 
                            id="hours" 
                            placeholder="Hours" 
                            type="number" 
                            disabled = {!inverted}
                            onChange={onChange}
                        />
                    </div>
                    <button onClick={reset}>Reset</button>
                    <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
                </div>
            );
        }
        function KmToMiles() {
            return <h3>KM 2 M</h3>;
        }
        function App() {
            const [index, setIndex] = React.useState("xx")
            const onSelect = (event) => {
                setIndex(event.target.value);
            };
            return (
                <div>
                    <h1>Super Converter</h1>
                    <select value={index} onChange={onSelect}>
                        <option value="xx">Select your units</option>
                        <option value="0">Minutes & Hours</option>
                        <option value="1">Km & Miles</option>
                    </select>
                    <hr />
                    {index === "xx" ? "Please select your units" : null}
                    {index === "0" ? <MinutesToHours /> : null}
                    {index === "1" ? <KmToMiles /> : null}
                </div> 
            );
        }
        
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
    </script>
    </html>
    ```
    

# # 4.0 Props (15:24)

---

- 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
- 한 가지 스타일을 모든 컴포넌트에 적용하는 것은 비효율 → Style을 모두 갖는 단 하나의 컴포넌트만 만들 수 있으면 얼마나 좋을까??
- → 쉽게말해 텍스트만 다르게, 스타일은 재사용 하고 싶다

```jsx
<script type="text/babel">
    function SaveBtn() {
        return <button style={{
            backgroundColor:"tomato",
            color:"white",
            padding:"10px 20px",
            border:0,
            borderRadius:10
        }}>Save Changes</button>;

    }
    function ConfirmBtn() {
        return <button style={{
            backgroundColor:"tomato",
            color:"white",
            padding:"10px 20px",
            border:0,
            borderRadius:10
        }}>Confirm</button>;

    }
    function App() {
        return (
            <div>
                <SaveBtn />
                <ConfirmBtn />
            </div> 
        );
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

- 새로운 정보를 Btn 컴포넌트에 전송
- `Btn(props)` :Btn으로부터 전달 받는 properties
- Resctjs 는 Btn() 함수를 호출하여 넣어둔 모든 것은 첫번째 인자로 넣어줌
- 버튼들이 App 컴포넌트에 의해 설정됨
- props는 오브젝트 이므로 {} 중괄호로 나타낼 수 있음

```jsx
<script type="text/babel">
    function Btn({text}) {
        return <button style={{
            backgroundColor:"tomato",
            color:"white",
            padding:"10px 20px",
            border:0,
            borderRadius:10
        }}>
            {text}
        </button>;
    }
    
    function App() {
        return (
            <div>
                <Btn text="Save Changes" />
                <Btn text="Confirm" />
            </div> 
        );
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

# # 4.1 Memo (12:33)

---

- 부모 컴포넌트가 state를 변경할 때 다른 컴포넌트에는 어떤 일이 일어날까
- props에는 text, func, boolean 무엇이든지 전달 가능
- 부모 컴포넌트가 state 변경을 겪으면 재return(re-render)
- 부모의 state를 변경하는 함수를 자식 컴포넌트가 실행 시킴
- `const MemorizedBtn = React.memo(Btn)`

React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 마지막으로 렌더링된 내용을 재사용

```jsx
const MemorizedBtn = React.memo(Btn)
    function App() {
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Changes");
        return (
            <div>
                <MemorizedBtn text={value}  onClick={changeValue}/>
                <MemorizedBtn text="Confirm" />
            </div> 
        );
    }
```

# # 4.2 Prop Types (08:14)

---

- reactjs가 자료형을 검사해주지 않음
- Prop Types 패키지를 사용 : 어떤 자료형을 사용하고 있는 체크해줌
- `<script src="[https://unpkg.com/prop-types@15.7.2/prop-types.js](https://unpkg.com/prop-types@15.7.2/prop-types.js)"></script>`

```
<script type="text/babel">
    function Btn({text, fontSize = 16}) {
        return (
            <button 
                style={{
                    backgroundColor:"tomato",
                    color:"white",
                    padding:"10px 20px",
                    border:0,
                    borderRadius:10,
                    fontSize
                }}>
                    {text}
            </button>
        );
    }
    Btn.propTypes = {
        text: PropTypes.string.isRequired,
        fontSize: PropTypes.number,
    };
    function App() {
        return (
            <div>
                <Btn text="Save Changes" fontSize={18} />
                <Btn text="Continue" />
            </div> 
        );
    }
    
    const root = document.getElementById("root");
    ReactDOM.render(<App />, root);
</script>
```

# # 4.3 Recap (05:19)

---