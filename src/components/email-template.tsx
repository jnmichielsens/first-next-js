import * as React from 'react';

export interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  date?: string;
  guests?: string;
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
  <body>
    <div className='email-container'>
      <div className='header'>
        <h1>MÉLANGE TRAITEUR</h1>
      </div>
      <div className='content'>
        <h2>Nieuwe offerteaanvraag</h2>
        <div className='info'>
          <p>
            <strong>Nom :</strong> {name}
          </p>
          <p>
            <strong>Email :</strong> {email}
          </p>
          <p>
            <strong>Téléphone :</strong> {phone ? phone : 'non defini'}
          </p>
          <p>
            <strong>Date de l'événement :</strong> {date ? date : 'non defini'}
          </p>
          <p>
            <strong>Nombre d'invités :</strong> {guests ? guests : 'non defini'}
          </p>
          <p>
            <strong>Message :</strong> {message}
          </p>
        </div>
      </div>
    </div>
  </body>
);
