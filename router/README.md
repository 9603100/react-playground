# React로 간단한 SPA router 구현하기

- [x] 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다. 
- [x] 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다. 
- [x] Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다. 
```javascript
ReactDOM.createRoot(container).render( 
	<Router> 
		<Route path="/" component={<Root />} /> 
		<Route path="/about" component={<About />} /> 
	</Router> 
);
```
- [x] 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
```javascript
const { push } = useRouter();
```
<br><br>
구현하면서 고민한 자세한 내용은 아래 링크에 정리해두었습니다. <br><br>
- [React로 간단한 SPA Router 구현하기](https://velog.io/@hmmxmm/React%EB%A1%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-SPA-Router-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)

