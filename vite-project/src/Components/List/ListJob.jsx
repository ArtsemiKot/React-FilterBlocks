import {IconMapPin } from "@tabler/icons-react";
import style from './style.module.scss'
import { Pagination } from '@mantine/core';
function ListJob() {
    const listBlock = [
        {
            id: 1,
            title: 'Менеджер-дизайнер',
            salary: 'з/п от 70000 rub',
            workday: 'Полный рабочий день',
            location: 'Новый Уренгой'
        },
        {
            id: 2,
            title: 'Ведущий графический дизайнер НЕ УДАЛЕННО',
            salary: 'з/п от 80000 rub',
            workday: 'Полный рабочий день',
            location: 'Москва'
        },
        {
            id: 3,
            title: 'Работник декорации, дизайнер (ТЦ Амбар)',
            salary: 'з/п 29000 rub',
            workday: 'Сменный график работы',
            location: 'Самара'
        },
        {
            id: 4,
            title: 'Менеджер-дизайнер',
            salary: 'з/п 55000 - 95000 rub',
            workday: 'Полный рабочий день',
            location: 'Тюмень'
        },
    ]
    return (
        <div className={style.list}>
            {listBlock.map((el) => {
                return <div className={style.wrapper}>
                    <h2>{el.title}</h2>
                    <div className={style.info}>
                        <p>{el.salary}</p>
                        <p className={style.worktime}>{el.workday}</p>
                    </div>
                    <div className={style.flexLocation}>
                        <IconMapPin></IconMapPin>
                    <p>{el.location}</p>
                    </div>
                </div>
            })}
            <div>
            <Pagination total={4} />;
            </div>
        </div>
    );
}

export default ListJob;