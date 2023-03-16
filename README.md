# 🌈 rainbow
React로 개발한 스케줄 관리 프로젝트

</br>

## 1. 프로젝트에 관하여
`rainbow`는 나의 하루를 계획적으로 보낼 수 있게 도와주는 프로젝트입니다.</br>
바쁜 현대 사회 속에서 많은 업무량을 효율적으로 관리해 줄 아이템은 필수적이고, 그러한 아이템의 기초가 되는 것이 투두리스트입니다.

</br>

## 2. 컴포넌트
### 💎 TDlayout
**투두리스트의 레이아웃을 나타내는 컴포넌트**

### 💎 TDhead
**투두리스트의 헤드를 나타내는 컴포넌트** </br>
> 오늘의 날짜, 날씨, 요일 그리고 남은 할 일의 개수를 보여줍니다.

### 💎 TDlist
**할 일 목록들을 렌더링해주는 컴포넌트**
> TDitem 컴포넌트를 화면에 렌더링해줍니다.

### 💎 TDitem
**각 할 일 목록을 나타내주는 컴포넌트**
> 할 일의 완료 여부를 나타내는 체크박스 </br>
> 텍스트로 작성된 할 일 </br>
> 할 일을 삭제할 수 있는 아이콘 </br>

### 💎 TDadd
**새로운 할 일을 추가하기 위한 컴포넌트**
> 할 일을 추가하는 버튼 </br>
> 새로운 할 일을 입력하기 위한 입력폼 </br>

### 💎 TDcontext
**다른 컴포넌트에서 공통적으로 쓰이는 state들을 관리해주는 컴포넌트**
> 다양한 hooks를 사용함 </br>
> useState </br>
> useEffect </br>
> useReducer </br>
> useMemo </br>
> useContext </br>

### 💎 weatherInfo
**현재 위치의 날씨 정보를 알려주는 컴포넌트**
> OpenWeatherMap API 사용

</br>

## 3. 기술 스택
- **React**</br>
  컴포넌트 각각이 재사용이 가능하고, 기능을 분리시켜 유지보수가 쉽습니다.

- **Context API**</br>
  각 컴포넌트에서 액션을 디스패치하고 하나의 파일에서 액션에 따라 상태를 관리합니다.
  
  </br>

## 4. 성능 최적화
* **useMemo**
```javascript
// 1. done 값이 바뀔 때에만 렌더링
{useMemo(() => <CheckCircle onClick={onToggle} done={done}>
  {done && <MdDone />}
</CheckCircle>, [done])}

// 2. 아이콘의 불필요한 렌더링 방지
{useMemo(() => <Remove onClick={onRemove}>
  <MdDelete />
</Remove>, [])}

// 3. open 값이 바뀔 때에만 렌더링
{useMemo(() => (<AddBtn onClick={onClickBtn} open={open}>
  <MdAdd />
</AddBtn>),[open])}

// 4. value 값이 바뀔 때마다 컴포넌트가 재렌더링되는 것 방지
const value = useMemo(() => ({ state, dispatch }), [state]);
``` 
</br>

* **React.memo**
```javascript
// 컴포넌트의 불필요한 재렌더링 방지
export default memo(TDhead);
export default memo(TDlist);
export default memo(TDitem);
export default memo(TDadd);
```

</br>

## 5. 스크린샷</br>

<img width="400" alt="rainbow" src="https://user-images.githubusercontent.com/71072930/114268674-381c6680-9a3d-11eb-86ce-97890033d6f5.png">

## 6. 배포
### https://rainbow247.netlify.app

</br>
