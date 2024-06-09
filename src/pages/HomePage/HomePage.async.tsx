import {lazy} from "react";

export const HomePageAsync = lazy(() =>new Promise(resolve => {
    setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./HomePage'));
    }, 1500);
}));
