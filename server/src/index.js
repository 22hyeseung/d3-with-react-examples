const Koa = require('Koa');
const app = new Koa();

/* app.use = 미들웨어를 어플리케이션에 등록해준다.
 * 아래 ctx => {...} 코드가 하나의 미들웨어이다.
 * ---------------------------------------
 * 1. 미들웨어 함수는 ctx와 next, 두 개의 파라미터를 받는다.
 *  1) ctx: 웹 요청과 응답에 대한 정보를 지니고 있다.
 *  2) next: 다음 미들웨어를 실행시키는 함수이다.
 *  만약 미들웨어에서 next를 호출하지 않으면 그 부분에서 요청처리를 완료시키고 응답한다.
 * 2. 미들웨어는 등록하는 순서대로 실행한다.
 * 3. next()는 프로미스(Promise)이다.
 * 4. 별도의 작업 없이 async/await을 사용할 수 있다.
*/

// 3. 프로미스: next().then(...)
// 실행 순서: console.log(1) -> console.log(2) -> console.log(`${new Date() - started}ms`)
// app.use((ctx, next) => {
//   console.log(1);  // ..... (1)
//   const started = new Date();
//   next().then(() => { // ......(2) : console.log(2)
//     console.log(`${new Date() - started}ms`); // .....(3)
//   });
// });

// 4. async/ await next()
// 결과는 위 프로미스 코드와 동일
app.use(async (ctx, next) => {
  console.log(1); // ...(1)
  const started = new Date();
  await next(); // ...(2) 잠깐 멈추고 다음 미들웨어를 실행 (console.log(2))
  console.log(`${new Date() - started}ms`); // ....(3)
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
  console.log('server is listening to port 4000');
});
