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
import { PageToggle } from 'shared/ui/page-toggle'
import { Routes } from 'shared/config'
import { useIsMobile } from 'shared/lib'
import DeformationM from './assets/deformation_m.svg'
import GridM from './assets/grid_m.svg'
import CreationM from './assets/creation_m.svg'
import DoublingM from './assets/doubling_m.svg'
import ExamplesM from './assets/examples_m.svg'
import Usage1M from './assets/usage1_m.svg'
import Usage2M from './assets/usage2_m.svg'
import Usage3M from './assets/usage4_m.svg'
import Usage4M from './assets/usage5_m.svg'
import LimitsM from './assets/limits_ь.svg'
import ExamplesM2 from './assets/examples_m_2.svg'

export const IdentityGrid = () => {
  const { isMobile, rendered } = useIsMobile()

  if (!rendered) {
    return null
  }

  return (
    <>
      <Header title='Айдентика бренда' />
      <Section title='Модульная сетка'>
        <Paragraph style={{ marginTop: isMobile ? 40 : 120 }}>
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
        {isMobile ? (
          <>
            <DeformationM style={{ marginTop: 25 }} />
            <Paragraph style={{ marginTop: 10 }}>
              Для адаптации модульной сетки к формату конкретного носителя
              допускается изменение пропорций ячеек со стандартных 4:4 до 4:5.
            </Paragraph>
            <GridM />
          </>
        ) : (
          <Relative>
            <Deformation style={{ position: `absolute`, top: -50 }} />
          </Relative>
        )}
        <BlockTitle
          title='Создание модульной сетки'
          style={{ marginTop: isMobile ? 40 : 1150 }}
        />
        <Relative>
          {isMobile ? (
            <CreationM style={{ marginLeft: -8 }} />
          ) : (
            <Creation style={{ marginLeft: -10 }} />
          )}
          <Paragraph
            style={{ width: isMobile ? undefined : 640, marginTop: 18 }}
          >
            1. Постройте стандартную ячейку
            <br />
            <br />
            с пропорциями 4:4.
            <br />
            <br />
            2. Дублированием ячейки 4:4 постройте <br />
            базовый модуль (квадрат размером 3х3 ячейки).
            <br />
            <br />
            3. Дублируя модуль, заполните сеткой весь макет. Оптимально, если
            пропорции и размер макета позволяют разместить вдоль его короткой
            стороны не менее двух базовых модулей. Однако если длина короткой
            стороны слишком мала, допускается, чтобы <br />
            ее размер составлял один базовый модуль.
            <br />
            <br />
            4. При необходимости выделите всю сетку и деформируйте ее так, чтобы
            она покрывала <br />
            всю площадь носителя.
          </Paragraph>
          {isMobile && (
            <Paragraph style={{ marginTop: 17, marginBottom: 13 }}>
              <b>Дублирование базового модуля</b>
            </Paragraph>
          )}
          {isMobile ? (
            <DoublingM />
          ) : (
            <Doubling style={{ position: `absolute`, top: 570, right: 380 }} />
          )}
        </Relative>
        <BlockTitle
          title='Примеры'
          style={{ marginTop: isMobile ? 40 : 150 }}
        />
        {isMobile ? (
          <ExamplesM style={{ marginLeft: -8 }} />
        ) : (
          <>
            <Examples1 style={{ marginLeft: -10 }} />
            <Examples2 style={{ marginTop: 100, marginLeft: -10 }} />
          </>
        )}
        <BlockTitle
          title={
            <>
              Размещение простых фигур <br />в модулях с пропорциями 4:5
            </>
          }
          style={{ marginTop: isMobile ? 40 : 160 }}
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
        <Guides
          style={{
            marginTop: isMobile ? 8 : 60,
            marginLeft: isMobile ? undefined : -55,
          }}
        />
        <BlockTitle
          title={
            <>
              Использование — шаг 1 <br />
              Базовый модуль
            </>
          }
          style={{ marginTop: isMobile ? 33 : 120 }}
        />
        <Paragraph>
          Hа первом этапе построения модульной системы СИБУР используются{' '}
          <b>базовые модули.</b>
          <br />
          <br />
          Постройте четырехугольник, используя модульную сетку и ячейки. Макет
          можно разделить на части — до 6 модулей. Минимальный размер модуля —
          не меньше 3х3.
          <br />
          <br />
          Базовые модули можно объединить, заполнив их одинаковым цветом (см.
          пример 2).
        </Paragraph>
        {isMobile ? (
          <Usage1M style={{ marginTop: 11, marginLeft: -11 }} />
        ) : (
          <Usage1 style={{ marginTop: 50, marginLeft: -15 }} />
        )}
        <BlockTitle
          title={
            <>
              Использование — шаг 2<br />
              Базовый модуль
            </>
          }
          style={{ marginTop: isMobile ? 40 : 120 }}
        />
        <Paragraph style={{ width: isMobile ? undefined : 970 }}>
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
        {isMobile ? (
          <Usage2M style={{ marginTop: 25, marginLeft: -11 }} />
        ) : (
          <Usage2 style={{ marginTop: 20, marginLeft: -15 }} />
        )}
        <BlockTitle
          title='Ограничения'
          style={{ marginTop: isMobile ? 40 : 120 }}
        />
        <Paragraph style={{ width: isMobile ? undefined : 674 }}>
          Не допускается сочетать в одном макете треугольники или полукруги
          разной ориентации.
          <br />
          <br />
          Не допускается сочетать полукруг с треугольником или с другим
          полукругом.
        </Paragraph>
        {isMobile ? (
          <LimitsM style={{ marginTop: 18 }} />
        ) : (
          <Limits style={{ marginTop: 40 }} />
        )}
        <BlockTitle
          title={
            <>
              Использование — шаг 3.
              <br />
              Сложный модуль
            </>
          }
          style={{ marginTop: isMobile ? 24 : 120 }}
        />
        <Paragraph style={{ width: isMobile ? undefined : 970 }}>
          Закончив работу с простыми модулями паттерна, можно для динамичности
          добавить к макету некоторые сложные модули.
          <br />
          <br />
          Выполните пропорциональное масштабирование сложного модуля для
          размещения его в базовом модуле.
          <br />
          <br />
          При размещении круглых фигур и треугольников действуют те же правила,
          что и для простых модулей.
          <br />
          <br />
          При добавлении сложных модулей соблюдайте чувство меры, не
          перегружайте ими макет. При этом можно использовать различные
          сочетания цветов из цветовой палитры бренда.
        </Paragraph>
        {isMobile ? (
          <Usage3M style={{ marginTop: 11, marginLeft: -11 }} />
        ) : (
          <Usage3 style={{ marginTop: 20, marginLeft: -15 }} />
        )}
        <BlockTitle
          title={
            <>
              Использование — шаг 4. <br />
              Модули фотоизображений
            </>
          }
          style={{ marginTop: isMobile ? 40 : 120 }}
        />
        <Paragraph style={{ width: isMobile ? undefined : 970 }}>
          Некоторые из базовых и простых модулей можно заполнить фотографиями.
          Изображения можно разместить в любом из модулей; в пределах модуля их
          разрешается свободно масштабировать.
          <br />
          <br />
          Количество фотоизображений в одном макете не должно превышать трех. Не
          следует перегружать фотоизображениями общую композицию макета.
        </Paragraph>
        {isMobile ? (
          <Usage4M style={{ marginTop: 25, marginLeft: -15 }} />
        ) : (
          <Usage4 style={{ marginTop: 20, marginLeft: -15 }} />
        )}
        <BlockTitle
          title='Примеры использования'
          style={{ marginTop: isMobile ? 40 : 120 }}
        />
        {isMobile ? (
          <ExamplesM2 />
        ) : (
          <>
            <Example1 style={{ marginTop: 40 }} />
            <Example2 style={{ marginTop: 80, marginBottom: 250 }} />
          </>
        )}
        <PageToggle
          prevLink={Routes.IdentityPatterns}
          prevTitle='Паттерны'
          nextLink={Routes.IdentityTypography}
          nextTitle='Типографика'
        />
      </Section>
    </>
  )
}
