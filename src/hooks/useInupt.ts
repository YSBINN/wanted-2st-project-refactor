import { useState, useCallback, ChangeEvent } from 'react';

export const useInput = (initValue: string) => {
    const [value, setValue] = useState(initValue);

    const onChange: onChangeType = useCallback(e => {
        setValue(e.currentTarget.value);
    }, []);

    return [value, onChange, setValue] as [string, onChangeType, typeof setValue];
};

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;
