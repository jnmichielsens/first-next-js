import { Resend } from 'resend';
import {
  EmailTemplate,
  EmailTemplateProps,
} from '../../../components/email-template';

export async function POST(params: EmailTemplateProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jnmichielsens@emisys.com'],
      subject: 'Hello world',
      react: EmailTemplate(params),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
