import { Header } from 'entities/header/ui'
import { Section } from 'entities/section/ui'
import { Paragraph } from 'shared/ui/paragraph'
import { Relative } from 'shared/ui/relative'
import Deformation from './assets/deformation.svg'
import Creation from './assets/creation.svg'
import Doubling from './assets/doubling.svg'
import Examples1 from './assets/examples1.svg'
import Examples2 from './assets/examples2.svg'
import Guides from './assets/guides.svg'
import Usage1 from './assets/usage1.svg'
import Usage2 from './assets/usage2.svg'
import Limits from './assets/limits.svg'
import Usage3 from './assets/usage3.svg'
import Usage4 from './assets/usage4.svg'
import Example1 from './assets/example1.svg'
import Example2 from './assets/example2.svg'
import { BlockTitle } from 'entities/block-title/ui'

export const IdentityGrid = () => {
  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Модульная сетка'>
        <Paragraph style={{ marginTop: 120 }}>
          Чтобы обеспечить системность подхода и в то же время возможность
          творчески адаптировать бренд к различным точкам контакта, строится
          модульная сетка и определяется площадь набора текста.
          <br />
          <br />
          <strong>S набора текста</strong>
          <br />
          Сторона базового блока (X) равна 5% длины короткой стороны носителя.
          <br />
          <br />
          <strong>Форма ячейки модульной сетки</strong>
          <br />
          Ячейка должна представлять собой квадрат. Если конкретный носитель не
          позволяет соблюсти это требование, допускается отступление от
          указанных пропорций и использование ячеек-прямоугольников. Однако даже
          в этом{' '}
          <strong>
            случае следует стараться максимально приблизить используемую ячейку
            к пропорциям квадрата.
          </strong>
          <br />
          <br />
          <strong>Максимально допустимая деформация ячейки </strong>
        </Paragraph>
        <Relative>
          <Paragraph style={{ position: `absolute`, top: 220, width: 615 }}>
            Для адаптации модульной сетки к формату конкретного носителя
            допускается изменение пропорций ячеек со стандартных 4:4 до 4:5.
          </Paragraph>
          <Deformation style={{ position: `absolute`, top: -50 }} />
        </Relative>
        <BlockTitle
          title='Создание модульной сетки'
          style={{ marginTop: 1150 }}
        />
        <Relative>
          <Creation style={{ marginLeft: -10 }} />
          <Paragraph style={{ width: 640, marginTop: 18 }}>
            1. Постройте стандартную ячейку
            <br />
            с пропорциями 4:4.
            <br />
            2. Дублированием ячейки 4:4 постройте <br />
            базовый модуль (квадрат размером 3х3 ячейки).
            <br />
            3. Дублируя модуль, заполните сеткой весь макет. Оптимально, если
            пропорции и размер макета позволяют разместить вдоль его короткой
            стороны не менее двух базовых модулей. Однако если длина короткой
            стороны слишком мала, допускается, чтобы <br />
            ее размер составлял один базовый модуль.
            <br />
            4. При необходимости выделите всю сетку и деформируйте ее так, чтобы
            она покрывала <br />
            всю площадь носителя.
          </Paragraph>
          <Doubling style={{ position: `absolute`, top: 570, right: 380 }} />
        </Relative>
        <BlockTitle title='Примеры' style={{ marginTop: 150 }} />
        <Examples1 style={{ marginLeft: -10 }} />
        <Examples2 style={{ marginTop: 100, marginLeft: -10 }} />
        <BlockTitle
          title={
            <>
              Размещение простых фигур <br />в модулях с пропорциями 4:5
            </>
          }
          style={{ marginTop: 160 }}
        />
        <Paragraph style={{ marginTop: 18 }}>
          Если пропорции модульной сетки не позволяют разместить в ней модуль
          4:4, паттерн следует видоизменять так, как показано в приведенных
          примерах.
          <br />
          <br />
          Треугольные и прямоугольные фигуры можно деформировать. Деформация
          круглых фигур не допускается.
        </Paragraph>
        <Guides style={{ marginTop: 60, marginLeft: -55 }} />
        <BlockTitle
          title={
            <>
              Использование — шаг 1 <br />
              Базовый модуль
            </>
          }
          style={{ marginTop: 120 }}
        />
        <Paragraph>
          Hа первом этапе построения модульной системы СИБУР используются{' '}
          <b>базовые модули.</b>
          <br />
          <br />
          Постройте четырехугольник, используя модульную сетку и ячейки.  Макет
          можно разделить на части — до 6 модулей. Минимальный размер модуля —
          не меньше 3х3.
          <br />
          <br />
          Базовые модули можно объединить, заполнив их одинаковым  цветом (см.
          пример 2).
        </Paragraph>
        <Usage1 style={{ marginTop: 50, marginLeft: -15 }} />
        <BlockTitle
          title={
            <>
              Использование — шаг 2<br />
              Базовый модуль
            </>
          }
          style={{ marginTop: 120 }}
        />
        <Paragraph style={{ width: 970 }}>
          Второй шаг — <b>заполнение базовых модулей простыми модулями</b>{' '}
          паттерна СИБУРa.
          <br />
          <br />
          Необязательно заполнять все базовые модули простыми модулями; можно
          использовать и макеты, состоящие только из базовых модулей.
          <br />
          <br />
          При этом можно использовать различные сочетания цветов из цветовой
          палитры бренда.
        </Paragraph>
        <Usage2 style={{ marginTop: 20, marginLeft: -15 }} />
        <BlockTitle title='Ограничения' style={{ marginTop: 120 }} />
        <Paragraph style={{ width: 674 }}>
          Не допускается сочетать в одном макете треугольники или полукруги
          разной ориентации.
          <br />
          <br />
          Не допускается сочетать полукруг с треугольником или с другим
          полукругом.
        </Paragraph>
        <Limits style={{ marginTop: 40 }} />
        <BlockTitle
          title={
            <>
              Использование — шаг 3.
              <br />
              Сложный модуль
            </>
          }
          style={{ marginTop: 120 }}
        />
        <Paragraph style={{ width: 970 }}>
          Закончив работу с простыми модулями паттерна, можно  для динамичности
          добавить к макету некоторые сложные модули.
          <br />
          <br />
          Выполните пропорциональное масштабирование сложного модуля  для
          размещения его в базовом модуле.
          <br />
          <br />
            При размещении круглых фигур и треугольников действуют те же
          правила, что и для простых модулей.
          <br />
          <br />
          При добавлении сложных модулей соблюдайте чувство меры,  не
          перегружайте ими макет. При этом можно использовать  различные
          сочетания цветов из цветовой палитры бренда.
        </Paragraph>
        <Usage3 style={{ marginTop: 20, marginLeft: -15 }} />
        <BlockTitle
          title={
            <>
              Использование — шаг 4. <br />
              Модули фотоизображений
            </>
          }
          style={{ marginTop: 120 }}
        />
        <Paragraph style={{ width: 970 }}>
          Некоторые из базовых и простых модулей можно заполнить фотографиями.
          Изображения можно разместить в любом из модулей; в пределах модуля их
          разрешается свободно масштабировать.
          <br />
          <br />
          Количество фотоизображений в одном макете не должно превышать трех. Не
          следует перегружать фотоизображениями общую композицию макета.
        </Paragraph>
        <Usage4 style={{ marginTop: 20, marginLeft: -15 }} />
        <BlockTitle title='Примеры  использования' style={{ marginTop: 120 }} />
        <Example1 style={{ marginTop: 40 }} />
        <Example2 style={{ marginTop: 80, marginBottom: 250 }} />
      </Section>
    </>
  )
}
