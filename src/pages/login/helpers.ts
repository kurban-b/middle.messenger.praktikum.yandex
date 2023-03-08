import { pages } from '../../utils/constants/route';
import router from '../../utils/core/router';

export const onClickReg = (): void => {
  router.go(pages.reg.href);
};
