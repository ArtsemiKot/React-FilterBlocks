import { Input, Button } from '@mantine/core';
import style from './style.module.scss'
import { IconSearch, IconLocation } from "@tabler/icons-react";
import ListJob from '../../Components/List/ListJob';
function Preview() {
    return (
        <>
            <div className={style.wrapper}>
                    <Input
                        placeholder="Введите название вакансии"
                        rightSection={<Button variant="filled">Button</Button>}
                        leftSection={<IconSearch  />}
                        rightSectionWidth="100px"
                    ></Input>
                    <ListJob></ListJob>
            </div>
        </>
    );
}

export default Preview;