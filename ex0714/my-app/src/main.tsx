import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

//!(Non-null Assertion Operator)
// TypeScript에게 "이 값은 절대 null이나 undefined가 아니야!"라고 개발자가 확신해서 강제로 단언하는 연산자
// 호출했을 때 null이 반환될 수도 있지만, 지금은 분명히 존재할거다 
//  확실할 떄 써야한다 -> 컴퓨터가 확실하다고 인식함 -> 인식한 부분은 나중에 빌드나 컴파일할때 안봄 -> 런타임 에러 원인
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// <BrowserRouter>안에 있는 얘들은 BrowserRouter 영향을 받음 