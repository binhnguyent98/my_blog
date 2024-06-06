import { ContactReqDto } from '@/dto/request/contact';
import { useNotification } from '@/hooks/useNotification';

export const useLogic = () => {
  const { notification } = useNotification();

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const onContact = (_data: ContactReqDto) => {
    notification({
      type: 'success',
      title: 'Send contact is success !',
    });
  };

  return { onContact };
};
