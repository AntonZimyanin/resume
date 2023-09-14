import os

from pydantic import BaseSettings, EmailStr, SecretStr


class Settings(BaseSettings):
    receiver_email: EmailStr
    port: int
    password: SecretStr


    class Config:
        env_file = f"{os.path.dirname(os.path.abspath(__name__))}\\.env"
        env_file_encoding = "utf-8"



# class OpenAPISettings(BaseSettings):
#     app_name: str
#     version: str
#     description: str

#     class Config:
#         env_file = f"{os.path.dirname(os.path.abspath(__name__))}\\.env"
#         env_file_encoding = "utf-8"



email_config = Settings()
# openapi_config = OpenAPISettings()