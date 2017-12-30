const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// '/' 경로로 접근 시 'Home'으로 응답하도록 라우터 설정
router.get('/', (ctx, next) => {
  ctx.body = 'Home';
});

// /about
router.get('/about', (ctx, next) => {
  ctx.body = 'Introduction';
});

// /about/huusz
router.get('/about/:name', (ctx, next) => {
  const { name } = ctx.params;
  ctx.body = `${name}'s introduction`;
});

// /post?id=1
// /post = '존재하지 않는 글 입니다.'
router.get('/post', (ctx, next) => {
  const { id } = ctx.request.query;
  if (id) {
    ctx.body = `Post #${id}`;
  } else {
    ctx.body = '존재하지 않는 글 입니다.';
  }
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('server is listening to port 4000');
});
