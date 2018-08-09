import * as Router from 'koa-router';
import * as bodyparserMdw from 'koa-bodyparser';

const router = new Router();

router.get('/status', async (ctx) => {
  ctx.body = {
    status: 'App running and works!'
  };
});

router.post('/test/:test_param', bodyparserMdw(), async (ctx) => {
  ctx.body = {
    paramName: ctx.params.test_param,
    jsonBody: ctx.request.body,
  };
});

export default router;
