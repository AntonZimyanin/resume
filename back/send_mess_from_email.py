import smtplib
import ssl
import re
from email.message import EmailMessage

from fastapi import APIRouter, Form, HTTPException
from fastapi.responses import HTMLResponse
from pydantic import EmailStr, BaseModel, validator

from back.config import email_config

router = APIRouter()

LETTER_MATCH_PATTERN = re.compile(r"^[а-яА-Яa-zA-Z\-]+$")

class SendMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


    @validator("name")
    def validate_name(cls, value):
        if not LETTER_MATCH_PATTERN.match(value):
            raise HTTPException(
                status_code=422, detail="Name should contains only letters"
            )
        return value


def send_email(receiver_email: EmailStr, name: str, sender_email: EmailStr, message: str):
    context = ssl.create_default_context()

    msg = EmailMessage()
    msg['Subject'] = 'New Form Submission'
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg.set_content(f"Name: {name}\nEmail: {sender_email}\nMessage: {message}")

    with smtplib.SMTP_SSL('smtp.gmail.com', port=email_config.port, context=context) as server: 
        server.login(sender_email, email_config.password)
        server.send_message(email_config.receiver_email, sender_email, msg)


@router.post("/submit-form", response_class=HTMLResponse)
async def submit_form(body: SendMessage):
    
    send_email(email_config.receiver_email, body.name, body.email, body.message)
    
