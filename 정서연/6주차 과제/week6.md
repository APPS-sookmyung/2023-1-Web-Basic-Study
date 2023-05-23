# BS 6주차

STATE

- 3.6 State Practice part One
    
    복습
    
    ```html
        function App() {
          // [데이터, 데이터를 수정하기 위한 함수]
          const [minutes, setMinutes] = React.useState(0); // setState의 결과는 array
          const onChange = (event) => { // 데이터 업데이트
            setMinutes(event.target.value);
          };
          return (
            <div>
              <h1>Super Converter</h1>
              <label htmlfor="minutes">Minutes</label>
              <input
                value={minutes} // state로 연결, 어디서든 value 수정 가능
                id="minutes"
                placeholder="Minutes"
                type="number"
                onChange={onChange}
              />
              <label htmlfor="hours">Hours</label>
              <input id="hours" placeholder="Hours" type="number" />
            </div>
          );
        }
    ```
    
    minutes → hours
    
    ```html
    function App() {
          const [minutes, setMinutes] = React.useState(0);
          const onChange = (event) => {
            setMinutes(event.target.value);
          };
          const reset = () => setMinutes(0); // reset 함수
          return (
            <div>
              <h1>Super Converter</h1>
              <div>
                <label htmlfor="minutes">Minutes</label>
                <input
                  value={minutes}
                  id="minutes"
                  placeholder="Minutes"
                  type="number"
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlfor="hours">Hours</label>
                <input
                  value={Math.round(minutes / 60)} // Math.round 반올림
                  id="hours"
                  placeholder="Hours"
                  type="number"
                  disabled // 클릭 x
                />
              </div>
              <button onClick={reset}>Reset</button>
            </div>
          );
        }
    ```
    
- 3.7 State Practice part Two
    
    hours → minutes (flip)
    
    ```html
    function App() {
          const [amount, setAmount] = React.useState(0);
          const [flipped, setFlipped] = React.useState(false); // 새로운 state
          const onChange = (event) => {
            setAmount(event.target.value);
          };
          const reset = () => setAmount(0);
          const onFlip = () => {
            reset();
            setFlipped((current) => !current); // 현재 state 값을 넣고 반대 결과 도출, !flipped 비추천
          };
          return (
            <div>
              <h1>Super Converter</h1>
              <div>
                <label htmlfor="minutes">Minutes</label>
                <input
                  value={flipped ? amount * 60 : amount}
                  id="minutes"
                  placeholder="Minutes"
                  type="number"
                  onChange={onChange}
                  disabled={flipped} // flipped === true
                />
              </div>
              <div>
                <label htmlfor="hours">Hours</label>
                <input
                  value={flipped ? amount : Math.round(amount / 60)} // 삼항연산자
                  id="hours"
                  placeholder="Hours"
                  type="number"
                  disabled={!flipped} // true, flipped === false
                  onChange={onChange}
                />
              </div>
              <button onClick={reset}>Reset</button>
              <button onClick={onFlip}>Flip</button>
            </div>
          );
        }
    ```
    
- 3.8 Recap
    
    복습
    
    flipped → inverted setFlipped → setInverted 수정
    
    <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button> 수정
    
- 3.9 Final Practice and Recap
    
    컴포넌트는 그 안에 또 다른 컴포넌트를 렌더링 할 수 있다.
    
    React.useState(”0”): default state
    
    { }: js
    
    - MinutesToHours
        
        ```html
        function MinutesToHours() {
              const [amount, setAmount] = React.useState(0);
              const [inverted, setInverted] = React.useState(false);
              const onChange = (event) => {
                setAmount(event.target.value);
              };
              const reset = () => setAmount(0);
              const onInvert = () => {
                reset();
                setInverted((current) => !current);
              };
              return (
                <div>
                  <div>
                    <label htmlfor="minutes">Minutes</label>
                    <input
                      value={inverted ? amount * 60 : amount}
                      id="minutes"
                      placeholder="Minutes"
                      type="number"
                      onChange={onChange}
                      disabled={inverted}
                    />
                  </div>
                  <div>
                    <label htmlfor="hours">Hours</label>
                    <input
                      value={inverted ? amount : Math.round(amount / 60)} // 삼항연산자
                      id="hours"
                      placeholder="Hours"
                      type="number"
                      disabled={!inverted}
                      onChange={onChange}
                    />
                  </div>
                  <button onClick={reset}>Reset</button>
                  <button onClick={onInvert}>
                    {inverted ? "Turn back" : "Invert"}
                  </button>
                </div>
              );
            }
        ```
        
    - KmToMiles
        
        ```html
        function KmToMiles() {
              const [amount, setAmount] = React.useState(0);
              const [inverted, setInverted] = React.useState(false);
              const onChange = (event) => {
                setAmount(event.target.value);
              };
              const reset = () => setAmount(0);
              const onInvert = () => {
                reset();
                setInverted((current) => !current);
              };
              return (
                <div>
                  <div>
                    <h3>KM 2 M</h3>
                    <label htmlfor="Km">Km</label>
                    <input
                      value={inverted ? amount * 1.609 : amount}
                      id="km"
                      placeholder="Km"
                      type="number"
                      onChange={onChange}
                      disabled={inverted}
                    />
                  </div>
                  <div>
                    <label htmlfor="Miles">Miles</label>
                    <input
                      value={inverted ? amount : Math.round(amount / 1.609)} // 삼항연산자
                      id="miles"
                      placeholder="Miles"
                      type="number"
                      disabled={!inverted}
                      onChange={onChange}
                    />
                  </div>
                  <button onClick={reset}>Reset</button>
                  <button onClick={onInvert}>
                    {inverted ? "Turn back" : "Invert"}
                  </button>
                </div>
              );
            }
        ```
        
    - App
        
        ```html
        function App() {
              const [index, setIndex] = React.useState("xx");
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
        ```
        
    
    리렌더링 조건:
    
    props, state가 바뀔때
    
    부모 컴포넌트가 리렌더링 될때
    

PROPS

- 4.0 Props
    
    : 부모 컴포넌트(App)로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn({ text, big }) {
          // props = object
          console.log(text, big);
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize: big ? 18 : 16,
              }}
            >
              {text}
            </button>
          );
        }
        function App() {
          return (
            <div>
              <Btn text="Save Changes" big={true} />
              <Btn text="Continue" big={false} />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
- 4.1 Memo
    
    커스텀 컴포넌트 onClick → evenet x, prop
    
    <Btn text={value} onClick={changeValue} /> HTML 태그 안에 들어가지 않음
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn({ text, changeValue }) {
          return (
            <button
              onClick={changeValue}
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
              }}
            >
              {text}
            </button>
          );
        }
        const MemorizedBtn = React.memo(Btn);
        function App() {
          const [value, setValue] = React.useState("Save Changes");
          const changeValue = () => setValue("Revert Changes");
          return (
            <div>
              <Btn text={value} changeValue={changeValue} />
              <Btn text="Continue" />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
    불필요한 re-render는 React.memo()로 관리: prop 변경이 발생한 부분만 렌더링 
    
- 4.2 Prop Types
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel">
        function Btn({ text, fontSize = 12 }) {
          return (
            <button
              style={{
                backgroundColor: "tomato",
                color: "white",
                padding: "10px 20px",
                border: 0,
                borderRadius: 10,
                fontSize,
              }}
            >
              {text}
            </button>
          );
        }
        Btn.propTypes = {
          text: PropTypes.String.isRequired,
          fontSize: PropTypes.number,
        }
        function App() {
          return (
            <div>
              <Btn text="Save Changes" fontSize={18} />
              <Btn text={"Continue"} />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
- 4.3 Recap
    
    복습
    
    Prop은 컴포넌트에 보내지는 argument
    
    PropType을 이용해서 보내지는 prop에 type을 정의:
    
    잘못된 type의 prop 이 보내지는 것을 방지