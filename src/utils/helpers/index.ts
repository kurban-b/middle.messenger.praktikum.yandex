import Validator, { EPatterns } from './validator';

//* * Функция проверяет есть ли определенный класс у HTML-элементов */
export const isClassListHas = (elements: HTMLElement[], className: string): boolean => elements.some((el) => el.classList.contains(className));

//* * Функция возвращает обработчик инпута onChange для валидации инпута по входному паттерну */
export const onChangeInvalidClass = (patternName: keyof typeof EPatterns) => function (e: InputEvent) {
  const target = e.target as HTMLInputElement;
  const isValid = new Validator().test(target.value, patternName);

  if (isValid) {
    target.classList.remove('invalid');
  }
};

//* * Функция вешает слушатель события blur с валидацией */
export const addBlurValidate = (htmlElement: HTMLElement, patternName: keyof typeof EPatterns) => {
  htmlElement.addEventListener('blur', (e) => {
    const target = e.target as HTMLInputElement;
    const isValid = new Validator().test(target.value, patternName);

    if (!isValid) {
      target.classList.add('invalid');
    } else {
      target.classList.remove('invalid');
    }
  });
};

export const getElement = (selector: string): Element | null => document.querySelector(selector);
