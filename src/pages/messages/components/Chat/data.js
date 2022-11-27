import img from '../../../../../static/images/camera.png'
import img2 from '../../../../../static/images/gomer.png'

export default {
  messages: [
    {
      type: 'text',
      text: `Привет! Как дела?`,
      date: '8:06',
      isOutgoing: true
    },
    {
      type: 'text',
      text: `Привет! Отлично!`,
      date: '10:46',
      isOutgoing: false
    },
    {
      type: 'text',
      text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то
             момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем
             что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся
             на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
             Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
             никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали
             на аукционе за 45000 евро.`,
      date: '11:56',
      isOutgoing: false
    },
    {
      type: 'text',
      image: img,
      date: '11:56',
      isOutgoing: false
    },
    {
      type: 'text',
      text: 'Круто!',
      date: '12:00',
      isOutgoing: true
    },
    {
      type: 'text',
      image: img2,
      date: '11:56',
      isOutgoing: true
    },
  ]
}