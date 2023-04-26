import os
from email.message import EmailMessage
import ssl
import smtplib
from dotenv import load_dotenv

# Load variables from .env file
load_dotenv()

def send(image_path):
    # Sender and receiver email addresses
    email_sender = os.environ.get('EMAIL_SENDER')
    email_password = os.environ.get('EMAIL_PASSWORD')
    email_receiver = os.environ.get('EMAIL_RECEIVER')

    # Email subject and body
    subject = "Person Detected"
    body = "A person has been detected in the image."

    # Create an EmailMessage object and set its attributes
    em = EmailMessage()
    em['From'] = email_sender
    em['To'] = email_receiver 
    em['Subject'] = subject
    em.set_content(body)

    # Read the image file and attach it to the email message
    with open(image_path, 'rb') as f:
        img_data = f.read()
        em.add_attachment(img_data, maintype='image', subtype='jpg', filename='person_detected.jpg')

    # Use SSL to create a secure connection to the email server and send the message
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        smtp.login(email_sender, email_password)
        smtp.sendmail(email_sender, email_receiver, em.as_string())


