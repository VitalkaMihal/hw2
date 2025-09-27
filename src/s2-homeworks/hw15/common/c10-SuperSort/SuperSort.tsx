import React from 'react'
import {Button} from "@mui/material";

// добавить в проект иконки и импортировать
const downIcon = <svg
    width='15px'
    height='15px'
    viewBox="0 0 16 16"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
>
    <polygon points="4,6 8,12 12,6" />
</svg>
const upIcon =   <svg
    width='15px'
    height='15px'
    viewBox="0 0 16 16"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
>
    <polygon points="4,12 8,6 12,12" />
</svg>
const noneIcon =  <svg
    width='15px'
    height='15px'
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}
>
    {/* Верхняя стрелка */}
    <polygon points="4,6 8,2 12,6" fill="black" />
    {/* Нижняя стрелка */}
    <polygon points="4,14 8,18 12,14" fill="black" />
</svg>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down ? up : sort === up ? '' : down // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            {icon}
        </span>
    )
}

export default SuperSort
