import { Translate } from 'next-translate';

import { ContactReqDto } from '@/dto/request/contact';
import Schema from '@/libs/schema';

export const contactValidate = (t: Translate) =>
  Schema.validate<ContactReqDto>({
    name: Schema.string().isRequired({ field: t('fields.name'), t }),
    email: Schema.string()
      .isRequired({ field: t('fields.email'), t })
      .isEmailCustom({ field: t('fields.email'), t }),
    subject: Schema.string().max(200, t('valiadte:form.maxLength', { field: t('fields.subject'), length: 200 })),
    message: Schema.string()
      .isRequired({ field: t('fields.message'), t })
      .min(200, t('valiadte:form.minLength', { field: t('fields.message'), length: 100 }))
      .max(1000, t('valiadte:form.maxLength', { field: t('fields.message'), length: 1000 })),
  });
