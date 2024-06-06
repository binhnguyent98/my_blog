import { Translate } from 'next-translate';

import { ContactReqDto } from '@/dto/request/contact';
import Schema from '@/libs/schema';

export const contactValidate = (t: Translate) =>
  Schema.validate<ContactReqDto>({
    name: Schema.string().isRequired({ field: t('contact.fields.name'), t }),
    email: Schema.string()
      .isRequired({ field: t('contact.fields.email'), t })
      .isEmailCustom({ field: t('contact.fields.email'), t }),
    subject: Schema.string().max(200, t('validate:form.maxLength', { field: t('contact.fields.subject'), length: 200 })),
    message: Schema.string()
      .isRequired({ field: t('contact.fields.message'), t })
      .min(200, t('validate:form.minLength', { field: t('contact.fields.message'), length: 100 }))
      .max(1000, t('validate:form.maxLength', { field: t('contact.fields.message'), length: 1000 })),
  });
