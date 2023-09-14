import asyncio

import uvicorn
from fastapi import FastAPI

from back.send_mess_from_email import router


async def main():
    app = FastAPI()

    app.include_router(router=router, prefix="/email", tags=["email"])

    config = uvicorn.Config(app, port=8080, log_level="info")
    server = uvicorn.Server(config=config)

    await server.serve()


if __name__ == "__main__":
    asyncio.run(main())