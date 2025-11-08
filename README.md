# [webhook](https://hub.docker.com/r/tmvdl/webhook)

Para receber eventos de webhooks

## como funciona

Execute a imagem Docker

```bash
docker run -d -p 80:8000 tmvdl/webhook
```

Abra o navegador em `http://localhost`

### Para criar um novo webhook

Acesse `http://localhost/create?name=a1`

### Veja a lista de webhooks completa

Em `http://localhost`

## licença

[MIT](./LICENSE)
