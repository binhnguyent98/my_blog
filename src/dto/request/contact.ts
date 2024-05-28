import { convertDataToInstance } from '@/utilities/instance';

export class ContactReqDto {
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor(data?: Partial<ContactReqDto>) {
    convertDataToInstance(data, this);
  }
}
