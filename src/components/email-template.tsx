import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  date,
  guests,
  message,
}) => (
  <div>
    <p>Welcome, {name}!</p>
    <p>Welcome, {email}!</p>
    <p>Welcome, {phone}!</p>
    <p>Welcome, {date}!</p>
    <p>Welcome, {guests}!</p>
    <p>Welcome, {message}!</p>
  </div>
);
