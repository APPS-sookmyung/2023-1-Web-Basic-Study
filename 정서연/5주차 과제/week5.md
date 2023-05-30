# BS 5주차

INTRODUCTION

- 1.1
    
    React JS 시작~
    
- 1.2 Why React
    
    전세계 상위 1만 개의 웹 사이트 중 44.76%가 React JS 사용
    
    많은 회사들이 사용
    
    끊임없이 개선하기 위해 투자(페이스북 지원)
    
    큰 커뮤니티(javascript)
    
    어디에서나 사용 가능
    
- 1.3 Requirements
    
    바닐라 JS로 크롬앱 만들기 들으면 좋음(사실 기반으로 함) javascript 익숙해지기
    

THE BASICS OF REACT

- 2.0 Introduction
    
    React JS는 웹 사이트를 interactivity(상호작용)을 만듬
    
- 2.1 Before React
    
    바닐라 JS 구현
    
    1. HTML 만들기
    2. javascript에서 button 가져오기
    3. click event 감지
    4. 데이터 업데이트(HTML도 잊지 말기)
    
    ```html
    // index.html
    <!DOCTYPE html>
    <html>
      <body>
        <span>Total clicks: 0</span>
        <button id="btn">Click me</button>
      </body>
      <script>
        let conuter = 0;
        const button = document.getElementById("btn"); // html에서 button 가져오기
        const span = document.querySelector("span"); // html에서 span 가져오기
        function handleClick() {
          conuter = conuter + 1;
          span.innerText = `Total clicks: ${conuter}`; // span을 가져와서 html도 업데이트
        }
        button.addEventListener("click", handleClick); // click event 발생, handleClick 실행
      </script>
    </html>
    ```
    
    ```html
    // React import
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    ```
    
- 2.2 Our First React Element
    
    React JS 구현
    
    HTML 코드를 직접 작성하지 않음. javascript와 React JS를 이용하여 element 생성
    
    개발자들이 하는 방식은 아님
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script>
        const root = document.getElementById("root");
        // "span"은 생성하고자 하는 HTML 태그와 같은 이름이어야 함
        // {property} id or class name 등
        // content
        const span = React.createElement(
          "span",
          { id: "cool-span", style: { color: "red" } },
          "Hello, i'm span"
        );
        ReactDOM.render(span, root); // span을 root 위치에서 사용자에게 보여줌
      </script>
    </html>
    ```
    
    React JS는 어플리케이션이 interactive하도록 만들어주는 library
    
    react-dom: library or package, 모든 React element들을 HTML body에 둘 수 있게 함
    
    비교 정리:
    
    바닐라 JS에서는 HTML을 먼저 만들고 javascript로 가져와서 HTML을 수정하는 방식이지만 React JS에서는 모든 것이 javascript로 시작해서 HTML이 됨 
    
- 2.3 Events in React
    
    ```html
    ...
    <script>
        const root = document.getElementById("root");
        const h3 = React.createElement(
          "h3",
          {
            onMouseEnter: () => console.log("mouse enter"),
          },
          "Hello, i'm span"
        );
        const btn = React.createElement(
          "button",
          {
            // event listener
            onClick: () => console.log("i'm clicked"),
          },
          "Click me"
        );
        const container = React.createElement("div", null, [h3, btn]); // 배열 순으로 render
        ReactDOM.render(container, root);
      </script>
    ```
    
- 2.4 Recap
    
    복습
    
- 2.5 JSX
    
    JSX:
    
    javascript를 확장한 문법, HTML 문법과 흡사한 문법을 사용해서 React 요소를 만들 수 있게 해줌 
    
    Babel: 코드 변환, JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줌 
    
    ```html
    <!DOCTYPE html>
    <html>
      <body>
        <div id="root"></div>
      </body>
      <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script type="text/babel"> // type 필수
        const root = document.getElementById("root");
        const Title = (
          <h3 id="title" onMouseEnter={() => console.log("mouse enater")}>
            Hello I'm a title
          </h3>
        );
        const Button = (
          <button
            style={{ backgrooundColor: "tomato" }}
            onClick={() => console.log("i'm clicked")}
          >
            Click me
          </button>
        );
        const container = React.createElement("div", null, [Title, Button]);
      </script>
    </html>
    ```
    
- 2.6 JSX part Two
    
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
        const root = document.getElementById("root");
        // arrow funtion과 같음
        function Title() {
          return (
            <h3 id="title" onMouseEnter={() => console.log("mouse enater")}>
              Hello I'm a title
            </h3>
          );
        }
    
        // 함수 만들기 = () =>: arrow function
        const Button = () => (
          <button
            style={{ backgrooundColor: "tomato" }}
            onClick={() => console.log("i'm clicked")}
          >
            Click me
          </button>
        );
        const Container = () => (
          <div>
            <Title />
            <Button />
          </div>
        );
        ReactDOM.render(<Container />, root);
      </script>
    </html>
    ```
    

STATE

- 3.0 Understanding State
    
    state: 기본적으로 데이터가 저장되는 곳
    
    리렌더링 비추천 방식
    
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
        const root = document.getElementById("root");
        let counter = 0;
        function countUp() {
          counter = counter + 1;
          render();
        }
        function render() {
          ReactDOM.render(<Container />, root);
        }
        const Container = () => ( // 함수
          <div>
            <h3>Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
          </div>
        );
        render();
      </script>
    </html>
    ```
    
    React는 UI에서 변경되는 부분만 업데이트 
    
- 3.1 setState part One
    
    추천 방식(미완)
    
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
        const root = document.getElementById("root");
        function App() {
          const [counter, modifier] = React.useState(0); // (2) [0, f] [초기값, 실행함수]
          return (
            <div>
              <h3>Total clicks: 0</h3>
              <button>Click me</button>
            </div>
          );
        }
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
- 3.2 setState part two
    
    추천 방식
    
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
        const root = document.getElementById("root");
        function App() {
    			// 리렌더링
          const [counter, setCounter] = React.useState(0);
          const onClick = () => {
            setCounter(counter + 1);
          };
          return (
            <div>
              <h3>Total clicks: {counter}</h3>
              <button onClick={onClick}>Click me</button>
            </div>
          );
        }
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```
    
- 3.3 Recap
    
    복습 
    
- 3.4 State Function
    
    state를 바꾸는 2가지 방법
    
    1. 직접 값 설정하기 
    2. 함수 전달하기 
    
    ```html
    			//정확히 원하는 값으로 계산 가
    			const onClick = () => {
            //setCounter(counter + 1);
            setCounter(current => current + 1); // 현재값, 새로운값
          }; // state 기반 계산
    ```
    
- 3.5 Inputs and State
    
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
        function App() {
          const [minutes, setMinutes] = React.useState();
          const onChange = (event) => {
            setMinutes(event.target.value);
          };
          return (
            <div>
              <h1 className="hi">Super Converter</h1>
              <label htmlfor="minutes">Minutes</label>
              <input
                value={minutes}
                id="minutes"
                placeholder="Minutes"
                type="number"
                onChange={onChange}
              />
              <h4>You want to convert {minutes}</h4>
              <label htmlfor="hours">Hours</label>
              <input id="hours" placeholder="Hours" type="number" />
            </div>
          );
        }
        const root = document.getElementById("root");
        ReactDOM.render(<App />, root);
      </script>
    </html>
    ```