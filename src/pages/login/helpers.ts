import { handleLocation } from '../../utils/core';
import { pages } from '../../utils/constants/route';

export const onClickReg = (): void => {
  handleLocation(pages.reg.href);
};
