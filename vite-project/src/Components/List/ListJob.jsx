import { IconMapPin } from "@tabler/icons-react";
import style from './style.module.scss'
import { Pagination } from '@mantine/core';
import listBlock from "../../Storage/Storage.json";
import { Link } from "react-router-dom";

function ListJob() {

    return (
            <div className={style.list}>
                {listBlock.map((el) => {
                    return <Link to={`/${el.id}`}>
                        <div key={el.id} className={style.wrapper}>
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
                    </Link>
                })}
                <div>
                    <Pagination total={7} />
                </div>
            </div>
    );
}

export default ListJob;