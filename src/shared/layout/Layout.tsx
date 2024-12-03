import React from 'react';
import { Header } from '../header/Header';
import { Content, useLang } from '../../shared/providers/LangProvider';
import s from './Layout.module.scss';

const content: Content = {
  text: {
    en: `As the sun began to set over the tranquil village of Willowbrook, a sense of anticipation filled the air. The annual harvest festival was about to commence, and the villagers were bustling with excitement. Children ran through the fields, their laughter echoing like a melody of pure joy. Stalls were being set up along the main square, offering an array of handmade crafts, freshly baked goods, and the season’s finest produce.
At the heart of the village stood an ancient oak tree, its branches sprawling wide like a guardian of time. Beneath this tree, the elders gathered, sharing stories of yore and wisdom passed down through generations. Amelia, a young girl with sparkling eyes and boundless curiosity, sat among them, soaking in every word. She loved listening to tales of bravery, love, and adventure, dreaming that one day, she too would have stories to tell.
As the evening unfolded, the sky painted itself in hues of orange, pink, and purple, casting a magical glow over Willowbrook. The village musicians took their place, their instruments gleaming in the fading light. The first notes of a lively tune filled the air, and soon, everyone was dancing. Amelia twirled and spun, her laughter blending with the music, her heart filled with the simple happiness that only such moments can bring.
As the night grew darker, lanterns were lit, casting a warm, golden light over the festivities. The aroma of roasted chestnuts and spiced cider wafted through the air, inviting everyone to partake in the feast. Friends and families gathered around long wooden tables, sharing food and stories, creating memories that would last a lifetime.
Amidst the joy and celebration, Amelia’s thoughts wandered to the future. She knew that as long as the spirit of the harvest festival lived on, the bond within the community would remain strong, and Willowbrook would continue to be a place of love, laughter, and unity. With a heart full of hope and dreams, she smiled, knowing that she was part of something truly special.`,
    ru: `Когда солнце начало садиться над тихой деревушкой Виллоубрук, в воздухе витало чувство ожидания. Ежегодный праздник урожая вот-вот начнется, и жители деревни бурлили от волнения. Дети бегали по полям, их смех звучал как мелодия чистой радости. На главной площади устанавливались ларьки, предлагающие ассортимент самодельных поделок, свежевыпеченных товаров и лучших продуктов сезона.
В центре деревни стоял древний дуб, его ветви раскидывались широко, как хранитель времени. Под этим деревом собирались старейшины, рассказывая истории былых времен и мудрость, переданную через поколения. Амелия, молодая девушка с блестящими глазами и безграничным любопытством, сидела среди них, впитывая каждое слово. Она любила слушать истории о храбрости, любви и приключениях, мечтая о том, что однажды у нее тоже будут свои истории.
По мере того как вечер разворачивался, небо окрашивалось в оттенки оранжевого, розового и пурпурного, придавая Виллоубруку магическое сияние. Деревенские музыканты заняли свои места, их инструменты сияли в ускользающем свете. Первые ноты оживленной мелодии заполнили воздух, и вскоре все танцевали. Амелия кружилась и вертелась, ее смех сливался с музыкой, сердце наполнялось простой радостью, которую могут принести только такие моменты.
Когда ночь стала темнее, зажглись фонари, отбрасывая теплый, золотой свет на праздник. Аромат жареных каштанов и пряного сидра витал в воздухе, приглашая всех принять участие в пиршестве. Друзья и семьи собрались вокруг длинных деревянных столов, делясь едой и историями, создавая воспоминания, которые останутся на всю жизнь.
Среди радости и праздника мысли Амелии унеслись в будущее. Она знала, что пока живет дух праздника урожая, связь внутри сообщества останется сильной, и Виллоубрук продолжит быть местом любви, смеха и единства. С сердцем, полным надежд и мечтаний, она улыбалась, зная, что является частью чего-то по-настоящему особенного.`,
  },
};

const TestContent = () => {
  const { useContent } = useLang();
  const l = useContent(content);

  return <div className={s.content}>{l('text')}</div>;
};

export const Layout = () => (
  <>
    <Header showLogo={true} />
    <TestContent />
    <TestContent />
    <TestContent />
    <TestContent />
  </>
);
