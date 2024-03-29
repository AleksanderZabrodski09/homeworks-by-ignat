import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './SuperEditableSpan.module.css'


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string

  spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
  {
    autoFocus, // игнорировать изменение этого пропса
    onBlur,
    onEnter,
    spanProps,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

  const onEnterCallback = () => {

    onEnter && onEnter()
    // выключить editMode при нажатии Enter
    setEditMode(false)

  }
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur(e)
    // 4выключить editMode при нажатии за пределами инпута
    setEditMode(false)

  }
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    onDoubleClick && onDoubleClick(e)
    // включить editMode при двойном клике
    setEditMode(true)

  }

  const spanClassName = `${s.span} ${className}`

  return (
    <>
      {editMode
        ? (
          <SuperInputText
            autoFocus // пропсу с булевым значением не обязательно указывать true
            onBlur={onBlurCallback}
            onEnter={onEnterCallback}

            {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
          />
        ) : (
          <span
            onDoubleClick={onDoubleClickCallBack}
            className={spanClassName}

            {...restSpanProps}
          >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
            &#9998;{children || restProps.value}
                    </span>
        )
      }
    </>
  )
}

export default SuperEditableSpan
