import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.floor(totalCount/itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
       onChange(page, itemsCountForPage)
        // пишет студент
    }

    const onChangeSelect = (event: any) => {
        onChange(page, event)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiPaginationItem-root.Mui-selected': {
                        borderRadius: '5px',
                        bgcolor: '#1976d2',
                        color: 'white',
                        '&:hover': {
                            bgcolor: '#115293',
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: "4"},
                    {id: 7, value: "7"},
                    {id: 10, value: "10"},
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк{itemsCountForPage === 4 && "и"} в таблице
            </span>
        </div>
    )
}

export default SuperPagination
