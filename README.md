# start-react
react 시작

# 1~2강 react 설치 및 JSX 문법 
1. class => className
2. 데이터 바인딩 => 중괄호 {}
3. style 적용시 중괄호 사용 { {} }
   ex)

1. className
<div className="hello"></div>

2. Data Binding
```javascript
   let t = "hello"
   <div>{t}</div>
```

3. Apply Single Style Code
```html
<div style={ {color:'red', fontSize:'24px'}}></div>
```
# 3강 state

1. State
-> 변경시 자동으로 html에 반영되게 만들고 싶을 경우 state 사용 

2. Destructuring
   array 내부에 있는 자료들을 값으로 빼는 방법
```javascript
   let a = [0,1];
   let b = a[0];
```
=> Destructuring
```javascript
// Destructuring
let [a,b] = [0,1]; // a = 0, b = 1;
```
