import { StaticImageData } from "next/image";

export type TnavListProps = {
    title: string;
    subTitle: string;
    icon: StaticImageData | string;
};

export type TnavList2Props = {
    title: string;
    icon?: StaticImageData | string;
};
